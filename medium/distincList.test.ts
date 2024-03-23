/**
 * Distinct List
 *
 * Have the function DistinctList(arr) take the array of numbers stored in arr
 * and determine the total number of duplicate entries.
 * For example if the input is [1,2,2,2,3] then your program should output 2
 * because there are two duplicates of one the elements
 */

import { expect, test } from "bun:test";

const tests: [number[], number][] = [
  [[0, -2, -2, 5, 5, 5], 3],
  [[100, 2, 101, 3], 0],
];

test.each(tests)("Distinct List", (arr, res) => {
  function distinctList(arr: number[]) {
    const filteredArr = new Set(arr);
    return arr.length - filteredArr.size;
  }

  expect(distinctList(arr)).toEqual(res);
});

test.each(tests)("Distinct List Solution 2", (arr, res) => {
  function distinctList(arr: number[]) {
    const filteredArr = new Set();
    let duplicate: number = 0;

    arr.forEach((i) => {
      if (filteredArr.has(i)) {
        duplicate++;
      } else {
        filteredArr.add(i);
      }
    });

    return duplicate;
  }

  expect(distinctList(arr)).toEqual(res);
});
