
export default function toPascalCase(inputString: string): string {
    const words = inputString.split(/[\s\-_]/);
    const pascalCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return pascalCaseWords.join('');
}
