import { rinkeby, mainnet, goerli, polygonMumbai } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'AVAX',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
    public: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 6 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },

  multicall: {
    address: '0xd68A5f46e7F7AB0f122cda11F4AC49e72b56f005',
    blockCreated: 40374887,
  },
}

export const razenChain: Chain = {
  id: 3838,
  name: 'Razen Mainnet',
  network: 'RAZEN',
  nativeCurrency: {
    decimals: 18,
    name: 'Razen mainnet',
    symbol: 'RZN',
  },
  rpcUrls: {
    default: 'https://rpc.rznscan.com/',
    public: 'https://rpc.rznscan.com/',
  },

  blockExplorers: {
    default: { name: 'Scan Razen native token', url: 'https://rznscan.com' },
  },

  multicall: {
    address: '0xF29E55716672C3011BcB8e4b32ff34037A072E80',
    blockCreated: 1269263,
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'BSC',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}
export const baseGoerliEth: Chain = {
  id: 84531,
  name: 'Base Goerli Testnet',
  network: 'Base_Goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Base Goerli Native Token',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: 'https://goerli.base.org/',
    default: 'https://goerli.base.org/',
  },
  blockExplorers: {
    default: { name: 'Basescan', url: 'https://goerli.basescan.org/' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const creditChain: Chain = {
  id: 4400,
  name: 'Credit Smart Chain',
  network: 'CREDIT',
  nativeCurrency: {
    decimals: 18,
    name: 'CREDIT mainnet',
    symbol: 'CREDIT',
  },
  rpcUrls: {
    public: 'https://rpc.creditsmartchain.com/',
    default: 'https://rpc.creditsmartchain.com/',
  },
  blockExplorers: {
    default: { name: 'Scan creditsmartchain', url: 'https://scan.creditsmartchain.com/' },
  },
  multicall: {
    address: '0x0C0E3BBC68E070a57C0857B2f792f6Cf3Ced6A6C',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const baseGoerli: Chain = {
  id: 84531,
  name: 'Base_Goerli',
  network: 'Base_Goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Base_Goerli',
    symbol: 'bETH',
  },
  rpcUrls: {
    public: 'https://goerli.base.org',
    default: 'https://goerli.base.org',
  },
  blockExplorers: {
    default: { name: 'Base_Goerli', url: 'https://goerli.basescan.org/' },
  },
  testnet: true,
}

export { rinkeby, mainnet, goerli, polygonMumbai }
