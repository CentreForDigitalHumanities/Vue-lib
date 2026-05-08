/*!
* Copyright 2022, 2023 Utrecht University
*
* Licensed under the EUPL, Version 1.2 only
* You may not use this work except in compliance with the
Licence.
* A copy of the Licence is provided in the 'LICENCE' file in this project.
* You may also obtain a copy of the Licence at:
*
* https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
*
* Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the Licence for the specific language governing
permissions and limitations under the Licence.
*/
import { a as x, _ as d } from "./BSPagination-68a9cc37.js";
import { u as M } from "./BSPagination-68a9cc37.js";
import { defineComponent as C, ref as N, openBlock as T, createBlock as k, withCtx as u, createElementVNode as f, toDisplayString as c, createVNode as i, unref as p, createTextVNode as b, renderSlot as y, getCurrentInstance as V, render as v } from "vue";
import "uuid";
import "@fortawesome/vue-fontawesome";
import "bootstrap";
import "vue-i18n";
function P(e) {
  const n = _(e);
  return n === null ? 0 : n;
}
function _(e) {
  const n = e.target.valueAsNumber;
  return isNaN(n) ? null : n;
}
const $ = { class: "modal-title" }, g = { class: "btn-group w-100" }, h = /* @__PURE__ */ C({
  __name: "BSConfirmDialog",
  props: {
    headerText: {},
    confirmText: {},
    abortText: {},
    callback: { type: Function }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const a = e, t = N(!0);
    function l() {
      t.value = !1;
    }
    function s() {
      const o = a.callback();
      o instanceof Promise ? o.finally(l) : l();
    }
    return (o, r) => (T(), k(x, {
      active: t.value,
      "show-close-button": !1,
      "background-click-closes": !1,
      centered: !0,
      onHidden: r[2] || (r[2] = (m) => o.$emit("close"))
    }, {
      title: u(() => [
        f("h5", $, c(o.headerText || "Are you sure?"), 1)
      ]),
      footer: u(() => [
        f("div", g, [
          i(p(d), {
            variant: "primary",
            onClick: r[0] || (r[0] = (m) => s())
          }, {
            default: u(() => [
              b(c(o.confirmText || "Yes"), 1)
            ]),
            _: 1
          }),
          i(p(d), {
            variant: "secondary",
            onClick: r[1] || (r[1] = (m) => l())
          }, {
            default: u(() => [
              b(c(o.abortText || "No"), 1)
            ]),
            _: 1
          })
        ])
      ]),
      default: u(() => [
        y(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["active"]));
  }
});
function A(e, n, a) {
  var r;
  if (!document)
    return {
      vNode: null,
      destroy: () => {
      },
      mountPoint: null
    };
  let t = document.createElement("div"), l = i(e, n, a);
  const s = (r = V()) == null ? void 0 : r.appContext;
  return l.appContext = s ?? null, document.body.appendChild(t), v(l, t), {
    vNode: l,
    destroy: () => {
      t && v(null, t), t == null || t.remove(), t = null, l = null;
    },
    mountPoint: t
  };
}
function Y(e) {
  const n = () => {
    a();
  }, { destroy: a } = A(
    h,
    {
      callback: e.callback,
      onClose: n,
      headerText: e.headerText ?? "Please confirm",
      confirmText: e.confirmText ?? "Yes",
      abortText: e.abortText ?? "No"
    },
    { default: () => e.text }
  );
}
export {
  Y as useConfirm,
  M as useInputValue,
  P as useInputValueAsNumber,
  _ as useInputValueAsNumberOrNull,
  A as useMountComponent
};
