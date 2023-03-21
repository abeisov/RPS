const contractAddress = "0xedf721C112165a05853Bcc22Ca44566A63194576";
const contractABI = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "option",
        type: "uint8",
      },
    ],
    name: "play",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const provider = new ethers.providers.Web3Provider(window.ethereum, 80001); //ChainID 97 BNBtestnet
let signer;
let contract;

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]); //account in metamask

    contract = new ethers.Contract(contractAddress, contractABI, signer);
  });
});

async function playRock() {
  console.log(await contract.play(0));
}
async function playPaper() {
  console.log(await contract.play(1));
}
async function playScissors() {
  console.log(await contract.play(2));
}
