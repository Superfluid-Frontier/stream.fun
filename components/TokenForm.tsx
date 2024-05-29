"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "./hover-border-gradient";

const TokenForm = () => {
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    icon: "",
    description: "",
  });
  const [iconPreview, setIconPreview] = useState(null);

  const router = useRouter();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
    router.push("/token-summary"); // Redirect to a summary or confirmation page
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex flex-col items-center gap-4 w-full"
    >
      <Input
        type="text"
        name="name"
        placeholder="Token Name"
        className="rounded-xl w-full h-[2.5rem]"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="symbol"
        placeholder="Token Symbol"
        className="rounded-xl w-full h-[2.5rem]"
        value={form.symbol}
        onChange={handleChange}
      />
      <div className="flex justify-start w-full">
        <span>Token Image: &nbsp;</span>
        <input
        type="file"
        name="icon"
        accept="image/*"
        className=" h-[2.5rem]"
        onChange={handleFileChange}
      /></div>
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
      />
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        type="submit"
      >
        Submit
      </HoverBorderGradient>
    </form>
  );
};

export default TokenForm;
