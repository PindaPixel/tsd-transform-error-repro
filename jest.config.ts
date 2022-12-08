import type { JestConfigWithTsJest } from "ts-jest";

export default {
    transform: {
        "^.*(\\.|\\/)(test\\.ts)$": [
            "jest-chain-transform",
            {
                transformers: [
                    "jest-tsd-transform",
                    [
                        "ts-jest",
                        {
                            tsconfig: "tsconfig.test.json",
                        },
                    ],
                ],
            },
        ],
    },
    testMatch: ["<rootDir>/tests/**/*test.ts"],
} satisfies JestConfigWithTsJest;
