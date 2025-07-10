// Day 34: Example Script

class ExampleCanJump34 {
  jump() { console.log('Jumping'); }
}
class ExampleCanRun34 {
  run() { console.log('Running'); }
}
class ExampleAthlete34 {}
function exampleApplyMixins34(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
exampleApplyMixins34(ExampleAthlete34, [ExampleCanJump34, ExampleCanRun34]);
const exampleAthlete34 = new ExampleAthlete34();
(exampleAthlete34 as any).jump();
(exampleAthlete34 as any).run();
