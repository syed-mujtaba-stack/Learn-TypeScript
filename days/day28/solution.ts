// Day 28 Solution: Working with Dates

const solToday28 = new Date();
console.log('Year:', solToday28.getFullYear());
console.log('Month:', solToday28.getMonth() + 1); // Months are 0-based
console.log('Day:', solToday28.getDate());

const solFormatted28 = `${solToday28.getFullYear()}-${String(solToday28.getMonth() + 1).padStart(2, '0')}-${String(solToday28.getDate()).padStart(2, '0')}`;
console.log('Formatted:', solFormatted28);
