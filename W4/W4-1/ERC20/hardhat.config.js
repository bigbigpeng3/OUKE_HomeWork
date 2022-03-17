require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {

    localhost: {
      url: "http://127.0.0.1:7545/",
      accounts: [process.env.PRIVATE_KEY]
    },

    hardhat: {
      // url: "http://127.0.0.1:8545/",
      // accounts: [process.env.PRIVATE_KEY]
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + process.env.INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }

    // rinkeby: {
    //   url: process.env.INFURA_URL,
    //   accounts: [process.env.PRIVATE_KEY]
    // }

  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}