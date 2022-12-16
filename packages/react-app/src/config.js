import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x5f36D188254c242a7ADa07B63C1b9063FC93683b";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/ABzltEXlKuKH0zt6-S2hF3jGzg9oXfVo",
  },
};
