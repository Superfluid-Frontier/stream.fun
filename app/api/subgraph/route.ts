import { NextRequest, NextResponse } from 'next/server';
import {
  scroll,
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  bsc,
  celo,
  degen,
  gnosis,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  scrollSepolia,
  sepolia,
} from 'viem/chains';

const subgraphMap: Record<number, string> = {
  [mainnet.id]: 'https://eth-mainnet.subgraph.x.superfluid.dev/',
  [base.id]: 'https://base-mainnet.subgraph.x.superfluid.dev/',
  [polygon.id]: 'https://polygon-mainnet.subgraph.x.superfluid.dev/',
  [optimism.id]: 'https://optimism-mainnet.subgraph.x.superfluid.dev/',
  [arbitrum.id]: 'https://arbitrum-one.subgraph.x.superfluid.dev/',
  [gnosis.id]: 'https://xdai-mainnet.subgraph.x.superfluid.dev/',
  [avalanche.id]: 'https://avalanche-c.subgraph.x.superfluid.dev/',
  [bsc.id]: 'https://bsc-mainnet.subgraph.x.superfluid.dev/',
  [celo.id]: 'https://celo-mainnet.subgraph.x.superfluid.dev/',
  [degen.id]: 'https://degenchain.subgraph.x.superfluid.dev/',
  [scroll.id]: 'https://scroll-mainnet.subgraph.x.superfluid.dev/',
  [scrollSepolia.id]: 'https://scroll-sepolia.subgraph.x.superfluid.dev/',
  [avalancheFuji.id]: 'https://avalanche-fuji.subgraph.x.superfluid.dev/',
  [sepolia.id]: 'https://eth-sepolia.subgraph.x.superfluid.dev/',
  [optimismSepolia.id]: 'https://optimism-sepolia.subgraph.x.superfluid.dev/',
};

export async function GET(req: NextRequest) {
  const chainId = req.nextUrl.searchParams.get('chainId');
  const query = {
    query: `query getSuperfluidTokens {
      tokens(where: {isListed: true, isSuperToken: true}, first: 25) {
        superTokenAddress: id
        name
        symbol
        underlyingAddress
        isSuperToken
        isNativeAssetSuperToken
        isListed
        decimals
        createdAtTimestamp
        createdAtBlockNumber
        underlyingToken {
          name
          symbol
          underlyingAddress
          id
          isListed
          isSuperToken
          isNativeAssetSuperToken
          decimals
          createdAtTimestamp
          createdAtBlockNumber
        }
      }
    }`,
    operationName: 'getSuperfluidTokens',
  };
  const subgraphUrl = subgraphMap[chainId || mainnet.id];
  const response = await fetch(subgraphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  const data = await response.json();

  return NextResponse.json(data, {
    status: response.status,
    statusText: response.statusText,
  });
}
