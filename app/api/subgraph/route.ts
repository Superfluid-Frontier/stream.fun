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
  1: 'https://subgraph-endpoints.superfluid.dev/eth-mainnet/protocol-v1',
  8453: 'https://subgraph-endpoints.superfluid.dev/base-mainnet/protocol-v1',
  137: 'https://subgraph-endpoints.superfluid.dev/polygon-mainnet/protocol-v1',
  10: 'https://subgraph-endpoints.superfluid.dev/optimism-mainnet/protocol-v1',
  42161: 'https://subgraph-endpoints.superfluid.dev/arbitrum-one/protocol-v1',
  100: 'https://subgraph-endpoints.superfluid.dev/xdai-mainnet/protocol-v1',
  43114: 'https://subgraph-endpoints.superfluid.dev/avalanche-c/protocol-v1',
  56: 'https://subgraph-endpoints.superfluid.dev/bsc-mainnet/protocol-v1',
  42220: 'https://subgraph-endpoints.superfluid.dev/celo-mainnet/protocol-v1',
  666666666: 'https://subgraph-endpoints.superfluid.dev/degenchain/protocol-v1',
  534352: 'https://subgraph-endpoints.superfluid.dev/scroll-mainnet/protocol-v1',
  534351: 'https://subgraph-endpoints.superfluid.dev/scroll-sepolia/protocol-v1',
  43113: 'https://subgraph-endpoints.superfluid.dev/avalanche-fuji/protocol-v1',
  11155111: 'https://subgraph-endpoints.superfluid.dev/eth-sepolia/protocol-v1',
  11155420: 'https://subgraph-endpoints.superfluid.dev/optimism-sepolia/protocol-v1',
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
      tokens(
        where: {isListed: false, isSuperToken: true}
        first: 25
        orderBy: createdAtTimestamp
        orderDirection: desc
      ) {
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
    const matchingToken = tokenListData.find(
      (t: any) => t.address.toLowerCase() === token.underlyingAddress.toLowerCase(),
    );
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
