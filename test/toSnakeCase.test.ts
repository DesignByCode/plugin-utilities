import toSnakeCase from "../src/toSnakeCase"
import {describe, it, expect} from "vitest";

describe("toSnakeCase", () => {
    it('should convert string to snake case', () => {
        expect(toSnakeCase("hello world")).toBe("hello_world")
    });

    it('should convert string to snake case trim spaces', () => {
        expect(toSnakeCase(" hello   world  ")).toBe("hello_world")
    });

    it('should convert string to snake case and trim', () => {
        expect(toSnakeCase(" HelLo   World  ")).toBe("hello_world")
    });

    it('should convert string to snake case from kebab', () => {
        expect(toSnakeCase("Hello-World")).toBe("hello_world")
    });
})