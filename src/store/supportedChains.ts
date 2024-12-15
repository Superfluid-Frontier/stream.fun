import {
  baseSepolia,
  Chain,
  base,
  arbitrum,
  avalanche,
  avalancheFuji,
  bsc,
  celo,
  degen,
  gnosis,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  scroll,
  scrollSepolia,
  sepolia,
} from 'viem/chains';
import { Environment, getCurrentEnvironment } from './environment';
import { supportedChains } from '@/constants';


// The list of supported Chains for a given environment
export const SUPPORTED_CHAINS: Record<Environment, [Chain, ...Chain[]]> = {
  [Environment.localhost]: [mainnet, ...supportedChains],
  [Environment.development]: [mainnet, ...supportedChains],
  [Environment.staging]: [mainnet,...supportedChains],
  [Environment.production]: [mainnet,...supportedChains],
};
/**
 * Gets the list of supported chains for a given environment.
 * Defaults to the current environment.
 * @param env
 */
export function getChainsForEnvironment(env?: Environment) {
  if (!env) {
    env = getCurrentEnvironment();
  }
  return SUPPORTED_CHAINS[env];
}

export function getChainById(chainId: string) {
  const chains = getChainsForEnvironment();
  return chains?.find((c: Chain) => c.id === Number(chainId)) ?? null;
}
