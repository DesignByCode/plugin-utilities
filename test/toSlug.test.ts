import toSlug from "../src/toSlug"
import {describe, it, expect} from "vitest";

describe("toSlug", () => {
    it('should convert string to slug case', () => {
        expect(toSlug("hello world")).toBe("hello-world")
    });

    it('should convert string to slug case trim spaces', () => {
        expect(toSlug(" hello   world  ")).toBe("hello-world")
    });

    it('should convert string to slug case and trim', () => {
        expect(toSlug(" Hello   World  ")).toBe("hello-world")
    });

    it('should convert string to slug case from kebab', () => {
        expect(toSlug("Hello-World")).toBe("hello-world")
    });

    it('should convert string to slug case from camelCase', () => {
        expect(toSlug("helloWorld")).toBe("hello-world")
    });
})