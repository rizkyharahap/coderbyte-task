/**
 * For this challange you will be manipulating characters in a string base off their positions in the alphabet
 *
 * Have the fucntion letterChanges(str) take the str parameter being passed and modify it using the following algorithm.
 * Replace every letter in the string with the letter following it the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a,e,i,o,u) and finally return this modified string.
 */

import { expect, test } from "bun:test";

const tests: [string, string][] = [
  ["hello*3", "Ifmmp*3"],
  ["fun times!", "gvO Ujnft!"],
];
test.each(tests)("First Factorial", (input, output) => {
  function letterChanges(str: string): string {
    let result = [];
    let vowel = new Set(["a", "i", "u", "e", "o"]);

    for (let i = 0; i < str.length; i++) {
      // get character code by ASCII
      let charCode = str.charCodeAt(i);
      // set default character result
      let charRes = str[i];

      // check is [a-z] by character code
      if (charCode >= 97 && charCode <= 122) {
        let reversedCode;

        // change z to a
        if (charCode == 122) {
          reversedCode = 97;
        } else {
          reversedCode = charCode + 1;
        }

        // convert character code to string character
        charRes = String.fromCharCode(reversedCode);
      }

      // uppercase vowel character
      if (vowel.has(charRes)) {
        charRes = charRes.toUpperCase();
      }

      result.push(charRes);
    }

    return result.join("");
  }

  expect(letterChanges(input)).toEqual(output);
});
