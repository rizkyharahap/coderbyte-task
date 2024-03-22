/**
 * Bracket Matcher
 *
 * For this challange you will determine if the brackets in a string are correctly matched up.
 *
 * Have the function bracketMatcher(str) take the str parameter being passed.
 * Return 1 if brackets are correctly matched and each one is accounted for. Otherwise return 0.
 * For example: if str is "(hello (world))", then the output should be 1,
 * but if str is "((hello (world))" then the output should be 0 because the brackets do not correctly match up.
 * Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
 */

import { expect, test } from "bun:test";

const tests: [string, number][] = [
  ["(coder)(byte))", 0],
  ["(c(oder)) b(yte)", 1],
];

test.each(tests)("Distinct List", (input, output) => {
  function bracketMatcher(str: string): number {
    let opened = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      // check opened bracket
      if (char === "(") {
        opened++;
      }
      // check closed brackets
      else if (char === ")") {
        // return immediately when has close bracket but bracket not open
        if (opened === 0) {
          return 0;
        }

        opened--;
      }
    }

    return opened == 0 ? 1 : 0;
  }

  expect(bracketMatcher(input)).toEqual(output);
});
