/**
 *
 * Returns the value of an input as a number.
 *
 * Only to be used with type="number" inputs. With input types other than 'number' (or 'range' or date-related types), this function will always return 0.
 *
 * @param event
 * @returns a number, or 0 if the input cannot be parsed.
 */
function useInputValueAsNumber(event: Event): number {
    const numberValue = useInputValueAsNumberOrNull(event)
    return numberValue === null ? 0 : numberValue;
}

/**
 *
 * Returns the value of an input as a number, or null if the input is empty or contains a non-number.
 *
 * Only to be used with type="number" inputs. With input types other than 'number' (or 'range' or date-related types), this function will always return null.
 *
 * @param event
 * @returns a number, or null if the input cannot be parsed.
 */
function useInputValueAsNumberOrNull(event: Event): number | null {
    const numberValue = (event.target as HTMLInputElement).valueAsNumber;
    return isNaN(numberValue) ? null : numberValue;
}

export { useInputValueAsNumber, useInputValueAsNumberOrNull };
