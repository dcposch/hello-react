import test from "tape";
import { Test } from "tape";
import { pluralize } from "../utils";

test("timing test", function (t: Test) {
  t.equal(pluralize("penguin", 0), "penguins");
  t.equal(pluralize("penguin", 1), "penguin");
  t.equal(pluralize("penguin", 2), "penguins");
  t.end();
});
