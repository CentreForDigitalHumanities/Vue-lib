import { defineComponent as b, computed as g, openBlock as a, createElementBlock as i, normalizeClass as h, createElementVNode as d, renderSlot as p, createCommentVNode as v, createVNode as k, unref as P, withCtx as U, resolveComponent as S, toDisplayString as w, createBlock as I, resolveDynamicComponent as M, Fragment as B, renderList as V, ref as O } from "vue";
const R = ["href", "target"], W = { class: "btn-text" }, E = ["type", "name", "disabled"], N = { class: "btn-text" }, T = /* @__PURE__ */ b({
  __name: "Button",
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
  setup(s) {
    const t = s, l = g(() => {
      let e = "btn ";
      return t.size === "large" ? e += "btn-lg " : t.size === "small" && (e += "btn-sm "), t.outlined ? e += "btn-outline-" : e += "btn-", e += `${t.variant} `, t.loading && (e += "btn-loading "), t.active && (e += "active "), e;
    });
    return (e, n) => e.href ? (a(), i("a", {
      key: 0,
      href: e.href,
      class: h(l.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      d("span", W, [
        p(e.$slots, "default")
      ])
    ], 10, R)) : (a(), i("button", {
      key: 1,
      type: e.input,
      class: h(l.value),
      name: e.name,
      disabled: e.disabled
    }, [
      d("span", N, [
        p(e.$slots, "default")
      ])
    ], 10, E));
  }
}), j = { class: "card" }, L = { class: "d-flex" }, A = {
  key: 0,
  class: "me-auto"
}, F = {
  key: 2,
  class: "card-image-top"
}, H = { class: "card-body" }, q = {
  key: 3,
  class: "card-footer"
}, G = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(s, { emit: t }) {
    const l = s, e = g(() => typeof l.headerClasses < "u" ? "card-header fw-bold " + l.headerClasses : "card-header fw-bold");
    return (n, r) => (a(), i("div", j, [
      n.$slots.header ? (a(), i("div", {
        key: 0,
        class: h(e.value)
      }, [
        p(n.$slots, "header", {}, void 0, !0)
      ], 2)) : n.$slots.title || n.$slots.header_icon ? (a(), i("div", {
        key: 1,
        class: h(e.value)
      }, [
        d("div", L, [
          n.$slots.title ? (a(), i("div", A, [
            p(n.$slots, "title", {}, void 0, !0)
          ])) : v("", !0),
          n.$slots.header_icon ? (a(), i("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: r[0] || (r[0] = (o) => n.$emit("header-icon-clicked"))
          }, [
            p(n.$slots, "header_icon", {}, void 0, !0)
          ])) : v("", !0)
        ])
      ], 2)) : v("", !0),
      n.$slots.image ? (a(), i("div", F, [
        p(n.$slots, "image", {}, void 0, !0)
      ])) : v("", !0),
      d("div", H, [
        p(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.footer ? (a(), i("div", q, [
        p(n.$slots, "footer", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
});
const J = (s, t) => {
  const l = s.__vccOpts || s;
  for (const [e, n] of t)
    l[e] = n;
  return l;
}, ye = /* @__PURE__ */ J(G, [["__scopeId", "data-v-87de3da6"]]);
let $;
const K = new Uint8Array(16);
function Q() {
  if (!$ && ($ = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return $(K);
}
const c = [];
for (let s = 0; s < 256; ++s)
  c.push((s + 256).toString(16).slice(1));
function X(s, t = 0) {
  return (c[s[t + 0]] + c[s[t + 1]] + c[s[t + 2]] + c[s[t + 3]] + "-" + c[s[t + 4]] + c[s[t + 5]] + "-" + c[s[t + 6]] + c[s[t + 7]] + "-" + c[s[t + 8]] + c[s[t + 9]] + "-" + c[s[t + 10]] + c[s[t + 11]] + c[s[t + 12]] + c[s[t + 13]] + c[s[t + 14]] + c[s[t + 15]]).toLowerCase();
}
const Y = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), D = {
  randomUUID: Y
};
function z(s, t, l) {
  if (D.randomUUID && !t && !s)
    return D.randomUUID();
  s = s || {};
  const e = s.random || (s.rng || Q)();
  if (e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, t) {
    l = l || 0;
    for (let n = 0; n < 16; ++n)
      t[l + n] = e[n];
    return t;
  }
  return X(e);
}
const Z = { class: "dropdown" }, x = ["aria-labelledby"], _e = /* @__PURE__ */ b({
  __name: "Dropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(s) {
    const t = s, l = g(() => t.id !== null ? t.id : "id_" + z().toString());
    return (e, n) => (a(), i("div", Z, [
      k(P(T), {
        id: l.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: U(() => [
          p(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      d("ul", {
        class: "dropdown-menu",
        "aria-labelledby": l.value
      }, [
        p(e.$slots, "default")
      ], 8, x)
    ]));
  }
}), ee = { class: "dropdown dropdown-select is-hoverable" }, te = { class: "dropdown-trigger" }, se = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu4"
}, ne = {
  class: "dropdown-menu",
  role: "menu"
}, le = { class: "dropdown-content" }, $e = /* @__PURE__ */ b({
  __name: "DropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    return (l, e) => {
      const n = S("Icon"), r = S("MultiSelect");
      return a(), i("div", ee, [
        d("div", te, [
          d("button", se, [
            d("span", null, w(l.label), 1),
            k(n, { icon: "angle-down" })
          ])
        ]),
        d("div", ne, [
          d("div", le, [
            k(r, {
              options: l.options,
              "model-value": l.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": e[0] || (e[0] = (o) => l.$emit("update:modelValue", o))
            }, null, 8, ["options", "model-value"])
          ])
        ])
      ]);
    };
  }
});
const oe = { key: 0 }, ae = { class: "icon me-1" }, ke = /* @__PURE__ */ b({
  __name: "Icon",
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
  setup(s) {
    const t = s, l = g(() => t.inline ? "span" : "div");
    return (e, n) => {
      const r = S("font-awesome-icon");
      return a(), I(M(l.value), null, {
        default: U(() => [
          e.$slots.default ? (a(), i("span", oe, [
            d("span", ae, [
              k(r, {
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
            d("span", null, [
              p(e.$slots, "default")
            ])
          ])) : (a(), I(r, {
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
}), ie = ["id", "value", "checked", "onClick"], de = ["for"], we = /* @__PURE__ */ b({
  __name: "MultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    const l = s;
    function e(n) {
      const r = l.modelValue.includes(n);
      let o = [...l.modelValue];
      if (!r)
        o.push(n);
      else {
        const u = o.indexOf(n);
        u > -1 && o.splice(u, 1);
      }
      t("update:modelValue", o);
    }
    return (n, r) => (a(), i("div", null, [
      (a(!0), i(B, null, V(n.options, (o) => (a(), i("div", {
        key: o[0],
        class: h(["form-check", n.containerClasses])
      }, [
        d("input", {
          id: "id_" + o[0],
          type: "checkbox",
          class: "form-check-input",
          value: o[0],
          checked: l.modelValue.includes(o[0]),
          onClick: (u) => e(o[0])
        }, null, 8, ie),
        d("label", {
          class: "form-check-label",
          for: "id_" + o[0]
        }, w(o[1]), 9, de)
      ], 2))), 128))
    ]));
  }
}), re = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, ue = ["onClick"], ce = {
  key: 1,
  class: "page-link"
}, Ce = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(s, { emit: t }) {
    const l = s;
    function e(o, u, m) {
      return Math.min(Math.max(o, u), m);
    }
    const n = g(() => {
      const o = l.numOptions, u = l.currentpage - o, m = l.currentpage + o + 1, C = [], _ = [];
      let y;
      for (let f = 1; f <= l.maxPages; f++)
        (f === 1 || f === l.maxPages || f >= u && f < m) && C.push(f);
      for (const f of C)
        y && (f - y === 2 ? _.push(y + 1) : f - y !== 1 && _.push(-42)), _.push(f), y = f;
      return _;
    });
    function r(o) {
      o = e(o, 1, l.maxPages), t("change-page", o);
    }
    return (o, u) => (a(), i("ul", re, [
      d("li", {
        class: h(["page-item page-button", o.currentpage === 1 ? "disabled" : ""])
      }, [
        o.showButtons ? (a(), i("a", {
          key: 0,
          class: "page-link",
          onClick: u[0] || (u[0] = (m) => r(o.currentpage - 1))
        }, " Vorige ")) : v("", !0)
      ], 2),
      (a(!0), i(B, null, V(n.value, (m) => (a(), i("li", {
        key: m,
        class: h([
          "page-item",
          (m === -42 ? "disabled page-ellipsis " : "") + (m === o.currentpage ? "active" : "")
        ])
      }, [
        m !== -42 ? (a(), i("a", {
          key: 0,
          class: "page-link",
          onClick: (C) => r(m)
        }, w(m), 9, ue)) : (a(), i("span", ce, "…"))
      ], 2))), 128)),
      d("li", {
        class: h(["page-item page-button", o.currentpage >= o.maxPages ? "disabled" : ""])
      }, [
        o.showButtons ? (a(), i("a", {
          key: 0,
          class: "page-link",
          onClick: u[1] || (u[1] = (m) => r(o.currentpage + 1))
        }, " Volgende ")) : v("", !0)
      ], 2)
    ]));
  }
}), pe = ["id", "value", "checked", "onClick"], me = ["for"], Se = /* @__PURE__ */ b({
  __name: "RadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    const e = O(s.modelValue);
    function n(r) {
      e.value = r, t("update:modelValue", e.value);
    }
    return (r, o) => (a(), i("div", null, [
      (a(!0), i(B, null, V(r.options, (u) => (a(), i("div", {
        key: u[0],
        class: h(["form-check", r.containerClasses])
      }, [
        d("input", {
          id: "id_" + u[0],
          type: "radio",
          class: "form-check-input",
          value: u[0],
          checked: e.value == u[0],
          onClick: (m) => n(u[0])
        }, null, 8, pe),
        d("label", {
          class: "form-check-label",
          for: "id_" + u[0]
        }, w(u[1]), 9, me)
      ], 2))), 128))
    ]));
  }
}), fe = { class: "uu-sidebar" }, he = ["data-bs-target"], be = ["id"], ve = { class: "uu-sidebar-content" }, Be = /* @__PURE__ */ b({
  __name: "Sidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s, l = g(() => t.id !== null ? t.id : "id_" + z().toString().replace(/-/g, "")), e = g(() => {
      let n = "";
      return t.placement === "right" && (n += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (n += "uu-sidebar-mobile-bottom "), t.stickySidebar && (n += "uu-sidebar-sticky "), t.mobileStickySidebar && (n += "uu-sidebar-mobile-sticky "), n;
    });
    return (n, r) => (a(), i("div", {
      class: h(["uu-sidebar-container", e.value])
    }, [
      d("aside", fe, [
        d("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + l.value,
          "aria-expanded": "false"
        }, [
          p(n.$slots, "sidebar-button")
        ], 8, he),
        d("div", {
          id: l.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          p(n.$slots, "sidebar")
        ], 8, be)
      ]),
      d("div", ve, [
        p(n.$slots, "default")
      ])
    ], 2));
  }
});
function Ve(s) {
  return s.target.value;
}
export {
  T as Button,
  ye as Card,
  _e as Dropdown,
  $e as DropdownMultiSelect,
  ke as Icon,
  we as MultiSelect,
  Ce as Pagination,
  Se as RadioSelect,
  Be as Sidebar,
  Ve as useInputValue
};
