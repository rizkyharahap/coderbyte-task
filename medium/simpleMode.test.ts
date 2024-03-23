/**
 * Simple Mode
 *
 * For this challange you will determine the mode, the number that appears most frequently, in an array.
 *
 * Have the function simpleMode(arr) take the array of numbers stored in arr
 * and return the number that appears most frequently (the mode).
 *
 * For Example: if arr contains [10, 4, 5, 2, 4] the ouput should be 4.
 * If there is more than one mode return the one that appeared in the array first
 * (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).
 * If there is no mode return -1. The array will not be empty.
 */

import { expect, test } from "bun:test";

const tests: [number[], number][] = [
  [[10, 4, 5, 2, 4], 4],
  [[5, 10, 10, 6, 5], 5],
  [[5, 5, 2, 2, 1], 5],
  [[3, 4, 1, 6, 10], -1],
];

test.each(tests)("Simple Mode", (input, output) => {
  function simpleMode(arr: number[]): number {
    const freq = new Map<number, number>();

    // set frequency of each of numbers
    arr.forEach((num) => {
      freq.set(num, (freq.get(num) || 0) + 1);
    });

    let maxFreq: number = -1;

    freq.forEach((num, key) => {
      // ignore when frequency is 1
      if (num <= 1) {
        return;
      }

      // check maxFreq if invalid (-1)
      // or num is greather than freq of maxFreq (this for keep the result is the first index found)
      if (maxFreq === -1 || num > freq.get(maxFreq)!) {
        maxFreq = key;
      }
    });

    return maxFreq;
  }

  expect(simpleMode(input)).toEqual(output);
});
