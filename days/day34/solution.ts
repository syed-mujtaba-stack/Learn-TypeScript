// Day 34 Solution: TypeScript Mixins

class SolCanSwim34 {
  swim() { console.log('Swimming'); }
}
class SolCanFly34 {
  fly() { console.log('Flying'); }
}
class SolDuck34 {}
function solApplyMixins34(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
solApplyMixins34(SolDuck34, [SolCanSwim34, SolCanFly34]);
const solDuck34 = new SolDuck34();
(solDuck34 as any).swim();
(solDuck34 as any).fly();
