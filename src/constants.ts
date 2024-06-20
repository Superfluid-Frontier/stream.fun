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

export const wrappedSuperTokenFactories: Record<number, string> = {
  [mainnet.id]: '0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1',
  [base.id]: '0xe20B9a38E0c96F61d1bA6b42a61512D56Fea1Eb3',
  [polygon.id]: '0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34',
  [optimism.id]: '0x8276469A443D5C6B7146BED45e2abCaD3B6adad9',
  [arbitrum.id]: '0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6',
  [gnosis.id]: '0x23410e2659380784498509698ed70E414D384880',
  [avalanche.id]: '0x464AADdBB2B80f3Cb666522EB7381bE610F638b4',
  [bsc.id]: '0x8bde47397301F0Cd31b9000032fD517a39c946Eb',
  [celo.id]: '',
  [degen.id]: '',
  [scroll.id]: '',
  [scrollSepolia.id]: '',
  [avalancheFuji.id]: '0xA25dbEa94C5824892006b30a629213E7Bf238624',
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
