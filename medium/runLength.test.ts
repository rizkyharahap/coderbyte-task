/**
 * Run Length
 *
 * For this challange you will determine the Run Length Encoding of a string.
 *
 * Have the function runLength(str) take the str parameter being passed
 * and return compressed version of the string using the Run-Length encoding algorithm
 * This is algorithm works by taking the occurence of each repeating character
 * and outputting that number along with a single character of the repeating sequence.
 * For example: "wwwggopp" would be return 3w2g1o2p.
 * The string will not contain any numbers, punctuation, or symbols
 */

import { expect, test } from "bun:test";

const tests: [string, string][] = [
  ["aabbcde", "2a2b1c1d1e"],
  ["wwwbbbw", "3w3b1w"],
];

test.each(tests)("Distinct List", (input, output) => {
  function runLength(str: string): string {
    // set count with 1, to automatically collect first character count
    let count = 1;
    let result = "";

    for (let i = 1; i <= str.length; i++) {
      const curr = str[i];
      const prev = str[i - 1];

      // if character same as previous, then add count
      if (prev === curr) {
        count++;
      } else {
        // add count and character to result and reset count
        result += count.toString() + prev;
        count = 1;
      }
    }

    return result;
  }

  expect(runLength(input)).toEqual(output);
});
