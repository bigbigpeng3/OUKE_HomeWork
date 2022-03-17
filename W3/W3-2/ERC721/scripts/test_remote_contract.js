require('dotenv').config();
const Web3 = require('web3');
const counter_abi = require("./abi/Counter.json");
// const counter_abi = JSON.parse(counter_json);

// WEB3 CONFIG
const web3 = new Web3("https://ropsten.infura.io/v3/a4076b0e2f4f43dcbb12c4dda2372c70")
// const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_KEY))

async function main() {

  const counter = new web3.eth.Contract(counter_abi, "0x14d6eF4825473cfbaa2d12A928350f7A5d5c22F1");

  const count = await counter.methods.getCount().call()

  console.log("count = " + count)
  // can not write it. It cost Gas.
  // await counter.methods.setCount(10).call()
  // const count_2 = await counter.methods.getCount().call()
  // console.log("count_2 = " + count_2)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });