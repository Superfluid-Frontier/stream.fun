'use client';
import { Input } from '@/components/ui/input';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HoverBorderGradient } from './hover-border-gradient';
import { useAccount, useConnect, useDisconnect, useSendTransaction } from 'wagmi';
import { ConnectKitButton } from 'connectkit';

const TokenForm = () => {
  const [form, setForm] = useState<{
    name: string;
    symbol: string;
    icon: any;
    description: string;
  }>({
    name: '',
    symbol: '',
    icon: '',
    description: '',
  });
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [bytecode, setBytecode] = useState('');

  const router = useRouter();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setForm((prevForm) => ({
        ...prevForm,
        icon: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + '/compile-erc20',
        {
          name: form.name,
          symbol: form.symbol,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { bytecode } = response.data;
      setBytecode(bytecode);

    } catch (error) {
      console.error('Error compiling ERC20:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-20 flex w-full flex-col items-center gap-4">
      {!isConnected && <ConnectKitButton />}
      {isConnected && (
        <>
          <Input
            type="text"
            name="name"
            placeholder="Token Name"
            className="h-[2.5rem] w-full rounded-xl"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            type="text"
            name="symbol"
            placeholder="Token Symbol"
            className="h-[2.5rem] w-full rounded-xl"
            value={form.symbol}
            onChange={handleChange}
            disabled={loading}
          />
          <div className="flex w-full justify-start">
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
            <div className="mt-2 flex w-full justify-center">
              <img
                src={iconPreview}
                alt="Icon Preview"
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
          )}
          <Input
            type="text"
            name="description"
            placeholder="Token Description"
            className="h-[2.5rem] w-full rounded-xl"
            value={form.description}
            onChange={handleChange}
            disabled={loading}
          />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
          >
            {loading ? 'Loading...' : 'Submit'}
          </HoverBorderGradient>
        </>
      )}
    </form>
  );
};

export default TokenForm;
