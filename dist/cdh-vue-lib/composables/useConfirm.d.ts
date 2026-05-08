export interface ConfirmOptions {
    text: string;
    callback: () => void | Promise<void>;
    headerText?: string;
    confirmText?: string;
    abortText?: string;
}
/**
 * Shows a confirmation dialog with the given text and calls the callback if
 * the user confirms. The callback can return a promise, in which case the
 * dialog will only be closed once the promise is resolved.
 *
 * @param {ConfirmOptions} options - The options for the confirmation dialog.
 */
export default function (options: ConfirmOptions): void;
//# sourceMappingURL=useConfirm.d.ts.map