"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Ana",
    login: "AnaChiamenti",
    enable: true,
    password: "123"
};
const WalletUser = {
    enable: true,
    owner: user,
    transactions: []
};
function addTransaction(wallet, transaction) {
    wallet.transactions.push(transaction);
}
function printTransactions(wallet) {
    /* const transactions = wallet.transactions; */
    const { transactions, owner } = wallet;
    console.log(`Esta carteira é do(a) ${owner.name}\n`);
    transactions.forEach((valor) => console.log(`Transação: ${valor.description}\n Valor: R$${valor.value}\n Tipo: ${valor.type}\n`));
}
addTransaction(WalletUser, { description: "mercado", type: "D", value: 500 });
addTransaction(WalletUser, { description: "padaria", type: "D", value: 150 });
addTransaction(WalletUser, { description: "mecanico", type: "C", value: 1500 });
printTransactions(WalletUser);
