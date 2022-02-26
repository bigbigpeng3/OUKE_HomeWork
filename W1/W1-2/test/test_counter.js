const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return 10 from contract", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.getCount()).to.equal(0);

    const setCount = await counter.setCount(10);

    // wait until the transaction is mined
    await setCount.wait();

    expect(await counter.getCount()).to.equal(10);
  });
});
