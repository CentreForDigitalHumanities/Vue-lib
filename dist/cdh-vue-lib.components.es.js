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
import { defineComponent as b, computed as g, openBlock as l, createElementBlock as n, normalizeClass as m, createElementVNode as i, renderSlot as u, createCommentVNode as h, createVNode as y, unref as z, withCtx as I, resolveComponent as B, toDisplayString as $, createBlock as V, resolveDynamicComponent as P, Fragment as S, renderList as w, createTextVNode as M } from "vue";
import { v4 as C } from "uuid";
const D = ["href", "target"], O = { class: "btn-text" }, N = ["type", "name", "disabled"], W = { class: "btn-text" }, q = /* @__PURE__ */ b({
  __name: "BSButton",
  props: {
    id: { default: null },
    href: { default: void 0 },
    name: { default: void 0 },
    variant: { default: "dark" },
    size: { default: "normal" },
    outlined: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    input: { default: "button" },
    newTab: { type: Boolean, default: !1 },
    cssClasses: { default: "" }
  },
  setup(r) {
    const a = r, s = g(() => {
      let e = "btn ";
      return a.size === "large" ? e += "btn-lg " : a.size === "small" && (e += "btn-sm "), a.outlined ? e += "btn-outline-" : e += "btn-", e += `${a.variant} `, a.loading && (e += "btn-loading "), a.active && (e += "active "), e;
    });
    return (e, t) => e.href ? (l(), n("a", {
      key: 0,
      href: e.href,
      class: m(s.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      i("span", O, [
        u(e.$slots, "default")
      ])
    ], 10, D)) : (l(), n("button", {
      key: 1,
      type: e.input,
      class: m(s.value),
      name: e.name,
      disabled: e.disabled
    }, [
      i("span", W, [
        u(e.$slots, "default")
      ])
    ], 10, N));
  }
}), T = { class: "card" }, E = { class: "d-flex" }, R = {
  key: 0,
  class: "me-auto"
}, j = {
  key: 2,
  class: "card-image-top"
}, F = { class: "card-body" }, K = {
  key: 3,
  class: "card-footer"
}, L = /* @__PURE__ */ b({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(r, { emit: a }) {
    const s = r, e = g(() => typeof s.headerClasses < "u" ? "card-header fw-bold " + s.headerClasses : "card-header fw-bold");
    return (t, d) => (l(), n("div", T, [
      t.$slots.header ? (l(), n("div", {
        key: 0,
        class: m(e.value)
      }, [
        u(t.$slots, "header", {}, void 0, !0)
      ], 2)) : t.$slots.title || t.$slots.header_icon ? (l(), n("div", {
        key: 1,
        class: m(e.value)
      }, [
        i("div", E, [
          t.$slots.title ? (l(), n("div", R, [
            u(t.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          t.$slots.header_icon ? (l(), n("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: d[0] || (d[0] = (o) => t.$emit("header-icon-clicked"))
          }, [
            u(t.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      t.$slots.image ? (l(), n("div", j, [
        u(t.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      i("div", F, [
        u(t.$slots, "default", {}, void 0, !0)
      ]),
      t.$slots.footer ? (l(), n("div", K, [
        u(t.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const U = (r, a) => {
  const s = r.__vccOpts || r;
  for (const [e, t] of a)
    s[e] = t;
  return s;
}, fe = /* @__PURE__ */ U(L, [["__scopeId", "data-v-06938a02"]]), A = { class: "dropdown" }, G = ["aria-labelledby"], me = /* @__PURE__ */ b({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(r) {
    const a = r, s = g(() => a.id !== null ? a.id : "id_" + C().toString());
    return (e, t) => (l(), n("div", A, [
      y(z(q), {
        id: s.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: I(() => [
          u(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      i("ul", {
        class: "dropdown-menu",
        "aria-labelledby": s.value
      }, [
        u(e.$slots, "default")
      ], 8, G)
    ]));
  }
}), H = { class: "dropdown dropdown-select is-hoverable" }, J = { class: "dropdown-trigger" }, Q = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu4"
}, X = {
  class: "dropdown-menu",
  role: "menu"
}, Y = { class: "dropdown-content" }, be = /* @__PURE__ */ b({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: a }) {
    return (s, e) => {
      const t = B("Icon"), d = B("MultiSelect");
      return l(), n("div", H, [
        i("div", J, [
          i("button", Q, [
            i("span", null, $(s.label), 1),
            y(t, { icon: "angle-down" })
          ])
        ]),
        i("div", X, [
          i("div", Y, [
            y(d, {
              options: s.options,
              "model-value": s.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": e[0] || (e[0] = (o) => s.$emit("update:modelValue", o))
            }, null, 8, ["options", "model-value"])
          ])
        ])
      ]);
    };
  }
});
const Z = { key: 0 }, x = { class: "icon me-1" }, he = /* @__PURE__ */ b({
  __name: "BSIcon",
  props: {
    inline: { type: Boolean, default: !1 },
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: { type: [Boolean, String], default: !1 },
    icon: {},
    mask: { default: null },
    listItem: { type: Boolean },
    pull: { default: null },
    pulse: { type: Boolean },
    rotation: { default: null },
    swapOpacity: { type: Boolean },
    size: { default: null },
    spin: { type: Boolean },
    transform: { default: null },
    symbol: { type: [Boolean, String], default: !1 },
    title: { default: null },
    inverse: { type: Boolean }
  },
  setup(r) {
    const a = r, s = g(() => a.inline ? "span" : "div");
    return (e, t) => {
      const d = B("font-awesome-icon");
      return l(), V(P(s.value), null, {
        default: I(() => [
          e.$slots.default ? (l(), n("span", Z, [
            i("span", x, [
              y(d, {
                border: e.border,
                "fixed-width": e.fixedWidth,
                flip: e.flip,
                icon: e.icon,
                mask: e.mask,
                "list-item": e.listItem,
                pull: e.pull,
                pulse: e.pulse,
                rotation: e.rotation,
                "swap-opacity": e.swapOpacity,
                size: e.size,
                spin: e.spin,
                transform: e.transform,
                symbol: e.symbol,
                title: e.title,
                inverse: e.inverse
              }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"])
            ]),
            i("span", null, [
              u(e.$slots, "default")
            ])
          ])) : (l(), V(d, {
            key: 1,
            border: e.border,
            "fixed-width": e.fixedWidth,
            flip: e.flip,
            icon: e.icon,
            mask: e.mask,
            "list-item": e.listItem,
            pull: e.pull,
            pulse: e.pulse,
            rotation: e.rotation,
            "swap-opacity": e.swapOpacity,
            size: e.size,
            spin: e.spin,
            transform: e.transform,
            symbol: e.symbol,
            title: e.title,
            inverse: e.inverse
          }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"]))
        ]),
        _: 3
      });
    };
  }
}), ee = ["id", "value", "checked", "onClick"], te = ["for"], ge = /* @__PURE__ */ b({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: C().toString() }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(r, { emit: a }) {
    const s = r;
    function e(t) {
      const d = s.modelValue.includes(t);
      let o = [...s.modelValue];
      if (!d)
        o.push(t);
      else {
        const p = o.indexOf(t);
        p > -1 && o.splice(p, 1);
      }
      a("update:modelValue", o);
    }
    return (t, d) => (l(), n("div", null, [
      (l(!0), n(S, null, w(t.options, ([o, p]) => (l(), n("div", {
        key: o,
        class: m(["form-check", t.containerClasses])
      }, [
        i("input", {
          id: "id_" + o + "_" + t.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: o,
          checked: s.modelValue.includes(o),
          onClick: (c) => e(o)
        }, null, 8, ee),
        i("label", {
          class: "form-check-label",
          for: +"_" + t.uniqueId
        }, $(p), 9, te),
        M("Kippig ")
      ], 2))), 128))
    ]));
  }
}), se = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, oe = ["onClick"], ae = {
  key: 1,
  class: "page-link"
}, ve = /* @__PURE__ */ b({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(r, { emit: a }) {
    const s = r;
    function e(o, p, c) {
      return Math.min(Math.max(o, p), c);
    }
    const t = g(() => {
      const o = s.numOptions, p = s.currentpage - o, c = s.currentpage + o + 1, k = [], _ = [];
      let v;
      for (let f = 1; f <= s.maxPages; f++)
        (f === 1 || f === s.maxPages || f >= p && f < c) && k.push(f);
      for (const f of k)
        v && (f - v === 2 ? _.push(v + 1) : f - v !== 1 && _.push(-42)), _.push(f), v = f;
      return _;
    });
    function d(o) {
      o = e(o, 1, s.maxPages), a("change-page", o);
    }
    return (o, p) => (l(), n("ul", se, [
      i("li", {
        class: m(["page-item page-button", o.currentpage === 1 ? "disabled" : ""])
      }, [
        o.showButtons ? (l(), n("a", {
          key: 0,
          class: "page-link",
          onClick: p[0] || (p[0] = (c) => d(o.currentpage - 1))
        }, " Vorige ")) : h("", !0)
      ], 2),
      (l(!0), n(S, null, w(t.value, (c) => (l(), n("li", {
        key: c,
        class: m([
          "page-item",
          (c === -42 ? "disabled page-ellipsis " : "") + (c === o.currentpage ? "active" : "")
        ])
      }, [
        c !== -42 ? (l(), n("a", {
          key: 0,
          class: "page-link",
          onClick: (k) => d(c)
        }, $(c), 9, oe)) : (l(), n("span", ae, "…"))
      ], 2))), 128)),
      i("li", {
        class: m(["page-item page-button", o.currentpage >= o.maxPages ? "disabled" : ""])
      }, [
        o.showButtons ? (l(), n("a", {
          key: 0,
          class: "page-link",
          onClick: p[1] || (p[1] = (c) => d(o.currentpage + 1))
        }, " Volgende ")) : h("", !0)
      ], 2)
    ]));
  }
}), le = ["id", "value", "checked", "onClick"], ne = ["for"], _e = /* @__PURE__ */ b({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(r, { emit: a }) {
    return (s, e) => (l(), n("div", null, [
      (l(!0), n(S, null, w(s.options, ([t, d]) => (l(), n("div", {
        key: t,
        class: m(["form-check", s.containerClasses])
      }, [
        i("input", {
          id: "id_" + t,
          type: "radio",
          class: "form-check-input",
          value: t,
          checked: s.modelValue == t,
          onClick: (o) => a("update:model-value", t)
        }, null, 8, le),
        i("label", {
          class: "form-check-label",
          for: "id_" + t
        }, $(d), 9, ne)
      ], 2))), 128))
    ]));
  }
}), ie = { class: "uu-sidebar" }, re = ["data-bs-target"], de = ["id"], ue = { class: "uu-sidebar-content" }, ye = /* @__PURE__ */ b({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(r) {
    const a = r, s = g(() => a.id !== null ? a.id : "id_" + C().toString().replace(/-/g, "")), e = g(() => {
      let t = "";
      return a.placement === "right" && (t += "uu-sidebar-right "), a.mobilePlacement === "bottom" && (t += "uu-sidebar-mobile-bottom "), a.stickySidebar && (t += "uu-sidebar-sticky "), a.mobileStickySidebar && (t += "uu-sidebar-mobile-sticky "), t;
    });
    return (t, d) => (l(), n("div", {
      class: m(["uu-sidebar-container", e.value])
    }, [
      i("aside", ie, [
        i("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + s.value,
          "aria-expanded": "false"
        }, [
          u(t.$slots, "sidebar-button")
        ], 8, re),
        i("div", {
          id: s.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          u(t.$slots, "sidebar")
        ], 8, de)
      ]),
      i("div", ue, [
        u(t.$slots, "default")
      ])
    ], 2));
  }
});
export {
  q as BSButton,
  fe as BSCard,
  me as BSDropdown,
  be as BSDropdownMultiSelect,
  he as BSIcon,
  ge as BSMultiSelect,
  ve as BSPagination,
  _e as BSRadioSelect,
  ye as BSSidebar
};
