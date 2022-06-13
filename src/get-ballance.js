//Access Etherium and see the Contract's Balance
import Web3 from 'web3'

//API Connection 
const Web3 = new Web3("https://mainnet.infura.io/v3/e82f243b25ed4793bc29076a3aa82eb8")
const contractAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"

const getBalance = async () => {
    const balance = await web3.eth.getBalance(contractAddress) //Contract address
    //Balance Format 
    const balanceFormat = web3.utils.fromWei(balance, 'ether') //Wei - Menor Base de cálculo do Etherum
    console.log(balanceFormat)
}

getBalance()