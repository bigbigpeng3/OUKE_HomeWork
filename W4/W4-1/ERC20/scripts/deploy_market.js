
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Contract = await hre.ethers.getContractFactory("MyTokenMarket");

  // ropsten my token address 0x5aa9849386Bd601a49A1f02F4309a1E9A197Fb97
  // ropsten v2  address 0xf164fC0Ec4E93095b804a4795bBe1e041497b92a
  // ropsten weth address 0xc778417E063141139Fce010982780140Aa0cD5Ab

  const contract = await Contract.deploy("0x5aa9849386Bd601a49A1f02F4309a1E9A197Fb97","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0xc778417E063141139Fce010982780140Aa0cD5Ab");

  await contract.deployed();

  console.log("contract deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
