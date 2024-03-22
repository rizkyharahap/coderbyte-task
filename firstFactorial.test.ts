/**
 * Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
 * For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
 * For the test cases, the range will be between 1 and 18 and the input will allways be an integer
 *
 */

import { expect, test } from "bun:test";

const tests: [number, number][] = [
  [4, 24],
  [8, 40320],
];
test.each(tests)("First Factorial", (input, output) => {
  function firstFactorial(num: number): number {
    // cause !0 & !1 is 1
    if (num === 0 || num === 1) {
      return 1;
    }

    // use recursive function
    return num * firstFactorial(num - 1);
  }

  expect(firstFactorial(input)).toEqual(output);
});
