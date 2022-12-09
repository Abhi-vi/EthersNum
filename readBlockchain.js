const { ethers } = require ("ethers");

const provider = new ethers.providers.JsonRpcProvider
('https://mainnet.infura.io/v3/b509932b3c284d138626fb153d01e8c8');

const querryBlockchain=async()=>{
    const block=await provider.getBlockNumber();
    console.log("current Blck Number:",block);

    const balance= await provider.getBalance("")

} 
querryBlockchain();


