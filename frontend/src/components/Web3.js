import Web3 from "web3";

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" });
} else {
  web3 = new Web3("http://127.0.0.1:7545"); // Fallback to Ganache
}

export default web3;
