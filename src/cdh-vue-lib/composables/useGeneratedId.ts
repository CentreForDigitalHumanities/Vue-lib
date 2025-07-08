import { v4 as UUIDv4 } from "uuid";

/**
 * Generates a unique identifier string suitable for use as an HTML element ID.
 *
 * The generated ID starts with the prefix "id_" followed by a UUIDv4 string
 * with hyphens removed, ensuring it starts with a letter (required for HTML 4
 * and included here for compatibility reasons) and is unique.
 *
 * @returns {string} A unique identifier string starting with "id_".
 */
export default function useGeneratedId(): string {
    return "id_" + UUIDv4().toString().replace(/-/g, "");
}
