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
import { defineComponent as m, computed as $, openBlock as l, createElementBlock as r, normalizeClass as S, createElementVNode as p, renderSlot as v, createCommentVNode as g, createVNode as w, unref as f, withCtx as D, ref as U, resolveComponent as le, toDisplayString as b, createBlock as _, resolveDynamicComponent as K, Fragment as B, renderList as V, createTextVNode as X, createStaticVNode as re, watch as ie, onMounted as ue } from "vue";
import { v4 as N } from "uuid";
import { FontAwesomeIcon as A } from "@fortawesome/vue-fontawesome";
import { useI18n as M } from "vue-i18n";
import { u as E } from "./useInputValue-e686f6e9.js";
const de = ["href", "target"], pe = { class: "btn-text" }, ce = ["type", "name", "disabled"], me = { class: "btn-text" }, fe = {
  key: 0,
  class: "spinner-border spinner-border-sm ms-2",
  role: "status",
  "aria-hidden": "true"
}, Y = /* @__PURE__ */ m({
  __name: "BSButton",
  props: {
    href: { default: "" },
    name: { default: "" },
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
  setup(i) {
    const e = i, n = $(() => {
      let t = "btn ";
      return e.size === "large" ? t += "btn-lg " : e.size === "small" && (t += "btn-sm "), e.outlined ? t += "btn-outline-" : t += "btn-", t += `${e.variant} `, e.active && (t += "active "), e.disabled && (t += "cursor-not-allowed "), t += ` ${e.cssClasses}`;
    });
    return (t, o) => t.href ? (l(), r("a", {
      key: 0,
      href: t.href,
      class: S(n.value),
      target: t.newTab ? "_blank" : "_self"
    }, [
      p("span", pe, [
        v(t.$slots, "default")
      ])
    ], 10, de)) : (l(), r("button", {
      key: 1,
      type: t.input,
      class: S(n.value),
      name: t.name,
      disabled: t.disabled
    }, [
      p("span", me, [
        v(t.$slots, "default")
      ]),
      t.loading ? (l(), r("span", fe)) : g("", !0)
    ], 10, ce));
  }
}), ge = { class: "card" }, he = { class: "d-flex" }, ve = {
  key: 0,
  class: "me-auto"
}, be = {
  key: 2,
  class: "card-image-top"
}, ye = { class: "card-body" }, _e = {
  key: 3,
  class: "card-footer"
}, $e = /* @__PURE__ */ m({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => n.headerClasses ? `card-header fw-bold ${n.headerClasses}` : "card-header fw-bold");
    return (o, a) => (l(), r("div", ge, [
      o.$slots.header ? (l(), r("div", {
        key: 0,
        class: S(t.value)
      }, [
        v(o.$slots, "header", {}, void 0, !0)
      ], 2)) : o.$slots.title || o.$slots.header_icon ? (l(), r("div", {
        key: 1,
        class: S(t.value)
      }, [
        p("div", he, [
          o.$slots.title ? (l(), r("div", ve, [
            v(o.$slots, "title", {}, void 0, !0)
          ])) : g("", !0),
          o.$slots.header_icon ? (l(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: a[0] || (a[0] = (s) => o.$emit("header-icon-clicked"))
          }, [
            v(o.$slots, "header_icon", {}, void 0, !0)
          ])) : g("", !0)
        ])
      ], 2)) : g("", !0),
      o.$slots.image ? (l(), r("div", be, [
        v(o.$slots, "image", {}, void 0, !0)
      ])) : g("", !0),
      p("div", ye, [
        v(o.$slots, "default", {}, void 0, !0)
      ]),
      o.$slots.footer ? (l(), r("div", _e, [
        v(o.$slots, "footer", {}, void 0, !0)
      ])) : g("", !0)
    ]));
  }
});
const ke = (i, e) => {
  const n = i.__vccOpts || i;
  for (const [t, o] of e)
    n[t] = o;
  return n;
}, At = /* @__PURE__ */ ke($e, [["__scopeId", "data-v-c52e17e8"]]), ze = { class: "dropdown" }, Se = ["aria-labelledby"], Gt = /* @__PURE__ */ m({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const e = i, n = $(() => e.id !== null ? e.id : "id_" + N().toString());
    return (t, o) => (l(), r("div", ze, [
      w(f(Y), {
        id: n.value,
        variant: t.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: D(() => [
          v(t.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      p("ul", {
        class: "dropdown-menu",
        "aria-labelledby": n.value
      }, [
        v(t.$slots, "default")
      ], 8, Se)
    ]));
  }
}), we = { class: "dropdown dropdown-select is-hoverable" }, Ce = { class: "me-2" }, Be = ["id"], Ve = { class: "dropdown-content ps-4" }, Qt = /* @__PURE__ */ m({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const n = U(N());
    return (t, o) => {
      const a = le("Button");
      return l(), r("div", we, [
        w(a, {
          class: "dropdown-toggle",
          "aria-haspopup": "true",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false"
        }, {
          default: D(() => [
            p("span", Ce, b(t.label), 1)
          ]),
          _: 1
        }),
        p("div", {
          id: n.value,
          class: "dropdown-menu",
          role: "menu"
        }, [
          p("div", Ve, [
            w(f(x), {
              options: t.options,
              "model-value": t.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": o[0] || (o[0] = (s) => t.$emit("update:modelValue", s))
            }, null, 8, ["options", "model-value"])
          ])
        ], 8, Be)
      ]);
    };
  }
});
const De = { key: 0 }, Ue = { class: "icon me-1" }, Wt = /* @__PURE__ */ m({
  __name: "BSIcon",
  props: {
    inline: { type: Boolean, default: !1 },
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    title: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String], default: !1 },
    inverse: { type: Boolean }
  },
  setup(i) {
    const e = i, n = $(() => e.inline ? "span" : "div");
    return (t, o) => (l(), _(K(n.value), null, {
      default: D(() => [
        t.$slots.default ? (l(), r("span", De, [
          p("span", Ue, [
            w(f(A), {
              border: t.border,
              "fixed-width": t.fixedWidth,
              flip: t.flip,
              icon: t.icon,
              mask: t.mask,
              "list-item": t.listItem,
              pull: t.pull,
              pulse: t.pulse,
              rotation: t.rotation,
              "swap-opacity": t.swapOpacity,
              size: t.size,
              spin: t.spin,
              transform: t.transform,
              symbol: t.symbol,
              title: t.title,
              inverse: t.inverse
            }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"])
          ]),
          p("span", null, [
            v(t.$slots, "default")
          ])
        ])) : (l(), _(f(A), {
          key: 1,
          border: t.border,
          "fixed-width": t.fixedWidth,
          flip: t.flip,
          icon: t.icon,
          mask: t.mask,
          "list-item": t.listItem,
          pull: t.pull,
          pulse: t.pulse,
          rotation: t.rotation,
          "swap-opacity": t.swapOpacity,
          size: t.size,
          spin: t.spin,
          transform: t.transform,
          symbol: t.symbol,
          title: t.title,
          inverse: t.inverse
        }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"]))
      ]),
      _: 3
    }));
  }
}), Le = ["value"], Pe = {
  key: 0,
  disabled: "",
  value: ""
}, Oe = ["value"], Ie = /* @__PURE__ */ m({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    const n = i;
    function t(o) {
      typeof n.modelValue == "string" ? e("update:modelValue", o) : e("update:modelValue", Number(o));
    }
    return (o, a) => (l(), r("div", null, [
      p("select", {
        class: S(["form-select", o.containerClasses]),
        value: o.modelValue,
        onChange: a[0] || (a[0] = (s) => t(f(E)(s)))
      }, [
        o.placeholder ? (l(), r("option", Pe, b(o.placeholder), 1)) : g("", !0),
        (l(!0), r(B, null, V(o.options, ([s, u]) => (l(), r("option", {
          key: s ?? "null",
          value: s
        }, b(u), 9, Oe))), 128))
      ], 42, Le)
    ]));
  }
}), Ee = ["id", "value", "checked", "onClick"], Ne = ["for"], x = /* @__PURE__ */ m({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => N().toString() }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    const n = i;
    function t(o) {
      const a = n.modelValue.includes(o);
      let s = [...n.modelValue];
      if (!a)
        s.push(o);
      else {
        const u = s.indexOf(o);
        u > -1 && s.splice(u, 1);
      }
      e("update:modelValue", s);
    }
    return (o, a) => (l(), r("div", null, [
      (l(!0), r(B, null, V(o.options, ([s, u]) => (l(), r("div", {
        key: s,
        class: S(["form-check", o.containerClasses])
      }, [
        p("input", {
          id: "id_" + s + "_" + o.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: s,
          checked: n.modelValue.includes(s),
          onClick: (d) => t(s)
        }, null, 8, Ee),
        p("label", {
          class: "form-check-label",
          for: "id_" + s + "_" + o.uniqueId
        }, b(u), 9, Ne)
      ], 2))), 128))
    ]));
  }
}), Me = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Te = ["onClick"], qe = {
  key: 1,
  class: "page-link"
}, T = /* @__PURE__ */ m({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(i, { emit: e }) {
    const n = i;
    function t(u, d, y) {
      return Math.min(Math.max(u, d), y);
    }
    const o = $(() => {
      const u = n.numOptions, d = n.currentpage - u, y = n.currentpage + u + 1, I = [], O = [];
      let L;
      for (let k = 1; k <= n.maxPages; k++)
        (k === 1 || k === n.maxPages || k >= d && k < y) && I.push(k);
      for (const k of I)
        L && (k - L === 2 ? O.push(L + 1) : k - L !== 1 && O.push(-42)), O.push(k), L = k;
      return O;
    });
    function a(u) {
      u = t(u, 1, n.maxPages), e("change-page", u);
    }
    const { t: s } = M();
    return (u, d) => (l(), r("ul", Me, [
      p("li", {
        class: S(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: d[0] || (d[0] = (y) => a(u.currentpage - 1))
        }, b(f(s)("previous")), 1)) : g("", !0)
      ], 2),
      (l(!0), r(B, null, V(o.value, (y) => (l(), r("li", {
        key: y,
        class: S([
          "page-item",
          (y === -42 ? "disabled page-ellipsis " : "") + (y === u.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (I) => a(y)
        }, b(y), 9, Te)) : (l(), r("span", qe, "…"))
      ], 2))), 128)),
      p("li", {
        class: S(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: d[1] || (d[1] = (y) => a(u.currentpage + 1))
        }, b(f(s)("next")), 1)) : g("", !0)
      ], 2)
    ]));
  }
});
function G(i) {
  const e = i;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en: {
        next: (n) => {
          const { normalize: t } = n;
          return t(["Next"]);
        },
        previous: (n) => {
          const { normalize: t } = n;
          return t(["Previous"]);
        }
      },
      nl: {
        next: (n) => {
          const { normalize: t } = n;
          return t(["Volgende"]);
        },
        previous: (n) => {
          const { normalize: t } = n;
          return t(["Vorige"]);
        }
      }
    }
  });
}
typeof G == "function" && G(T);
const Re = ["id", "value", "checked", "onClick"], je = ["for"], Fe = /* @__PURE__ */ m({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    return (n, t) => (l(), r("div", null, [
      (l(!0), r(B, null, V(n.options, ([o, a]) => (l(), r("div", {
        key: o,
        class: S(["form-check", n.containerClasses])
      }, [
        p("input", {
          id: "id_" + o,
          type: "radio",
          class: "form-check-input",
          value: o,
          checked: n.modelValue == o,
          onClick: (s) => e("update:model-value", o)
        }, null, 8, Re),
        p("label", {
          class: "form-check-label",
          for: "id_" + o
        }, b(a), 9, je)
      ], 2))), 128))
    ]));
  }
}), Ze = { class: "uu-sidebar" }, Ae = ["data-bs-target"], Ge = ["id"], Qe = { class: "uu-sidebar-content" }, We = /* @__PURE__ */ m({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(i) {
    const e = i, n = $(() => e.id !== null ? e.id : "id_" + N().toString().replace(/-/g, "")), t = $(() => {
      let o = "";
      return e.placement === "right" && (o += "uu-sidebar-right "), e.mobilePlacement === "bottom" && (o += "uu-sidebar-mobile-bottom "), e.stickySidebar && (o += "uu-sidebar-sticky "), e.mobileStickySidebar && (o += "uu-sidebar-mobile-sticky "), o;
    });
    return (o, a) => (l(), r("div", {
      class: S(["uu-sidebar-container", t.value])
    }, [
      p("aside", Ze, [
        p("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + n.value,
          "aria-expanded": "false"
        }, [
          v(o.$slots, "sidebar-button")
        ], 8, Ae),
        p("div", {
          id: n.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          v(o.$slots, "sidebar")
        ], 8, Ge)
      ]),
      p("section", Qe, [
        v(o.$slots, "default")
      ])
    ], 2));
  }
}), He = { class: "uu-list-filter" }, Je = { class: "uu-list-filter-label" }, Ke = {
  key: 3,
  class: "uu-list-filter-field"
}, Xe = ["value"], Ye = /* @__PURE__ */ m({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(i, { emit: e }) {
    return (n, t) => (l(), r("div", He, [
      p("div", Je, b(n.filter.label), 1),
      n.filter.type === "checkbox" ? (l(), _(f(x), {
        key: 0,
        options: n.filter.options ?? [],
        "model-value": n.value ?? [],
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      n.filter.type === "select" ? (l(), _(f(Ie), {
        key: 1,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": t[1] || (t[1] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      n.filter.type === "radio" ? (l(), _(f(Fe), {
        key: 2,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        "onUpdate:modelValue": t[2] || (t[2] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      n.filter.type === "date" ? (l(), r("div", Ke, [
        p("input", {
          type: "date",
          value: n.value,
          class: "form-control",
          onInput: t[3] || (t[3] = (o) => e("update:value", f(E)(o)))
        }, null, 40, Xe)
      ])) : g("", !0)
    ]));
  }
}), ee = /* @__PURE__ */ m({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => n.filterProps.filters), o = $(() => n.filterProps.filterValues);
    function a(s, u) {
      let d = { ...o.value };
      d[s] = u, e("update:filter-values", d);
    }
    return (s, u) => (l(!0), r(B, null, V(t.value, (d) => (l(), _(Ye, {
      key: d.field,
      filter: d,
      value: o.value[d.field],
      "onUpdate:value": (y) => a(d.field, y)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), xe = { class: "search" }, et = ["value", "placeholder"], q = /* @__PURE__ */ m({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    function n(s, u = 500) {
      let d;
      return (...y) => {
        clearTimeout(d), d = setTimeout(() => {
          s.apply(this, y);
        }, u);
      };
    }
    function t(s) {
      e("update:modelValue", s);
    }
    const o = n((s) => t(s)), { t: a } = M();
    return (s, u) => (l(), r("div", xe, [
      p("input", {
        id: "search",
        class: "form-control",
        value: s.modelValue,
        placeholder: f(a)("placeholder"),
        onInput: u[0] || (u[0] = (d) => f(o)(f(E)(d)))
      }, null, 40, et)
    ]));
  }
});
function Q(i) {
  const e = i;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en: {
        placeholder: (n) => {
          const { normalize: t } = n;
          return t(["Search"]);
        }
      },
      nl: {
        placeholder: (n) => {
          const { normalize: t } = n;
          return t(["Zoeken"]);
        }
      }
    }
  });
}
typeof Q == "function" && Q(q);
const tt = ["value"], ot = ["value"], te = /* @__PURE__ */ m({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(i, { emit: e }) {
    const n = i;
    function t(o) {
      if (typeof o == "string")
        try {
          o = Number(o);
        } catch {
          o = n.pageSizeOptions[0] ?? 10;
        }
      e("update:pageSize", o);
    }
    return (o, a) => (l(), r("select", {
      value: o.pageSize,
      class: "form-select",
      onChange: a[0] || (a[0] = (s) => t(f(E)(s)))
    }, [
      (l(!0), r(B, null, V(o.pageSizeOptions, (s) => (l(), r("option", {
        key: s,
        value: s
      }, b(s), 9, ot))), 128))
    ], 40, tt));
  }
}), nt = ["value"], at = ["value"], oe = /* @__PURE__ */ m({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(i, { emit: e }) {
    return (n, t) => (l(), r("select", {
      value: n.currentSort,
      class: "form-select",
      onChange: t[0] || (t[0] = (o) => n.$emit("update:current-sort", f(E)(o).trim()))
    }, [
      (l(!0), r(B, null, V(n.sortOptions, ({ field: o, label: a }) => (l(), r("option", {
        key: o,
        value: o
      }, b(a), 9, at))), 128))
    ], 40, nt));
  }
}), st = { key: 0 }, R = /* @__PURE__ */ m({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(i) {
    const { t: e } = M();
    return (n, t) => (l(), r("div", null, [
      n.searchQuery ? (l(), r("span", st, b(f(e)("search", { query: n.searchQuery })), 1)) : g("", !0),
      X(" " + b(f(e)("showing", {
        pageNum: n.pageNum,
        totalNum: Intl.NumberFormat().format(n.totalNum)
      })), 1)
    ]));
  }
});
function W(i) {
  const e = i;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (n) => {
          const { normalize: t, interpolate: o, named: a } = n;
          return t(["Search result: ", o(a("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: o, named: a } = n;
          return t(["showing ", o(a("pageNum")), " of ", o(a("totalNum")), " results"]);
        }
      },
      nl: {
        search: (n) => {
          const { normalize: t, interpolate: o, named: a } = n;
          return t(["Zoekresultaat: ", o(a("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: o, named: a } = n;
          return t([o(a("pageNum")), " van ", o(a("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof W == "function" && W(R);
function ne(i) {
  const { filters: e, filterValues: n } = i;
  return !e || !n ? null : { filters: e, filterValues: n };
}
const lt = { class: "uu-container" }, rt = { class: "uu-list" }, it = { class: "uu-list-controls" }, ut = {
  key: 1,
  class: "uu-list-order-control"
}, dt = { class: "uu-list-page-size-control" }, pt = {
  key: 0,
  class: "uu-list-filters"
}, ct = { class: "uu-list-content" }, mt = /* @__PURE__ */ m({
  __name: "Default",
  props: {
    data: {},
    isLoading: { type: Boolean },
    totalData: {},
    currentPage: {},
    searchEnabled: { type: Boolean },
    search: {},
    sortEnabled: { type: Boolean },
    currentSort: {},
    sortOptions: {},
    pageSize: {},
    pageSizeOptions: {},
    filtersEnabled: { type: Boolean },
    filters: {},
    filterValues: {}
  },
  emits: ["update:current-page", "update:search", "update:current-sort", "update:page-size", "update:filter-values"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => Math.ceil(n.totalData / n.pageSize)), o = $(() => ne(n));
    return (a, s) => {
      var u;
      return l(), r("div", lt, [
        p("div", rt, [
          p("div", it, [
            a.searchEnabled ? (l(), _(q, {
              key: 0,
              "model-value": a.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": s[0] || (s[0] = (d) => a.$emit("update:search", d))
            }, null, 8, ["model-value"])) : g("", !0),
            w(R, {
              "search-query": a.search,
              "page-num": ((u = a.data) == null ? void 0 : u.length) ?? 0,
              "total-num": a.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            a.sortEnabled ? (l(), r("div", ut, [
              w(oe, {
                "current-sort": a.currentSort,
                "sort-options": a.sortOptions,
                "onUpdate:currentSort": s[1] || (s[1] = (d) => e("update:current-sort", d))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : g("", !0),
            p("div", dt, [
              w(te, {
                "page-size-options": a.pageSizeOptions,
                "page-size": a.pageSize,
                "onUpdate:pageSize": s[2] || (s[2] = (d) => e("update:page-size", d))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          a.filtersEnabled && o.value ? (l(), r("div", pt, [
            v(a.$slots, "filters-top", {
              data: a.data,
              isLoading: a.isLoading
            }),
            w(ee, {
              "filter-props": o.value,
              "onUpdate:filterValues": s[3] || (s[3] = (d) => a.$emit("update:filter-values", d))
            }, null, 8, ["filter-props"]),
            v(a.$slots, "filters-bottom", {
              data: a.data,
              isLoading: a.isLoading
            })
          ])) : g("", !0),
          p("div", ct, [
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            p("div", null, [
              a.data ? (l(), _(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: a.currentPage,
                onChangePage: s[4] || (s[4] = (d) => a.$emit("update:current-page", d))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ft = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, gt = {
  key: 0,
  class: "ms-auto"
}, ae = /* @__PURE__ */ m({
  __name: "Sidebar",
  props: {
    data: {},
    isLoading: { type: Boolean },
    totalData: {},
    currentPage: {},
    searchEnabled: { type: Boolean },
    search: {},
    sortEnabled: { type: Boolean },
    currentSort: {},
    sortOptions: {},
    pageSize: {},
    pageSizeOptions: {},
    filtersEnabled: { type: Boolean },
    filters: {},
    filterValues: {}
  },
  emits: ["update:current-page", "update:search", "update:current-sort", "update:page-size", "update:filter-values"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => Math.ceil(n.totalData / n.pageSize)), o = $(() => ne(n));
    return (a, s) => (l(), _(f(We), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        a.searchEnabled ? (l(), _(q, {
          key: 0,
          "model-value": a.search,
          "onUpdate:modelValue": s[0] || (s[0] = (u) => a.$emit("update:search", u))
        }, null, 8, ["model-value"])) : g("", !0),
        v(a.$slots, "filters-top", {
          data: a.data,
          isLoading: a.isLoading
        }),
        o.value ? (l(), _(ee, {
          key: 1,
          "filter-props": o.value,
          "onUpdate:filterValues": s[1] || (s[1] = (u) => a.$emit("update:filter-values", u))
        }, null, 8, ["filter-props"])) : g("", !0),
        v(a.$slots, "filters-bottom", {
          data: a.data,
          isLoading: a.isLoading
        })
      ]),
      default: D(() => {
        var u;
        return [
          p("div", null, [
            p("div", ft, [
              w(R, {
                "search-query": a.search,
                "page-num": ((u = a.data) == null ? void 0 : u.length) ?? 0,
                "total-num": a.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              a.sortEnabled ? (l(), r("div", gt, [
                w(oe, {
                  "current-sort": a.currentSort,
                  "sort-options": a.sortOptions,
                  "onUpdate:currentSort": s[2] || (s[2] = (d) => e("update:current-sort", d))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : g("", !0),
              p("div", null, [
                w(te, {
                  "page-size-options": a.pageSizeOptions,
                  "page-size": a.pageSize,
                  "onUpdate:pageSize": s[3] || (s[3] = (d) => e("update:page-size", d))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            p("div", null, [
              a.data ? (l(), _(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: a.currentPage,
                onChangePage: s[4] || (s[4] = (d) => a.$emit("update:current-page", d))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function H(i) {
  const e = i;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (n) => {
          const { normalize: t } = n;
          return t(["Loading...."]);
        },
        no_data: (n) => {
          const { normalize: t } = n;
          return t(["No items to display"]);
        }
      },
      nl: {
        loading: (n) => {
          const { normalize: t } = n;
          return t(["Gegevens worden laden..."]);
        },
        no_data: (n) => {
          const { normalize: t } = n;
          return t(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof H == "function" && H(ae);
const ht = /* @__PURE__ */ m({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (e, n) => (l(), r("pre", null, b(e.data), 1));
  }
}), vt = /* @__PURE__ */ m({
  __name: "UUList",
  props: {
    container: { default: "default" },
    data: {},
    isLoading: { type: Boolean, default: !1 },
    totalData: {},
    currentPage: {},
    searchEnabled: { type: Boolean, default: !1 },
    search: { default: "" },
    sortEnabled: { type: Boolean, default: !1 },
    currentSort: { default: "" },
    sortOptions: { default: () => [] },
    pageSize: { default: 10 },
    pageSizeOptions: { default: () => [10, 25, 50] },
    filtersEnabled: { type: Boolean, default: !1 },
    filters: {},
    filterValues: {}
  },
  emits: ["update:current-page", "update:search", "update:current-sort", "update:page-size", "update:filter-values"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => {
      switch (n.container) {
        case "sidebar":
          return ae;
        default:
          return mt;
      }
    });
    return (o, a) => (l(), _(K(t.value), {
      "is-loading": o.isLoading,
      data: o.data,
      "total-data": o.totalData,
      "search-enabled": o.searchEnabled,
      search: o.search,
      "sort-enabled": o.sortEnabled,
      "current-sort": o.currentSort,
      "current-page": o.currentPage,
      "page-size-options": o.pageSizeOptions,
      "sort-options": o.sortOptions,
      "page-size": o.pageSize,
      "filters-enabled": o.filtersEnabled,
      filters: o.filters,
      "filter-values": o.filterValues,
      "onUpdate:search": a[0] || (a[0] = (s) => e("update:search", s)),
      "onUpdate:currentSort": a[1] || (a[1] = (s) => e("update:current-sort", s)),
      "onUpdate:pageSize": a[2] || (a[2] = (s) => e("update:page-size", s)),
      "onUpdate:currentPage": a[3] || (a[3] = (s) => e("update:current-page", s)),
      "onUpdate:filterValues": a[4] || (a[4] = (s) => e("update:filter-values", s))
    }, {
      data: D(({ data: s, isLoading: u }) => [
        v(o.$slots, "data", {
          data: s,
          isLoading: u
        }, () => [
          w(ht, {
            data: s,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": D(({ data: s, isLoading: u }) => [
        v(o.$slots, "filters-top", {
          data: s,
          isLoading: u
        })
      ]),
      "filters-bottom": D(({ data: s, isLoading: u }) => [
        v(o.$slots, "filters-bottom", {
          data: s,
          isLoading: u
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), bt = /* @__PURE__ */ m({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => (l(), r("span", {
      class: S(e.column.classes)
    }, b(e.item[e.column.field]), 3));
  }
}), yt = /* @__PURE__ */ m({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const e = i, n = $(() => {
      let t = null;
      try {
        t = new Date(e.item[e.column.field]);
      } catch (s) {
        return console.error(s), "";
      }
      let o;
      if (e.column.language !== void 0 && e.column.language !== null && (o = e.column.language), typeof e.column.format == "string") {
        let s = null;
        switch (e.column.format) {
          case "date":
            s = {
              dateStyle: "medium"
            };
            break;
          case "time":
            s = {
              timeStyle: "short"
            };
            break;
          case "datetime":
            s = {
              dateStyle: "medium",
              timeStyle: "short"
            };
            break;
        }
        return new Intl.DateTimeFormat(o, s).format(t);
      }
      return typeof e.column.format == "object" && e.column.format !== null ? new Intl.DateTimeFormat(
        o,
        e.column.format
      ).format(t) : new Intl.DateTimeFormat(o).format(t);
    });
    return (t, o) => (l(), r("span", {
      class: S(t.column.classes)
    }, b(n.value), 3));
  }
}), _t = { key: 0 }, $t = /* @__PURE__ */ m({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.item[e.column.field] ? (l(), r("span", _t, [
      w(f(Y), {
        hrefLink: e.item[e.column.field].link,
        "css-classes": e.item[e.column.field].classes,
        "new-tab": e.item[e.column.field].new_tab,
        size: e.column.size,
        variant: e.column.variant
      }, {
        default: D(() => [
          X(b(e.item[e.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["hrefLink", "css-classes", "new-tab", "size", "variant"])
    ])) : g("", !0);
  }
}), kt = { key: 0 }, zt = ["href", "target"], St = /* @__PURE__ */ m({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.item[e.column.field] ? (l(), r("span", kt, [
      p("a", {
        href: e.item[e.column.field].link,
        class: S(e.column.classes),
        target: e.item[e.column.field].new_tab ? "_blank" : "_self"
      }, b(e.item[e.column.field].text), 11, zt)
    ])) : g("", !0);
  }
}), wt = ["innerHTML"], Ct = /* @__PURE__ */ m({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => (l(), r("span", {
      innerHTML: e.item[e.column.field]
    }, null, 8, wt));
  }
}), Bt = {
  key: 0,
  class: "dropdown"
}, Vt = /* @__PURE__ */ re('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), Dt = { class: "dropdown-menu" }, Ut = {
  key: 0,
  class: "dropdown-divider"
}, Lt = ["href", "target"], Pt = /* @__PURE__ */ m({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const e = i, n = $(() => e.item[e.column.field].entries());
    return (t, o) => n.value ? (l(), r("div", Bt, [
      Vt,
      p("ul", Dt, [
        (l(!0), r(B, null, V(n.value, ([a, s]) => (l(), r("li", { key: a }, [
          s.divider ? (l(), r("hr", Ut)) : (l(), r("a", {
            key: 1,
            href: s.link,
            class: S(["dropdown-item", s.classes ?? ""]),
            target: s.new_tab ? "_blank" : "_self"
          }, b(s.text), 11, Lt))
        ]))), 128))
      ])
    ])) : g("", !0);
  }
}), Ot = /* @__PURE__ */ m({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.column.type == "string" ? (l(), _(bt, {
      key: 0,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "date" ? (l(), _(yt, {
      key: 1,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "button" ? (l(), _($t, {
      key: 2,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "link" ? (l(), _(St, {
      key: 3,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "html" ? (l(), _(Ct, {
      key: 4,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "actions" ? (l(), _(Pt, {
      key: 5,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : g("", !0);
  }
}), It = /* @__PURE__ */ m({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(i) {
    return (e, n) => (l(), r("tr", null, [
      (l(!0), r(B, null, V(e.columns, (t) => (l(), r("td", {
        key: t.field,
        class: "align-middle"
      }, [
        w(Ot, {
          column: t,
          item: e.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Et = {
  key: 0,
  class: "alert alert-info w-100"
}, Nt = { key: 0 }, Mt = { key: 1 }, Tt = ["colspan"], se = /* @__PURE__ */ m({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const e = i, n = $(() => e.data === null || e.data === void 0 || e.data.length === 0), { t } = M();
    return (o, a) => o.isLoading && n.value ? (l(), r("div", Et, b(f(t)("loading")), 1)) : (l(), r("table", {
      key: 1,
      class: S(["table", o.isLoading ? "loading" : ""])
    }, [
      p("thead", null, [
        p("tr", null, [
          (l(!0), r(B, null, V(o.columns, (s) => (l(), r("th", {
            key: s.field
          }, b(s.label), 1))), 128))
        ])
      ]),
      n.value ? (l(), r("tbody", Mt, [
        p("tr", null, [
          p("td", {
            colspan: o.columns.length
          }, b(f(t)("no_data")), 9, Tt)
        ])
      ])) : (l(), r("tbody", Nt, [
        (l(!0), r(B, null, V(o.data, (s) => (l(), _(It, {
          key: s.id,
          item: s,
          columns: o.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function J(i) {
  const e = i;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (n) => {
          const { normalize: t } = n;
          return t(["Loading...."]);
        },
        no_data: (n) => {
          const { normalize: t } = n;
          return t(["No items to display"]);
        }
      },
      nl: {
        loading: (n) => {
          const { normalize: t } = n;
          return t(["Gegevens worden laden..."]);
        },
        no_data: (n) => {
          const { normalize: t } = n;
          return t(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof J == "function" && J(se);
const Ht = /* @__PURE__ */ m({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const e = i, n = U(e.config.pageSize), t = U(1), o = U(""), a = U("id"), s = U(!0);
    function u() {
      var h;
      let c = {};
      return (h = e.config.filters) == null || h.forEach((z) => {
        var P;
        if (z.initial) {
          c[z.field] = z.initial;
          return;
        }
        switch (z.type) {
          case "date":
            c[z.field] = null;
            break;
          case "checkbox":
            c[z.field] = [];
            break;
          case "radio":
            ((P = z.options) == null ? void 0 : P.length) != 0 && z.options && (c[z.field] = z.options[0][0]);
            break;
        }
      }), c;
    }
    const d = U(u());
    let y = U(null);
    const I = $(() => {
      let c = [];
      c.push("page_size=" + encodeURIComponent(n.value));
      for (const [h, z] of Object.entries(d.value))
        z != null && (typeof z == "object" ? z.forEach(
          (P) => c.push(h + "=" + encodeURIComponent(P))
        ) : c.push(h + "=" + encodeURIComponent(z)));
      return o.value && c.push("search=" + encodeURIComponent(o.value)), c.push("ordering=" + encodeURIComponent(a.value)), t.value = 1, c;
    }), O = $(() => {
      let c = I.value, h = "page=" + encodeURIComponent(t.value);
      return c.length !== 0 && (h = "&" + h), "?" + c.join("&") + h;
    }), L = $(() => {
      let c = new URL(window.location.protocol + "//" + window.location.host);
      return c.pathname = e.config.dataUri, c.search = O.value, console.log(c.toString()), c.toString();
    });
    ie(L, () => {
      j();
    });
    const k = U(null);
    function j() {
      k.value && k.value.abort(), k.value = new AbortController(), s.value = !0, fetch(L.value, { signal: k.value.signal }).then((c) => {
        c.json().then((h) => {
          y.value = h, s.value = !1, h.ordering && (a.value = h.ordering), k.value = null;
        });
      }).catch((c) => {
        console.log(c);
      });
    }
    return ue(() => {
      j();
    }), (c, h) => {
      var z, P, F;
      return l(), _(vt, {
        "is-loading": s.value,
        data: ((z = f(y)) == null ? void 0 : z.results) ?? void 0,
        "total-data": ((P = f(y)) == null ? void 0 : P.count) ?? 0,
        "search-enabled": c.config.searchEnabled,
        search: o.value,
        "sort-enabled": c.config.sortEnabled,
        "current-sort": a.value,
        "page-size-options": c.config.pageSizeOptions,
        "sort-options": c.config.sortOptions ?? [],
        "page-size": ((F = f(y)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": t.value,
        "filters-enabled": c.config.filtersEnabled,
        filters: c.config.filters ?? [],
        "filter-values": d.value,
        container: c.config.container,
        "onUpdate:search": h[0] || (h[0] = (C) => o.value = C),
        "onUpdate:currentSort": h[1] || (h[1] = (C) => a.value = C),
        "onUpdate:pageSize": h[2] || (h[2] = (C) => n.value = C),
        "onUpdate:currentPage": h[3] || (h[3] = (C) => t.value = C),
        "onUpdate:filterValues": h[4] || (h[4] = (C) => d.value = C)
      }, {
        data: D(({ data: C, isLoading: Z }) => [
          v(c.$slots, "data", {
            data: C,
            isLoading: Z
          }, () => [
            w(se, {
              data: C,
              columns: c.config.columns,
              "is-loading": Z
            }, null, 8, ["data", "columns", "is-loading"])
          ])
        ]),
        _: 3
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as BSButton,
  At as BSCard,
  Gt as BSDropdown,
  Qt as BSDropdownMultiSelect,
  Wt as BSIcon,
  x as BSMultiSelect,
  T as BSPagination,
  Fe as BSRadioSelect,
  Ie as BSSelect,
  We as BSSidebar,
  Ht as DSCList,
  vt as UUList,
  Jt as UUListTypes
};
