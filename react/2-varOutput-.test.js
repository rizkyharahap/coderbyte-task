import { test } from "bun:test";

test("Var Output", () => {
  (function () {
    var a = b = 5;
  })();
  console.log(b);
});
