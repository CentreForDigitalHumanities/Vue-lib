<script lang="ts" setup>
import { ref } from "vue";
import { BSPagination } from "cdh-vue-lib";

const currentPageBasic = ref(3);
const totalPagesBasic = ref(10);
function handlePageChangeBasic(newPage: number) {
    currentPageBasic.value = newPage;
}

const currentPageNoButtons = ref(2);
const totalPagesNoButtons = ref(5);
function handlePageChangeNoButtons(newPage: number) {
    currentPageNoButtons.value = newPage;
}

const currentPageCustomOptions = ref(5);
const totalPagesCustomOptions = ref(15);
function handlePageChangeCustomOptions(newPage: number) {
    currentPageCustomOptions.value = newPage;
}
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSPagination Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSPagination</code> component provides a responsive
                pagination control, allowing users to navigate through pages of
                content. It dynamically displays page numbers, ellipsis for
                skipped pages, and optional previous/next buttons. The component
                is styled with Bootstrap classes.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <ul>
                <li>
                    <strong>maxPages</strong>: <code>number</code> (required)
                    <p>The total number of pages available.</p>
                </li>
                <li>
                    <strong>currentpage</strong>: <code>number</code> (required)
                    <p>The currently active page number.</p>
                </li>
                <li>
                    <strong>showButtons</strong>:
                    <code>boolean</code> (optional, default: <code>true</code>)
                    <p>
                        Whether to display the "Previous" and "Next" navigation
                        buttons.
                    </p>
                </li>
                <li>
                    <strong>numOptions</strong>: <code>number</code> (optional,
                    default: <code>2</code>)
                    <p>
                        The number of page links to show on each side of the
                        current page before truncating with an ellipsis.
                    </p>
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <strong>change-page</strong>:
                    <code>(value: number) => void</code>
                    <p>
                        Emitted when a page number, previous button, or next
                        button is clicked. The payload is the new page number.
                    </p>
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <p>The BSPagination component does not have any slots.</p>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic Usage</h4>
                <p>
                    A standard pagination control with 10 total pages, currently
                    on page 3.
                </p>
                <div class="mb-3 p-3 border rounded">
                    <BSPagination
                        :max-pages="totalPagesBasic"
                        :currentpage="currentPageBasic"
                        @change-page="handlePageChangeBasic"
                    />
                    <p class="mt-2 mb-0">
                        Current Page: {{ currentPageBasic }}
                    </p>
                </div>
                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSPagination } from "cdh-vue-lib";

const currentPage = ref(3);
const totalPages = ref(10);

function handlePageChange(newPage: number) {
    currentPage.value = newPage;
}
&lt;/script&gt;

&lt;template&gt;
    &lt;BSPagination
        :max-pages="totalPages"
        :currentpage="currentPage"
        @change-page="handlePageChange"
    /&gt;
    &lt;p&gt;Current Page: {{ currentPage }}&lt;/p&gt;
&lt;/template&gt;</code>
                </pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Without Previous/Next Buttons</h4>
                <p>
                    Demonstrates the pagination control with
                    <code>showButtons</code> set to <code>false</code>.
                </p>
                <div class="mb-3 p-3 border rounded">
                    <BSPagination
                        :max-pages="totalPagesNoButtons"
                        :currentpage="currentPageNoButtons"
                        :show-buttons="false"
                        @change-page="handlePageChangeNoButtons"
                    />
                    <p class="mt-2 mb-0">
                        Current Page: {{ currentPageNoButtons }}
                    </p>
                </div>
                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSPagination } from "cdh-vue-lib";

const currentPage = ref(2);
const totalPages = ref(5);

function handlePageChange(newPage: number) {
    currentPage.value = newPage;
}
&lt;/script&gt;

&lt;template&gt;
    &lt;BSPagination
        :max-pages="totalPages"
        :currentpage="currentPage"
        :show-buttons="false"
        @change-page="handlePageChange"
    /&gt;
    &lt;p&gt;Current Page: {{ currentPage }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Custom Number of Page Options</h4>
                <p>
                    Demonstrates the pagination control with
                    <code>numOptions</code> set to <code>3</code>, showing more
                    page numbers around the current page.
                </p>
                <div class="mb-3 p-3 border rounded">
                    <BSPagination
                        :max-pages="totalPagesCustomOptions"
                        :currentpage="currentPageCustomOptions"
                        :num-options="3"
                        @change-page="handlePageChangeCustomOptions"
                    />
                    <p class="mt-2 mb-0">
                        Current Page: {{ currentPageCustomOptions }}
                    </p>
                </div>
                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSPagination } from "cdh-vue-lib";

const currentPage = ref(5);
const totalPages = ref(15);

function handlePageChange(newPage: number) {
    currentPage.value = newPage;
}
&lt;/script&gt;

&lt;template&gt;
    &lt;BSPagination
        :max-pages="totalPages"
        :currentpage="currentPage"
        :num-options="3"
        @change-page="handlePageChange"
    /&gt;
    &lt;p&gt;Current Page: {{ currentPage }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
