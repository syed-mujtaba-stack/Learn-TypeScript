// Day 18 Solution: Discriminated Unions

interface SolDog { kind: 'dog'; bark: () => void; }
interface SolCat { kind: 'cat'; meow: () => void; }
type SolPet = SolDog | SolCat;

function solMakeSound(pet: SolPet) {
  switch (pet.kind) {
    case 'dog': pet.bark(); break;
    case 'cat': pet.meow(); break;
  }
}

const solDog: SolDog = { kind: 'dog', bark: () => console.log('Woof!') };
const solCat: SolCat = { kind: 'cat', meow: () => console.log('Meow!') };
solMakeSound(solDog);
solMakeSound(solCat);
