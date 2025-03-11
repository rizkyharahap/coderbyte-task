import { test } from "bun:test";

test("Set Timeout Output", () => {
  // when using var the output is 3,3,3 becaus this can be used in outside scoop
  // when using let the output is 0,1,2
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      alert(i.toString());
    }, 1000 + 1);
  }
});
