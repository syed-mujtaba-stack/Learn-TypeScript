// Day 25: Example Script

const exampleUser25: { name?: string } = {};
console.log(exampleUser25.name?.toUpperCase() ?? 'No name');

exampleUser25.name = 'Sara';
console.log(exampleUser25.name?.toUpperCase() ?? 'No name');
