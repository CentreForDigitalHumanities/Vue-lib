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
import { defineComponent as b, computed as v, openBlock as o, createElementBlock as n, normalizeClass as m, createElementVNode as i, renderSlot as c, createCommentVNode as h, createVNode as y, unref as I, withCtx as V, resolveComponent as B, toDisplayString as $, createBlock as C, resolveDynamicComponent as P, Fragment as S, renderList as w, ref as M } from "vue";
import { v4 as z } from "uuid";
const D = ["href", "target"], O = { class: "btn-text" }, W = ["type", "name", "disabled"], N = { class: "btn-text" }, E = /* @__PURE__ */ b({
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
  setup(u) {
    const l = u, a = v(() => {
      let e = "btn ";
      return l.size === "large" ? e += "btn-lg " : l.size === "small" && (e += "btn-sm "), l.outlined ? e += "btn-outline-" : e += "btn-", e += `${l.variant} `, l.loading && (e += "btn-loading "), l.active && (e += "active "), e;
    });
    return (e, s) => e.href ? (o(), n("a", {
      key: 0,
      href: e.href,
      class: m(a.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      i("span", O, [
        c(e.$slots, "default")
      ])
    ], 10, D)) : (o(), n("button", {
      key: 1,
      type: e.input,
      class: m(a.value),
      name: e.name,
      disabled: e.disabled
    }, [
      i("span", N, [
        c(e.$slots, "default")
      ])
    ], 10, W));
  }
}), R = { class: "card" }, T = { class: "d-flex" }, j = {
  key: 0,
  class: "me-auto"
}, F = {
  key: 2,
  class: "card-image-top"
}, L = { class: "card-body" }, U = {
  key: 3,
  class: "card-footer"
}, q = /* @__PURE__ */ b({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(u, { emit: l }) {
    const a = u, e = v(() => typeof a.headerClasses < "u" ? "card-header fw-bold " + a.headerClasses : "card-header fw-bold");
    return (s, r) => (o(), n("div", R, [
      s.$slots.header ? (o(), n("div", {
        key: 0,
        class: m(e.value)
      }, [
        c(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (o(), n("div", {
        key: 1,
        class: m(e.value)
      }, [
        i("div", T, [
          s.$slots.title ? (o(), n("div", j, [
            c(s.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          s.$slots.header_icon ? (o(), n("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: r[0] || (r[0] = (t) => s.$emit("header-icon-clicked"))
          }, [
            c(s.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      s.$slots.image ? (o(), n("div", F, [
        c(s.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      i("div", L, [
        c(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (o(), n("div", U, [
        c(s.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const A = (u, l) => {
  const a = u.__vccOpts || u;
  for (const [e, s] of l)
    a[e] = s;
  return a;
}, fe = /* @__PURE__ */ A(q, [["__scopeId", "data-v-06938a02"]]), G = { class: "dropdown" }, H = ["aria-labelledby"], me = /* @__PURE__ */ b({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(u) {
    const l = u, a = v(() => l.id !== null ? l.id : "id_" + z().toString());
    return (e, s) => (o(), n("div", G, [
      y(I(E), {
        id: a.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: V(() => [
          c(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      i("ul", {
        class: "dropdown-menu",
        "aria-labelledby": a.value
      }, [
        c(e.$slots, "default")
      ], 8, H)
    ]));
  }
}), J = { class: "dropdown dropdown-select is-hoverable" }, K = { class: "dropdown-trigger" }, Q = {
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
  setup(u, { emit: l }) {
    return (a, e) => {
      const s = B("Icon"), r = B("MultiSelect");
      return o(), n("div", J, [
        i("div", K, [
          i("button", Q, [
            i("span", null, $(a.label), 1),
            y(s, { icon: "angle-down" })
          ])
        ]),
        i("div", X, [
          i("div", Y, [
            y(r, {
              options: a.options,
              "model-value": a.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": e[0] || (e[0] = (t) => a.$emit("update:modelValue", t))
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
  setup(u) {
    const l = u, a = v(() => l.inline ? "span" : "div");
    return (e, s) => {
      const r = B("font-awesome-icon");
      return o(), C(P(a.value), null, {
        default: V(() => [
          e.$slots.default ? (o(), n("span", Z, [
            i("span", x, [
              y(r, {
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
              c(e.$slots, "default")
            ])
          ])) : (o(), C(r, {
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
}), ee = ["id", "value", "checked", "onClick"], se = ["for"], ve = /* @__PURE__ */ b({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: l }) {
    const a = u;
    function e(s) {
      const r = a.modelValue.includes(s);
      let t = [...a.modelValue];
      if (!r)
        t.push(s);
      else {
        const d = t.indexOf(s);
        d > -1 && t.splice(d, 1);
      }
      l("update:modelValue", t);
    }
    return (s, r) => (o(), n("div", null, [
      (o(!0), n(S, null, w(s.options, (t) => (o(), n("div", {
        key: t[0],
        class: m(["form-check", s.containerClasses])
      }, [
        i("input", {
          id: "id_" + t[0],
          type: "checkbox",
          class: "form-check-input",
          value: t[0],
          checked: a.modelValue.includes(t[0]),
          onClick: (d) => e(t[0])
        }, null, 8, ee),
        i("label", {
          class: "form-check-label",
          for: "id_" + t[0]
        }, $(t[1]), 9, se)
      ], 2))), 128))
    ]));
  }
}), te = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, ae = ["onClick"], le = {
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
  setup(u, { emit: l }) {
    const a = u;
    function e(t, d, p) {
      return Math.min(Math.max(t, d), p);
    }
    const s = v(() => {
      const t = a.numOptions, d = a.currentpage - t, p = a.currentpage + t + 1, k = [], _ = [];
      let g;
      for (let f = 1; f <= a.maxPages; f++)
        (f === 1 || f === a.maxPages || f >= d && f < p) && k.push(f);
      for (const f of k)
        g && (f - g === 2 ? _.push(g + 1) : f - g !== 1 && _.push(-42)), _.push(f), g = f;
      return _;
    });
    function r(t) {
      t = e(t, 1, a.maxPages), l("change-page", t);
    }
    return (t, d) => (o(), n("ul", te, [
      i("li", {
        class: m(["page-item page-button", t.currentpage === 1 ? "disabled" : ""])
      }, [
        t.showButtons ? (o(), n("a", {
          key: 0,
          class: "page-link",
          onClick: d[0] || (d[0] = (p) => r(t.currentpage - 1))
        }, " Vorige ")) : h("", !0)
      ], 2),
      (o(!0), n(S, null, w(s.value, (p) => (o(), n("li", {
        key: p,
        class: m([
          "page-item",
          (p === -42 ? "disabled page-ellipsis " : "") + (p === t.currentpage ? "active" : "")
        ])
      }, [
        p !== -42 ? (o(), n("a", {
          key: 0,
          class: "page-link",
          onClick: (k) => r(p)
        }, $(p), 9, ae)) : (o(), n("span", le, "…"))
      ], 2))), 128)),
      i("li", {
        class: m(["page-item page-button", t.currentpage >= t.maxPages ? "disabled" : ""])
      }, [
        t.showButtons ? (o(), n("a", {
          key: 0,
          class: "page-link",
          onClick: d[1] || (d[1] = (p) => r(t.currentpage + 1))
        }, " Volgende ")) : h("", !0)
      ], 2)
    ]));
  }
}), oe = ["id", "value", "checked", "onClick"], ne = ["for"], _e = /* @__PURE__ */ b({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: l }) {
    const e = M(u.modelValue);
    function s(r) {
      e.value = r, l("update:modelValue", e.value);
    }
    return (r, t) => (o(), n("div", null, [
      (o(!0), n(S, null, w(r.options, (d) => (o(), n("div", {
        key: d[0],
        class: m(["form-check", r.containerClasses])
      }, [
        i("input", {
          id: "id_" + d[0],
          type: "radio",
          class: "form-check-input",
          value: d[0],
          checked: e.value == d[0],
          onClick: (p) => s(d[0])
        }, null, 8, oe),
        i("label", {
          class: "form-check-label",
          for: "id_" + d[0]
        }, $(d[1]), 9, ne)
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
  setup(u) {
    const l = u, a = v(() => l.id !== null ? l.id : "id_" + z().toString().replace(/-/g, "")), e = v(() => {
      let s = "";
      return l.placement === "right" && (s += "uu-sidebar-right "), l.mobilePlacement === "bottom" && (s += "uu-sidebar-mobile-bottom "), l.stickySidebar && (s += "uu-sidebar-sticky "), l.mobileStickySidebar && (s += "uu-sidebar-mobile-sticky "), s;
    });
    return (s, r) => (o(), n("div", {
      class: m(["uu-sidebar-container", e.value])
    }, [
      i("aside", ie, [
        i("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + a.value,
          "aria-expanded": "false"
        }, [
          c(s.$slots, "sidebar-button")
        ], 8, re),
        i("div", {
          id: a.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          c(s.$slots, "sidebar")
        ], 8, de)
      ]),
      i("div", ue, [
        c(s.$slots, "default")
      ])
    ], 2));
  }
});
export {
  E as BSButton,
  fe as BSCard,
  me as BSDropdown,
  be as BSDropdownMultiSelect,
  he as BSIcon,
  ve as BSMultiSelect,
  ge as BSPagination,
  _e as BSRadioSelect,
  ye as BSSidebar
};
