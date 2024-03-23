/**
 * String Scramble
 *
 * Fir this challange you will determine if string 1 can be rearranged into string 2
 *
 * Have the function stringScramble(str1, str2) take both parameter being passed
 * and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return string false.
 *
 * For Example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
 * Punctuation and symbols will not be entered with the parameters
 */

import { expect, test } from "bun:test";

const tests: [string, string, boolean][] = [
  ["cdore", "coder", true],
  ["h3llko", "hello", false],
];

test.each(tests)("String Scramble", (input1, input2, output) => {
  function stringScramble(str1: string, str2: string): boolean {
    const str2Map = new Map<string, number>();

    for (const c2 of str2) {
      str2Map.set(c2, (str2Map.get(c2) || 0) + 1);
    }

    for (const c1 of str1) {
      const c2Map = str2Map.get(c1);

      if (c2Map && c2Map > 0) {
        str2Map.set(c1, c2Map - 1);
      }
    }

    for (const c2Map of str2Map) {
      if (c2Map[1] > 0) {
        return false;
      }
    }

    return true;
  }

  expect(stringScramble(input1, input2)).toEqual(output);
});

test.each(tests)("String Scramble Solution 2", (input1, input2, output) => {
  function stringScramble(str1: string, str2: string): boolean {
    const charCount = new Array(128).fill(0); // assuming ASCII character

    // count occurrences of characters in str1
    for (const char of str1) {
      const charCode = char.charCodeAt(0);
      charCount[charCode]++;
    }

    // check if characters in str2 are present in str1
    for (const char of str2) {
      const charCode = char.charCodeAt(0);
      if (charCount[charCode] === 0) {
        return false; // character in str2 is not present in str1
      }

      charCount[charCode]--;
    }

    return true;
  }

  expect(stringScramble(input1, input2)).toEqual(output);
});
