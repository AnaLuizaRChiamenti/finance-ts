import { Transaction, User, Wallet } from "./types";


const user: User = {
    name: "Ana",
    login: "AnaChiamenti",
    enable: true,
    password: "123"
}

const WalletUser: Wallet = {
    enable: true,
    owner: user,
    transactions: []
};

function addTransaction(wallet: Wallet, transaction: Transaction) {
    wallet.transactions.push(transaction)
}

function printTransactions(wallet: Wallet) {
    /* const transactions = wallet.transactions; */
    const { transactions, owner } = wallet;

    console.log(`Esta carteira é do(a) ${owner.name}\n`);
    transactions.forEach((valor) => console.log(`Transação: ${valor.description}\n Valor: R$${valor.value}\n Tipo: ${valor.type}\n`));

}

function balance(wallet: Wallet): number {

    const { transactions } = wallet
    let saldo = 0

    transactions.forEach((valor) => {
        if(valor.type === 'C'){
            saldo += valor.value
        } else {
            saldo -= valor.value
        }
    })

    return saldo;

}

addTransaction(WalletUser, { description: "mercado", type: "D", value: 500 })
addTransaction(WalletUser, { description: "padaria", type: "D", value: 150 })
addTransaction(WalletUser, { description: "salario", type: "C", value: 1500 })

/* printTransactions(WalletUser)*/
const saldo = balance(WalletUser)
console.log(`Seu saldo é: R$${saldo} reais`);
