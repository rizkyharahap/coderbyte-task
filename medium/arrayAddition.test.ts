/**
 * Array Addition
 *
 * For this challange you will determine if numbers in an array can add up to a certain number in array.
 *
 * Have the function arrayAddition(arr) take the array of numbers stored in arr
 * and return the string true if any combination of numbers in the array (excluding the largest number)
 * can be added up to equal largest number in the array, otherwise return string false.
 *
 * For Example: if arr contains [4,6,23,10,1,3]. The output should return true because 4+6+10+3 = 23.
 * The array will not be empty, will not contain all same elements, and may contain negative numbers
 */

import { expect, test } from "bun:test";

const tests: [number[], boolean][] = [
  [[5, 7, 16, 1, 2], false],
  [[3, 5, -1, 8, 12], true],
];

test.each(tests)("Array Addition", (input, output) => {
  function arrayAddition(arr: number[]): boolean {
    // check if any combination of numbers in the array
    function isContains(numbers: number[], target: number): boolean {
      // if the array is empty, check if the target is zero
      if (numbers.length === 0) {
        return target === 0;
      }

      // get first element in the numbers and the remaining element
      let head = numbers[0];
      let tail = numbers.slice(1);

      // check if the hhighest can be reached by subtracting the first element from the target
      // and checking if the remaining elements contain a combination that adds up to the result
      // or check if the remaining elements contains a combination that adds up to the target
      return isContains(tail, target - head) || isContains(tail, target);
    }

    // sort array from highest to smallest
    const sorted = arr.sort((a, b) => b - a);

    // remove higest number and save it
    const highest = sorted.shift()!;

    return isContains(sorted, highest);
  }

  expect(arrayAddition(input)).toEqual(output);
});
