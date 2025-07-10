// Day 9 Solution: Access Modifiers

class SolBankAccount {
  private balance: number;
  constructor() {
    this.balance = 0;
  }
  public deposit(amount: number) {
    this.balance += amount;
  }
  public getBalance(): number {
    return this.balance;
  }
}

let solAccount = new SolBankAccount();
solAccount.deposit(100);
console.log(solAccount.getBalance()); // 100
