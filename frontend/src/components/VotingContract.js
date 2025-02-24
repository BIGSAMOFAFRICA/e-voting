import web3 from "./Web3";
import Voting from "./contracts/Voting.json";

const contractAddress = "0x2cDb262f86004641482272696079E2Ebff52BEcE"; // Ensure latest address
const contract = new web3.eth.Contract(Voting.abi, contractAddress);

console.log("🟢 Smart Contract Connected:", contract);
export default contract;
