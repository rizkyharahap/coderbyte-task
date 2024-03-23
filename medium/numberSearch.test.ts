/**
 * Number Search
 *
 * For this challange you will traverse a string searching for all the numbers and then you will add them up
 *
 * Have the function numberSearch(str) take the str parameter,
 * search for all the numbers in the string, add them together,
 * then return that final number devided by the total amount of letters in the string.
 *
 * For Example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2.
 * First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32.
 * Then there are 17 letters in the string.
 * 32 /17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2.
 * Only single digit numbers seperated by spaces will be used thoughout the whole string
 * (So this won`t ever be the case: hello44444 world).
 * Each string will also have at lease one letter.
 */

import { expect, test } from "bun:test";

const tests: [string, number][] = [
  ["Hello6 9World 2, Nic8e D7ay!", 2],
  ["H3ello9-9", 4],
  ["One Number*1*", 0],
];

test.each(tests)("Number Search", (input, output) => {
  function numberSearch(str: string): number {
    // save count of number and count of letter
    let count = 0;
    let letter = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      // check if is string number with string comparison
      if (char >= "0" && char <= "9") {
        count += parseInt(char, 10);
      }
      // check if is alphabet with string comparison
      else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        letter++;
      }
    }

    return Math.round(count / letter);
  }

  expect(numberSearch(input)).toEqual(output);
});
