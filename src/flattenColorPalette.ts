import toSlug from "./toSlug.ts";

interface Colors {
    [color: string]: string | Colors;
}

const flattenColorPalette = (colors: Colors): Colors => {
    const flattenedColors: Colors = {};
    for (const color in colors) {
        if (typeof colors[color] === "object") {
            const nestedColors = flattenColorPalette(colors[color] as Colors);
            Object.entries(nestedColors).forEach(([number, hex]) => {
                flattenedColors[toSlug(color) + (number === "DEFAULT" ? "" : `-${number}`)] = hex;
            });
        } else {
            flattenedColors[color] = colors[color] as string;
        }
    }
    return flattenedColors;
};

export default flattenColorPalette;