import { Alchemy, Network } from 'alchemy-sdk';
import { utils } from 'ethers'

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

export const getBlockNumber = async () => {
  return alchemy.core.getBlockNumber()
}
export const getBlockWithTransactions = async (blockNumber) => {
  return alchemy.core.getBlockWithTransactions(blockNumber)
}
export const getTransactionReceipt = async (trxId) => {
  return alchemy.core.getTransactionReceipt(trxId)
}
export const getBalance = async (address) => {
  return alchemy.core.getBalance(address)
}

export const bigNumberToEther = (bigNum) => utils.formatEther(bigNum.toString(), 'ether')
