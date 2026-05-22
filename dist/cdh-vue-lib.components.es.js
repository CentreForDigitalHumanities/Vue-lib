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
import { _ as N, u as O, b as J } from "./BSPagination-68a9cc37.js";
import { a as Gt } from "./BSPagination-68a9cc37.js";
import { defineComponent as f, computed as $, openBlock as r, createElementBlock as i, normalizeClass as w, renderSlot as y, createElementVNode as m, createCommentVNode as h, createVNode as S, unref as g, withCtx as C, ref as U, toDisplayString as k, createBlock as _, resolveDynamicComponent as K, Fragment as V, renderList as B, createTextVNode as X, createStaticVNode as le, watch as re, onMounted as ie } from "vue";
import { v4 as ue } from "uuid";
import { FontAwesomeIcon as G } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import { useI18n as M } from "vue-i18n";
const de = { class: "card" }, pe = { class: "d-flex" }, me = {
  key: 0,
  class: "me-auto"
}, ce = {
  key: 2,
  class: "card-image-top"
}, fe = { class: "card-body" }, ge = {
  key: 3,
  class: "card-footer"
}, ve = /* @__PURE__ */ f({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(u, { emit: t }) {
    const o = u, e = $(() => o.headerClasses ? `card-header fw-bold ${o.headerClasses}` : "card-header fw-bold");
    return (s, a) => (r(), i("div", de, [
      s.$slots.header ? (r(), i("div", {
        key: 0,
        class: w(e.value)
      }, [
        y(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (r(), i("div", {
        key: 1,
        class: w(e.value)
      }, [
        m("div", pe, [
          s.$slots.title ? (r(), i("div", me, [
            y(s.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          s.$slots.header_icon ? (r(), i("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: a[0] || (a[0] = (n) => s.$emit("header-icon-clicked"))
          }, [
            y(s.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      s.$slots.image ? (r(), i("div", ce, [
        y(s.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      m("div", fe, [
        y(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (r(), i("div", ge, [
        y(s.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
}), he = (u, t) => {
  const o = u.__vccOpts || u;
  for (const [e, s] of t)
    o[e] = s;
  return o;
}, Nt = /* @__PURE__ */ he(ve, [["__scopeId", "data-v-533879f9"]]);
function E() {
  return "id_" + ue().toString().replace(/-/g, "");
}
const be = { class: "dropdown" }, ye = ["aria-labelledby"], Mt = /* @__PURE__ */ f({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(u) {
    const t = u, o = $(() => t.id ?? E());
    return (e, s) => (r(), i("div", be, [
      S(g(N), {
        id: o.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: C(() => [
          y(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      m("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        y(e.$slots, "default")
      ], 8, ye)
    ]));
  }
}), _e = { class: "dropdown dropdown-select is-hoverable" }, $e = { class: "me-2" }, ke = ["id"], Se = { class: "dropdown-content ps-4" }, qt = /* @__PURE__ */ f({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const o = U(E());
    return (e, s) => (r(), i("div", _e, [
      S(N, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: C(() => [
          m("span", $e, k(e.label), 1)
        ]),
        _: 1
      }),
      m("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        m("div", Se, [
          S(g(Y), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": s[0] || (s[0] = (a) => e.$emit("update:modelValue", a))
          }, null, 8, ["options", "model-value"])
        ])
      ], 8, ke)
    ]));
  }
}), ze = { key: 0 }, we = { class: "icon me-1" }, Rt = /* @__PURE__ */ f({
  __name: "BSIcon",
  props: {
    inline: { type: Boolean, default: !1 },
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    icon: {},
    listItem: { type: Boolean },
    pulse: { type: Boolean },
    swapOpacity: { type: Boolean },
    spin: { type: Boolean },
    symbol: { type: [Boolean, String], default: !1 },
    inverse: { type: Boolean },
    flip: {},
    mask: {},
    pull: {},
    rotation: {},
    size: {},
    title: {},
    transform: {}
  },
  setup(u) {
    const t = u, o = $(() => t.inline ? "span" : "div");
    return (e, s) => (r(), _(K(o.value), null, {
      default: C(() => [
        e.$slots.default ? (r(), i("span", ze, [
          m("span", we, [
            S(g(G), {
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
          m("span", null, [
            y(e.$slots, "default")
          ])
        ])) : (r(), _(g(G), {
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
    }));
  }
}), Ce = ["value"], Ve = {
  key: 0,
  disabled: "",
  value: ""
}, Be = ["value"], P = "___NULL_VALUE___", Ue = /* @__PURE__ */ f({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = u, e = t, s = $(() => o.modelValue === null ? P : o.modelValue), a = $(() => o.options.map((l) => {
      const [p, d] = l;
      return [p === null ? P : p, d];
    }));
    function n(l) {
      const p = o.options.find((d) => l === P ? d[0] === null : String(d[0]) === l);
      p && e("update:model-value", p[0]);
    }
    return (l, p) => (r(), i("div", null, [
      m("select", {
        class: w(["form-select", l.containerClasses]),
        value: s.value,
        onChange: p[0] || (p[0] = (d) => n(g(O)(d)))
      }, [
        l.placeholder ? (r(), i("option", Ve, k(l.placeholder), 1)) : h("", !0),
        (r(!0), i(V, null, B(a.value, ([d, D]) => (r(), i("option", {
          key: d,
          value: d
        }, k(D), 9, Be))), 128))
      ], 42, Ce)
    ]));
  }
}), De = ["id", "value", "checked", "onClick"], Le = ["for"], Y = /* @__PURE__ */ f({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => E() }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function s(a) {
      const n = o.modelValue.includes(a), l = [...o.modelValue], p = l.indexOf(a);
      n ? p > -1 && l.splice(p, 1) : l.push(a), e("update:model-value", l);
    }
    return (a, n) => (r(), i("div", null, [
      (r(!0), i(V, null, B(a.options, ([l, p]) => (r(), i("div", {
        key: l,
        class: w(["form-check", a.containerClasses])
      }, [
        m("input", {
          id: `${a.uniqueId}-${l}`,
          type: "checkbox",
          class: "form-check-input",
          value: l,
          checked: o.modelValue.includes(l),
          onClick: (d) => s(l)
        }, null, 8, De),
        m("label", {
          class: "form-check-label",
          for: `${a.uniqueId}-${l}`
        }, k(p), 9, Le)
      ], 2))), 128))
    ]));
  }
}), Oe = ["id", "value", "checked", "onClick"], Ie = ["for"], Ee = /* @__PURE__ */ f({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, s) => (r(), i("div", null, [
      (r(!0), i(V, null, B(e.options, ([a, n]) => (r(), i("div", {
        key: a,
        class: w(["form-check", e.containerClasses])
      }, [
        m("input", {
          id: "id_" + a,
          type: "radio",
          class: "form-check-input",
          value: a,
          checked: e.modelValue == a,
          onClick: (l) => o("update:model-value", a)
        }, null, 8, Oe),
        m("label", {
          class: "form-check-label",
          for: "id_" + a
        }, k(n), 9, Ie)
      ], 2))), 128))
    ]));
  }
}), Pe = { class: "uu-sidebar" }, Ne = ["data-bs-target"], Me = ["id"], qe = { class: "uu-sidebar-content" }, Re = /* @__PURE__ */ f({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = E(), e = $(() => t.id ?? o), s = $(() => {
      const a = [];
      return t.placement === "right" && a.push("uu-sidebar-right"), t.mobilePlacement === "bottom" && a.push("uu-sidebar-mobile-bottom"), t.stickySidebar && a.push("uu-sidebar-sticky"), t.mobileStickySidebar && a.push("uu-sidebar-mobile-sticky"), a.join(" ");
    });
    return (a, n) => (r(), i("div", {
      class: w(["uu-sidebar-container", s.value])
    }, [
      m("aside", Pe, [
        m("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + e.value,
          "aria-expanded": "false"
        }, [
          y(a.$slots, "sidebar-button")
        ], 8, Ne),
        m("div", {
          id: e.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          y(a.$slots, "sidebar")
        ], 8, Me)
      ]),
      m("section", qe, [
        y(a.$slots, "default")
      ])
    ], 2));
  }
}), Te = { class: "uu-list-filter" }, je = { class: "uu-list-filter-label" }, Fe = {
  key: 3,
  class: "uu-list-filter-field"
}, Ae = ["value"], Ge = /* @__PURE__ */ f({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, s) => (r(), i("div", Te, [
      m("div", je, k(e.filter.label), 1),
      e.filter.type === "checkbox" ? (r(), _(g(Y), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": s[0] || (s[0] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "select" ? (r(), _(g(Ue), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": s[1] || (s[1] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "radio" ? (r(), _(g(Ee), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": s[2] || (s[2] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "date" ? (r(), i("div", Fe, [
        m("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: s[3] || (s[3] = (a) => o("update:value", g(O)(a)))
        }, null, 40, Ae)
      ])) : h("", !0)
    ]));
  }
}), x = /* @__PURE__ */ f({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(u, { emit: t }) {
    const o = u, e = $(() => o.filterProps.filters), s = $(() => o.filterProps.filterValues), a = t;
    function n(l, p) {
      let d = { ...s.value };
      d[l] = p, a("update:filter-values", d);
    }
    return (l, p) => (r(!0), i(V, null, B(e.value, (d) => (r(), _(Ge, {
      key: d.field,
      filter: d,
      value: s.value[d.field],
      "onUpdate:value": (D) => n(d.field, D)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), Ze = { class: "search" }, Qe = ["value", "placeholder"], q = /* @__PURE__ */ f({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    function o(l, p = 500) {
      let d;
      return (...D) => {
        clearTimeout(d), d = setTimeout(() => {
          l(...D);
        }, p);
      };
    }
    const e = t;
    function s(l) {
      e("update:model-value", l);
    }
    const a = o((l) => s(l)), { t: n } = M();
    return (l, p) => (r(), i("div", Ze, [
      m("input", {
        id: "search",
        class: "form-control",
        value: l.modelValue,
        placeholder: g(n)("placeholder"),
        onInput: p[0] || (p[0] = (d) => g(a)(g(O)(d)))
      }, null, 40, Qe)
    ]));
  }
});
function Z(u) {
  const t = u;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        placeholder: (o) => {
          const { normalize: e } = o;
          return e(["Search"]);
        }
      },
      nl: {
        placeholder: (o) => {
          const { normalize: e } = o;
          return e(["Zoeken"]);
        }
      }
    }
  });
}
typeof Z == "function" && Z(q);
const He = ["value"], We = ["value"], ee = /* @__PURE__ */ f({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:page-size"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function s(a) {
      if (typeof a == "string") {
        const n = parseInt(a);
        isNaN(n) ? a = o.pageSizeOptions[0] ?? 10 : a = n;
      }
      e("update:page-size", a);
    }
    return (a, n) => (r(), i("select", {
      value: a.pageSize,
      class: "form-select",
      onChange: n[0] || (n[0] = (l) => s(g(O)(l)))
    }, [
      (r(!0), i(V, null, B(a.pageSizeOptions, (l) => (r(), i("option", {
        key: l,
        value: l
      }, k(l), 9, We))), 128))
    ], 40, He));
  }
}), Je = ["value"], Ke = ["value"], te = /* @__PURE__ */ f({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort"],
  setup(u, { emit: t }) {
    return (o, e) => (r(), i("select", {
      value: o.currentSort,
      class: "form-select",
      onChange: e[0] || (e[0] = (s) => o.$emit("update:current-sort", g(O)(s).trim()))
    }, [
      (r(!0), i(V, null, B(o.sortOptions, ({ field: s, label: a }) => (r(), i("option", {
        key: s,
        value: s
      }, k(a), 9, Ke))), 128))
    ], 40, Je));
  }
}), Xe = { key: 0 }, R = /* @__PURE__ */ f({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(u) {
    const { t } = M();
    return (o, e) => (r(), i("div", null, [
      o.searchQuery ? (r(), i("span", Xe, k(g(t)("search", { query: o.searchQuery })), 1)) : h("", !0),
      X(" " + k(g(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function Q(u) {
  const t = u;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: a } = o;
          return e(["Search result: ", s(a("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: a } = o;
          return e(["showing ", s(a("pageNum")), " of ", s(a("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: a } = o;
          return e(["Zoekresultaat: ", s(a("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: a } = o;
          return e([s(a("pageNum")), " van ", s(a("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof Q == "function" && Q(R);
function oe(u) {
  const { filters: t, filterValues: o } = u;
  return !t || !o ? null : { filters: t, filterValues: o };
}
const Ye = { class: "uu-container" }, xe = { class: "uu-list" }, et = { class: "uu-list-controls" }, tt = {
  key: 1,
  class: "uu-list-order-control"
}, ot = { class: "uu-list-page-size-control" }, nt = {
  key: 0,
  class: "uu-list-filters"
}, at = { class: "uu-list-content" }, st = /* @__PURE__ */ f({
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
  setup(u, { emit: t }) {
    const o = u, e = t, s = $(() => Math.ceil(o.totalData / o.pageSize)), a = $(() => oe(o));
    return (n, l) => {
      var p;
      return r(), i("div", Ye, [
        m("div", xe, [
          m("div", et, [
            n.searchEnabled ? (r(), _(q, {
              key: 0,
              "model-value": n.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (d) => n.$emit("update:search", d))
            }, null, 8, ["model-value"])) : h("", !0),
            S(R, {
              "search-query": n.search,
              "page-num": ((p = n.data) == null ? void 0 : p.length) ?? 0,
              "total-num": n.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            n.sortEnabled ? (r(), i("div", tt, [
              S(te, {
                "current-sort": n.currentSort,
                "sort-options": n.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (d) => e("update:current-sort", d))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : h("", !0),
            m("div", ot, [
              S(ee, {
                "page-size-options": n.pageSizeOptions,
                "page-size": n.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (d) => e("update:page-size", d))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          n.filtersEnabled && a.value ? (r(), i("div", nt, [
            y(n.$slots, "filters-top", {
              data: n.data,
              isLoading: n.isLoading
            }),
            S(x, {
              "filter-props": a.value,
              "onUpdate:filterValues": l[3] || (l[3] = (d) => n.$emit("update:filter-values", d))
            }, null, 8, ["filter-props"]),
            y(n.$slots, "filters-bottom", {
              data: n.data,
              isLoading: n.isLoading
            })
          ])) : h("", !0),
          m("div", at, [
            y(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (r(), _(g(J), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: l[4] || (l[4] = (d) => n.$emit("update:current-page", d))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), lt = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, rt = {
  key: 0,
  class: "ms-auto"
}, ne = /* @__PURE__ */ f({
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
  setup(u, { emit: t }) {
    const o = u, e = t, s = $(() => Math.ceil(o.totalData / o.pageSize)), a = $(() => oe(o));
    return (n, l) => (r(), _(g(Re), { class: "uu-list-sidebar" }, {
      sidebar: C(() => [
        n.searchEnabled ? (r(), _(q, {
          key: 0,
          "model-value": n.search,
          "onUpdate:modelValue": l[0] || (l[0] = (p) => n.$emit("update:search", p))
        }, null, 8, ["model-value"])) : h("", !0),
        y(n.$slots, "filters-top", {
          data: n.data,
          isLoading: n.isLoading
        }),
        a.value ? (r(), _(x, {
          key: 1,
          "filter-props": a.value,
          "onUpdate:filterValues": l[1] || (l[1] = (p) => n.$emit("update:filter-values", p))
        }, null, 8, ["filter-props"])) : h("", !0),
        y(n.$slots, "filters-bottom", {
          data: n.data,
          isLoading: n.isLoading
        })
      ]),
      default: C(() => {
        var p;
        return [
          m("div", null, [
            m("div", lt, [
              S(R, {
                "search-query": n.search,
                "page-num": ((p = n.data) == null ? void 0 : p.length) ?? 0,
                "total-num": n.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              n.sortEnabled ? (r(), i("div", rt, [
                S(te, {
                  "current-sort": n.currentSort,
                  "sort-options": n.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (d) => e("update:current-sort", d))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : h("", !0),
              m("div", null, [
                S(ee, {
                  "page-size-options": n.pageSizeOptions,
                  "page-size": n.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (d) => e("update:page-size", d))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            y(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (r(), _(g(J), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: l[4] || (l[4] = (d) => n.$emit("update:current-page", d))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function H(u) {
  const t = u;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (o) => {
          const { normalize: e } = o;
          return e(["Loading...."]);
        },
        no_data: (o) => {
          const { normalize: e } = o;
          return e(["No items to display"]);
        }
      },
      nl: {
        loading: (o) => {
          const { normalize: e } = o;
          return e(["Gegevens worden laden..."]);
        },
        no_data: (o) => {
          const { normalize: e } = o;
          return e(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof H == "function" && H(ne);
const it = /* @__PURE__ */ f({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    return (t, o) => (r(), i("pre", null, k(t.data), 1));
  }
}), ut = /* @__PURE__ */ f({
  __name: "UUList",
  props: {
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
    filterValues: {},
    container: { default: "default" }
  },
  emits: ["update:current-page", "update:search", "update:current-sort", "update:page-size", "update:filter-values"],
  setup(u, { emit: t }) {
    const o = u, e = t, s = $(() => o.container === "sidebar" ? ne : st);
    return (a, n) => (r(), _(K(s.value), {
      "is-loading": a.isLoading,
      data: a.data,
      "total-data": a.totalData,
      "search-enabled": a.searchEnabled,
      search: a.search,
      "sort-enabled": a.sortEnabled,
      "current-sort": a.currentSort,
      "current-page": a.currentPage,
      "page-size-options": a.pageSizeOptions,
      "sort-options": a.sortOptions,
      "page-size": a.pageSize,
      "filters-enabled": a.filtersEnabled,
      filters: a.filters,
      "filter-values": a.filterValues,
      "onUpdate:search": n[0] || (n[0] = (l) => e("update:search", l)),
      "onUpdate:currentSort": n[1] || (n[1] = (l) => e("update:current-sort", l)),
      "onUpdate:pageSize": n[2] || (n[2] = (l) => e("update:page-size", l)),
      "onUpdate:currentPage": n[3] || (n[3] = (l) => e("update:current-page", l)),
      "onUpdate:filterValues": n[4] || (n[4] = (l) => e("update:filter-values", l))
    }, {
      data: C(({ data: l, isLoading: p }) => [
        y(a.$slots, "data", {
          data: l,
          isLoading: p
        }, () => [
          S(it, {
            data: l,
            "is-loading": p
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": C(({ data: l, isLoading: p }) => [
        y(a.$slots, "filters-top", {
          data: l,
          isLoading: p
        })
      ]),
      "filters-bottom": C(({ data: l, isLoading: p }) => [
        y(a.$slots, "filters-bottom", {
          data: l,
          isLoading: p
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), dt = /* @__PURE__ */ f({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (r(), i("span", {
      class: w(t.column.classes)
    }, k(t.item[t.column.field]), 3));
  }
}), pt = /* @__PURE__ */ f({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    const t = u, o = $(() => {
      let e = null;
      try {
        e = new Date(t.item[t.column.field]);
      } catch (n) {
        return console.error(n), "";
      }
      let s;
      if (t.column.language !== void 0 && t.column.language !== null && (s = t.column.language), typeof t.column.format == "string") {
        let n = null;
        switch (t.column.format) {
          case "date":
            n = {
              dateStyle: "medium"
            };
            break;
          case "time":
            n = {
              timeStyle: "short"
            };
            break;
          case "datetime":
            n = {
              dateStyle: "medium",
              timeStyle: "short"
            };
            break;
        }
        return new Intl.DateTimeFormat(s, n).format(e);
      }
      return typeof t.column.format == "object" && t.column.format !== null ? new Intl.DateTimeFormat(
        s,
        t.column.format
      ).format(e) : new Intl.DateTimeFormat(s).format(e);
    });
    return (e, s) => (r(), i("span", {
      class: w(e.column.classes)
    }, k(o.value), 3));
  }
}), mt = { key: 0 }, ct = /* @__PURE__ */ f({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (r(), i("span", mt, [
      S(g(N), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: C(() => [
          X(k(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : h("", !0);
  }
}), ft = { key: 0 }, gt = ["href", "target"], vt = /* @__PURE__ */ f({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (r(), i("span", ft, [
      m("a", {
        href: t.item[t.column.field].link,
        class: w(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, k(t.item[t.column.field].text), 11, gt)
    ])) : h("", !0);
  }
}), ht = ["innerHTML"], bt = /* @__PURE__ */ f({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (r(), i("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, ht));
  }
}), yt = {
  key: 0,
  class: "dropdown"
}, _t = { class: "dropdown-menu" }, $t = {
  key: 0,
  class: "dropdown-divider"
}, kt = ["href", "target"], St = /* @__PURE__ */ f({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    const t = u, o = $(() => t.item[t.column.field].entries());
    return (e, s) => o.value ? (r(), i("div", yt, [
      s[0] || (s[0] = le('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      m("ul", _t, [
        (r(!0), i(V, null, B(o.value, ([a, n]) => (r(), i("li", { key: a }, [
          n.divider ? (r(), i("hr", $t)) : (r(), i("a", {
            key: 1,
            href: n.link,
            class: w(["dropdown-item", n.classes ?? ""]),
            target: n.new_tab ? "_blank" : "_self"
          }, k(n.text), 11, kt))
        ]))), 128))
      ])
    ])) : h("", !0);
  }
}), zt = /* @__PURE__ */ f({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.column.type == "string" ? (r(), _(dt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (r(), _(pt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (r(), _(ct, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (r(), _(vt, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (r(), _(bt, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (r(), _(St, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : h("", !0);
  }
}), wt = /* @__PURE__ */ f({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(u) {
    return (t, o) => (r(), i("tr", null, [
      (r(!0), i(V, null, B(t.columns, (e) => (r(), i("td", {
        key: e.field,
        class: "align-middle"
      }, [
        S(zt, {
          column: e,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ct = {
  key: 0,
  class: "alert alert-info w-100"
}, Vt = { key: 0 }, Bt = { key: 1 }, Ut = ["colspan"], ae = /* @__PURE__ */ f({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = $(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = M();
    return (s, a) => s.isLoading && o.value ? (r(), i("div", Ct, k(g(e)("loading")), 1)) : (r(), i("table", {
      key: 1,
      class: w(["table", s.isLoading ? "loading" : ""])
    }, [
      m("thead", null, [
        m("tr", null, [
          (r(!0), i(V, null, B(s.columns, (n) => (r(), i("th", {
            key: n.field
          }, k(n.label), 1))), 128))
        ])
      ]),
      o.value ? (r(), i("tbody", Bt, [
        m("tr", null, [
          m("td", {
            colspan: s.columns.length
          }, k(g(e)("no_data")), 9, Ut)
        ])
      ])) : (r(), i("tbody", Vt, [
        (r(!0), i(V, null, B(s.data, (n) => (r(), _(wt, {
          key: n.id,
          item: n,
          columns: s.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function W(u) {
  const t = u;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        loading: (o) => {
          const { normalize: e } = o;
          return e(["Loading...."]);
        },
        no_data: (o) => {
          const { normalize: e } = o;
          return e(["No items to display"]);
        }
      },
      nl: {
        loading: (o) => {
          const { normalize: e } = o;
          return e(["Gegevens worden laden..."]);
        },
        no_data: (o) => {
          const { normalize: e } = o;
          return e(["Geen gegevens om te tonen"]);
        }
      }
    }
  });
}
typeof W == "function" && W(ae);
const Tt = /* @__PURE__ */ f({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(u) {
    const t = u, o = U(t.config.pageSize), e = U(1), s = U(""), a = U("id"), n = U(!0);
    function l() {
      var v;
      let c = {};
      return (v = t.config.filters) == null || v.forEach((b) => {
        var L;
        if (b.initial) {
          c[b.field] = b.initial;
          return;
        }
        switch (b.type) {
          case "date":
            c[b.field] = null;
            break;
          case "checkbox":
            c[b.field] = [];
            break;
          case "radio":
            ((L = b.options) == null ? void 0 : L.length) != 0 && b.options && (c[b.field] = b.options[0][0]);
            break;
        }
      }), c;
    }
    const p = U(l());
    let d = U(null);
    const D = $(() => {
      let c = [];
      c.push("page_size=" + encodeURIComponent(o.value));
      for (const [v, b] of Object.entries(p.value))
        b != null && (typeof b == "object" ? b.forEach(
          (L) => c.push(v + "=" + encodeURIComponent(L))
        ) : c.push(v + "=" + encodeURIComponent(b)));
      return s.value && c.push("search=" + encodeURIComponent(s.value)), c.push("ordering=" + encodeURIComponent(a.value)), e.value = 1, c;
    }), se = $(() => {
      let c = D.value, v = "page=" + encodeURIComponent(e.value);
      return c.length !== 0 && (v = "&" + v), "?" + c.join("&") + v;
    }), T = $(() => {
      let c = new URL(window.location.protocol + "//" + window.location.host);
      return c.pathname = t.config.dataUri, c.search = se.value, c.toString();
    });
    re(T, () => {
      j();
    });
    const I = U(null);
    function j() {
      var c;
      (c = I.value) == null || c.abort(), I.value = new AbortController(), n.value = !0, fetch(T.value, { signal: I.value.signal }).then((v) => {
        v.json().then((b) => {
          d.value = b, n.value = !1, b.ordering && (a.value = b.ordering), I.value = null;
        });
      }).catch((v) => {
        console.log(v);
      });
    }
    return ie(() => {
      j();
    }), (c, v) => {
      var b, L, F;
      return r(), _(ut, {
        "is-loading": n.value,
        data: ((b = g(d)) == null ? void 0 : b.results) ?? void 0,
        "total-data": ((L = g(d)) == null ? void 0 : L.count) ?? 0,
        "search-enabled": c.config.searchEnabled,
        search: s.value,
        "sort-enabled": c.config.sortEnabled,
        "current-sort": a.value,
        "page-size-options": c.config.pageSizeOptions,
        "sort-options": c.config.sortOptions ?? [],
        "page-size": ((F = g(d)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": c.config.filtersEnabled,
        filters: c.config.filters ?? [],
        "filter-values": p.value,
        container: c.config.container,
        "onUpdate:search": v[0] || (v[0] = (z) => s.value = z),
        "onUpdate:currentSort": v[1] || (v[1] = (z) => a.value = z),
        "onUpdate:pageSize": v[2] || (v[2] = (z) => o.value = z),
        "onUpdate:currentPage": v[3] || (v[3] = (z) => e.value = z),
        "onUpdate:filterValues": v[4] || (v[4] = (z) => p.value = z)
      }, {
        data: C(({ data: z, isLoading: A }) => [
          y(c.$slots, "data", {
            data: z,
            isLoading: A
          }, () => [
            S(ae, {
              data: z,
              columns: c.config.columns,
              "is-loading": A
            }, null, 8, ["data", "columns", "is-loading"])
          ])
        ]),
        _: 3
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  N as BSButton,
  Nt as BSCard,
  Mt as BSDropdown,
  qt as BSDropdownMultiSelect,
  Rt as BSIcon,
  Gt as BSModal,
  Y as BSMultiSelect,
  J as BSPagination,
  Ee as BSRadioSelect,
  Ue as BSSelect,
  Re as BSSidebar,
  Tt as DSCList,
  ut as UUList,
  jt as UUListTypes
};
