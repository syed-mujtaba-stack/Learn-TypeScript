// Day 33 Solution: TypeScript Namespaces

namespace SolStringHelpers33 {
  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

console.log(SolStringHelpers33.capitalize('typescript'));
