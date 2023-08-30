/**
 * Simple composable to get the input value from a @input or @update event
 * @param e
 */
export default function useInputValue(e: Event) {
  return (e.target as HTMLInputElement).value
}
