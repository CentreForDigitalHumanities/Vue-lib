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
import { defineComponent as m, computed as S, openBlock as s, createElementBlock as r, normalizeClass as z, createElementVNode as d, renderSlot as h, createCommentVNode as f, createVNode as w, unref as c, withCtx as D, toDisplayString as b, resolveComponent as ae, createBlock as v, resolveDynamicComponent as J, Fragment as B, renderList as V, createTextVNode as K, createStaticVNode as se, ref as L, watch as le, onMounted as re } from "vue";
import { v4 as M } from "uuid";
import { useInputValue as E } from "./cdh-vue-lib.composables.es.js";
import { useI18n as N } from "vue-i18n";
const ie = ["href", "target"], ue = { class: "btn-text" }, de = ["type", "name", "disabled"], pe = { class: "btn-text" }, X = /* @__PURE__ */ m({
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
    const t = i, o = S(() => {
      let n = "btn ";
      return t.size === "large" ? n += "btn-lg " : t.size === "small" && (n += "btn-sm "), t.outlined ? n += "btn-outline-" : n += "btn-", n += `${t.variant} `, t.loading && (n += "btn-loading "), t.active && (n += "active "), n;
    });
    return (n, e) => n.href ? (s(), r("a", {
      key: 0,
      href: n.href,
      class: z(o.value),
      target: n.newTab ? "_blank" : "_self"
    }, [
      d("span", ue, [
        h(n.$slots, "default")
      ])
    ], 10, ie)) : (s(), r("button", {
      key: 1,
      type: n.input,
      class: z(o.value),
      name: n.name,
      disabled: n.disabled
    }, [
      d("span", pe, [
        h(n.$slots, "default")
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
  setup(i, { emit: t }) {
    const o = i, n = S(() => typeof o.headerClasses < "u" ? "card-header fw-bold " + o.headerClasses : "card-header fw-bold");
    return (e, l) => (s(), r("div", me, [
      e.$slots.header ? (s(), r("div", {
        key: 0,
        class: z(n.value)
      }, [
        h(e.$slots, "header", {}, void 0, !0)
      ], 2)) : e.$slots.title || e.$slots.header_icon ? (s(), r("div", {
        key: 1,
        class: z(n.value)
      }, [
        d("div", ce, [
          e.$slots.title ? (s(), r("div", fe, [
            h(e.$slots, "title", {}, void 0, !0)
          ])) : f("", !0),
          e.$slots.header_icon ? (s(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: l[0] || (l[0] = (a) => e.$emit("header-icon-clicked"))
          }, [
            h(e.$slots, "header_icon", {}, void 0, !0)
          ])) : f("", !0)
        ])
      ], 2)) : f("", !0),
      e.$slots.image ? (s(), r("div", ge, [
        h(e.$slots, "image", {}, void 0, !0)
      ])) : f("", !0),
      d("div", he, [
        h(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (s(), r("div", ve, [
        h(e.$slots, "footer", {}, void 0, !0)
      ])) : f("", !0)
    ]));
  }
});
const ye = (i, t) => {
  const o = i.__vccOpts || i;
  for (const [n, e] of t)
    o[n] = e;
  return o;
}, Ft = /* @__PURE__ */ ye(be, [["__scopeId", "data-v-06938a02"]]), _e = { class: "dropdown" }, $e = ["aria-labelledby"], Zt = /* @__PURE__ */ m({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const t = i, o = S(() => t.id !== null ? t.id : "id_" + M().toString());
    return (n, e) => (s(), r("div", _e, [
      w(c(X), {
        id: o.value,
        variant: n.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: D(() => [
          h(n.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      d("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        h(n.$slots, "default")
      ], 8, $e)
    ]));
  }
}), ke = { class: "dropdown dropdown-select is-hoverable" }, Se = { class: "dropdown-trigger" }, ze = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu4"
}, we = {
  class: "dropdown-menu",
  role: "menu"
}, Ce = { class: "dropdown-content" }, Gt = /* @__PURE__ */ m({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: t }) {
    return (o, n) => (s(), r("div", ke, [
      d("div", Se, [
        d("button", ze, [
          d("span", null, b(o.label), 1),
          w(c(De), { icon: "angle-down" })
        ])
      ]),
      d("div", we, [
        d("div", Ce, [
          w(c(Y), {
            options: o.options,
            "model-value": o.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": n[0] || (n[0] = (e) => o.$emit("update:modelValue", e))
          }, null, 8, ["options", "model-value"])
        ])
      ])
    ]));
  }
});
const Be = { key: 0 }, Ve = { class: "icon me-1" }, De = /* @__PURE__ */ m({
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
    const t = i, o = S(() => t.inline ? "span" : "div");
    return (n, e) => {
      const l = ae("font-awesome-icon");
      return s(), v(J(o.value), null, {
        default: D(() => [
          n.$slots.default ? (s(), r("span", Be, [
            d("span", Ve, [
              w(l, {
                border: n.border,
                "fixed-width": n.fixedWidth,
                flip: n.flip,
                icon: n.icon,
                mask: n.mask,
                "list-item": n.listItem,
                pull: n.pull,
                pulse: n.pulse,
                rotation: n.rotation,
                "swap-opacity": n.swapOpacity,
                size: n.size,
                spin: n.spin,
                transform: n.transform,
                symbol: n.symbol,
                title: n.title,
                inverse: n.inverse
              }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"])
            ]),
            d("span", null, [
              h(n.$slots, "default")
            ])
          ])) : (s(), v(l, {
            key: 1,
            border: n.border,
            "fixed-width": n.fixedWidth,
            flip: n.flip,
            icon: n.icon,
            mask: n.mask,
            "list-item": n.listItem,
            pull: n.pull,
            pulse: n.pulse,
            rotation: n.rotation,
            "swap-opacity": n.swapOpacity,
            size: n.size,
            spin: n.spin,
            transform: n.transform,
            symbol: n.symbol,
            title: n.title,
            inverse: n.inverse
          }, null, 8, ["border", "fixed-width", "flip", "icon", "mask", "list-item", "pull", "pulse", "rotation", "swap-opacity", "size", "spin", "transform", "symbol", "title", "inverse"]))
        ]),
        _: 3
      });
    };
  }
}), Ue = ["value"], Le = ["value"], Oe = /* @__PURE__ */ m({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: t }) {
    const o = i;
    function n(e) {
      typeof o.modelValue == "string" ? t("update:modelValue", e) : t("update:modelValue", Number(e));
    }
    return (e, l) => (s(), r("div", null, [
      d("select", {
        class: z(["form-select", e.containerClasses]),
        value: e.modelValue,
        onChange: l[0] || (l[0] = (a) => n(c(E)(a)))
      }, [
        (s(!0), r(B, null, V(e.options, ([a, u]) => (s(), r("option", {
          key: a,
          value: a
        }, b(u), 9, Le))), 128))
      ], 42, Ue)
    ]));
  }
}), Ie = ["id", "value", "checked", "onClick"], Pe = ["for"], Y = /* @__PURE__ */ m({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: M().toString() }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: t }) {
    const o = i;
    function n(e) {
      const l = o.modelValue.includes(e);
      let a = [...o.modelValue];
      if (!l)
        a.push(e);
      else {
        const u = a.indexOf(e);
        u > -1 && a.splice(u, 1);
      }
      t("update:modelValue", a);
    }
    return (e, l) => (s(), r("div", null, [
      (s(!0), r(B, null, V(e.options, ([a, u]) => (s(), r("div", {
        key: a,
        class: z(["form-check", e.containerClasses])
      }, [
        d("input", {
          id: "id_" + a + "_" + e.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: a,
          checked: o.modelValue.includes(a),
          onClick: (_) => n(a)
        }, null, 8, Ie),
        d("label", {
          class: "form-check-label",
          for: "id_" + a + "_" + e.uniqueId
        }, b(u), 9, Pe)
      ], 2))), 128))
    ]));
  }
}), Ee = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Ne = ["onClick"], Me = {
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
  setup(i, { emit: t }) {
    const o = i;
    function n(u, _, y) {
      return Math.min(Math.max(u, _), y);
    }
    const e = S(() => {
      const u = o.numOptions, _ = o.currentpage - u, y = o.currentpage + u + 1, P = [], I = [];
      let U;
      for (let $ = 1; $ <= o.maxPages; $++)
        ($ === 1 || $ === o.maxPages || $ >= _ && $ < y) && P.push($);
      for (const $ of P)
        U && ($ - U === 2 ? I.push(U + 1) : $ - U !== 1 && I.push(-42)), I.push($), U = $;
      return I;
    });
    function l(u) {
      u = n(u, 1, o.maxPages), t("change-page", u);
    }
    const { t: a } = N();
    return (u, _) => (s(), r("ul", Ee, [
      d("li", {
        class: z(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[0] || (_[0] = (y) => l(u.currentpage - 1))
        }, b(c(a)("previous")), 1)) : f("", !0)
      ], 2),
      (s(!0), r(B, null, V(e.value, (y) => (s(), r("li", {
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
        }, b(y), 9, Ne)) : (s(), r("span", Me, "…"))
      ], 2))), 128)),
      d("li", {
        class: z(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[1] || (_[1] = (y) => l(u.currentpage + 1))
        }, b(c(a)("next")), 1)) : f("", !0)
      ], 2)
    ]));
  }
});
function G(i) {
  const t = i;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        next: (o) => {
          const { normalize: n } = o;
          return n(["Next"]);
        },
        previous: (o) => {
          const { normalize: n } = o;
          return n(["Previous"]);
        }
      },
      nl: {
        next: (o) => {
          const { normalize: n } = o;
          return n(["Volgende"]);
        },
        previous: (o) => {
          const { normalize: n } = o;
          return n(["Vorige"]);
        }
      }
    }
  });
}
typeof G == "function" && G(T);
const Te = ["id", "value", "checked", "onClick"], qe = ["for"], Re = /* @__PURE__ */ m({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: t }) {
    return (o, n) => (s(), r("div", null, [
      (s(!0), r(B, null, V(o.options, ([e, l]) => (s(), r("div", {
        key: e,
        class: z(["form-check", o.containerClasses])
      }, [
        d("input", {
          id: "id_" + e,
          type: "radio",
          class: "form-check-input",
          value: e,
          checked: o.modelValue == e,
          onClick: (a) => t("update:model-value", e)
        }, null, 8, Te),
        d("label", {
          class: "form-check-label",
          for: "id_" + e
        }, b(l), 9, qe)
      ], 2))), 128))
    ]));
  }
}), je = { class: "uu-sidebar" }, Fe = ["data-bs-target"], Ze = ["id"], Ge = { class: "uu-sidebar-content" }, Qe = /* @__PURE__ */ m({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(i) {
    const t = i, o = S(() => t.id !== null ? t.id : "id_" + M().toString().replace(/-/g, "")), n = S(() => {
      let e = "";
      return t.placement === "right" && (e += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (e += "uu-sidebar-mobile-bottom "), t.stickySidebar && (e += "uu-sidebar-sticky "), t.mobileStickySidebar && (e += "uu-sidebar-mobile-sticky "), e;
    });
    return (e, l) => (s(), r("div", {
      class: z(["uu-sidebar-container", n.value])
    }, [
      d("aside", je, [
        d("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          h(e.$slots, "sidebar-button")
        ], 8, Fe),
        d("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          h(e.$slots, "sidebar")
        ], 8, Ze)
      ]),
      d("div", Ge, [
        h(e.$slots, "default")
      ])
    ], 2));
  }
}), We = { class: "uu-list-filter" }, Ae = { class: "uu-list-filter-label" }, He = {
  key: 3,
  class: "uu-list-filter-field"
}, Je = ["value"], Ke = /* @__PURE__ */ m({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(i, { emit: t }) {
    return (o, n) => (s(), r("div", We, [
      d("div", Ae, b(o.filter.label), 1),
      o.filter.type === "checkbox" ? (s(), v(c(Y), {
        key: 0,
        options: o.filter.options ?? [],
        "model-value": o.value ?? [],
        "onUpdate:modelValue": n[0] || (n[0] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      o.filter.type === "select" ? (s(), v(c(Oe), {
        key: 1,
        options: o.filter.options ?? [],
        "model-value": o.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": n[1] || (n[1] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      o.filter.type === "radio" ? (s(), v(c(Re), {
        key: 2,
        options: o.filter.options ?? [],
        "model-value": o.value ?? "",
        "onUpdate:modelValue": n[2] || (n[2] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      o.filter.type === "date" ? (s(), r("div", He, [
        d("input", {
          type: "date",
          value: o.value,
          class: "form-control",
          onInput: n[3] || (n[3] = (e) => t("update:value", c(E)(e)))
        }, null, 40, Je)
      ])) : f("", !0)
    ]));
  }
}), Xe = { key: 0 }, x = /* @__PURE__ */ m({
  __name: "FilterBar",
  props: {
    filters: {},
    filterValues: {}
  },
  emits: ["update:filter-values"],
  setup(i, { emit: t }) {
    const o = i;
    function n(e, l) {
      let a = { ...o.filterValues };
      a[e] = l, t("update:filter-values", a);
    }
    return (e, l) => e.filters ? (s(), r("div", Xe, [
      (s(!0), r(B, null, V(e.filters, (a) => (s(), v(Ke, {
        key: a.field,
        filter: a,
        value: e.filterValues[a.field] ?? void 0,
        "onUpdate:value": (u) => n(a.field, u)
      }, null, 8, ["filter", "value", "onUpdate:value"]))), 128))
    ])) : f("", !0);
  }
}), Ye = { class: "search" }, xe = ["value", "placeholder"], q = /* @__PURE__ */ m({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: t }) {
    function o(a, u = 500) {
      let _;
      return (...y) => {
        clearTimeout(_), _ = setTimeout(() => {
          a.apply(this, y);
        }, u);
      };
    }
    function n(a) {
      t("update:modelValue", a);
    }
    const e = o((a) => n(a)), { t: l } = N();
    return (a, u) => (s(), r("div", Ye, [
      d("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: c(l)("placeholder"),
        onInput: u[0] || (u[0] = (_) => c(e)(c(E)(_)))
      }, null, 40, xe)
    ]));
  }
});
function Q(i) {
  const t = i;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        placeholder: (o) => {
          const { normalize: n } = o;
          return n(["Search"]);
        }
      },
      nl: {
        placeholder: (o) => {
          const { normalize: n } = o;
          return n(["Zoeken"]);
        }
      }
    }
  });
}
typeof Q == "function" && Q(q);
const et = ["value"], tt = ["value"], ee = /* @__PURE__ */ m({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(i, { emit: t }) {
    const o = i;
    function n(e) {
      if (typeof e == "string")
        try {
          e = Number(e);
        } catch {
          e = o.pageSizeOptions[0] ?? 10;
        }
      t("update:pageSize", e);
    }
    return (e, l) => (s(), r("select", {
      value: e.pageSize,
      class: "form-select",
      onChange: l[0] || (l[0] = (a) => n(c(E)(a)))
    }, [
      (s(!0), r(B, null, V(e.pageSizeOptions, (a) => (s(), r("option", {
        key: a,
        value: a
      }, b(a), 9, tt))), 128))
    ], 40, et));
  }
}), nt = ["value"], ot = ["value"], te = /* @__PURE__ */ m({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(i, { emit: t }) {
    return (o, n) => (s(), r("select", {
      value: o.currentSort,
      class: "form-select",
      onChange: n[0] || (n[0] = (e) => o.$emit("update:current-sort", c(E)(e).trim()))
    }, [
      (s(!0), r(B, null, V(o.sortOptions, ({ field: e, label: l }) => (s(), r("option", {
        key: e,
        value: e
      }, b(l), 9, ot))), 128))
    ], 40, nt));
  }
}), at = { key: 0 }, R = /* @__PURE__ */ m({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(i) {
    const { t } = N();
    return (o, n) => (s(), r("div", null, [
      o.searchQuery ? (s(), r("span", at, b(c(t)("search", { query: o.searchQuery })), 1)) : f("", !0),
      K(" " + b(c(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function W(i) {
  const t = i;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (o) => {
          const { normalize: n, interpolate: e, named: l } = o;
          return n(["Search result: ", e(l("query")), ","]);
        },
        showing: (o) => {
          const { normalize: n, interpolate: e, named: l } = o;
          return n(["showing ", e(l("pageNum")), " of ", e(l("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: n, interpolate: e, named: l } = o;
          return n(["Zoekresultaat: ", e(l("query")), ","]);
        },
        showing: (o) => {
          const { normalize: n, interpolate: e, named: l } = o;
          return n([e(l("pageNum")), " van ", e(l("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof W == "function" && W(R);
const st = { class: "uu-container" }, lt = { class: "uu-list" }, rt = { class: "uu-list-controls" }, it = {
  key: 1,
  class: "uu-list-order-control"
}, ut = { class: "uu-list-page-size-control" }, dt = {
  key: 0,
  class: "uu-list-filters"
}, pt = { class: "uu-list-content" }, mt = /* @__PURE__ */ m({
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
  setup(i, { emit: t }) {
    const o = i, n = S(() => Math.ceil(o.totalData / o.pageSize));
    return (e, l) => {
      var a;
      return s(), r("div", st, [
        d("div", lt, [
          d("div", rt, [
            e.searchEnabled ? (s(), v(q, {
              key: 0,
              "model-value": e.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (u) => e.$emit("update:search", u))
            }, null, 8, ["model-value"])) : f("", !0),
            w(R, {
              "search-query": e.search,
              "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
              "total-num": e.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            e.sortEnabled ? (s(), r("div", it, [
              w(te, {
                "current-sort": e.currentSort,
                "sort-options": e.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (u) => t("update:current-sort", u))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : f("", !0),
            d("div", ut, [
              w(ee, {
                "page-size-options": e.pageSizeOptions,
                "page-size": e.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (u) => t("update:page-size", u))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          e.filtersEnabled ? (s(), r("div", dt, [
            h(e.$slots, "filters-top", {
              data: e.data,
              isLoading: e.isLoading
            }),
            w(x, {
              filters: e.filters,
              "filter-values": e.filterValues,
              "onUpdate:filterValues": l[3] || (l[3] = (u) => e.$emit("update:filter-values", u))
            }, null, 8, ["filters", "filter-values"]),
            h(e.$slots, "filters-bottom", {
              data: e.data,
              isLoading: e.isLoading
            })
          ])) : f("", !0),
          d("div", pt, [
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(c(T), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : f("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ct = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, ft = {
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
  setup(i, { emit: t }) {
    const o = i, n = S(() => Math.ceil(o.totalData / o.pageSize));
    return (e, l) => (s(), v(c(Qe), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        e.searchEnabled ? (s(), v(q, {
          key: 0,
          "model-value": e.search,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.$emit("update:search", a))
        }, null, 8, ["model-value"])) : f("", !0),
        h(e.$slots, "filters-top", {
          data: e.data,
          isLoading: e.isLoading
        }),
        e.filters ? (s(), v(x, {
          key: 1,
          filters: e.filters,
          "filter-values": e.filterValues,
          "onUpdate:filterValues": l[1] || (l[1] = (a) => e.$emit("update:filter-values", a))
        }, null, 8, ["filters", "filter-values"])) : f("", !0),
        h(e.$slots, "filters-bottom", {
          data: e.data,
          isLoading: e.isLoading
        })
      ]),
      default: D(() => {
        var a;
        return [
          d("div", null, [
            d("div", ct, [
              w(R, {
                "search-query": e.search,
                "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
                "total-num": e.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              e.sortEnabled ? (s(), r("div", ft, [
                w(te, {
                  "current-sort": e.currentSort,
                  "sort-options": e.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (u) => t("update:current-sort", u))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : f("", !0),
              d("div", null, [
                w(ee, {
                  "page-size-options": e.pageSizeOptions,
                  "page-size": e.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (u) => t("update:page-size", u))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            h(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(c(T), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : f("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function A(i) {
  const t = i;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (o) => {
          const { normalize: n } = o;
          return n(["Loading...."]);
        },
        no_data: (o) => {
          const { normalize: n } = o;
          return n(["No items to display"]);
        }
      },
      nl: {
        loading: (o) => {
          const { normalize: n } = o;
          return n(["Gegevens worden laden..."]);
        },
        no_data: (o) => {
          const { normalize: n } = o;
          return n(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof A == "function" && A(ne);
const gt = /* @__PURE__ */ m({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (t, o) => (s(), r("pre", null, b(t.data), 1));
  }
}), ht = /* @__PURE__ */ m({
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
  setup(i, { emit: t }) {
    const o = i, n = S(() => {
      switch (o.container) {
        case "sidebar":
          return ne;
        default:
          return mt;
      }
    });
    return (e, l) => (s(), v(J(n.value), {
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
      "onUpdate:search": l[0] || (l[0] = (a) => t("update:search", a)),
      "onUpdate:currentSort": l[1] || (l[1] = (a) => t("update:current-sort", a)),
      "onUpdate:pageSize": l[2] || (l[2] = (a) => t("update:page-size", a)),
      "onUpdate:currentPage": l[3] || (l[3] = (a) => t("update:current-page", a)),
      "onUpdate:filterValues": l[4] || (l[4] = (a) => t("update:filter-values", a))
    }, {
      data: D(({ data: a, isLoading: u }) => [
        h(e.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          w(gt, {
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
}), vt = /* @__PURE__ */ m({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => (s(), r("span", {
      class: z(t.column.classes)
    }, b(t.item[t.column.field]), 3));
  }
}), bt = /* @__PURE__ */ m({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const t = i, o = S(() => {
      let n = null;
      try {
        n = new Date(t.item[t.column.field]);
      } catch (a) {
        return console.error(a), "";
      }
      let e;
      if (t.column.language !== void 0 && t.column.language !== null && (e = t.column.language), typeof t.column.format == "string") {
        let a = null;
        switch (t.column.format) {
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
        return new Intl.DateTimeFormat(e, a).format(n);
      }
      return typeof t.column.format == "object" && t.column.format !== null ? new Intl.DateTimeFormat(
        e,
        t.column.format
      ).format(n) : new Intl.DateTimeFormat(e).format(n);
    });
    return (n, e) => (s(), r("span", {
      class: z(n.column.classes)
    }, b(o.value), 3));
  }
}), yt = { key: 0 }, _t = /* @__PURE__ */ m({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.item[t.column.field] ? (s(), r("span", yt, [
      w(c(X), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: D(() => [
          K(b(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : f("", !0);
  }
}), $t = { key: 0 }, kt = ["href", "target"], St = /* @__PURE__ */ m({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.item[t.column.field] ? (s(), r("span", $t, [
      d("a", {
        href: t.item[t.column.field].link,
        class: z(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, b(t.item[t.column.field].text), 11, kt)
    ])) : f("", !0);
  }
}), zt = ["innerHTML"], wt = /* @__PURE__ */ m({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => (s(), r("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, zt));
  }
}), Ct = {
  key: 0,
  class: "dropdown"
}, Bt = /* @__PURE__ */ se('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), Vt = { class: "dropdown-menu" }, Dt = {
  key: 0,
  class: "dropdown-divider"
}, Ut = ["href", "target"], Lt = /* @__PURE__ */ m({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const t = i, o = S(() => t.item[t.column.field].entries());
    return (n, e) => o.value ? (s(), r("div", Ct, [
      Bt,
      d("ul", Vt, [
        (s(!0), r(B, null, V(o.value, ([l, a]) => (s(), r("li", { key: l }, [
          a.divider ? (s(), r("hr", Dt)) : (s(), r("a", {
            key: 1,
            href: a.link,
            class: z(["dropdown-item", a.classes ?? ""]),
            target: a.new_tab ? "_blank" : "_self"
          }, b(a.text), 11, Ut))
        ]))), 128))
      ])
    ])) : f("", !0);
  }
}), Ot = /* @__PURE__ */ m({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.column.type == "string" ? (s(), v(vt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (s(), v(bt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (s(), v(_t, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (s(), v(St, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (s(), v(wt, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (s(), v(Lt, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : f("", !0);
  }
}), It = /* @__PURE__ */ m({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(i) {
    return (t, o) => (s(), r("tr", null, [
      (s(!0), r(B, null, V(t.columns, (n) => (s(), r("td", {
        key: n.field,
        class: "align-middle"
      }, [
        w(Ot, {
          column: n,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Pt = {
  key: 0,
  class: "alert alert-info w-100"
}, Et = { key: 0 }, Nt = { key: 1 }, Mt = ["colspan"], oe = /* @__PURE__ */ m({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const t = i, o = S(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: n } = N();
    return (e, l) => e.isLoading && o.value ? (s(), r("div", Pt, b(c(n)("loading")), 1)) : (s(), r("table", {
      key: 1,
      class: z(["table", e.isLoading ? "loading" : ""])
    }, [
      d("thead", null, [
        d("tr", null, [
          (s(!0), r(B, null, V(e.columns, (a) => (s(), r("th", {
            key: a.field
          }, b(a.label), 1))), 128))
        ])
      ]),
      o.value ? (s(), r("tbody", Nt, [
        d("tr", null, [
          d("td", {
            colspan: e.columns.length
          }, b(c(n)("no_data")), 9, Mt)
        ])
      ])) : (s(), r("tbody", Et, [
        (s(!0), r(B, null, V(e.data, (a) => (s(), v(It, {
          key: a.id,
          item: a,
          columns: e.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function H(i) {
  const t = i;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (o) => {
          const { normalize: n } = o;
          return n(["Loading...."]);
        },
        no_data: (o) => {
          const { normalize: n } = o;
          return n(["No items to display"]);
        }
      },
      nl: {
        loading: (o) => {
          const { normalize: n } = o;
          return n(["Gegevens worden laden..."]);
        },
        no_data: (o) => {
          const { normalize: n } = o;
          return n(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof H == "function" && H(oe);
const Qt = /* @__PURE__ */ m({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const t = i, o = L(t.config.pageSize), n = L(1), e = L(""), l = L("id"), a = L(!0);
    function u() {
      var g;
      let p = {};
      return (g = t.config.filters) == null || g.forEach((k) => {
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
    const _ = L(u());
    let y = L(null);
    const P = S(() => {
      let p = [];
      p.push("page_size=" + encodeURIComponent(o.value));
      for (const [g, k] of Object.entries(_.value))
        k != null && (typeof k == "object" ? k.forEach(
          (O) => p.push(g + "=" + encodeURIComponent(O))
        ) : p.push(g + "=" + encodeURIComponent(k)));
      return e.value && p.push("search=" + encodeURIComponent(e.value)), p.push("ordering=" + encodeURIComponent(l.value)), n.value = 1, p;
    }), I = S(() => {
      let p = P.value, g = "page=" + encodeURIComponent(n.value);
      return p.length !== 0 && (g = "&" + g), "?" + p.join("&") + g;
    }), U = S(() => {
      let p = new URL(window.location.protocol + "//" + window.location.host);
      return p.pathname = t.config.dataUri, p.search = I.value, console.log(p.toString()), p.toString();
    });
    le(U, () => {
      j();
    });
    const $ = L(null);
    function j() {
      $.value && $.value.abort(), $.value = new AbortController(), a.value = !0, fetch(U.value, { signal: $.value.signal }).then((p) => {
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
      return s(), v(ht, {
        "is-loading": a.value,
        data: ((k = c(y)) == null ? void 0 : k.results) ?? void 0,
        "total-data": ((O = c(y)) == null ? void 0 : O.count) ?? 0,
        "search-enabled": p.config.searchEnabled,
        search: e.value,
        "sort-enabled": p.config.sortEnabled,
        "current-sort": l.value,
        "page-size-options": p.config.pageSizeOptions,
        "sort-options": p.config.sortOptions ?? [],
        "page-size": ((F = c(y)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": n.value,
        "filters-enabled": p.config.filtersEnabled,
        filters: p.config.filters ?? [],
        "filter-values": _.value,
        container: p.config.container,
        "onUpdate:search": g[0] || (g[0] = (C) => e.value = C),
        "onUpdate:currentSort": g[1] || (g[1] = (C) => l.value = C),
        "onUpdate:pageSize": g[2] || (g[2] = (C) => o.value = C),
        "onUpdate:currentPage": g[3] || (g[3] = (C) => n.value = C),
        "onUpdate:filterValues": g[4] || (g[4] = (C) => _.value = C)
      }, {
        data: D(({ data: C, isLoading: Z }) => [
          h(p.$slots, "data", {
            data: C,
            isLoading: Z
          }, () => [
            w(oe, {
              data: C,
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
  X as BSButton,
  Ft as BSCard,
  Zt as BSDropdown,
  Gt as BSDropdownMultiSelect,
  De as BSIcon,
  Y as BSMultiSelect,
  T as BSPagination,
  Re as BSRadioSelect,
  Oe as BSSelect,
  Qe as BSSidebar,
  Qt as DSCList,
  ht as UUList,
  Wt as UUListTypes
};
