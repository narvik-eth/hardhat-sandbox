import { ethers } from 'hardhat';

const main = async () => {
  const contract = await ethers
    .getContractFactory('Bool')
    .then((factory) => factory.deploy());
  await contract.deployed();

  console.log('Bool deployed to:', contract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
