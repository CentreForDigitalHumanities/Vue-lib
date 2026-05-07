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
import { a as v, _ as m } from "./BSPagination-68a9cc37.js";
import { u as M } from "./BSPagination-68a9cc37.js";
import { defineComponent as T, ref as C, openBlock as N, createBlock as k, withCtx as s, createElementVNode as d, toDisplayString as c, createVNode as i, unref as p, createTextVNode as b, renderSlot as _, getCurrentInstance as y, render as x } from "vue";
import "uuid";
import "@fortawesome/vue-fontawesome";
import "bootstrap";
import "vue-i18n";
function Y(e) {
  const o = V(e);
  return o === null ? 0 : o;
}
function V(e) {
  const o = e.target.valueAsNumber;
  return isNaN(o) ? null : o;
}
const $ = { class: "modal-title" }, g = { class: "btn-group w-100" }, h = /* @__PURE__ */ T({
  __name: "BSConfirmDialog",
  props: {
    headerText: {},
    confirmText: {},
    abortText: {},
    callback: { type: Function }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const u = e, t = C(!0);
    function l() {
      t.value = !1;
    }
    function a() {
      const n = u.callback();
      n !== void 0 && typeof n == "object" && "then" in n ? n.finally(l) : l();
    }
    return (n, r) => (N(), k(v, {
      active: t.value,
      "show-close-button": !1,
      "background-click-closes": !1,
      centered: !0,
      onHidden: r[2] || (r[2] = (f) => n.$emit("close"))
    }, {
      title: s(() => [
        d("h5", $, c(n.headerText || "Are you sure?"), 1)
      ]),
      footer: s(() => [
        d("div", g, [
          i(p(m), {
            variant: "primary",
            onClick: r[0] || (r[0] = (f) => a())
          }, {
            default: s(() => [
              b(c(n.confirmText || "Yes"), 1)
            ]),
            _: 1
          }),
          i(p(m), {
            variant: "secondary",
            onClick: r[1] || (r[1] = (f) => l())
          }, {
            default: s(() => [
              b(c(n.abortText || "No"), 1)
            ]),
            _: 1
          })
        ])
      ]),
      default: s(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["active"]));
  }
});
function A(e, o, u) {
  var r;
  let t = document.createElement("div");
  const l = (r = y()) == null ? void 0 : r.appContext.app;
  let a = i(e, o, u);
  return l && l._context && (a.appContext = l._context), x(a, t), {
    vNode: a,
    destroy: () => {
      t && x(null, t), t == null || t.remove(), t = null, a = null;
    },
    mountPoint: t
  };
}
function j(e) {
  const o = () => {
    u();
  }, { destroy: u } = A(
    h,
    {
      callback: e.callback,
      onClose: o,
      headerText: e.headerText || "Please confirm",
      confirmText: e.confirmText || "Yes",
      abortText: e.abortText || "No"
    },
    { default: () => e.text }
  );
}
export {
  j as useConfirm,
  M as useInputValue,
  Y as useInputValueAsNumber,
  V as useInputValueAsNumberOrNull,
  A as useMountComponent
};
