import flattenColorPalette from "../src/flattenColorPalette"
import {describe, it, expect} from "vitest";


describe("flattenColorPalette", () => {
    it('should return object of flatten colors with default', () => {
        expect(flattenColorPalette({
            tulipTree: {  DEFAULT: '#EFC03E',  50: '#FDF7E8',  100: '#FBF1D5'},
        })).toEqual({
            "tulip-tree": "#EFC03E",
            "tulip-tree-50": "#FDF7E8",
            "tulip-tree-100": "#FBF1D5",
        })
    });

    it('should return object of flatten colors', () => {
        expect(flattenColorPalette({
            "tulip-tree": {  50: '#FDF7E8',  100: '#FBF1D5'},
        })).toEqual({
            "tulip-tree-50": "#FDF7E8",
            "tulip-tree-100": "#FBF1D5",
        })
    });


    it('should return object of flatten colors', () => {
        expect(flattenColorPalette({
            red: '#FF0000',
            blue: '#0000FF',
            gray: {
                100: '#F5F5F5',
                200: '#EEEEEE',
                300: '#E0E0E0',
                DEFAULT: '#CCCCCC',
            }
        })).toEqual({
            red: "#FF0000",
            blue: '#0000FF',
            gray: "#CCCCCC",
            "gray-100": "#F5F5F5",
            "gray-200": "#EEEEEE",
            "gray-300": "#E0E0E0",

        })
    });
})