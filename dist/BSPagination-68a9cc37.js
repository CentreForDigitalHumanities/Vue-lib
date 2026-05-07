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
import { defineComponent as C, computed as y, openBlock as r, createElementBlock as i, normalizeClass as f, createElementVNode as p, renderSlot as g, ref as w, onMounted as P, onUnmounted as S, watch as E, createBlock as j, Teleport as V, createCommentVNode as h, toDisplayString as B, unref as $, Fragment as I, renderList as L } from "vue";
import { Modal as T } from "bootstrap";
import { useI18n as A } from "vue-i18n";
const D = ["id", "href", "target"], M = { class: "btn-text" }, O = ["id", "type", "name", "disabled"], F = { class: "btn-text" }, N = /* @__PURE__ */ C({
  __name: "BSButton",
  props: {
    id: {},
    href: {},
    name: {},
    variant: { default: "dark" },
    size: { default: "normal" },
    outlined: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    input: { default: "button" },
    newTab: { type: Boolean, default: !1 },
    cssClasses: {}
  },
  setup(u) {
    const n = u, t = y(() => {
      const s = ["btn"];
      return n.size === "large" ? s.push("btn-lg") : n.size === "small" && s.push("btn-sm"), n.outlined ? s.push(`btn-outline-${n.variant}`) : s.push(`btn-${n.variant}`), n.loading && s.push("btn-loading"), n.active && s.push("active"), n.disabled && s.push("cursor-not-allowed"), n.cssClasses && s.push(n.cssClasses), s.join(" ");
    });
    return (s, b) => s.href ? (r(), i("a", {
      key: 0,
      id: s.id,
      href: s.href,
      class: f(t.value),
      target: s.newTab ? "_blank" : "_self"
    }, [
      p("span", M, [
        g(s.$slots, "default")
      ])
    ], 10, D)) : (r(), i("button", {
      key: 1,
      id: s.id,
      type: s.input,
      class: f(t.value),
      name: s.name,
      disabled: s.disabled
    }, [
      p("span", F, [
        g(s.$slots, "default")
      ])
    ], 10, O));
  }
});
const U = { class: "modal-content" }, q = {
  key: 0,
  class: "modal-title mw-100"
}, G = {
  key: 1,
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, H = { class: "modal-body" }, J = {
  key: 1,
  class: "modal-footer justify-content-start"
}, x = /* @__PURE__ */ C({
  __name: "BSModal",
  props: {
    id: { default: null },
    active: { type: Boolean },
    hasBackground: { type: Boolean, default: !0 },
    backgroundClickCloses: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 },
    size: { default: "default" },
    headerColor: { default: "primary" },
    headerBold: { type: Boolean, default: !0 },
    centered: { type: Boolean, default: !1 }
  },
  emits: ["shown", "hidden"],
  setup(u, { emit: n }) {
    const t = u, s = n, b = y(() => {
      const e = [];
      switch (t.centered && e.push("modal-dialog-centered"), t.size) {
        case "small":
          e.push("modal-sm modal-fullscreen-sm-down");
          break;
        case "large":
          e.push("modal-lg modal-fullscreen-lg-down");
          break;
        case "extra-large":
          e.push("modal-xl modal-fullscreen-xl-down");
          break;
        default:
          e.push("modal-fullscreen-md-down");
          break;
      }
      return e.join(" ");
    }), k = y(() => {
      const e = [];
      return t.headerColor && e.push(`text-bg-${t.headerColor}`), t.headerBold && e.push("fw-bold"), e.join(" ");
    });
    let l;
    const c = w(null);
    function a(e) {
      var o, m;
      e ? (o = l == null ? void 0 : l.value) == null || o.show() : (m = l == null ? void 0 : l.value) == null || m.hide();
    }
    return P(() => {
      if (!c.value)
        return;
      let e = t.hasBackground;
      e && !t.backgroundClickCloses && (e = "static"), l = w(
        new T(c.value, {
          backdrop: e
        })
      ), c.value.addEventListener(
        "hidden.bs.modal",
        () => s("hidden")
      ), c.value.addEventListener("shown.bs.modal", () => s("shown")), a(t.active);
    }), S(() => {
      var e;
      (e = l == null ? void 0 : l.value) == null || e.dispose();
    }), E(
      () => t.active,
      (e) => {
        a(e);
      }
    ), (e, o) => (r(), j(V, { to: "body" }, [
      p("div", {
        ref_key: "modalElement",
        ref: c,
        class: "modal fade",
        tabindex: "-1"
      }, [
        p("div", {
          class: f(["modal-dialog modal-dialog-scrollable", b.value])
        }, [
          p("div", U, [
            e.$slots.title || e.showCloseButton ? (r(), i("div", {
              key: 0,
              class: f(["modal-header", k.value])
            }, [
              e.$slots.title ? (r(), i("p", q, [
                g(e.$slots, "title")
              ])) : h("", !0),
              e.showCloseButton ? (r(), i("button", G)) : h("", !0)
            ], 2)) : h("", !0),
            p("div", H, [
              g(e.$slots, "default")
            ]),
            e.$slots.footer ? (r(), i("div", J, [
              g(e.$slots, "footer")
            ])) : h("", !0)
          ])
        ], 2)
      ], 512)
    ]));
  }
});
function ee(u) {
  return u.target.value;
}
const K = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Q = ["onClick"], R = {
  key: 1,
  class: "page-link"
}, W = /* @__PURE__ */ C({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(u, { emit: n }) {
    const t = u;
    function s(a, e, o) {
      return Math.min(Math.max(a, e), o);
    }
    const b = y(() => {
      const a = t.numOptions, e = t.currentpage - a, o = t.currentpage + a, m = Array.from({ length: t.maxPages }, (d, _) => _ + 1).filter(
        (d) => d === 1 || d === t.maxPages || d >= e && d <= o
      ), v = [];
      return m.forEach((d, _) => {
        if (_ === 0) {
          v.push(d);
          return;
        }
        d - m[_ - 1] > 1 && v.push("ellipsis"), v.push(d);
      }), v;
    }), k = n;
    function l(a) {
      a !== "ellipsis" && (a = s(a, 1, t.maxPages), k("change-page", a));
    }
    const { t: c } = A();
    return (a, e) => (r(), i("ul", K, [
      p("li", {
        class: f(["page-item page-button", a.currentpage === 1 ? "disabled" : ""])
      }, [
        a.showButtons ? (r(), i("a", {
          key: 0,
          class: "page-link",
          onClick: e[0] || (e[0] = (o) => l(a.currentpage - 1))
        }, B($(c)("previous")), 1)) : h("", !0)
      ], 2),
      (r(!0), i(I, null, L(b.value, (o) => (r(), i("li", {
        key: o,
        class: f([
          "page-item",
          (o === "ellipsis" ? "disabled page-ellipsis " : "") + (o === a.currentpage ? "active" : "")
        ])
      }, [
        o !== -42 ? (r(), i("a", {
          key: 0,
          class: "page-link",
          onClick: (m) => l(o)
        }, B(o), 9, Q)) : (r(), i("span", R, "…"))
      ], 2))), 128)),
      p("li", {
        class: f(["page-item page-button", a.currentpage >= a.maxPages ? "disabled" : ""])
      }, [
        a.showButtons ? (r(), i("a", {
          key: 0,
          class: "page-link",
          onClick: e[1] || (e[1] = (o) => l(a.currentpage + 1))
        }, B($(c)("next")), 1)) : h("", !0)
      ], 2)
    ]));
  }
});
function z(u) {
  const n = u;
  n.__i18n = n.__i18n || [], n.__i18n.push({
    locale: "",
    resource: {
      en: {
        next: (t) => {
          const { normalize: s } = t;
          return s(["Next"]);
        },
        previous: (t) => {
          const { normalize: s } = t;
          return s(["Previous"]);
        }
      },
      nl: {
        next: (t) => {
          const { normalize: s } = t;
          return s(["Volgende"]);
        },
        previous: (t) => {
          const { normalize: s } = t;
          return s(["Vorige"]);
        }
      }
    }
  });
}
typeof z == "function" && z(W);
export {
  N as _,
  x as a,
  W as b,
  ee as u
};
