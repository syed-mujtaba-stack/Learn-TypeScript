// Day 36: Example Script

abstract class ExampleVehicle36 {
  abstract drive(): void;
  stop() { console.log('Vehicle stopped'); }
}

class ExampleCar36 extends ExampleVehicle36 {
  drive() { console.log('Car driving'); }
}

const exampleCar36 = new ExampleCar36();
exampleCar36.drive();
exampleCar36.stop();
