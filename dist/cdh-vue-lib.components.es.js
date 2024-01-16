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
import { defineComponent as m, computed as S, openBlock as s, createElementBlock as r, normalizeClass as z, createElementVNode as d, renderSlot as h, createCommentVNode as c, createVNode as w, unref as f, withCtx as D, ref as U, resolveComponent as J, toDisplayString as b, createBlock as v, resolveDynamicComponent as K, Fragment as C, renderList as V, createTextVNode as X, createStaticVNode as se, watch as le, onMounted as re } from "vue";
import { v4 as N } from "uuid";
import { u as E } from "./useInputValue-e686f6e9.js";
import { useI18n as M } from "vue-i18n";
const ie = ["href", "target"], ue = { class: "btn-text" }, de = ["type", "name", "disabled"], pe = { class: "btn-text" }, Y = /* @__PURE__ */ m({
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
  setup(i) {
    const o = i, n = S(() => {
      let t = "btn ";
      return o.size === "large" ? t += "btn-lg " : o.size === "small" && (t += "btn-sm "), o.outlined ? t += "btn-outline-" : t += "btn-", t += `${o.variant} `, o.loading && (t += "btn-loading "), o.active && (t += "active "), o.disabled && (t += "cursor-not-allowed "), t;
    });
    return (t, e) => t.href ? (s(), r("a", {
      key: 0,
      href: t.href,
      class: z(n.value),
      target: t.newTab ? "_blank" : "_self"
    }, [
      d("span", ue, [
        h(t.$slots, "default")
      ])
    ], 10, ie)) : (s(), r("button", {
      key: 1,
      type: t.input,
      class: z(n.value),
      name: t.name,
      disabled: t.disabled
    }, [
      d("span", pe, [
        h(t.$slots, "default")
      ])
    ], 10, de));
  }
}), me = { class: "card" }, ce = { class: "d-flex" }, fe = {
  key: 0,
  class: "me-auto"
}, ge = {
  key: 2,
  class: "card-image-top"
}, he = { class: "card-body" }, ve = {
  key: 3,
  class: "card-footer"
}, be = /* @__PURE__ */ m({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(i, { emit: o }) {
    const n = i, t = S(() => typeof n.headerClasses < "u" ? "card-header fw-bold " + n.headerClasses : "card-header fw-bold");
    return (e, l) => (s(), r("div", me, [
      e.$slots.header ? (s(), r("div", {
        key: 0,
        class: z(t.value)
      }, [
        h(e.$slots, "header", {}, void 0, !0)
      ], 2)) : e.$slots.title || e.$slots.header_icon ? (s(), r("div", {
        key: 1,
        class: z(t.value)
      }, [
        d("div", ce, [
          e.$slots.title ? (s(), r("div", fe, [
            h(e.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          e.$slots.header_icon ? (s(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: l[0] || (l[0] = (a) => e.$emit("header-icon-clicked"))
          }, [
            h(e.$slots, "header_icon", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ], 2)) : c("", !0),
      e.$slots.image ? (s(), r("div", ge, [
        h(e.$slots, "image", {}, void 0, !0)
      ])) : c("", !0),
      d("div", he, [
        h(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (s(), r("div", ve, [
        h(e.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
});
const ye = (i, o) => {
  const n = i.__vccOpts || i;
  for (const [t, e] of o)
    n[t] = e;
  return n;
}, Rt = /* @__PURE__ */ ye(be, [["__scopeId", "data-v-06938a02"]]), _e = { class: "dropdown" }, $e = ["aria-labelledby"], jt = /* @__PURE__ */ m({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const o = i, n = S(() => o.id !== null ? o.id : "id_" + N().toString());
    return (t, e) => (s(), r("div", _e, [
      w(f(Y), {
        id: n.value,
        variant: t.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: D(() => [
          h(t.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      d("ul", {
        class: "dropdown-menu",
        "aria-labelledby": n.value
      }, [
        h(t.$slots, "default")
      ], 8, $e)
    ]));
  }
}), ke = { class: "dropdown dropdown-select is-hoverable" }, Se = { class: "me-2" }, ze = ["id"], we = { class: "dropdown-content ps-4" }, Ft = /* @__PURE__ */ m({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: o }) {
    const n = U(N());
    return (t, e) => {
      const l = J("Button");
      return s(), r("div", ke, [
        w(l, {
          class: "dropdown-toggle",
          "aria-haspopup": "true",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false"
        }, {
          default: D(() => [
            d("span", Se, b(t.label), 1)
          ]),
          _: 1
        }),
        d("div", {
          id: n.value,
          class: "dropdown-menu",
          role: "menu"
        }, [
          d("div", we, [
            w(f(x), {
              options: t.options,
              "model-value": t.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": e[0] || (e[0] = (a) => t.$emit("update:modelValue", a))
            }, null, 8, ["options", "model-value"])
          ])
        ], 8, ze)
      ]);
    };
  }
});
const Be = { key: 0 }, Ce = { class: "icon me-1" }, Zt = /* @__PURE__ */ m({
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
  setup(i) {
    const o = i, n = S(() => o.inline ? "span" : "div");
    return (t, e) => {
      const l = J("font-awesome-icon");
      return s(), v(K(n.value), null, {
        default: D(() => [
          t.$slots.default ? (s(), r("span", Be, [
            d("span", Ce, [
              w(l, {
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
            d("span", null, [
              h(t.$slots, "default")
            ])
          ])) : (s(), v(l, {
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
      });
    };
  }
}), Ve = ["value"], De = ["value"], Ue = /* @__PURE__ */ m({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e) {
      typeof n.modelValue == "string" ? o("update:modelValue", e) : o("update:modelValue", Number(e));
    }
    return (e, l) => (s(), r("div", null, [
      d("select", {
        class: z(["form-select", e.containerClasses]),
        value: e.modelValue,
        onChange: l[0] || (l[0] = (a) => t(f(E)(a)))
      }, [
        (s(!0), r(C, null, V(e.options, ([a, u]) => (s(), r("option", {
          key: a,
          value: a
        }, b(u), 9, De))), 128))
      ], 42, Ve)
    ]));
  }
}), Le = ["id", "value", "checked", "onClick"], Oe = ["for"], x = /* @__PURE__ */ m({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: N().toString() }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e) {
      const l = n.modelValue.includes(e);
      let a = [...n.modelValue];
      if (!l)
        a.push(e);
      else {
        const u = a.indexOf(e);
        u > -1 && a.splice(u, 1);
      }
      o("update:modelValue", a);
    }
    return (e, l) => (s(), r("div", null, [
      (s(!0), r(C, null, V(e.options, ([a, u]) => (s(), r("div", {
        key: a,
        class: z(["form-check", e.containerClasses])
      }, [
        d("input", {
          id: "id_" + a + "_" + e.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: a,
          checked: n.modelValue.includes(a),
          onClick: (_) => t(a)
        }, null, 8, Le),
        d("label", {
          class: "form-check-label",
          for: "id_" + a + "_" + e.uniqueId
        }, b(u), 9, Oe)
      ], 2))), 128))
    ]));
  }
}), Ie = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Pe = ["onClick"], Ee = {
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
  setup(i, { emit: o }) {
    const n = i;
    function t(u, _, y) {
      return Math.min(Math.max(u, _), y);
    }
    const e = S(() => {
      const u = n.numOptions, _ = n.currentpage - u, y = n.currentpage + u + 1, P = [], I = [];
      let L;
      for (let $ = 1; $ <= n.maxPages; $++)
        ($ === 1 || $ === n.maxPages || $ >= _ && $ < y) && P.push($);
      for (const $ of P)
        L && ($ - L === 2 ? I.push(L + 1) : $ - L !== 1 && I.push(-42)), I.push($), L = $;
      return I;
    });
    function l(u) {
      u = t(u, 1, n.maxPages), o("change-page", u);
    }
    const { t: a } = M();
    return (u, _) => (s(), r("ul", Ie, [
      d("li", {
        class: z(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[0] || (_[0] = (y) => l(u.currentpage - 1))
        }, b(f(a)("previous")), 1)) : c("", !0)
      ], 2),
      (s(!0), r(C, null, V(e.value, (y) => (s(), r("li", {
        key: y,
        class: z([
          "page-item",
          (y === -42 ? "disabled page-ellipsis " : "") + (y === u.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (P) => l(y)
        }, b(y), 9, Pe)) : (s(), r("span", Ee, "…"))
      ], 2))), 128)),
      d("li", {
        class: z(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[1] || (_[1] = (y) => l(u.currentpage + 1))
        }, b(f(a)("next")), 1)) : c("", !0)
      ], 2)
    ]));
  }
});
function G(i) {
  const o = i;
  o.__i18n = o.__i18n || [], o.__i18n.push({
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
const Ne = ["id", "value", "checked", "onClick"], Me = ["for"], Te = /* @__PURE__ */ m({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    return (n, t) => (s(), r("div", null, [
      (s(!0), r(C, null, V(n.options, ([e, l]) => (s(), r("div", {
        key: e,
        class: z(["form-check", n.containerClasses])
      }, [
        d("input", {
          id: "id_" + e,
          type: "radio",
          class: "form-check-input",
          value: e,
          checked: n.modelValue == e,
          onClick: (a) => o("update:model-value", e)
        }, null, 8, Ne),
        d("label", {
          class: "form-check-label",
          for: "id_" + e
        }, b(l), 9, Me)
      ], 2))), 128))
    ]));
  }
}), qe = { class: "uu-sidebar" }, Re = ["data-bs-target"], je = ["id"], Fe = { class: "uu-sidebar-content" }, Ze = /* @__PURE__ */ m({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(i) {
    const o = i, n = S(() => o.id !== null ? o.id : "id_" + N().toString().replace(/-/g, "")), t = S(() => {
      let e = "";
      return o.placement === "right" && (e += "uu-sidebar-right "), o.mobilePlacement === "bottom" && (e += "uu-sidebar-mobile-bottom "), o.stickySidebar && (e += "uu-sidebar-sticky "), o.mobileStickySidebar && (e += "uu-sidebar-mobile-sticky "), e;
    });
    return (e, l) => (s(), r("div", {
      class: z(["uu-sidebar-container", t.value])
    }, [
      d("aside", qe, [
        d("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + n.value,
          "aria-expanded": "false"
        }, [
          h(e.$slots, "sidebar-button")
        ], 8, Re),
        d("div", {
          id: n.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          h(e.$slots, "sidebar")
        ], 8, je)
      ]),
      d("section", Fe, [
        h(e.$slots, "default")
      ])
    ], 2));
  }
}), Ge = { class: "uu-list-filter" }, Qe = { class: "uu-list-filter-label" }, We = {
  key: 3,
  class: "uu-list-filter-field"
}, Ae = ["value"], He = /* @__PURE__ */ m({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(i, { emit: o }) {
    return (n, t) => (s(), r("div", Ge, [
      d("div", Qe, b(n.filter.label), 1),
      n.filter.type === "checkbox" ? (s(), v(f(x), {
        key: 0,
        options: n.filter.options ?? [],
        "model-value": n.value ?? [],
        "onUpdate:modelValue": t[0] || (t[0] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "select" ? (s(), v(f(Ue), {
        key: 1,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": t[1] || (t[1] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "radio" ? (s(), v(f(Te), {
        key: 2,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        "onUpdate:modelValue": t[2] || (t[2] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "date" ? (s(), r("div", We, [
        d("input", {
          type: "date",
          value: n.value,
          class: "form-control",
          onInput: t[3] || (t[3] = (e) => o("update:value", f(E)(e)))
        }, null, 40, Ae)
      ])) : c("", !0)
    ]));
  }
}), Je = { key: 0 }, ee = /* @__PURE__ */ m({
  __name: "FilterBar",
  props: {
    filters: {},
    filterValues: {}
  },
  emits: ["update:filter-values"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e, l) {
      let a = { ...n.filterValues };
      a[e] = l, o("update:filter-values", a);
    }
    return (e, l) => e.filters ? (s(), r("div", Je, [
      (s(!0), r(C, null, V(e.filters, (a) => (s(), v(He, {
        key: a.field,
        filter: a,
        value: e.filterValues[a.field] ?? void 0,
        "onUpdate:value": (u) => t(a.field, u)
      }, null, 8, ["filter", "value", "onUpdate:value"]))), 128))
    ])) : c("", !0);
  }
}), Ke = { class: "search" }, Xe = ["value", "placeholder"], q = /* @__PURE__ */ m({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    function n(a, u = 500) {
      let _;
      return (...y) => {
        clearTimeout(_), _ = setTimeout(() => {
          a.apply(this, y);
        }, u);
      };
    }
    function t(a) {
      o("update:modelValue", a);
    }
    const e = n((a) => t(a)), { t: l } = M();
    return (a, u) => (s(), r("div", Ke, [
      d("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: f(l)("placeholder"),
        onInput: u[0] || (u[0] = (_) => f(e)(f(E)(_)))
      }, null, 40, Xe)
    ]));
  }
});
function Q(i) {
  const o = i;
  o.__i18n = o.__i18n || [], o.__i18n.push({
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
const Ye = ["value"], xe = ["value"], te = /* @__PURE__ */ m({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e) {
      if (typeof e == "string")
        try {
          e = Number(e);
        } catch {
          e = n.pageSizeOptions[0] ?? 10;
        }
      o("update:pageSize", e);
    }
    return (e, l) => (s(), r("select", {
      value: e.pageSize,
      class: "form-select",
      onChange: l[0] || (l[0] = (a) => t(f(E)(a)))
    }, [
      (s(!0), r(C, null, V(e.pageSizeOptions, (a) => (s(), r("option", {
        key: a,
        value: a
      }, b(a), 9, xe))), 128))
    ], 40, Ye));
  }
}), et = ["value"], tt = ["value"], oe = /* @__PURE__ */ m({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(i, { emit: o }) {
    return (n, t) => (s(), r("select", {
      value: n.currentSort,
      class: "form-select",
      onChange: t[0] || (t[0] = (e) => n.$emit("update:current-sort", f(E)(e).trim()))
    }, [
      (s(!0), r(C, null, V(n.sortOptions, ({ field: e, label: l }) => (s(), r("option", {
        key: e,
        value: e
      }, b(l), 9, tt))), 128))
    ], 40, et));
  }
}), ot = { key: 0 }, R = /* @__PURE__ */ m({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(i) {
    const { t: o } = M();
    return (n, t) => (s(), r("div", null, [
      n.searchQuery ? (s(), r("span", ot, b(f(o)("search", { query: n.searchQuery })), 1)) : c("", !0),
      X(" " + b(f(o)("showing", {
        pageNum: n.pageNum,
        totalNum: Intl.NumberFormat().format(n.totalNum)
      })), 1)
    ]));
  }
});
function W(i) {
  const o = i;
  o.__i18n = o.__i18n || [], o.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (n) => {
          const { normalize: t, interpolate: e, named: l } = n;
          return t(["Search result: ", e(l("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: e, named: l } = n;
          return t(["showing ", e(l("pageNum")), " of ", e(l("totalNum")), " results"]);
        }
      },
      nl: {
        search: (n) => {
          const { normalize: t, interpolate: e, named: l } = n;
          return t(["Zoekresultaat: ", e(l("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: e, named: l } = n;
          return t([e(l("pageNum")), " van ", e(l("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof W == "function" && W(R);
const nt = { class: "uu-container" }, at = { class: "uu-list" }, st = { class: "uu-list-controls" }, lt = {
  key: 1,
  class: "uu-list-order-control"
}, rt = { class: "uu-list-page-size-control" }, it = {
  key: 0,
  class: "uu-list-filters"
}, ut = { class: "uu-list-content" }, dt = /* @__PURE__ */ m({
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
  setup(i, { emit: o }) {
    const n = i, t = S(() => Math.ceil(n.totalData / n.pageSize));
    return (e, l) => {
      var a;
      return s(), r("div", nt, [
        d("div", at, [
          d("div", st, [
            e.searchEnabled ? (s(), v(q, {
              key: 0,
              "model-value": e.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (u) => e.$emit("update:search", u))
            }, null, 8, ["model-value"])) : c("", !0),
            w(R, {
              "search-query": e.search,
              "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
              "total-num": e.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            e.sortEnabled ? (s(), r("div", lt, [
              w(oe, {
                "current-sort": e.currentSort,
                "sort-options": e.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (u) => o("update:current-sort", u))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : c("", !0),
            d("div", rt, [
              w(te, {
                "page-size-options": e.pageSizeOptions,
                "page-size": e.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (u) => o("update:page-size", u))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          e.filtersEnabled ? (s(), r("div", it, [
            h(e.$slots, "filters-top", {
              data: e.data,
              isLoading: e.isLoading
            }),
            w(ee, {
              filters: e.filters,
              "filter-values": e.filterValues,
              "onUpdate:filterValues": l[3] || (l[3] = (u) => e.$emit("update:filter-values", u))
            }, null, 8, ["filters", "filter-values"]),
            h(e.$slots, "filters-bottom", {
              data: e.data,
              isLoading: e.isLoading
            })
          ])) : c("", !0),
          d("div", ut, [
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : c("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), pt = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, mt = {
  key: 0,
  class: "ms-auto"
}, ne = /* @__PURE__ */ m({
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
  setup(i, { emit: o }) {
    const n = i, t = S(() => Math.ceil(n.totalData / n.pageSize));
    return (e, l) => (s(), v(f(Ze), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        e.searchEnabled ? (s(), v(q, {
          key: 0,
          "model-value": e.search,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.$emit("update:search", a))
        }, null, 8, ["model-value"])) : c("", !0),
        h(e.$slots, "filters-top", {
          data: e.data,
          isLoading: e.isLoading
        }),
        e.filters ? (s(), v(ee, {
          key: 1,
          filters: e.filters,
          "filter-values": e.filterValues,
          "onUpdate:filterValues": l[1] || (l[1] = (a) => e.$emit("update:filter-values", a))
        }, null, 8, ["filters", "filter-values"])) : c("", !0),
        h(e.$slots, "filters-bottom", {
          data: e.data,
          isLoading: e.isLoading
        })
      ]),
      default: D(() => {
        var a;
        return [
          d("div", null, [
            d("div", pt, [
              w(R, {
                "search-query": e.search,
                "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
                "total-num": e.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              e.sortEnabled ? (s(), r("div", mt, [
                w(oe, {
                  "current-sort": e.currentSort,
                  "sort-options": e.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (u) => o("update:current-sort", u))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : c("", !0),
              d("div", null, [
                w(te, {
                  "page-size-options": e.pageSizeOptions,
                  "page-size": e.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (u) => o("update:page-size", u))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : c("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function A(i) {
  const o = i;
  o.__i18n = o.__i18n || [], o.__i18n.push({
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
typeof A == "function" && A(ne);
const ct = /* @__PURE__ */ m({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (o, n) => (s(), r("pre", null, b(o.data), 1));
  }
}), ft = /* @__PURE__ */ m({
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
  setup(i, { emit: o }) {
    const n = i, t = S(() => {
      switch (n.container) {
        case "sidebar":
          return ne;
        default:
          return dt;
      }
    });
    return (e, l) => (s(), v(K(t.value), {
      "is-loading": e.isLoading,
      data: e.data,
      "total-data": e.totalData,
      "search-enabled": e.searchEnabled,
      search: e.search,
      "sort-enabled": e.sortEnabled,
      "current-sort": e.currentSort,
      "current-page": e.currentPage,
      "page-size-options": e.pageSizeOptions,
      "sort-options": e.sortOptions,
      "page-size": e.pageSize,
      "filters-enabled": e.filtersEnabled,
      filters: e.filters,
      "filter-values": e.filterValues,
      "onUpdate:search": l[0] || (l[0] = (a) => o("update:search", a)),
      "onUpdate:currentSort": l[1] || (l[1] = (a) => o("update:current-sort", a)),
      "onUpdate:pageSize": l[2] || (l[2] = (a) => o("update:page-size", a)),
      "onUpdate:currentPage": l[3] || (l[3] = (a) => o("update:current-page", a)),
      "onUpdate:filterValues": l[4] || (l[4] = (a) => o("update:filter-values", a))
    }, {
      data: D(({ data: a, isLoading: u }) => [
        h(e.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          w(ct, {
            data: a,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": D(({ data: a, isLoading: u }) => [
        h(e.$slots, "filters-top", {
          data: a,
          isLoading: u
        })
      ]),
      "filters-bottom": D(({ data: a, isLoading: u }) => [
        h(e.$slots, "filters-bottom", {
          data: a,
          isLoading: u
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), gt = /* @__PURE__ */ m({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => (s(), r("span", {
      class: z(o.column.classes)
    }, b(o.item[o.column.field]), 3));
  }
}), ht = /* @__PURE__ */ m({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const o = i, n = S(() => {
      let t = null;
      try {
        t = new Date(o.item[o.column.field]);
      } catch (a) {
        return console.error(a), "";
      }
      let e;
      if (o.column.language !== void 0 && o.column.language !== null && (e = o.column.language), typeof o.column.format == "string") {
        let a = null;
        switch (o.column.format) {
          case "date":
            a = {
              dateStyle: "medium"
            };
            break;
          case "time":
            a = {
              timeStyle: "short"
            };
            break;
          case "datetime":
            a = {
              dateStyle: "medium",
              timeStyle: "short"
            };
            break;
        }
        return new Intl.DateTimeFormat(e, a).format(t);
      }
      return typeof o.column.format == "object" && o.column.format !== null ? new Intl.DateTimeFormat(
        e,
        o.column.format
      ).format(t) : new Intl.DateTimeFormat(e).format(t);
    });
    return (t, e) => (s(), r("span", {
      class: z(t.column.classes)
    }, b(n.value), 3));
  }
}), vt = { key: 0 }, bt = /* @__PURE__ */ m({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.item[o.column.field] ? (s(), r("span", vt, [
      w(f(Y), {
        href: o.item[o.column.field].link,
        "css-classes": o.item[o.column.field].classes,
        "new-tab": o.item[o.column.field].new_tab,
        size: o.column.size,
        variant: o.column.variant
      }, {
        default: D(() => [
          X(b(o.item[o.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : c("", !0);
  }
}), yt = { key: 0 }, _t = ["href", "target"], $t = /* @__PURE__ */ m({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.item[o.column.field] ? (s(), r("span", yt, [
      d("a", {
        href: o.item[o.column.field].link,
        class: z(o.column.classes),
        target: o.item[o.column.field].new_tab ? "_blank" : "_self"
      }, b(o.item[o.column.field].text), 11, _t)
    ])) : c("", !0);
  }
}), kt = ["innerHTML"], St = /* @__PURE__ */ m({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => (s(), r("span", {
      innerHTML: o.item[o.column.field]
    }, null, 8, kt));
  }
}), zt = {
  key: 0,
  class: "dropdown"
}, wt = /* @__PURE__ */ se('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), Bt = { class: "dropdown-menu" }, Ct = {
  key: 0,
  class: "dropdown-divider"
}, Vt = ["href", "target"], Dt = /* @__PURE__ */ m({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const o = i, n = S(() => o.item[o.column.field].entries());
    return (t, e) => n.value ? (s(), r("div", zt, [
      wt,
      d("ul", Bt, [
        (s(!0), r(C, null, V(n.value, ([l, a]) => (s(), r("li", { key: l }, [
          a.divider ? (s(), r("hr", Ct)) : (s(), r("a", {
            key: 1,
            href: a.link,
            class: z(["dropdown-item", a.classes ?? ""]),
            target: a.new_tab ? "_blank" : "_self"
          }, b(a.text), 11, Vt))
        ]))), 128))
      ])
    ])) : c("", !0);
  }
}), Ut = /* @__PURE__ */ m({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.column.type == "string" ? (s(), v(gt, {
      key: 0,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "date" ? (s(), v(ht, {
      key: 1,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "button" ? (s(), v(bt, {
      key: 2,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "link" ? (s(), v($t, {
      key: 3,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "html" ? (s(), v(St, {
      key: 4,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "actions" ? (s(), v(Dt, {
      key: 5,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : c("", !0);
  }
}), Lt = /* @__PURE__ */ m({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(i) {
    return (o, n) => (s(), r("tr", null, [
      (s(!0), r(C, null, V(o.columns, (t) => (s(), r("td", {
        key: t.field,
        class: "align-middle"
      }, [
        w(Ut, {
          column: t,
          item: o.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ot = {
  key: 0,
  class: "alert alert-info w-100"
}, It = { key: 0 }, Pt = { key: 1 }, Et = ["colspan"], ae = /* @__PURE__ */ m({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const o = i, n = S(() => o.data === null || o.data === void 0 || o.data.length === 0), { t } = M();
    return (e, l) => e.isLoading && n.value ? (s(), r("div", Ot, b(f(t)("loading")), 1)) : (s(), r("table", {
      key: 1,
      class: z(["table", e.isLoading ? "loading" : ""])
    }, [
      d("thead", null, [
        d("tr", null, [
          (s(!0), r(C, null, V(e.columns, (a) => (s(), r("th", {
            key: a.field
          }, b(a.label), 1))), 128))
        ])
      ]),
      n.value ? (s(), r("tbody", Pt, [
        d("tr", null, [
          d("td", {
            colspan: e.columns.length
          }, b(f(t)("no_data")), 9, Et)
        ])
      ])) : (s(), r("tbody", It, [
        (s(!0), r(C, null, V(e.data, (a) => (s(), v(Lt, {
          key: a.id,
          item: a,
          columns: e.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function H(i) {
  const o = i;
  o.__i18n = o.__i18n || [], o.__i18n.push({
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
const Gt = /* @__PURE__ */ m({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const o = i, n = U(o.config.pageSize), t = U(1), e = U(""), l = U("id"), a = U(!0);
    function u() {
      var g;
      let p = {};
      return (g = o.config.filters) == null || g.forEach((k) => {
        var O;
        if (k.initial) {
          p[k.field] = k.initial;
          return;
        }
        switch (k.type) {
          case "date":
            p[k.field] = null;
            break;
          case "checkbox":
            p[k.field] = [];
            break;
          case "radio":
            ((O = k.options) == null ? void 0 : O.length) != 0 && k.options && (p[k.field] = k.options[0][0]);
            break;
        }
      }), p;
    }
    const _ = U(u());
    let y = U(null);
    const P = S(() => {
      let p = [];
      p.push("page_size=" + encodeURIComponent(n.value));
      for (const [g, k] of Object.entries(_.value))
        k != null && (typeof k == "object" ? k.forEach(
          (O) => p.push(g + "=" + encodeURIComponent(O))
        ) : p.push(g + "=" + encodeURIComponent(k)));
      return e.value && p.push("search=" + encodeURIComponent(e.value)), p.push("ordering=" + encodeURIComponent(l.value)), t.value = 1, p;
    }), I = S(() => {
      let p = P.value, g = "page=" + encodeURIComponent(t.value);
      return p.length !== 0 && (g = "&" + g), "?" + p.join("&") + g;
    }), L = S(() => {
      let p = new URL(window.location.protocol + "//" + window.location.host);
      return p.pathname = o.config.dataUri, p.search = I.value, console.log(p.toString()), p.toString();
    });
    le(L, () => {
      j();
    });
    const $ = U(null);
    function j() {
      $.value && $.value.abort(), $.value = new AbortController(), a.value = !0, fetch(L.value, { signal: $.value.signal }).then((p) => {
        p.json().then((g) => {
          y.value = g, a.value = !1, g.ordering && (l.value = g.ordering), $.value = null;
        });
      }).catch((p) => {
        console.log(p);
      });
    }
    return re(() => {
      j();
    }), (p, g) => {
      var k, O, F;
      return s(), v(ft, {
        "is-loading": a.value,
        data: ((k = f(y)) == null ? void 0 : k.results) ?? void 0,
        "total-data": ((O = f(y)) == null ? void 0 : O.count) ?? 0,
        "search-enabled": p.config.searchEnabled,
        search: e.value,
        "sort-enabled": p.config.sortEnabled,
        "current-sort": l.value,
        "page-size-options": p.config.pageSizeOptions,
        "sort-options": p.config.sortOptions ?? [],
        "page-size": ((F = f(y)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": t.value,
        "filters-enabled": p.config.filtersEnabled,
        filters: p.config.filters ?? [],
        "filter-values": _.value,
        container: p.config.container,
        "onUpdate:search": g[0] || (g[0] = (B) => e.value = B),
        "onUpdate:currentSort": g[1] || (g[1] = (B) => l.value = B),
        "onUpdate:pageSize": g[2] || (g[2] = (B) => n.value = B),
        "onUpdate:currentPage": g[3] || (g[3] = (B) => t.value = B),
        "onUpdate:filterValues": g[4] || (g[4] = (B) => _.value = B)
      }, {
        data: D(({ data: B, isLoading: Z }) => [
          h(p.$slots, "data", {
            data: B,
            isLoading: Z
          }, () => [
            w(ae, {
              data: B,
              columns: p.config.columns,
              "is-loading": Z
            }, null, 8, ["data", "columns", "is-loading"])
          ])
        ]),
        _: 3
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as BSButton,
  Rt as BSCard,
  jt as BSDropdown,
  Ft as BSDropdownMultiSelect,
  Zt as BSIcon,
  x as BSMultiSelect,
  T as BSPagination,
  Te as BSRadioSelect,
  Ue as BSSelect,
  Ze as BSSidebar,
  Gt as DSCList,
  ft as UUList,
  Qt as UUListTypes
};
