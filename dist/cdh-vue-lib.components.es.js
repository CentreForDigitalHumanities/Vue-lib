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
import { defineComponent as c, computed as z, openBlock as s, createElementBlock as r, normalizeClass as w, createElementVNode as d, renderSlot as f, createCommentVNode as g, createVNode as S, unref as h, withCtx as D, resolveComponent as M, toDisplayString as b, createBlock as v, resolveDynamicComponent as K, Fragment as B, renderList as V, createTextVNode as X, createStaticVNode as ae, ref as L, watch as se, onMounted as le } from "vue";
import { v4 as T } from "uuid";
import { useI18n as E } from "vue-i18n";
import { useInputValue as N } from "./cdh-vue-lib.composables.es.js";
const re = ["href", "target"], ie = { class: "btn-text" }, ue = ["type", "name", "disabled"], de = { class: "btn-text" }, Y = /* @__PURE__ */ c({
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
    const t = i, o = z(() => {
      let n = "btn ";
      return t.size === "large" ? n += "btn-lg " : t.size === "small" && (n += "btn-sm "), t.outlined ? n += "btn-outline-" : n += "btn-", n += `${t.variant} `, t.loading && (n += "btn-loading "), t.active && (n += "active "), n;
    });
    return (n, e) => n.href ? (s(), r("a", {
      key: 0,
      href: n.href,
      class: w(o.value),
      target: n.newTab ? "_blank" : "_self"
    }, [
      d("span", ie, [
        f(n.$slots, "default")
      ])
    ], 10, re)) : (s(), r("button", {
      key: 1,
      type: n.input,
      class: w(o.value),
      name: n.name,
      disabled: n.disabled
    }, [
      d("span", de, [
        f(n.$slots, "default")
      ])
    ], 10, ue));
  }
}), pe = { class: "card" }, ce = { class: "d-flex" }, me = {
  key: 0,
  class: "me-auto"
}, fe = {
  key: 2,
  class: "card-image-top"
}, ge = { class: "card-body" }, he = {
  key: 3,
  class: "card-footer"
}, ve = /* @__PURE__ */ c({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(i, { emit: t }) {
    const o = i, n = z(() => typeof o.headerClasses < "u" ? "card-header fw-bold " + o.headerClasses : "card-header fw-bold");
    return (e, l) => (s(), r("div", pe, [
      e.$slots.header ? (s(), r("div", {
        key: 0,
        class: w(n.value)
      }, [
        f(e.$slots, "header", {}, void 0, !0)
      ], 2)) : e.$slots.title || e.$slots.header_icon ? (s(), r("div", {
        key: 1,
        class: w(n.value)
      }, [
        d("div", ce, [
          e.$slots.title ? (s(), r("div", me, [
            f(e.$slots, "title", {}, void 0, !0)
          ])) : g("", !0),
          e.$slots.header_icon ? (s(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: l[0] || (l[0] = (a) => e.$emit("header-icon-clicked"))
          }, [
            f(e.$slots, "header_icon", {}, void 0, !0)
          ])) : g("", !0)
        ])
      ], 2)) : g("", !0),
      e.$slots.image ? (s(), r("div", fe, [
        f(e.$slots, "image", {}, void 0, !0)
      ])) : g("", !0),
      d("div", ge, [
        f(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (s(), r("div", he, [
        f(e.$slots, "footer", {}, void 0, !0)
      ])) : g("", !0)
    ]));
  }
});
const be = (i, t) => {
  const o = i.__vccOpts || i;
  for (const [n, e] of t)
    o[n] = e;
  return o;
}, Tt = /* @__PURE__ */ be(ve, [["__scopeId", "data-v-06938a02"]]), ye = { class: "dropdown" }, _e = ["aria-labelledby"], qt = /* @__PURE__ */ c({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const t = i, o = z(() => t.id !== null ? t.id : "id_" + T().toString());
    return (n, e) => (s(), r("div", ye, [
      S(h(Y), {
        id: o.value,
        variant: n.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: D(() => [
          f(n.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      d("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        f(n.$slots, "default")
      ], 8, _e)
    ]));
  }
}), $e = { class: "dropdown dropdown-select is-hoverable" }, ke = { class: "dropdown-trigger" }, ze = {
  class: "button",
  "aria-haspopup": "true",
  "aria-controls": "dropdown-menu4"
}, Se = {
  class: "dropdown-menu",
  role: "menu"
}, we = { class: "dropdown-content" }, Rt = /* @__PURE__ */ c({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: t }) {
    return (o, n) => {
      const e = M("Icon"), l = M("MultiSelect");
      return s(), r("div", $e, [
        d("div", ke, [
          d("button", ze, [
            d("span", null, b(o.label), 1),
            S(e, { icon: "angle-down" })
          ])
        ]),
        d("div", Se, [
          d("div", we, [
            S(l, {
              options: o.options,
              "model-value": o.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": n[0] || (n[0] = (a) => o.$emit("update:modelValue", a))
            }, null, 8, ["options", "model-value"])
          ])
        ])
      ]);
    };
  }
});
const Ce = { key: 0 }, Be = { class: "icon me-1" }, jt = /* @__PURE__ */ c({
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
    const t = i, o = z(() => t.inline ? "span" : "div");
    return (n, e) => {
      const l = M("font-awesome-icon");
      return s(), v(K(o.value), null, {
        default: D(() => [
          n.$slots.default ? (s(), r("span", Ce, [
            d("span", Be, [
              S(l, {
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
              f(n.$slots, "default")
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
}), Ve = ["id", "value", "checked", "onClick"], De = ["for"], Ue = /* @__PURE__ */ c({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: T().toString() }
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
        class: w(["form-check", e.containerClasses])
      }, [
        d("input", {
          id: "id_" + a + "_" + e.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: a,
          checked: o.modelValue.includes(a),
          onClick: (_) => n(a)
        }, null, 8, Ve),
        d("label", {
          class: "form-check-label",
          for: "id_" + a + "_" + e.uniqueId
        }, b(u), 9, De)
      ], 2))), 128))
    ]));
  }
}), Le = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Oe = ["onClick"], Ie = {
  key: 1,
  class: "page-link"
}, q = /* @__PURE__ */ c({
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
    const e = z(() => {
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
    const { t: a } = E();
    return (u, _) => (s(), r("ul", Le, [
      d("li", {
        class: w(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[0] || (_[0] = (y) => l(u.currentpage - 1))
        }, b(h(a)("previous")), 1)) : g("", !0)
      ], 2),
      (s(!0), r(B, null, V(e.value, (y) => (s(), r("li", {
        key: y,
        class: w([
          "page-item",
          (y === -42 ? "disabled page-ellipsis " : "") + (y === u.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (P) => l(y)
        }, b(y), 9, Oe)) : (s(), r("span", Ie, "…"))
      ], 2))), 128)),
      d("li", {
        class: w(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[1] || (_[1] = (y) => l(u.currentpage + 1))
        }, b(h(a)("next")), 1)) : g("", !0)
      ], 2)
    ]));
  }
});
function Q(i) {
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
typeof Q == "function" && Q(q);
const Pe = ["id", "value", "checked", "onClick"], Ee = ["for"], Ne = /* @__PURE__ */ c({
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
        class: w(["form-check", o.containerClasses])
      }, [
        d("input", {
          id: "id_" + e,
          type: "radio",
          class: "form-check-input",
          value: e,
          checked: o.modelValue == e,
          onClick: (a) => t("update:model-value", e)
        }, null, 8, Pe),
        d("label", {
          class: "form-check-label",
          for: "id_" + e
        }, b(l), 9, Ee)
      ], 2))), 128))
    ]));
  }
}), Me = { class: "uu-sidebar" }, Te = ["data-bs-target"], qe = ["id"], Re = { class: "uu-sidebar-content" }, je = /* @__PURE__ */ c({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(i) {
    const t = i, o = z(() => t.id !== null ? t.id : "id_" + T().toString().replace(/-/g, "")), n = z(() => {
      let e = "";
      return t.placement === "right" && (e += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (e += "uu-sidebar-mobile-bottom "), t.stickySidebar && (e += "uu-sidebar-sticky "), t.mobileStickySidebar && (e += "uu-sidebar-mobile-sticky "), e;
    });
    return (e, l) => (s(), r("div", {
      class: w(["uu-sidebar-container", n.value])
    }, [
      d("aside", Me, [
        d("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          f(e.$slots, "sidebar-button")
        ], 8, Te),
        d("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          f(e.$slots, "sidebar")
        ], 8, qe)
      ]),
      d("div", Re, [
        f(e.$slots, "default")
      ])
    ], 2));
  }
}), Fe = { class: "uu-list-filter" }, Ze = { class: "uu-list-filter-label" }, Ge = {
  key: 2,
  class: "uu-list-filter-field"
}, Qe = ["value"], We = /* @__PURE__ */ c({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(i, { emit: t }) {
    return (o, n) => (s(), r("div", Fe, [
      d("div", Ze, b(o.filter.label), 1),
      o.filter.type === "checkbox" ? (s(), v(h(Ue), {
        key: 0,
        options: o.filter.options ?? [],
        "model-value": o.value ?? [],
        "onUpdate:modelValue": n[0] || (n[0] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      o.filter.type === "radio" ? (s(), v(h(Ne), {
        key: 1,
        options: o.filter.options ?? [],
        "model-value": o.value ?? "",
        "onUpdate:modelValue": n[1] || (n[1] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      o.filter.type === "date" ? (s(), r("div", Ge, [
        d("input", {
          type: "date",
          value: o.value,
          class: "form-control",
          onInput: n[2] || (n[2] = (e) => t("update:value", h(N)(e)))
        }, null, 40, Qe)
      ])) : g("", !0)
    ]));
  }
}), Ae = { key: 0 }, x = /* @__PURE__ */ c({
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
    return (e, l) => e.filters ? (s(), r("div", Ae, [
      (s(!0), r(B, null, V(e.filters, (a) => (s(), v(We, {
        key: a.field,
        filter: a,
        value: e.filterValues[a.field] ?? void 0,
        "onUpdate:value": (u) => n(a.field, u)
      }, null, 8, ["filter", "value", "onUpdate:value"]))), 128))
    ])) : g("", !0);
  }
}), He = { class: "search" }, Je = ["value", "placeholder"], R = /* @__PURE__ */ c({
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
    const e = o((a) => n(a)), { t: l } = E();
    return (a, u) => (s(), r("div", He, [
      d("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: h(l)("placeholder"),
        onInput: u[0] || (u[0] = (_) => h(e)(h(N)(_)))
      }, null, 40, Je)
    ]));
  }
});
function W(i) {
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
typeof W == "function" && W(R);
const Ke = ["value"], Xe = ["value"], ee = /* @__PURE__ */ c({
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
      onChange: l[0] || (l[0] = (a) => n(h(N)(a)))
    }, [
      (s(!0), r(B, null, V(e.pageSizeOptions, (a) => (s(), r("option", {
        key: a,
        value: a
      }, b(a), 9, Xe))), 128))
    ], 40, Ke));
  }
}), Ye = ["value"], xe = ["value"], te = /* @__PURE__ */ c({
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
      onChange: n[0] || (n[0] = (e) => o.$emit("update:current-sort", h(N)(e).trim()))
    }, [
      (s(!0), r(B, null, V(o.sortOptions, ({ field: e, label: l }) => (s(), r("option", {
        key: e,
        value: e
      }, b(l), 9, xe))), 128))
    ], 40, Ye));
  }
}), et = { key: 0 }, j = /* @__PURE__ */ c({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(i) {
    const { t } = E();
    return (o, n) => (s(), r("div", null, [
      o.searchQuery ? (s(), r("span", et, b(h(t)("search", { query: o.searchQuery })), 1)) : g("", !0),
      X(" " + b(h(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function A(i) {
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
typeof A == "function" && A(j);
const tt = { class: "uu-container" }, nt = { class: "uu-list" }, ot = { class: "uu-list-controls" }, at = {
  key: 1,
  class: "uu-list-order-control"
}, st = { class: "uu-list-page-size-control" }, lt = {
  key: 0,
  class: "uu-list-filters"
}, rt = { class: "uu-list-content" }, it = /* @__PURE__ */ c({
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
    const o = i, n = z(() => Math.ceil(o.totalData / o.pageSize));
    return (e, l) => {
      var a;
      return s(), r("div", tt, [
        d("div", nt, [
          d("div", ot, [
            e.searchEnabled ? (s(), v(R, {
              key: 0,
              "model-value": e.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (u) => e.$emit("update:search", u))
            }, null, 8, ["model-value"])) : g("", !0),
            S(j, {
              "search-query": e.search,
              "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
              "total-num": e.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            e.sortEnabled ? (s(), r("div", at, [
              S(te, {
                "current-sort": e.currentSort,
                "sort-options": e.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (u) => t("update:current-sort", u))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : g("", !0),
            d("div", st, [
              S(ee, {
                "page-size-options": e.pageSizeOptions,
                "page-size": e.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (u) => t("update:page-size", u))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          e.filtersEnabled ? (s(), r("div", lt, [
            f(e.$slots, "filters-top", {
              data: e.data,
              isLoading: e.isLoading
            }),
            S(x, {
              filters: e.filters,
              "filter-values": e.filterValues,
              "onUpdate:filterValues": l[3] || (l[3] = (u) => e.$emit("update:filter-values", u))
            }, null, 8, ["filters", "filter-values"]),
            f(e.$slots, "filters-bottom", {
              data: e.data,
              isLoading: e.isLoading
            })
          ])) : g("", !0),
          d("div", rt, [
            f(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(h(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ut = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, dt = {
  key: 0,
  class: "ms-auto"
}, ne = /* @__PURE__ */ c({
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
    const o = i, n = z(() => Math.ceil(o.totalData / o.pageSize));
    return (e, l) => (s(), v(h(je), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        e.searchEnabled ? (s(), v(R, {
          key: 0,
          "model-value": e.search,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.$emit("update:search", a))
        }, null, 8, ["model-value"])) : g("", !0),
        f(e.$slots, "filters-top", {
          data: e.data,
          isLoading: e.isLoading
        }),
        e.filters ? (s(), v(x, {
          key: 1,
          filters: e.filters,
          "filter-values": e.filterValues,
          "onUpdate:filterValues": l[1] || (l[1] = (a) => e.$emit("update:filter-values", a))
        }, null, 8, ["filters", "filter-values"])) : g("", !0),
        f(e.$slots, "filters-bottom", {
          data: e.data,
          isLoading: e.isLoading
        })
      ]),
      default: D(() => {
        var a;
        return [
          d("div", null, [
            d("div", ut, [
              S(j, {
                "search-query": e.search,
                "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
                "total-num": e.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              e.sortEnabled ? (s(), r("div", dt, [
                S(te, {
                  "current-sort": e.currentSort,
                  "sort-options": e.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (u) => t("update:current-sort", u))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : g("", !0),
              d("div", null, [
                S(ee, {
                  "page-size-options": e.pageSizeOptions,
                  "page-size": e.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (u) => t("update:page-size", u))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            f(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), v(h(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
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
typeof H == "function" && H(ne);
const pt = /* @__PURE__ */ c({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (t, o) => (s(), r("pre", null, b(t.data), 1));
  }
}), ct = /* @__PURE__ */ c({
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
    const o = i, n = z(() => {
      switch (o.container) {
        case "sidebar":
          return ne;
        default:
          return it;
      }
    });
    return (e, l) => (s(), v(K(n.value), {
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
        f(e.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          S(pt, {
            data: a,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": D(({ data: a, isLoading: u }) => [
        f(e.$slots, "filters-top", {
          data: a,
          isLoading: u
        })
      ]),
      "filters-bottom": D(({ data: a, isLoading: u }) => [
        f(e.$slots, "filters-bottom", {
          data: a,
          isLoading: u
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), mt = /* @__PURE__ */ c({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => (s(), r("span", {
      class: w(t.column.classes)
    }, b(t.item[t.column.field]), 3));
  }
}), ft = /* @__PURE__ */ c({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const t = i, o = z(() => {
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
      class: w(n.column.classes)
    }, b(o.value), 3));
  }
}), gt = { key: 0 }, ht = /* @__PURE__ */ c({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.item[t.column.field] ? (s(), r("span", gt, [
      S(h(Y), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: D(() => [
          X(b(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : g("", !0);
  }
}), vt = { key: 0 }, bt = ["href", "target"], yt = /* @__PURE__ */ c({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.item[t.column.field] ? (s(), r("span", vt, [
      d("a", {
        href: t.item[t.column.field].link,
        class: w(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, b(t.item[t.column.field].text), 11, bt)
    ])) : g("", !0);
  }
}), _t = ["innerHTML"], $t = /* @__PURE__ */ c({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => (s(), r("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, _t));
  }
}), kt = {
  key: 0,
  class: "dropdown"
}, zt = /* @__PURE__ */ ae('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), St = { class: "dropdown-menu" }, wt = {
  key: 0,
  class: "dropdown-divider"
}, Ct = ["href", "target"], Bt = /* @__PURE__ */ c({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const t = i, o = z(() => t.item[t.column.field].entries());
    return (n, e) => o.value ? (s(), r("div", kt, [
      zt,
      d("ul", St, [
        (s(!0), r(B, null, V(o.value, ([l, a]) => (s(), r("li", { key: l }, [
          a.divider ? (s(), r("hr", wt)) : (s(), r("a", {
            key: 1,
            href: a.link,
            class: w(["dropdown-item", a.classes ?? ""]),
            target: a.new_tab ? "_blank" : "_self"
          }, b(a.text), 11, Ct))
        ]))), 128))
      ])
    ])) : g("", !0);
  }
}), Vt = /* @__PURE__ */ c({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.column.type == "string" ? (s(), v(mt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (s(), v(ft, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (s(), v(ht, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (s(), v(yt, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (s(), v($t, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (s(), v(Bt, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : g("", !0);
  }
}), Dt = /* @__PURE__ */ c({
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
        S(Vt, {
          column: n,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ut = {
  key: 0,
  class: "alert alert-info w-100"
}, Lt = { key: 0 }, Ot = { key: 1 }, It = ["colspan"], oe = /* @__PURE__ */ c({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const t = i, o = z(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: n } = E();
    return (e, l) => e.isLoading && o.value ? (s(), r("div", Ut, b(h(n)("loading")), 1)) : (s(), r("table", {
      key: 1,
      class: w(["table", e.isLoading ? "loading" : ""])
    }, [
      d("thead", null, [
        d("tr", null, [
          (s(!0), r(B, null, V(e.columns, (a) => (s(), r("th", {
            key: a.field
          }, b(a.label), 1))), 128))
        ])
      ]),
      o.value ? (s(), r("tbody", Ot, [
        d("tr", null, [
          d("td", {
            colspan: e.columns.length
          }, b(h(n)("no_data")), 9, It)
        ])
      ])) : (s(), r("tbody", Lt, [
        (s(!0), r(B, null, V(e.data, (a) => (s(), v(Dt, {
          key: a.id,
          item: a,
          columns: e.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function J(i) {
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
typeof J == "function" && J(oe);
const Ft = /* @__PURE__ */ c({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const t = i, o = L(t.config.pageSize), n = L(1), e = L(""), l = L("id"), a = L(!0);
    function u() {
      var m;
      let p = {};
      return (m = t.config.filters) == null || m.forEach((k) => {
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
    const P = z(() => {
      let p = [];
      p.push("page_size=" + encodeURIComponent(o.value));
      for (const [m, k] of Object.entries(_.value))
        k != null && (typeof k == "object" ? k.forEach(
          (O) => p.push(m + "=" + encodeURIComponent(O))
        ) : p.push(m + "=" + encodeURIComponent(k)));
      return e.value && p.push("search=" + encodeURIComponent(e.value)), p.push("ordering=" + encodeURIComponent(l.value)), n.value = 1, p;
    }), I = z(() => {
      let p = P.value, m = "page=" + encodeURIComponent(n.value);
      return p.length !== 0 && (m = "&" + m), "?" + p.join("&") + m;
    }), U = z(() => {
      let p = new URL(window.location.protocol + "//" + window.location.host);
      return p.pathname = t.config.dataUri, p.search = I.value, console.log(p.toString()), p.toString();
    });
    se(U, () => {
      F();
    });
    const $ = L(null);
    function F() {
      $.value && $.value.abort(), $.value = new AbortController(), a.value = !0, fetch(U.value, { signal: $.value.signal }).then((p) => {
        p.json().then((m) => {
          y.value = m, a.value = !1, m.ordering && (l.value = m.ordering), $.value = null;
        });
      }).catch((p) => {
        console.log(p);
      });
    }
    return le(() => {
      F();
    }), (p, m) => {
      var k, O, Z;
      return s(), v(ct, {
        "is-loading": a.value,
        data: ((k = h(y)) == null ? void 0 : k.results) ?? void 0,
        "total-data": ((O = h(y)) == null ? void 0 : O.count) ?? 0,
        "search-enabled": p.config.searchEnabled,
        search: e.value,
        "sort-enabled": p.config.sortEnabled,
        "current-sort": l.value,
        "page-size-options": p.config.pageSizeOptions,
        "sort-options": p.config.sortOptions ?? [],
        "page-size": ((Z = h(y)) == null ? void 0 : Z.page_size) ?? 10,
        "current-page": n.value,
        "filters-enabled": p.config.filtersEnabled,
        filters: p.config.filters ?? [],
        "filter-values": _.value,
        container: p.config.container,
        "onUpdate:search": m[0] || (m[0] = (C) => e.value = C),
        "onUpdate:currentSort": m[1] || (m[1] = (C) => l.value = C),
        "onUpdate:pageSize": m[2] || (m[2] = (C) => o.value = C),
        "onUpdate:currentPage": m[3] || (m[3] = (C) => n.value = C),
        "onUpdate:filterValues": m[4] || (m[4] = (C) => _.value = C)
      }, {
        data: D(({ data: C, isLoading: G }) => [
          f(p.$slots, "data", {
            data: C,
            isLoading: G
          }, () => [
            S(oe, {
              data: C,
              columns: p.config.columns,
              "is-loading": G
            }, null, 8, ["data", "columns", "is-loading"])
          ])
        ]),
        _: 3
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as BSButton,
  Tt as BSCard,
  qt as BSDropdown,
  Rt as BSDropdownMultiSelect,
  jt as BSIcon,
  Ue as BSMultiSelect,
  q as BSPagination,
  Ne as BSRadioSelect,
  je as BSSidebar,
  Ft as DSCList,
  ct as UUList,
  Zt as UUListTypes
};
