<script setup lang="ts">
import { BSSidebar, BSIcon } from "cdh-vue-lib";
import { faBars } from "@fortawesome/free-solid-svg-icons";
</script>

<template>

        <div class="container py-4">
            <h2 class="h3">BSSidebar Component Documentation</h2>
            <section class="my-4">
                <h3 class="h4">Overview</h3>
                <p>
                    The <code>BSSidebar</code> component provides a flexible sidebar
                    layout that can be placed on the left or right for desktop
                    views, and on the top or bottom for mobile views. It includes a
                    toggle button to show/hide the sidebar content, which is
                    collapsible.
                </p>
                <p>Note that this component should be wrapped inside an HTML element with the <code>.uu-root-container</code> class for the UU Bootstrap styles to work properly.</p>
            </section>
            <section class="my-4">
                <h3 class="h4">Props</h3>
                <ul>
                    <li>
                        <code>id</code> (String | null, optional, default:
                        <code>null</code>): A unique ID for the sidebar's
                        collapsible element. If not provided, a UUID-based ID
                        (prefixed with "id_") will be generated.
                    </li>
                    <li>
                        <code>placement</code> ("left" | "right", optional, default:
                        <code>"left"</code>): Determines the sidebar's position on
                        larger screens.
                    </li>
                    <li>
                        <code>mobilePlacement</code> ("top" | "bottom", optional,
                        default: <code>"top"</code>): Determines the sidebar's
                        position on smaller (mobile) screens.
                    </li>
                    <li>
                        <code>stickySidebar</code> (Boolean, optional, default:
                        <code>false</code>): If true, the sidebar will have a sticky
                        position on desktop views.
                    </li>
                    <li>
                        <code>mobileStickySidebar</code> (Boolean, optional,
                        default: <code>false</code>): If true, the sidebar will have
                        a sticky position on mobile views.
                    </li>
                </ul>
            </section>
            <section class="my-4">
                <h3 class="h4">Slots</h3>
                <ul>
                    <li>
                        <code>default</code>: The main content that will be
                        displayed alongside the sidebar.
                    </li>
                    <li>
                        <code>sidebar</code>: The content to be placed inside the
                        collapsible sidebar region.
                    </li>
                    <li>
                        <code>sidebar-button</code>: The content for the button that
                        toggles the sidebar's visibility. Typically an icon or text.
                    </li>
                </ul>
            </section>
            <section class="my-4">
                <h3 class="h4">CSS Classes for Customization</h3>
                <p>
                    The component uses several CSS classes that can be targeted for
                    further customization if needed:
                </p>
                <ul>
                    <li>
                        <code>uu-sidebar-container</code>: The main container for
                        the sidebar and content.
                    </li>
                    <li>
                        <code>uu-sidebar</code>: The
                        <code>&lt;aside&gt;</code> element for the sidebar.
                    </li>
                    <li>
                        <code>uu-sidebar-toggle</code>: The button used to toggle
                        the sidebar.
                    </li>
                    <li>
                        <code>uu-sidebar-collapse</code>: The collapsible
                        <code>&lt;div&gt;</code> containing the sidebar slot
                        content.
                    </li>
                    <li>
                        <code>uu-sidebar-content</code>: The
                        <code>&lt;section&gt;</code> for the main content slot.
                    </li>
                    <li>
                        Conditional classes based on props:
                        <ul>
                            <li>
                                <code>uu-sidebar-right</code>: Applied if
                                <code>placement="right"</code>.
                            </li>
                            <li>
                                <code>uu-sidebar-mobile-bottom</code>: Applied if
                                <code>mobilePlacement="bottom"</code>.
                            </li>
                            <li>
                                <code>uu-sidebar-sticky</code>: Applied if
                                <code>stickySidebar=true</code>.
                            </li>
                            <li>
                                <code>uu-sidebar-mobile-sticky</code>: Applied if
                                <code>mobileStickySidebar=true</code>.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section class="my-4">
                <h3 class="h4">Demonstration</h3>
                <h4>Default Left Sidebar</h4>
                <div class="uu-root-container">
                    <BSSidebar style="height: 300px; border: 1px solid #ccc">
                        <template #sidebar-button>
                            <BSIcon :icon="faBars" /> Toggle Sidebar
                        </template>
                        <template #sidebar>
                            <div class="p-3">
                                <h5>Sidebar Content</h5>
                                <p>This is the default left-placed sidebar.</p>
                                <ul>
                                    <li>Link 1</li>
                                    <li>Link 2</li>
                                    <li>Link 3</li>
                                </ul>
                            </div>
                        </template>
                        <div class="p-3">
                            <h5>Main Content Area</h5>
                            <p>
                                This is the main content area next to the sidebar.
                                Resize the window to see mobile placement.
                            </p>
                        </div>
                    </BSSidebar>
                </div>
                <h4 class="mt-5">Right-Placed, Sticky Sidebar (Mobile Bottom)</h4>
                <div class="uu-root-container">
                    <BSSidebar
                        placement="right"
                        mobile-placement="bottom"
                        :sticky-sidebar="true"
                        style="height: 300px; border: 1px solid #ccc; margin-top: 20px"
                    >
                        <template #sidebar-button>
                            <BSIcon :icon="faBars" /> Toggle Right Sidebar
                        </template>
                        <template #sidebar>
                            <div class="p-3 bg-light">
                                <h5>Right Sidebar</h5>
                                <p>This sidebar is on the right and sticky.</p>
                                <p>On mobile, it will appear at the bottom.</p>
                            </div>
                        </template>
                        <div class="p-3">
                            <h5>Main Content for Right Sidebar Demo</h5>
                            <p>
                                Scroll this area to see the sticky effect of the right
                                sidebar if the content is long enough.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </BSSidebar>
                </div>
                <div class="mt-5 p-3 border bg-light">
                    <h5>Code Example (Left Sidebar):</h5>
                    <pre><code class="language-html">&lt;script setup lang="ts"&gt;
        import { BSSidebar, BSIcon } from "your-component-library"; // Adjust import path
        import { faBars } from "@fortawesome/free-solid-svg-icons";
        &lt;/script&gt;

        &lt;template&gt;
          &lt;div class="uu-root-container"&gt;
            &lt;BSSidebar style="height: 300px; border: 1px solid #ccc;"&gt;
                &lt;template #sidebar-button&gt;
                &lt;BSIcon :icon="faBars" /&gt; Toggle Sidebar
                &lt;/template&gt;
                &lt;template #sidebar&gt;
                &lt;div class="p-3"&gt;
                    &lt;h5&gt;Sidebar Content&lt;/h5&gt;
                    &lt;p&gt;This is the sidebar area.&lt;/p&gt;
                    &lt;ul&gt;
                    &lt;li&gt;Navigation Item 1&lt;/li&gt;
                    &lt;li&gt;Navigation Item 2&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;/template&gt;
                &lt;!-- Main Content --&gt;
                &lt;div class="p-3"&gt;
                &lt;h5&gt;Main Application Content&lt;/h5&gt;
                &lt;p&gt;This content appears next to the sidebar on desktop, or below/above on mobile depending on configuration.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/BSSidebar&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        </code></pre>
                </div>
            </section>
        </div>
</template>

