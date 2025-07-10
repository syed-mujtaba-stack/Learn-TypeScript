// Day 35: Example Script

function ExampleLogger35(constructor: Function) {
  console.log('Logging class:', constructor.name);
}

@ExampleLogger35
class ExampleUser35 {}
