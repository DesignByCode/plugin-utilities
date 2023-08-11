
export default function toSnakeCase(inputString: string): string {
    return inputString
        .replace(/[^\w\s-]/g, '')    // Remove non-alphanumeric characters except spaces and dashes
        .trim()                     // Remove leading and trailing spaces
        .replace(/\s+/g, '_')       // Replace spaces with underscores
        .replace(/-/g, '_')         // Replace dashes with underscores
        .toLowerCase();             // Convert to lowercase
}
