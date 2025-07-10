// Day 29 Solution: Working with JSON

const solJsonStr = '{"course":"TypeScript","days":50}';
const solObj = JSON.parse(solJsonStr);
console.log('Course:', solObj.course);
console.log('Days:', solObj.days);

const solTopicObj = { topic: 'Interfaces', level: 'Intermediate' };
const solTopicJson = JSON.stringify(solTopicObj);
console.log('JSON:', solTopicJson);
