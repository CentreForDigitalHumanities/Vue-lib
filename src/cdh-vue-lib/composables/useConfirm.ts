import BSConfirmDialog from "../components/bootstrap/BSConfirmDialog.vue";
import useMountComponent from "./useMountComponent";

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
export default function (options: ConfirmOptions) {
    const close = () => {
        destroy();
    };

    const { destroy } = useMountComponent(
        BSConfirmDialog,
        {
            callback: options.callback,
            onClose: close,
            headerText: options.headerText || "Please confirm",
            confirmText: options.confirmText || "Yes",
            abortText: options.abortText || "No",
        },
        { default: () => options.text },
    );
}
