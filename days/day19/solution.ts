// Day 19 Solution: keyof & typeof Operators

const solCar = { brand: 'Toyota', year: 2020 };
type SolCarKeys = keyof typeof solCar; // 'brand' | 'year'
type SolCarType = typeof solCar; // { brand: string; year: number; }
