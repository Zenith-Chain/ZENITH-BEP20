const Zenith = artifacts.require("Zenith");

module.exports = function (deployer, network, accounts) {
  const name = "Zenith Coin";
  const symbol = "ZENITH";
  const initialSupply = '10000000000000000000000000';
  // deployer.deploy(Zenith,name,symbol,initialSupply,'0x309D05A108C8aC564D3D814e5973aB9a7Cc9441e').then(token=>{console.log(token.address)});
  deployer.deploy(Zenith,name,symbol,initialSupply,'0x32D2dEF8B6Eb3E9FE955c9Da6a88c6f227132b31').then(token=>{console.log(token.address)});
};
