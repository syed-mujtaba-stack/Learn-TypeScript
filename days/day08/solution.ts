// Day 8 Solution: Classes & OOP Basics

class SolStudent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let solAli = new SolStudent('Ali');
solAli.introduce();
