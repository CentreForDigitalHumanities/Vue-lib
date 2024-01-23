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
import { defineComponent as m, computed as S, openBlock as l, createElementBlock as r, normalizeClass as z, createElementVNode as d, renderSlot as h, createCommentVNode as c, createVNode as w, unref as f, withCtx as D, ref as U, resolveComponent as J, toDisplayString as v, createBlock as b, resolveDynamicComponent as K, Fragment as C, renderList as V, createTextVNode as X, createStaticVNode as le, watch as se, onMounted as re } from "vue";
import { v4 as N } from "uuid";
import { useI18n as M } from "vue-i18n";
import { u as E } from "./useInputValue-e686f6e9.js";
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
    return (t, e) => t.href ? (l(), r("a", {
      key: 0,
      href: t.href,
      class: z(n.value),
      target: t.newTab ? "_blank" : "_self"
    }, [
      d("span", ue, [
        h(t.$slots, "default")
      ])
    ], 10, ie)) : (l(), r("button", {
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
    return (e, s) => (l(), r("div", me, [
      e.$slots.header ? (l(), r("div", {
        key: 0,
        class: z(t.value)
      }, [
        h(e.$slots, "header", {}, void 0, !0)
      ], 2)) : e.$slots.title || e.$slots.header_icon ? (l(), r("div", {
        key: 1,
        class: z(t.value)
      }, [
        d("div", ce, [
          e.$slots.title ? (l(), r("div", fe, [
            h(e.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          e.$slots.header_icon ? (l(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: s[0] || (s[0] = (a) => e.$emit("header-icon-clicked"))
          }, [
            h(e.$slots, "header_icon", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ], 2)) : c("", !0),
      e.$slots.image ? (l(), r("div", ge, [
        h(e.$slots, "image", {}, void 0, !0)
      ])) : c("", !0),
      d("div", he, [
        h(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (l(), r("div", ve, [
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
}, jt = /* @__PURE__ */ ye(be, [["__scopeId", "data-v-06938a02"]]), _e = { class: "dropdown" }, $e = ["aria-labelledby"], Ft = /* @__PURE__ */ m({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const o = i, n = S(() => o.id !== null ? o.id : "id_" + N().toString());
    return (t, e) => (l(), r("div", _e, [
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
}), ke = { class: "dropdown dropdown-select is-hoverable" }, Se = { class: "me-2" }, ze = ["id"], we = { class: "dropdown-content ps-4" }, Zt = /* @__PURE__ */ m({
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
      const s = J("Button");
      return l(), r("div", ke, [
        w(s, {
          class: "dropdown-toggle",
          "aria-haspopup": "true",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false"
        }, {
          default: D(() => [
            d("span", Se, v(t.label), 1)
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
const Be = { key: 0 }, Ce = { class: "icon me-1" }, Gt = /* @__PURE__ */ m({
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
      const s = J("font-awesome-icon");
      return l(), b(K(n.value), null, {
        default: D(() => [
          t.$slots.default ? (l(), r("span", Be, [
            d("span", Ce, [
              w(s, {
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
          ])) : (l(), b(s, {
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
}), Ve = ["value"], De = {
  key: 0,
  disabled: "",
  value: ""
}, Ue = ["value"], Le = /* @__PURE__ */ m({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e) {
      typeof n.modelValue == "string" ? o("update:modelValue", e) : o("update:modelValue", Number(e));
    }
    return (e, s) => (l(), r("div", null, [
      d("select", {
        class: z(["form-select", e.containerClasses]),
        value: e.modelValue,
        onChange: s[0] || (s[0] = (a) => t(f(E)(a)))
      }, [
        e.placeholder ? (l(), r("option", De, v(e.placeholder), 1)) : c("", !0),
        (l(!0), r(C, null, V(e.options, ([a, u]) => (l(), r("option", {
          key: a ?? "null",
          value: a
        }, v(u), 9, Ue))), 128))
      ], 42, Ve)
    ]));
  }
}), Oe = ["id", "value", "checked", "onClick"], Ie = ["for"], x = /* @__PURE__ */ m({
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
      const s = n.modelValue.includes(e);
      let a = [...n.modelValue];
      if (!s)
        a.push(e);
      else {
        const u = a.indexOf(e);
        u > -1 && a.splice(u, 1);
      }
      o("update:modelValue", a);
    }
    return (e, s) => (l(), r("div", null, [
      (l(!0), r(C, null, V(e.options, ([a, u]) => (l(), r("div", {
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
        }, null, 8, Oe),
        d("label", {
          class: "form-check-label",
          for: "id_" + a + "_" + e.uniqueId
        }, v(u), 9, Ie)
      ], 2))), 128))
    ]));
  }
}), Pe = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Ee = ["onClick"], Ne = {
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
    function s(u) {
      u = t(u, 1, n.maxPages), o("change-page", u);
    }
    const { t: a } = M();
    return (u, _) => (l(), r("ul", Pe, [
      d("li", {
        class: z(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[0] || (_[0] = (y) => s(u.currentpage - 1))
        }, v(f(a)("previous")), 1)) : c("", !0)
      ], 2),
      (l(!0), r(C, null, V(e.value, (y) => (l(), r("li", {
        key: y,
        class: z([
          "page-item",
          (y === -42 ? "disabled page-ellipsis " : "") + (y === u.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (P) => s(y)
        }, v(y), 9, Ee)) : (l(), r("span", Ne, "…"))
      ], 2))), 128)),
      d("li", {
        class: z(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[1] || (_[1] = (y) => s(u.currentpage + 1))
        }, v(f(a)("next")), 1)) : c("", !0)
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
const Me = ["id", "value", "checked", "onClick"], Te = ["for"], qe = /* @__PURE__ */ m({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: o }) {
    return (n, t) => (l(), r("div", null, [
      (l(!0), r(C, null, V(n.options, ([e, s]) => (l(), r("div", {
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
        }, null, 8, Me),
        d("label", {
          class: "form-check-label",
          for: "id_" + e
        }, v(s), 9, Te)
      ], 2))), 128))
    ]));
  }
}), Re = { class: "uu-sidebar" }, je = ["data-bs-target"], Fe = ["id"], Ze = { class: "uu-sidebar-content" }, Ge = /* @__PURE__ */ m({
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
    return (e, s) => (l(), r("div", {
      class: z(["uu-sidebar-container", t.value])
    }, [
      d("aside", Re, [
        d("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + n.value,
          "aria-expanded": "false"
        }, [
          h(e.$slots, "sidebar-button")
        ], 8, je),
        d("div", {
          id: n.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          h(e.$slots, "sidebar")
        ], 8, Fe)
      ]),
      d("section", Ze, [
        h(e.$slots, "default")
      ])
    ], 2));
  }
}), Qe = { class: "uu-list-filter" }, We = { class: "uu-list-filter-label" }, Ae = {
  key: 3,
  class: "uu-list-filter-field"
}, He = ["value"], Je = /* @__PURE__ */ m({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(i, { emit: o }) {
    return (n, t) => (l(), r("div", Qe, [
      d("div", We, v(n.filter.label), 1),
      n.filter.type === "checkbox" ? (l(), b(f(x), {
        key: 0,
        options: n.filter.options ?? [],
        "model-value": n.value ?? [],
        "onUpdate:modelValue": t[0] || (t[0] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "select" ? (l(), b(f(Le), {
        key: 1,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": t[1] || (t[1] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "radio" ? (l(), b(f(qe), {
        key: 2,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        "onUpdate:modelValue": t[2] || (t[2] = (e) => o("update:value", e))
      }, null, 8, ["options", "model-value"])) : c("", !0),
      n.filter.type === "date" ? (l(), r("div", Ae, [
        d("input", {
          type: "date",
          value: n.value,
          class: "form-control",
          onInput: t[3] || (t[3] = (e) => o("update:value", f(E)(e)))
        }, null, 40, He)
      ])) : c("", !0)
    ]));
  }
}), Ke = { key: 0 }, ee = /* @__PURE__ */ m({
  __name: "FilterBar",
  props: {
    filters: {},
    filterValues: {}
  },
  emits: ["update:filter-values"],
  setup(i, { emit: o }) {
    const n = i;
    function t(e, s) {
      let a = { ...n.filterValues };
      a[e] = s, o("update:filter-values", a);
    }
    return (e, s) => e.filters ? (l(), r("div", Ke, [
      (l(!0), r(C, null, V(e.filters, (a) => (l(), b(Je, {
        key: a.field,
        filter: a,
        value: e.filterValues[a.field] ?? void 0,
        "onUpdate:value": (u) => t(a.field, u)
      }, null, 8, ["filter", "value", "onUpdate:value"]))), 128))
    ])) : c("", !0);
  }
}), Xe = { class: "search" }, Ye = ["value", "placeholder"], q = /* @__PURE__ */ m({
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
    const e = n((a) => t(a)), { t: s } = M();
    return (a, u) => (l(), r("div", Xe, [
      d("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: f(s)("placeholder"),
        onInput: u[0] || (u[0] = (_) => f(e)(f(E)(_)))
      }, null, 40, Ye)
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
const xe = ["value"], et = ["value"], te = /* @__PURE__ */ m({
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
    return (e, s) => (l(), r("select", {
      value: e.pageSize,
      class: "form-select",
      onChange: s[0] || (s[0] = (a) => t(f(E)(a)))
    }, [
      (l(!0), r(C, null, V(e.pageSizeOptions, (a) => (l(), r("option", {
        key: a,
        value: a
      }, v(a), 9, et))), 128))
    ], 40, xe));
  }
}), tt = ["value"], ot = ["value"], oe = /* @__PURE__ */ m({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(i, { emit: o }) {
    return (n, t) => (l(), r("select", {
      value: n.currentSort,
      class: "form-select",
      onChange: t[0] || (t[0] = (e) => n.$emit("update:current-sort", f(E)(e).trim()))
    }, [
      (l(!0), r(C, null, V(n.sortOptions, ({ field: e, label: s }) => (l(), r("option", {
        key: e,
        value: e
      }, v(s), 9, ot))), 128))
    ], 40, tt));
  }
}), nt = { key: 0 }, R = /* @__PURE__ */ m({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(i) {
    const { t: o } = M();
    return (n, t) => (l(), r("div", null, [
      n.searchQuery ? (l(), r("span", nt, v(f(o)("search", { query: n.searchQuery })), 1)) : c("", !0),
      X(" " + v(f(o)("showing", {
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
          const { normalize: t, interpolate: e, named: s } = n;
          return t(["Search result: ", e(s("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: e, named: s } = n;
          return t(["showing ", e(s("pageNum")), " of ", e(s("totalNum")), " results"]);
        }
      },
      nl: {
        search: (n) => {
          const { normalize: t, interpolate: e, named: s } = n;
          return t(["Zoekresultaat: ", e(s("query")), ","]);
        },
        showing: (n) => {
          const { normalize: t, interpolate: e, named: s } = n;
          return t([e(s("pageNum")), " van ", e(s("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof W == "function" && W(R);
const at = { class: "uu-container" }, lt = { class: "uu-list" }, st = { class: "uu-list-controls" }, rt = {
  key: 1,
  class: "uu-list-order-control"
}, it = { class: "uu-list-page-size-control" }, ut = {
  key: 0,
  class: "uu-list-filters"
}, dt = { class: "uu-list-content" }, pt = /* @__PURE__ */ m({
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
    return (e, s) => {
      var a;
      return l(), r("div", at, [
        d("div", lt, [
          d("div", st, [
            e.searchEnabled ? (l(), b(q, {
              key: 0,
              "model-value": e.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": s[0] || (s[0] = (u) => e.$emit("update:search", u))
            }, null, 8, ["model-value"])) : c("", !0),
            w(R, {
              "search-query": e.search,
              "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
              "total-num": e.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            e.sortEnabled ? (l(), r("div", rt, [
              w(oe, {
                "current-sort": e.currentSort,
                "sort-options": e.sortOptions,
                "onUpdate:currentSort": s[1] || (s[1] = (u) => o("update:current-sort", u))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : c("", !0),
            d("div", it, [
              w(te, {
                "page-size-options": e.pageSizeOptions,
                "page-size": e.pageSize,
                "onUpdate:pageSize": s[2] || (s[2] = (u) => o("update:page-size", u))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          e.filtersEnabled ? (l(), r("div", ut, [
            h(e.$slots, "filters-top", {
              data: e.data,
              isLoading: e.isLoading
            }),
            w(ee, {
              filters: e.filters,
              "filter-values": e.filterValues,
              "onUpdate:filterValues": s[3] || (s[3] = (u) => e.$emit("update:filter-values", u))
            }, null, 8, ["filters", "filter-values"]),
            h(e.$slots, "filters-bottom", {
              data: e.data,
              isLoading: e.isLoading
            })
          ])) : c("", !0),
          d("div", dt, [
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (l(), b(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: e.currentPage,
                onChangePage: s[4] || (s[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : c("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), mt = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, ct = {
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
    return (e, s) => (l(), b(f(Ge), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        e.searchEnabled ? (l(), b(q, {
          key: 0,
          "model-value": e.search,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => e.$emit("update:search", a))
        }, null, 8, ["model-value"])) : c("", !0),
        h(e.$slots, "filters-top", {
          data: e.data,
          isLoading: e.isLoading
        }),
        e.filters ? (l(), b(ee, {
          key: 1,
          filters: e.filters,
          "filter-values": e.filterValues,
          "onUpdate:filterValues": s[1] || (s[1] = (a) => e.$emit("update:filter-values", a))
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
            d("div", mt, [
              w(R, {
                "search-query": e.search,
                "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
                "total-num": e.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              e.sortEnabled ? (l(), r("div", ct, [
                w(oe, {
                  "current-sort": e.currentSort,
                  "sort-options": e.sortOptions,
                  "onUpdate:currentSort": s[2] || (s[2] = (u) => o("update:current-sort", u))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : c("", !0),
              d("div", null, [
                w(te, {
                  "page-size-options": e.pageSizeOptions,
                  "page-size": e.pageSize,
                  "onUpdate:pageSize": s[3] || (s[3] = (u) => o("update:page-size", u))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (l(), b(f(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: e.currentPage,
                onChangePage: s[4] || (s[4] = (u) => e.$emit("update:current-page", u))
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
const ft = /* @__PURE__ */ m({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (o, n) => (l(), r("pre", null, v(o.data), 1));
  }
}), gt = /* @__PURE__ */ m({
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
          return pt;
      }
    });
    return (e, s) => (l(), b(K(t.value), {
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
      "onUpdate:search": s[0] || (s[0] = (a) => o("update:search", a)),
      "onUpdate:currentSort": s[1] || (s[1] = (a) => o("update:current-sort", a)),
      "onUpdate:pageSize": s[2] || (s[2] = (a) => o("update:page-size", a)),
      "onUpdate:currentPage": s[3] || (s[3] = (a) => o("update:current-page", a)),
      "onUpdate:filterValues": s[4] || (s[4] = (a) => o("update:filter-values", a))
    }, {
      data: D(({ data: a, isLoading: u }) => [
        h(e.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          w(ft, {
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
}), ht = /* @__PURE__ */ m({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => (l(), r("span", {
      class: z(o.column.classes)
    }, v(o.item[o.column.field]), 3));
  }
}), vt = /* @__PURE__ */ m({
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
    return (t, e) => (l(), r("span", {
      class: z(t.column.classes)
    }, v(n.value), 3));
  }
}), bt = { key: 0 }, yt = /* @__PURE__ */ m({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.item[o.column.field] ? (l(), r("span", bt, [
      w(f(Y), {
        href: o.item[o.column.field].link,
        "css-classes": o.item[o.column.field].classes,
        "new-tab": o.item[o.column.field].new_tab,
        size: o.column.size,
        variant: o.column.variant
      }, {
        default: D(() => [
          X(v(o.item[o.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : c("", !0);
  }
}), _t = { key: 0 }, $t = ["href", "target"], kt = /* @__PURE__ */ m({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.item[o.column.field] ? (l(), r("span", _t, [
      d("a", {
        href: o.item[o.column.field].link,
        class: z(o.column.classes),
        target: o.item[o.column.field].new_tab ? "_blank" : "_self"
      }, v(o.item[o.column.field].text), 11, $t)
    ])) : c("", !0);
  }
}), St = ["innerHTML"], zt = /* @__PURE__ */ m({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => (l(), r("span", {
      innerHTML: o.item[o.column.field]
    }, null, 8, St));
  }
}), wt = {
  key: 0,
  class: "dropdown"
}, Bt = /* @__PURE__ */ le('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), Ct = { class: "dropdown-menu" }, Vt = {
  key: 0,
  class: "dropdown-divider"
}, Dt = ["href", "target"], Ut = /* @__PURE__ */ m({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const o = i, n = S(() => o.item[o.column.field].entries());
    return (t, e) => n.value ? (l(), r("div", wt, [
      Bt,
      d("ul", Ct, [
        (l(!0), r(C, null, V(n.value, ([s, a]) => (l(), r("li", { key: s }, [
          a.divider ? (l(), r("hr", Vt)) : (l(), r("a", {
            key: 1,
            href: a.link,
            class: z(["dropdown-item", a.classes ?? ""]),
            target: a.new_tab ? "_blank" : "_self"
          }, v(a.text), 11, Dt))
        ]))), 128))
      ])
    ])) : c("", !0);
  }
}), Lt = /* @__PURE__ */ m({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (o, n) => o.column.type == "string" ? (l(), b(ht, {
      key: 0,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "date" ? (l(), b(vt, {
      key: 1,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "button" ? (l(), b(yt, {
      key: 2,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "link" ? (l(), b(kt, {
      key: 3,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "html" ? (l(), b(zt, {
      key: 4,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : o.column.type == "actions" ? (l(), b(Ut, {
      key: 5,
      item: o.item,
      column: o.column
    }, null, 8, ["item", "column"])) : c("", !0);
  }
}), Ot = /* @__PURE__ */ m({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(i) {
    return (o, n) => (l(), r("tr", null, [
      (l(!0), r(C, null, V(o.columns, (t) => (l(), r("td", {
        key: t.field,
        class: "align-middle"
      }, [
        w(Lt, {
          column: t,
          item: o.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), It = {
  key: 0,
  class: "alert alert-info w-100"
}, Pt = { key: 0 }, Et = { key: 1 }, Nt = ["colspan"], ae = /* @__PURE__ */ m({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const o = i, n = S(() => o.data === null || o.data === void 0 || o.data.length === 0), { t } = M();
    return (e, s) => e.isLoading && n.value ? (l(), r("div", It, v(f(t)("loading")), 1)) : (l(), r("table", {
      key: 1,
      class: z(["table", e.isLoading ? "loading" : ""])
    }, [
      d("thead", null, [
        d("tr", null, [
          (l(!0), r(C, null, V(e.columns, (a) => (l(), r("th", {
            key: a.field
          }, v(a.label), 1))), 128))
        ])
      ]),
      n.value ? (l(), r("tbody", Et, [
        d("tr", null, [
          d("td", {
            colspan: e.columns.length
          }, v(f(t)("no_data")), 9, Nt)
        ])
      ])) : (l(), r("tbody", Pt, [
        (l(!0), r(C, null, V(e.data, (a) => (l(), b(Ot, {
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
const Qt = /* @__PURE__ */ m({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const o = i, n = U(o.config.pageSize), t = U(1), e = U(""), s = U("id"), a = U(!0);
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
      return e.value && p.push("search=" + encodeURIComponent(e.value)), p.push("ordering=" + encodeURIComponent(s.value)), t.value = 1, p;
    }), I = S(() => {
      let p = P.value, g = "page=" + encodeURIComponent(t.value);
      return p.length !== 0 && (g = "&" + g), "?" + p.join("&") + g;
    }), L = S(() => {
      let p = new URL(window.location.protocol + "//" + window.location.host);
      return p.pathname = o.config.dataUri, p.search = I.value, console.log(p.toString()), p.toString();
    });
    se(L, () => {
      j();
    });
    const $ = U(null);
    function j() {
      $.value && $.value.abort(), $.value = new AbortController(), a.value = !0, fetch(L.value, { signal: $.value.signal }).then((p) => {
        p.json().then((g) => {
          y.value = g, a.value = !1, g.ordering && (s.value = g.ordering), $.value = null;
        });
      }).catch((p) => {
        console.log(p);
      });
    }
    return re(() => {
      j();
    }), (p, g) => {
      var k, O, F;
      return l(), b(gt, {
        "is-loading": a.value,
        data: ((k = f(y)) == null ? void 0 : k.results) ?? void 0,
        "total-data": ((O = f(y)) == null ? void 0 : O.count) ?? 0,
        "search-enabled": p.config.searchEnabled,
        search: e.value,
        "sort-enabled": p.config.sortEnabled,
        "current-sort": s.value,
        "page-size-options": p.config.pageSizeOptions,
        "sort-options": p.config.sortOptions ?? [],
        "page-size": ((F = f(y)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": t.value,
        "filters-enabled": p.config.filtersEnabled,
        filters: p.config.filters ?? [],
        "filter-values": _.value,
        container: p.config.container,
        "onUpdate:search": g[0] || (g[0] = (B) => e.value = B),
        "onUpdate:currentSort": g[1] || (g[1] = (B) => s.value = B),
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
}), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as BSButton,
  jt as BSCard,
  Ft as BSDropdown,
  Zt as BSDropdownMultiSelect,
  Gt as BSIcon,
  x as BSMultiSelect,
  T as BSPagination,
  qe as BSRadioSelect,
  Le as BSSelect,
  Ge as BSSidebar,
  Qt as DSCList,
  gt as UUList,
  Wt as UUListTypes
};
