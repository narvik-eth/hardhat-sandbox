import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Bool', function () {
  it('can be deployed', async function () {
    const contract = await ethers
      .getContractFactory('Bool')
      .then((factory) => factory.deploy());
    await contract.deployed();

    expect(await contract.boolValue()).to.equal(false);
    await contract.setBool(true);
    expect(await contract.boolValue()).to.equal(true);
    await contract.setBool(false);
    expect(await contract.boolValue()).to.equal(false);
  });
});
