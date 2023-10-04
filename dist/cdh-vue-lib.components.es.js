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
import { defineComponent as b, computed as g, openBlock as l, createElementBlock as n, normalizeClass as m, createElementVNode as i, renderSlot as u, createCommentVNode as h, createVNode as y, unref as z, withCtx as I, resolveComponent as B, toDisplayString as $, createBlock as V, resolveDynamicComponent as P, Fragment as S, renderList as w } from "vue";
import { v4 as C } from "uuid";
const M = ["href", "target"], D = { class: "btn-text" }, O = ["type", "name", "disabled"], W = { class: "btn-text" }, q = /* @__PURE__ */ b({
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
    const a = r, t = g(() => {
      let e = "btn ";
      return a.size === "large" ? e += "btn-lg " : a.size === "small" && (e += "btn-sm "), a.outlined ? e += "btn-outline-" : e += "btn-", e += `${a.variant} `, a.loading && (e += "btn-loading "), a.active && (e += "active "), e;
    });
    return (e, s) => e.href ? (l(), n("a", {
      key: 0,
      href: e.href,
      class: m(t.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      i("span", D, [
        u(e.$slots, "default")
      ])
    ], 10, M)) : (l(), n("button", {
      key: 1,
      type: e.input,
      class: m(t.value),
      name: e.name,
      disabled: e.disabled
    }, [
      i("span", W, [
        u(e.$slots, "default")
      ])
    ], 10, O));
  }
}), N = { class: "card" }, E = { class: "d-flex" }, R = {
  key: 0,
  class: "me-auto"
}, T = {
  key: 2,
  class: "card-image-top"
}, j = { class: "card-body" }, F = {
  key: 3,
  class: "card-footer"
}, L = /* @__PURE__ */ b({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(r, { emit: a }) {
    const t = r, e = g(() => typeof t.headerClasses < "u" ? "card-header fw-bold " + t.headerClasses : "card-header fw-bold");
    return (s, d) => (l(), n("div", N, [
      s.$slots.header ? (l(), n("div", {
        key: 0,
        class: m(e.value)
      }, [
        u(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (l(), n("div", {
        key: 1,
        class: m(e.value)
      }, [
        i("div", E, [
          s.$slots.title ? (l(), n("div", R, [
            u(s.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          s.$slots.header_icon ? (l(), n("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: d[0] || (d[0] = (o) => s.$emit("header-icon-clicked"))
          }, [
            u(s.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      s.$slots.image ? (l(), n("div", T, [
        u(s.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      i("div", j, [
        u(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (l(), n("div", F, [
        u(s.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const U = (r, a) => {
  const t = r.__vccOpts || r;
  for (const [e, s] of a)
    t[e] = s;
  return t;
}, ce = /* @__PURE__ */ U(L, [["__scopeId", "data-v-06938a02"]]), A = { class: "dropdown" }, G = ["aria-labelledby"], fe = /* @__PURE__ */ b({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(r) {
    const a = r, t = g(() => a.id !== null ? a.id : "id_" + C().toString());
    return (e, s) => (l(), n("div", A, [
      y(z(q), {
        id: t.value,
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
        "aria-labelledby": t.value
      }, [
        u(e.$slots, "default")
      ], 8, G)
    ]));
  }
}), H = { class: "dropdown dropdown-select is-hoverable" }, J = { class: "dropdown-trigger" }, K = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu4"
}, Q = {
  class: "dropdown-menu",
  role: "menu"
}, X = { class: "dropdown-content" }, me = /* @__PURE__ */ b({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: a }) {
    return (t, e) => {
      const s = B("Icon"), d = B("MultiSelect");
      return l(), n("div", H, [
        i("div", J, [
          i("button", K, [
            i("span", null, $(t.label), 1),
            y(s, { icon: "angle-down" })
          ])
        ]),
        i("div", Q, [
          i("div", X, [
            y(d, {
              options: t.options,
              "model-value": t.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": e[0] || (e[0] = (o) => t.$emit("update:modelValue", o))
            }, null, 8, ["options", "model-value"])
          ])
        ])
      ]);
    };
  }
});
const Y = { key: 0 }, Z = { class: "icon me-1" }, be = /* @__PURE__ */ b({
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
    const a = r, t = g(() => a.inline ? "span" : "div");
    return (e, s) => {
      const d = B("font-awesome-icon");
      return l(), V(P(t.value), null, {
        default: I(() => [
          e.$slots.default ? (l(), n("span", Y, [
            i("span", Z, [
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
}), x = ["id", "value", "checked", "onClick"], ee = ["for"], he = /* @__PURE__ */ b({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: C().toString() }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(r, { emit: a }) {
    const t = r;
    function e(s) {
      const d = t.modelValue.includes(s);
      let o = [...t.modelValue];
      if (!d)
        o.push(s);
      else {
        const p = o.indexOf(s);
        p > -1 && o.splice(p, 1);
      }
      a("update:modelValue", o);
    }
    return (s, d) => (l(), n("div", null, [
      (l(!0), n(S, null, w(s.options, ([o, p]) => (l(), n("div", {
        key: o,
        class: m(["form-check", s.containerClasses])
      }, [
        i("input", {
          id: "id_" + o + "_" + s.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: o,
          checked: t.modelValue.includes(o),
          onClick: (c) => e(o)
        }, null, 8, x),
        i("label", {
          class: "form-check-label",
          for: +"_" + s.uniqueId
        }, $(p), 9, ee)
      ], 2))), 128))
    ]));
  }
}), se = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, te = ["onClick"], oe = {
  key: 1,
  class: "page-link"
}, ge = /* @__PURE__ */ b({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(r, { emit: a }) {
    const t = r;
    function e(o, p, c) {
      return Math.min(Math.max(o, p), c);
    }
    const s = g(() => {
      const o = t.numOptions, p = t.currentpage - o, c = t.currentpage + o + 1, k = [], _ = [];
      let v;
      for (let f = 1; f <= t.maxPages; f++)
        (f === 1 || f === t.maxPages || f >= p && f < c) && k.push(f);
      for (const f of k)
        v && (f - v === 2 ? _.push(v + 1) : f - v !== 1 && _.push(-42)), _.push(f), v = f;
      return _;
    });
    function d(o) {
      o = e(o, 1, t.maxPages), a("change-page", o);
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
      (l(!0), n(S, null, w(s.value, (c) => (l(), n("li", {
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
        }, $(c), 9, te)) : (l(), n("span", oe, "…"))
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
}), ae = ["id", "value", "checked", "onClick"], le = ["for"], ve = /* @__PURE__ */ b({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(r, { emit: a }) {
    return (t, e) => (l(), n("div", null, [
      (l(!0), n(S, null, w(t.options, ([s, d]) => (l(), n("div", {
        key: s,
        class: m(["form-check", t.containerClasses])
      }, [
        i("input", {
          id: "id_" + s,
          type: "radio",
          class: "form-check-input",
          value: s,
          checked: t.modelValue == s,
          onClick: (o) => a("update:model-value", s)
        }, null, 8, ae),
        i("label", {
          class: "form-check-label",
          for: "id_" + s
        }, $(d), 9, le)
      ], 2))), 128))
    ]));
  }
}), ne = { class: "uu-sidebar" }, ie = ["data-bs-target"], re = ["id"], de = { class: "uu-sidebar-content" }, _e = /* @__PURE__ */ b({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(r) {
    const a = r, t = g(() => a.id !== null ? a.id : "id_" + C().toString().replace(/-/g, "")), e = g(() => {
      let s = "";
      return a.placement === "right" && (s += "uu-sidebar-right "), a.mobilePlacement === "bottom" && (s += "uu-sidebar-mobile-bottom "), a.stickySidebar && (s += "uu-sidebar-sticky "), a.mobileStickySidebar && (s += "uu-sidebar-mobile-sticky "), s;
    });
    return (s, d) => (l(), n("div", {
      class: m(["uu-sidebar-container", e.value])
    }, [
      i("aside", ne, [
        i("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + t.value,
          "aria-expanded": "false"
        }, [
          u(s.$slots, "sidebar-button")
        ], 8, ie),
        i("div", {
          id: t.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          u(s.$slots, "sidebar")
        ], 8, re)
      ]),
      i("div", de, [
        u(s.$slots, "default")
      ])
    ], 2));
  }
});
export {
  q as BSButton,
  ce as BSCard,
  fe as BSDropdown,
  me as BSDropdownMultiSelect,
  be as BSIcon,
  he as BSMultiSelect,
  ge as BSPagination,
  ve as BSRadioSelect,
  _e as BSSidebar
};
