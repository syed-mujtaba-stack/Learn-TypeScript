// Day 25 Solution: Optional Chaining & Nullish Coalescing

const solProfile: { email?: string } = {};
console.log(solProfile.email?.toUpperCase() ?? 'No email');

solProfile.email = 'ali@email.com';
console.log(solProfile.email?.toUpperCase() ?? 'No email');
