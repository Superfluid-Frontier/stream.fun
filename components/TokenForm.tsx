"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { HoverBorderGradient } from "./hover-border-gradient";
import { useAccount, useConnect, useDisconnect, useSendTransaction } from 'wagmi';
import { ConnectKitButton } from "connectkit";

const TokenForm = () => {
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    icon: "",
    description: "",
  });
  const [iconPreview, setIconPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bytecode, setBytecode] = useState('');

  const router = useRouter();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        icon: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "/compile-erc20",
        {
          name: form.name,
          symbol: form.symbol,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { bytecode } = response.data;
      setBytecode(bytecode);
    
      sendTransaction({
        data: bytecode,
      });
    } catch (error) {
      console.error("Error compiling ERC20:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex flex-col items-center gap-4 w-full"
    >
      {!isConnected && (
        <ConnectKitButton />
      )}
      {isConnected && (
        <>
          <Input
            type="text"
            name="name"
            placeholder="Token Name"
            className="rounded-xl w-full h-[2.5rem]"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            type="text"
            name="symbol"
            placeholder="Token Symbol"
            className="rounded-xl w-full h-[2.5rem]"
            value={form.symbol}
            onChange={handleChange}
            disabled={loading}
          />
          <div className="flex justify-start w-full">
            <span>Token Image: &nbsp;</span>
            <input
              type="file"
              name="icon"
              accept="image/*"
              className="h-[2.5rem]"
              onChange={handleFileChange}
              disabled={loading}
            />
          </div>
          {iconPreview && (
            <div className="w-full flex justify-center mt-2">
              <img
                src={iconPreview}
                alt="Icon Preview"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>
          )}
          <Input
            type="text"
            name="description"
            placeholder="Token Description"
            className="rounded-xl w-full h-[2.5rem]"
            value={form.description}
            onChange={handleChange}
            disabled={loading}
          />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </HoverBorderGradient>
        </>
      )}
    </form>
  );
};

export default TokenForm;