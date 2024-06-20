'use client';
import { Input } from '@/components/ui/input';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { HoverBorderGradient } from './hover-border-gradient';
import {
  useAccount,
  useChainId,
  useConnect,
  useDisconnect,
  useSendTransaction,
  useWriteContract,
  useReadContracts,
  useWaitForTransactionReceipt,
  useSimulateContract,
} from 'wagmi';
import { ConnectKitButton } from 'connectkit';
import PureSuperTokenDeployerABI from '@/abis/PureSuperTokenDeployer.json';
import WrappedSuperTokenDeployer from '@/abis/WrappedSuperToken.json';
import { pureSuperTokenFactories, wrappedSuperTokenFactories } from '@/constants';
import { parseEther, erc20Abi } from 'viem';

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
  const [bytecode, setBytecode] = useState('');
  const [hasERC20, setHasERC20] = useState(false);
  const [erc20Address, setErc20Address] = useState('');
  const [supertoken, setSupertoken] = useState<string>('');
  const [transactionStatus, setTransactionStatus] = useState<string>('0');
  const [tokenLink, setTokenLink] = useState('');
  const [txLink, setTxLink] = useState('');
  const chainId = useChainId();

  const router = useRouter();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [name, setName] = useState<string | undefined>();
  const [symbol, setSymbol] = useState<string | undefined>();
  const { sendTransaction } = useSendTransaction();
  const { writeContract, isPending } = useWriteContract();
  const { writeContract: writeWrappedSuperTokenContract, isPending: isPendingSuperToken } =
    useWriteContract();
  const { data: simulateData } = useSimulateContract({
    address: wrappedSuperTokenFactories[chainId] as `0x`,
    abi: WrappedSuperTokenDeployer,
    functionName: 'createERC20Wrapper',
    args: [erc20Address, 1, form.name, form.symbol],
  });
  const { data: dataConfirmed } = useWaitForTransactionReceipt({
    hash: simulateData?.hash,
  });

  const isLoading = isPending || isPendingSuperToken;

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

  useEffect(() => {
    if (!dataConfirmed) {
      return;
    }
    const response = dataConfirmed ? dataConfirmed.logs[4]?.topics : [];
    const beginIndex = 2;
    const endIndex = 26;
    if (!response) {
      return;
    }
    const supertokenAddress = response[1];
    const S = supertokenAddress?.replace(supertokenAddress?.substring(beginIndex, endIndex), '');
    // const tx = getTransactionLink(chainId!, dataConfirmed?.transactionHash!);
    // const link = getTokenLink(chainId!, S);
    setSupertoken(S);
    // setTokenLink(link);
    // setTxLink(tx);
    setTransactionStatus('2');
  }, [dataConfirmed]);

  const deploySupertoken = async () => {
    if (simulateData) {
      const tx = writeWrappedSuperTokenContract?.(simulateData.request);
    }
  };
  const tokenAddress = erc20Address as `0x`;
  const result = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'decimals',
      },
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'name',
      },
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'symbol',
      },
      {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'totalSupply',
      },
    ],
  });
  useEffect(() => {
    if (!result.data) {
      return;
    }
    setName(`${result.data[1]}`);
    setSymbol(`${result.data[2]}`);
  }, [result]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hasERC20) {
      // Handle existing ERC20 token logic here
      console.log('ERC20 Address:', erc20Address);
      deploySupertoken();
    } else {
      writeContract({
        abi: PureSuperTokenDeployerABI,
        address: pureSuperTokenFactories[chainId] as '0x',
        functionName: 'deploySuperToken',
        args: [form.name, form.symbol, address, parseEther('1000000')],
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 flex w-full flex-col items-center gap-4 p-6"
    >
      <ConnectKitButton />

      {isConnected && (
        <>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="hasERC20"
              name="tokenOption"
              checked={hasERC20}
              onChange={() => setHasERC20(!hasERC20)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="hasERC20" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I already have an ERC20 token
            </label>
          </div>

          {hasERC20 ? (
            <>
              <Input
                type="text"
                name="erc20Address"
                placeholder="ERC20 Token Address"
                className="h-[2.5rem] w-full rounded-xl"
                value={erc20Address}
                onChange={(e) => setErc20Address(e.target.value)}
                disabled={isPending}
              />
              {result.data ? (
                <div className="text-green-500">
                  <p>Token Found: {name} ({symbol})</p>
                </div>
              ) : (
                <div className="text-red-500">
                  <p>Error: Token not found</p>
                </div>
              )}
            </>
          ) : (
            <>
              <Input
                type="text"
                name="name"
                placeholder="Token Name"
                className="h-[2.5rem] w-full rounded-xl"
                value={form.name}
                onChange={handleChange}
                disabled={isPending}
              />
              <Input
                type="text"
                name="symbol"
                placeholder="Token Symbol"
                className="h-[2.5rem] w-full rounded-xl"
                value={form.symbol}
                onChange={handleChange}
                disabled={isPending}
              />
            </>
          )}
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
          >
            {isPending ? 'Loading...' : hasERC20 ? 'Deploy Wrapped Token' : 'Deploy Pure Super Token'}
          </HoverBorderGradient>
        </>
      )}
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-xl bg-white p-4">
            <p>Transaction Pending...</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default TokenForm;
