import type { Component, VNode } from "vue";
import { createVNode, getCurrentInstance, render } from "vue";


/**
 * Mounts a Vue component programmatically. The component will be rendered in a new div element that is appended to the document body.
 *
 * @param component - The Vue component to be mounted.
 * @param props - The props to be passed to the component.
 * @param children - The children to be passed to the component.
 * @returns An object containing the mounted component's VNode, a destroy function, and a reference to the div element.
 */
export default function (
    component: Component,
    props: Record<string, unknown>,
    children: unknown,
) {
    let mountPoint: HTMLElement | null = document.createElement("div");
    const app = getCurrentInstance()?.appContext.app;

    let vNode: VNode | null = createVNode(component, props, children);
    if (app && app._context) {
        vNode.appContext = app._context;
    }
    render(vNode, mountPoint);

    const destroy = () => {
        if (mountPoint) {
            render(null, mountPoint);
        }
        mountPoint?.remove();
        mountPoint = null;
        vNode = null;
    };

    return {
        vNode,
        destroy,
        mountPoint,
    };
}
