// Day 20 Solution: Mapped Types

type SolUser = { id: number; email: string };
type SolPartialUser = {
  [K in keyof SolUser]?: SolUser[K]
};

let solUserObj: SolPartialUser = { email: 'ali@email.com' };
