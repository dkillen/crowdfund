import Web3 from "web3";
const { TEST_NETWORK_URL } = require("./secrets");

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(TEST_NETWORK_URL);
  web3 = new Web3(provider);
}

export default web3;
