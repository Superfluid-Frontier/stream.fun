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

const tokenList: Record<number, string> = {
  [mainnet.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/mainnet.json',
  [base.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/base.json',
  [polygon.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/polygon.json',
  [optimism.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/optimism.json',
  [arbitrum.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/arbitrum.json',
  [gnosis.id]: '',
  [avalanche.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/avalanche.json',
  [bsc.id]: 'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/bnb.json',
  [celo.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/celo.json',
  [degen.id]: '',
  [scroll.id]: '',
  [scrollSepolia.id]: '',
  [avalancheFuji.id]: '',
  [sepolia.id]:
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/sepolia.json',
  [optimismSepolia.id]: '',
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
  const subgraphUrl = subgraphMap[(chainId as any) || mainnet.id];
  const response = await fetch(subgraphUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  });

  const data = await response.json();

  const tokenListUrl = tokenList[(chainId as any) || mainnet.id];
  let tokenListData: any = [];
  if (tokenListUrl) {
    const tokenListResponse = await fetch(tokenListUrl);
    if (tokenListResponse.ok) {
      tokenListData = await tokenListResponse.json();
    }
  }

  const mergedTokens = data.data.tokens.map((token: any) => {
    const matchingToken = tokenListData.find((t: any) => t.address.toLowerCase() === token.underlyingAddress.toLowerCase());
    return {
      ...token,
      logoURI: matchingToken ? matchingToken.logoURI : '',
    };
  });

  return NextResponse.json(
    { tokens: mergedTokens },
    {
      status: response.status,
      statusText: response.statusText,
    },
  );
}
