import { KebabCase } from "type-fest";

type CorrectedKebabCase<S extends string> = KebabCase<S> extends `-${infer StringRest}` | infer UnionRest ? StringRest | UnionRest : CorrectedKebabCase<S>;

export default function toKebabCase<S extends string>(input: S): CorrectedKebabCase<S> {
    if (!input) return "" as CorrectedKebabCase<S>;

    return input
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
        .replace(/([a-z])([A-Z])/g, (_, lower, upper) => `${lower}_${upper.toLowerCase()}`)
        .replace(/[^A-Za-z0-9]+|_+/g, "-")
        .toLowerCase() as CorrectedKebabCase<S>;
}
