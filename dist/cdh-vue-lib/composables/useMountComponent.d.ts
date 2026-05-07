import type { Component, VNode } from "vue";
/**
 * Mounts a Vue component programmatically. The component will be rendered in a new div element that is appended to the document body.
 *
 * @param component - The Vue component to be mounted.
 * @param props - The props to be passed to the component.
 * @param children - The children to be passed to the component.
 * @returns An object containing the mounted component's VNode, a destroy function, and a reference to the div element.
 */
export default function (component: Component, props: Record<string, unknown>, children: unknown): {
    vNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    destroy: () => void;
    mountPoint: HTMLElement;
};
//# sourceMappingURL=useMountComponent.d.ts.map