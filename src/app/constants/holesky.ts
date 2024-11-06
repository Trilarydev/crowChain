export const holesky = {
    id: 17000,
    name: "Holesky",
    network: "holesky",
    nativeCurrency: {
      name: "Testnet ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpc: "https://17000.rpc.thirdweb.com",
    rpcUrls: {
      default: { http: ["https://17000.rpc.thirdweb.com"] },
    },
    blockExplorers: [
      { name: "Etherscan", url: "https://holesky.ethpandaops.io" },
    ],
};