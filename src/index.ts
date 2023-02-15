import { Transaction, User, Wallet } from "./types";


const user: User = { 
    name: "Ana", 
    login: "AnaChiamenti", 
    enable: true, 
    password: "123" }

const WalletUser: Wallet = { 
    enable: true, 
    owner: user, 
    transactions: [] };

    function addTransaction(wallet: Wallet, transaction: Transaction) {
        wallet.transactions.push(transaction)
    }

    addTransaction(WalletUser, {description:"mercado", type: "D", value: 500})
    addTransaction(WalletUser, {description:"padaria", type: "D", value: 150})
    addTransaction(WalletUser, {description:"carro", type: "C", value: 1500})

    console.log(WalletUser);
    