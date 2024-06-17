import {
  bsc,
  arbitrum,
  avalanche,
  base,
  baseSepolia,
  gnosis,
  mainnet,
  optimism,
  polygon,
  celo,
  degen,
  scroll,
  scrollSepolia,
  avalancheFuji,
  sepolia,
  optimismSepolia,
} from 'viem/chains';

export const pureSuperTokenFactories: Record<number, string> = {
  [mainnet.id]: '',
  [base.id]: '0xE9F54484ed713D8B0F7719958908dF1E0fb94Bbb',
  [polygon.id]: '0xf38eaee640622bd12c8fcb4abfa8f610108368e8',
  [optimism.id]: '',
  [arbitrum.id]: '0xf159940c48d8937da9455f03a6b2c22d055e13ad',
  [gnosis.id]: '',
  [avalanche.id]: '',
  [bsc.id]: '',
  [celo.id]: '',
  [degen.id]: '',
  [scroll.id]: '',
  [scrollSepolia.id]: '',
  [avalancheFuji.id]: '',
  [sepolia.id]: '',
  [optimismSepolia.id]: '',
};

export const supportedChains = Object.entries(pureSuperTokenFactories)
  .filter(([, address]) => address !== '')
  .map(([id]) => {
    switch (Number(id)) {
      case base.id:
        return base;
      case polygon.id:
        return polygon;
      case optimism.id:
        return optimism;
      case arbitrum.id:
        return arbitrum;
      default:
        return null;
    }
  })
  .filter((chain) => chain !== null);

export const EXPECTED_CHAIN = base;
