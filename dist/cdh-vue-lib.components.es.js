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
import { defineComponent as c, computed as z, openBlock as s, createElementBlock as r, normalizeClass as w, createElementVNode as d, renderSlot as k, createCommentVNode as m, createVNode as S, unref as g, withCtx as I, resolveComponent as M, toDisplayString as v, createBlock as h, resolveDynamicComponent as J, Fragment as B, renderList as V, createTextVNode as K, createStaticVNode as ae, ref as U, watch as se, onMounted as le } from "vue";
import { v4 as T } from "uuid";
import { useI18n as L } from "vue-i18n";
import { useInputValue as N } from "./cdh-vue-lib.composables.es.js";
const re = ["href", "target"], ie = { class: "btn-text" }, ue = ["type", "name", "disabled"], de = { class: "btn-text" }, X = /* @__PURE__ */ c({
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
        k(n.$slots, "default")
      ])
    ], 10, re)) : (s(), r("button", {
      key: 1,
      type: n.input,
      class: w(o.value),
      name: n.name,
      disabled: n.disabled
    }, [
      d("span", de, [
        k(n.$slots, "default")
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
        k(e.$slots, "header", {}, void 0, !0)
      ], 2)) : e.$slots.title || e.$slots.header_icon ? (s(), r("div", {
        key: 1,
        class: w(n.value)
      }, [
        d("div", ce, [
          e.$slots.title ? (s(), r("div", me, [
            k(e.$slots, "title", {}, void 0, !0)
          ])) : m("", !0),
          e.$slots.header_icon ? (s(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: l[0] || (l[0] = (a) => e.$emit("header-icon-clicked"))
          }, [
            k(e.$slots, "header_icon", {}, void 0, !0)
          ])) : m("", !0)
        ])
      ], 2)) : m("", !0),
      e.$slots.image ? (s(), r("div", fe, [
        k(e.$slots, "image", {}, void 0, !0)
      ])) : m("", !0),
      d("div", ge, [
        k(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer ? (s(), r("div", he, [
        k(e.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
});
const be = (i, t) => {
  const o = i.__vccOpts || i;
  for (const [n, e] of t)
    o[n] = e;
  return o;
}, Tt = /* @__PURE__ */ be(ve, [["__scopeId", "data-v-06938a02"]]), _e = { class: "dropdown" }, ye = ["aria-labelledby"], qt = /* @__PURE__ */ c({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const t = i, o = z(() => t.id !== null ? t.id : "id_" + T().toString());
    return (n, e) => (s(), r("div", _e, [
      S(g(X), {
        id: o.value,
        variant: n.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: I(() => [
          k(n.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      d("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        k(n.$slots, "default")
      ], 8, ye)
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
            d("span", null, v(o.label), 1),
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
      return s(), h(J(o.value), null, {
        default: I(() => [
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
              k(n.$slots, "default")
            ])
          ])) : (s(), h(l, {
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
          for: +"_" + e.uniqueId
        }, v(u), 9, De)
      ], 2))), 128))
    ]));
  }
}), Oe = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Ie = ["onClick"], Pe = {
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
    function n(u, _, b) {
      return Math.min(Math.max(u, _), b);
    }
    const e = z(() => {
      const u = o.numOptions, _ = o.currentpage - u, b = o.currentpage + u + 1, E = [], P = [];
      let D;
      for (let y = 1; y <= o.maxPages; y++)
        (y === 1 || y === o.maxPages || y >= _ && y < b) && E.push(y);
      for (const y of E)
        D && (y - D === 2 ? P.push(D + 1) : y - D !== 1 && P.push(-42)), P.push(y), D = y;
      return P;
    });
    function l(u) {
      u = n(u, 1, o.maxPages), t("change-page", u);
    }
    const { t: a } = L();
    return (u, _) => (s(), r("ul", Oe, [
      d("li", {
        class: w(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[0] || (_[0] = (b) => l(u.currentpage - 1))
        }, v(g(a)("previous")), 1)) : m("", !0)
      ], 2),
      (s(!0), r(B, null, V(e.value, (b) => (s(), r("li", {
        key: b,
        class: w([
          "page-item",
          (b === -42 ? "disabled page-ellipsis " : "") + (b === u.currentpage ? "active" : "")
        ])
      }, [
        b !== -42 ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (E) => l(b)
        }, v(b), 9, Ie)) : (s(), r("span", Pe, "…"))
      ], 2))), 128)),
      d("li", {
        class: w(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: _[1] || (_[1] = (b) => l(u.currentpage + 1))
        }, v(g(a)("next")), 1)) : m("", !0)
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
typeof G == "function" && G(q);
const Ee = ["id", "value", "checked", "onClick"], Le = ["for"], Ne = /* @__PURE__ */ c({
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
        }, null, 8, Ee),
        d("label", {
          class: "form-check-label",
          for: "id_" + e
        }, v(l), 9, Le)
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
          k(e.$slots, "sidebar-button")
        ], 8, Te),
        d("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          k(e.$slots, "sidebar")
        ], 8, qe)
      ]),
      d("div", Re, [
        k(e.$slots, "default")
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
      d("div", Ze, v(o.filter.label), 1),
      o.filter.type === "checkbox" ? (s(), h(g(Ue), {
        key: 0,
        options: o.filter.options ?? [],
        "model-value": o.value ?? [],
        "onUpdate:modelValue": n[0] || (n[0] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : m("", !0),
      o.filter.type === "radio" ? (s(), h(g(Ne), {
        key: 1,
        options: o.filter.options ?? [],
        "model-value": o.value ?? "",
        "onUpdate:modelValue": n[1] || (n[1] = (e) => t("update:value", e))
      }, null, 8, ["options", "model-value"])) : m("", !0),
      o.filter.type === "date" ? (s(), r("div", Ge, [
        d("input", {
          type: "date",
          value: o.value,
          class: "form-control",
          onInput: n[2] || (n[2] = (e) => t("update:value", g(N)(e)))
        }, null, 40, Qe)
      ])) : m("", !0)
    ]));
  }
}), Ae = { key: 0 }, Y = /* @__PURE__ */ c({
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
      (s(!0), r(B, null, V(e.filters, (a) => (s(), h(We, {
        key: a.field,
        filter: a,
        value: e.filterValues[a.field] ?? void 0,
        "onUpdate:value": (u) => n(a.field, u)
      }, null, 8, ["filter", "value", "onUpdate:value"]))), 128))
    ])) : m("", !0);
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
      return (...b) => {
        clearTimeout(_), _ = setTimeout(() => {
          a.apply(this, b);
        }, u);
      };
    }
    function n(a) {
      t("update:modelValue", a);
    }
    const e = o((a) => n(a)), { t: l } = L();
    return (a, u) => (s(), r("div", He, [
      d("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: g(l)("placeholder"),
        onInput: u[0] || (u[0] = (_) => g(e)(g(N)(_)))
      }, null, 40, Je)
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
typeof Q == "function" && Q(R);
const Ke = ["value"], Xe = ["value"], x = /* @__PURE__ */ c({
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
      onChange: l[0] || (l[0] = (a) => n(g(N)(a)))
    }, [
      (s(!0), r(B, null, V(e.pageSizeOptions, (a) => (s(), r("option", {
        key: a,
        value: a
      }, v(a), 9, Xe))), 128))
    ], 40, Ke));
  }
}), Ye = ["value"], xe = ["value"], ee = /* @__PURE__ */ c({
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
      onChange: n[0] || (n[0] = (e) => o.$emit("update:current-sort", g(N)(e).trim()))
    }, [
      (s(!0), r(B, null, V(o.sortOptions, ({ field: e, label: l }) => (s(), r("option", {
        key: e,
        value: e
      }, v(l), 9, xe))), 128))
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
    const { t } = L();
    return (o, n) => (s(), r("div", null, [
      o.searchQuery ? (s(), r("span", et, v(g(t)("search", { query: o.searchQuery })), 1)) : m("", !0),
      K(" " + v(g(t)("showing", {
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
typeof W == "function" && W(j);
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
            e.searchEnabled ? (s(), h(R, {
              key: 0,
              "model-value": e.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (u) => e.$emit("update:search", u))
            }, null, 8, ["model-value"])) : m("", !0),
            S(j, {
              "search-query": e.search,
              "page-num": ((a = e.data) == null ? void 0 : a.length) ?? 0,
              "total-num": e.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            e.sortEnabled ? (s(), r("div", at, [
              S(ee, {
                "current-sort": e.currentSort,
                "sort-options": e.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (u) => t("update:current-sort", u))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : m("", !0),
            d("div", st, [
              S(x, {
                "page-size-options": e.pageSizeOptions,
                "page-size": e.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (u) => t("update:page-size", u))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          e.filtersEnabled ? (s(), r("div", lt, [
            S(Y, {
              filters: e.filters,
              "filter-values": e.filterValues,
              "onUpdate:filterValues": l[3] || (l[3] = (u) => e.$emit("update:filter-values", u))
            }, null, 8, ["filters", "filter-values"])
          ])) : m("", !0),
          d("div", rt, [
            k(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), h(g(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : m("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ut = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, dt = {
  key: 0,
  class: "ms-auto"
}, te = /* @__PURE__ */ c({
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
    return (e, l) => (s(), h(g(je), { class: "uu-list-sidebar" }, {
      sidebar: I(() => [
        e.searchEnabled ? (s(), h(R, {
          key: 0,
          "model-value": e.search,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.$emit("update:search", a))
        }, null, 8, ["model-value"])) : m("", !0),
        e.filters ? (s(), h(Y, {
          key: 1,
          filters: e.filters,
          "filter-values": e.filterValues,
          "onUpdate:filterValues": l[1] || (l[1] = (a) => e.$emit("update:filter-values", a))
        }, null, 8, ["filters", "filter-values"])) : m("", !0)
      ]),
      default: I(() => {
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
                S(ee, {
                  "current-sort": e.currentSort,
                  "sort-options": e.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (u) => t("update:current-sort", u))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : m("", !0),
              d("div", null, [
                S(x, {
                  "page-size-options": e.pageSizeOptions,
                  "page-size": e.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (u) => t("update:page-size", u))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            k(e.$slots, "data", {
              data: e.data,
              isLoading: e.isLoading
            }),
            d("div", null, [
              e.data ? (s(), h(g(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: e.currentPage,
                onChangePage: l[4] || (l[4] = (u) => e.$emit("update:current-page", u))
              }, null, 8, ["max-pages", "currentpage"])) : m("", !0)
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
typeof A == "function" && A(te);
const pt = /* @__PURE__ */ c({
  __name: "DebugVisualizer",
  props: {
    data: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (t, o) => (s(), r("pre", null, v(t.data), 1));
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
        case "default":
          return it;
        case "sidebar":
          return te;
      }
    });
    return (e, l) => (s(), h(J(n.value), {
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
      data: I(({ data: a, isLoading: u }) => [
        k(e.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          S(pt, {
            data: a,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
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
    }, v(t.item[t.column.field]), 3));
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
    }, v(o.value), 3));
  }
}), gt = { key: 0 }, ht = /* @__PURE__ */ c({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.item[t.column.field] ? (s(), r("span", gt, [
      S(g(X), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: I(() => [
          K(v(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : m("", !0);
  }
}), vt = { key: 0 }, bt = ["href", "target"], _t = /* @__PURE__ */ c({
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
      }, v(t.item[t.column.field].text), 11, bt)
    ])) : m("", !0);
  }
}), yt = ["innerHTML"], $t = /* @__PURE__ */ c({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => (s(), r("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, yt));
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
          }, v(a.text), 11, Ct))
        ]))), 128))
      ])
    ])) : m("", !0);
  }
}), Vt = /* @__PURE__ */ c({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (t, o) => t.column.type == "string" ? (s(), h(mt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (s(), h(ft, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (s(), h(ht, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (s(), h(_t, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (s(), h($t, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (s(), h(Bt, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : m("", !0);
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
}, Ot = { key: 0 }, It = { key: 1 }, Pt = ["colspan"], ne = /* @__PURE__ */ c({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const t = i, o = z(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: n } = L();
    return (e, l) => e.isLoading && o.value ? (s(), r("div", Ut, v(g(n)("loading")), 1)) : (s(), r("table", {
      key: 1,
      class: w(["table", e.isLoading ? "loading" : ""])
    }, [
      d("thead", null, [
        d("tr", null, [
          (s(!0), r(B, null, V(e.columns, (a) => (s(), r("th", {
            key: a.field
          }, v(a.label), 1))), 128))
        ])
      ]),
      o.value ? (s(), r("tbody", It, [
        d("tr", null, [
          d("td", {
            colspan: e.columns.length
          }, v(g(n)("no_data")), 9, Pt)
        ])
      ])) : (s(), r("tbody", Ot, [
        (s(!0), r(B, null, V(e.data, (a) => (s(), h(Dt, {
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
typeof H == "function" && H(ne);
const Ft = /* @__PURE__ */ c({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const t = i, o = U(t.config.pageSize), n = U(1), e = U(""), l = U("id"), a = U(!0);
    function u() {
      var f;
      let p = {};
      return (f = t.config.filters) == null || f.forEach(($) => {
        var O;
        if ($.initial) {
          p[$.field] = $.initial;
          return;
        }
        switch ($.type) {
          case "date":
            p[$.field] = null;
            break;
          case "checkbox":
            p[$.field] = [];
            break;
          case "radio":
            ((O = $.options) == null ? void 0 : O.length) != 0 && $.options && (p[$.field] = $.options[0][0]);
            break;
        }
      }), p;
    }
    const _ = U(u());
    let b = U(null);
    const E = z(() => {
      let p = [];
      p.push("page_size=" + encodeURIComponent(o.value));
      for (const [f, $] of Object.entries(_.value))
        $ != null && (typeof $ == "object" ? $.forEach(
          (O) => p.push(f + "=" + encodeURIComponent(O))
        ) : p.push(f + "=" + encodeURIComponent($)));
      return e.value && p.push("search=" + encodeURIComponent(e.value)), p.push("ordering=" + encodeURIComponent(l.value)), n.value = 1, p;
    }), P = z(() => {
      let p = E.value, f = "page=" + encodeURIComponent(n.value);
      return p.length !== 0 && (f = "&" + f), "?" + p.join("&") + f;
    }), D = z(() => {
      let p = new URL(window.location.protocol + "//" + window.location.host);
      return p.pathname = t.config.dataUri, p.search = P.value, console.log(p.toString()), p.toString();
    });
    se(D, () => {
      F();
    });
    const y = U(null);
    function F() {
      y.value && y.value.abort(), y.value = new AbortController(), a.value = !0, fetch(D.value, { signal: y.value.signal }).then((p) => {
        p.json().then((f) => {
          b.value = f, a.value = !1, y.value = null;
        });
      }).catch((p) => {
        console.log(p);
      });
    }
    return le(() => {
      F();
    }), (p, f) => {
      var $, O, Z;
      return s(), h(ct, {
        "is-loading": a.value,
        data: (($ = g(b)) == null ? void 0 : $.results) ?? void 0,
        "total-data": ((O = g(b)) == null ? void 0 : O.count) ?? 0,
        "search-enabled": p.config.searchEnabled,
        search: e.value,
        "sort-enabled": p.config.sortEnabled,
        "current-sort": l.value,
        "page-size-options": p.config.pageSizeOptions,
        "sort-options": p.config.sortOptions ?? [],
        "page-size": ((Z = g(b)) == null ? void 0 : Z.page_size) ?? 10,
        "current-page": n.value,
        "filters-enabled": p.config.filtersEnabled,
        filters: p.config.filters ?? [],
        "filter-values": _.value,
        container: p.config.container,
        "onUpdate:search": f[0] || (f[0] = (C) => e.value = C),
        "onUpdate:currentSort": f[1] || (f[1] = (C) => l.value = C),
        "onUpdate:pageSize": f[2] || (f[2] = (C) => o.value = C),
        "onUpdate:currentPage": f[3] || (f[3] = (C) => n.value = C),
        "onUpdate:filterValues": f[4] || (f[4] = (C) => _.value = C)
      }, {
        data: I(({ data: C, isLoading: oe }) => [
          S(ne, {
            data: C,
            columns: p.config.columns,
            "is-loading": oe
          }, null, 8, ["data", "columns", "is-loading"])
        ]),
        _: 1
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  X as BSButton,
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
