/**
 * Swap II
 *
 * For this challange you will be manipulating numbers in a string based on the characters.
 *
 * Have the function swapII(str) take the str parameter and swap the case of each character.
 * Then, if a letter is between two numbers (without seperation), switch the place of the twho numbers.
 *
 * For Example: if str is "6Hello4 -8World, 7 yes3" the output should be "4hELLO6 -8wORLD, 7 YES3".
 */

import { expect, test } from "bun:test";

const tests: [string, string][] = [
  ["6Hello4 -8World, 7 yes3", "4hELLO6 -8wORLD, 7 YES3"],
  ["Hello -5LOL6", "hELLO -6lol5"],
  ["2S 6 du5d4e", "2s 6 DU4D5E"],
];

test.each(tests)("Swap II", (input, output) => {
  function swapII(str: string): string {
    let tempIdx = -1;
    let result: string[] = [];

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      let value = char;

      switch (true) {
        case char === " ": // check is space invalidate tempIdx by replacing with -1
          tempIdx = -1;
          break;

        case char >= "1" && char <= "9": // check is number
          // when tempIdx is not set (-1) assign with current index
          if (tempIdx < 0) {
            tempIdx = i;
          }
          // if tempIdx is set, swap location of two numbers, and invalidate tempIdx
          else {
            value = str[tempIdx];
            result[tempIdx] = char;
            tempIdx = -1;
          }
          break;

        case char >= "A" && char <= "Z": // if have uppercase alphabet change to lowercase
          value = char.toLowerCase();
          break;

        case char >= "a" && char <= "z": // if have lowercase alphabet change to uppercase
          value = char.toUpperCase();
          break;
      }

      result.push(value);
    }

    return result.join("");
  }

  expect(swapII(input)).toEqual(output);
});
