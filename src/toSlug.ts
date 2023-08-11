
export default function toSlug(inputString: string): string {
    return inputString
        .replace(/[^\w\s-]/g, '')    // Remove non-alphanumeric characters except spaces and dashes
        .replace(/([a-z])([A-Z])/g, '$1-$2')  // Convert camelCase to slug
        .trim()                     // Remove leading and trailing spaces
        .replace(/\s+/g, '-')       // Replace multiple spaces with a single dash
        .replace(/_/g, '-')         // Replace underscores with dashes
        .toLowerCase();             // Convert to lowercase
}