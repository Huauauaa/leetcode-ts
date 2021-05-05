import { repeat, getLength } from "./syntax/generic";

let result = repeat(12, 3);

console.log(result);

console.log(repeat("aa", 3));

console.log(getLength("foo"));
console.log(
  getLength({
    length: 666,
  })
);
