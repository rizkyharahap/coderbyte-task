/**
 * Counting Minutes
 *
 * For this challange you will return the total number of minutes between two times.
 *
 * Have the function countingMinutes(str)
 * take the str parameter being passed which will be two times
 * (each properly formatted with a colon and am or pm) seperated by a hyphen
 * and return the total number of minutes between the two times.
 * The time will be in a 12 hour clock format.
 *
 * For Example: if str is 9:00am-10:00am then the output should be 60.
 * If str is 1:00pm-11:00am the output should be 1320
 */

import { expect, test } from "bun:test";

const tests: [string, number][] = [
  ["9:00am-10:00am", 60],
  ["1:00pm-11:00am", 1320],
  ["12:30pm-12:00am", 690],
  ["1:23am-1:08am", 1425],
];

test.each(tests)("Counting Minutes", (input, output) => {
  function countingMinutes(str: string): number {
    const arr: Array<string | number> = [];

    let tempStr = "";

    // save to array and clean tempStr
    function pushAndClean(str: string) {
      if (str.length > 0) {
        arr.push(parseFloat(str));
      }

      return "";
    }

    // loop for split hour, minutes and am/pm
    for (let i = 0; i < str.length; i++) {
      const c = str[i];

      // add character tempStr
      if (c >= "0" && c <= "9") {
        tempStr += c;
      }

      // if seperated character push tempStr to array and clean tempStr
      else if (c === ":" || c === "-") {
        tempStr = pushAndClean(tempStr);
      }

      // push am/pm, push tempStr to array and clean tempStr
      else if (c === "a" || c === "p") {
        tempStr = pushAndClean(tempStr);
        arr.push(c + "m");
      }
    }

    const [hour1, minute1, ampPm1, hour2, minute2, ampPm2] = arr;

    let tempHour1 = hour1 as number;
    let tempHour2 = hour2 as number;

    // checking diff am/pm
    if (ampPm1 !== ampPm2) {
      if (ampPm1 === "pm") {
        tempHour2 = tempHour2 + 12;
      } else {
        tempHour1 = tempHour1 + 12;
      }
    } else if (hour1 <= hour2 && minute2 < minute1) {
      tempHour2 = tempHour2 + 24;
    }

    const timeInMinutes1 = tempHour1 * 60 + (minute1 as number);
    const timeInMinutes2 = tempHour2 * 60 + (minute2 as number);

    return timeInMinutes2 - timeInMinutes1;
  }

  expect(countingMinutes(input)).toEqual(output);
});

test.each(tests)("Counting Minutes Solution 2", (input, output) => {
  function countingMinutes(str: string): number {
    const [start, end] = str.split("-");

    const [startHour, startMinute, startPeriod] = start.match(/\d+|am|pm/g)!;
    const [endHour, endMinute, endPeriod] = end.match(/\d+|am|pm/g)!;

    let startTime = parseInt(startHour) * 60 + parseInt(startMinute);
    let endTime = parseInt(endHour) * 60 + parseInt(endMinute);

    if (startPeriod === "pm") {
      startTime += 12 * 60;
    } else if (endPeriod === "pm") {
      endTime += 12 * 60;
    } else if (startPeriod !== endPeriod) {
      endTime += 12 * 60;
    }

    return (endTime - startTime + 1440) % 1440;
  }

  expect(countingMinutes(input)).toEqual(output);
});
