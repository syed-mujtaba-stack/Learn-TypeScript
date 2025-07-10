// Day 9: Example Script

class ExampleAccount {
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

let exampleAccount = new ExampleAccount();
exampleAccount.deposit(200);
console.log(exampleAccount.getBalance()); // 200
