import toKebabCase from "../src/kebab";
import { expect } from "chai";
import { expectType } from "tsd";

// ReadonlyArray.map doesn't return a tuple type, but an array
// with union typed value
type UnwrapTuple<T extends ReadonlyArray<any>> = T[number][];

describe("Kebab case", () => {
    it("Converts common casings", async () => {
        const input = ["_my_first_string", "mySecondString"] as const;

        const expected = ["my-first-string", "my-second-string"] as const;

        type Expected = UnwrapTuple<typeof expected>;

        const output = input.map(toKebabCase);

        output.forEach((out, index) => {
            expect(out).to.equal(expected[index]);
        });

        expectType<Expected>(output);
    });
});
