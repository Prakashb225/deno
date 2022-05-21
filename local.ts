import { sub,divide } from "./arithmetic.ts";
function totalCost(outbound: number, inbound: number, tax: number): number {
  return divide(sub(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));