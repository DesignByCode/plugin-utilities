import toPascalCase from "../src/toPascalCase"
import {describe, it, expect} from "vitest";


describe("toPascalCase", () => {
    it('should convert string to pascal case', () => {
        expect(toPascalCase("hello world")).toBe("HelloWorld")
    });

    it('should convert string to pascal case trim spaces', () => {
        expect(toPascalCase(" hello   world  ")).toBe("HelloWorld")
    });

    it('should convert string to pascal case and trim', () => {
        expect(toPascalCase(" HelLo   World  ")).toBe("HelloWorld")
    });

    it('should convert string to pascal case from kebab', () => {
        expect(toPascalCase("HelLo-World")).toBe("HelloWorld")
    });
})