import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// Old contract address
// const factoryContractAddress = "0xcc18fc058fb42c7ca2bd1773693551A17C3724A6";

// New contract address
const factoryContractAddress = "0xcaa409389ea16D55499831010b8420B821F9cA06";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  factoryContractAddress
);

export default instance;
