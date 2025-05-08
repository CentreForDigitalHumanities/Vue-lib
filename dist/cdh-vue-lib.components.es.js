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
import { defineComponent as m, computed as $, openBlock as s, createElementBlock as r, normalizeClass as z, createElementVNode as p, renderSlot as v, createCommentVNode as f, createVNode as w, unref as g, withCtx as D, ref as U, resolveComponent as J, toDisplayString as b, createBlock as _, resolveDynamicComponent as K, Fragment as C, renderList as V, createTextVNode as X, createStaticVNode as se, watch as re, onMounted as ie } from "vue";
import { v4 as N } from "uuid";
import { useI18n as M } from "vue-i18n";
import { u as E } from "./useInputValue-e686f6e9.js";
const ue = ["href", "target"], de = { class: "btn-text" }, pe = ["type", "name", "disabled"], ce = { class: "btn-text" }, Y = /* @__PURE__ */ m({
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
    const e = i, n = $(() => {
      let t = "btn ";
      return e.size === "large" ? t += "btn-lg " : e.size === "small" && (t += "btn-sm "), e.outlined ? t += "btn-outline-" : t += "btn-", t += `${e.variant} `, e.loading && (t += "btn-loading "), e.active && (t += "active "), e.disabled && (t += "cursor-not-allowed "), t;
    });
    return (t, o) => t.href ? (s(), r("a", {
      key: 0,
      href: t.href,
      class: z(n.value),
      target: t.newTab ? "_blank" : "_self"
    }, [
      p("span", de, [
        v(t.$slots, "default")
      ])
    ], 10, ue)) : (s(), r("button", {
      key: 1,
      type: t.input,
      class: z(n.value),
      name: t.name,
      disabled: t.disabled
    }, [
      p("span", ce, [
        v(t.$slots, "default")
      ])
    ], 10, pe));
  }
}), me = { class: "card" }, fe = { class: "d-flex" }, ge = {
  key: 0,
  class: "me-auto"
}, he = {
  key: 2,
  class: "card-image-top"
}, ve = { class: "card-body" }, be = {
  key: 3,
  class: "card-footer"
}, ye = /* @__PURE__ */ m({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(i, { emit: e }) {
    const n = i, t = $(() => typeof n.headerClasses < "u" ? "card-header fw-bold " + n.headerClasses : "card-header fw-bold");
    return (o, a) => (s(), r("div", me, [
      o.$slots.header ? (s(), r("div", {
        key: 0,
        class: z(t.value)
      }, [
        v(o.$slots, "header", {}, void 0, !0)
      ], 2)) : o.$slots.title || o.$slots.header_icon ? (s(), r("div", {
        key: 1,
        class: z(t.value)
      }, [
        p("div", fe, [
          o.$slots.title ? (s(), r("div", ge, [
            v(o.$slots, "title", {}, void 0, !0)
          ])) : f("", !0),
          o.$slots.header_icon ? (s(), r("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: a[0] || (a[0] = (l) => o.$emit("header-icon-clicked"))
          }, [
            v(o.$slots, "header_icon", {}, void 0, !0)
          ])) : f("", !0)
        ])
      ], 2)) : f("", !0),
      o.$slots.image ? (s(), r("div", he, [
        v(o.$slots, "image", {}, void 0, !0)
      ])) : f("", !0),
      p("div", ve, [
        v(o.$slots, "default", {}, void 0, !0)
      ]),
      o.$slots.footer ? (s(), r("div", be, [
        v(o.$slots, "footer", {}, void 0, !0)
      ])) : f("", !0)
    ]));
  }
});
const _e = (i, e) => {
  const n = i.__vccOpts || i;
  for (const [t, o] of e)
    n[t] = o;
  return n;
}, jt = /* @__PURE__ */ _e(ye, [["__scopeId", "data-v-06938a02"]]), $e = { class: "dropdown" }, ke = ["aria-labelledby"], Ft = /* @__PURE__ */ m({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(i) {
    const e = i, n = $(() => e.id !== null ? e.id : "id_" + N().toString());
    return (t, o) => (s(), r("div", $e, [
      w(g(Y), {
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
      ], 8, ke)
    ]));
  }
}), Se = { class: "dropdown dropdown-select is-hoverable" }, ze = { class: "me-2" }, we = ["id"], Be = { class: "dropdown-content ps-4" }, Zt = /* @__PURE__ */ m({
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
      const a = J("Button");
      return s(), r("div", Se, [
        w(a, {
          class: "dropdown-toggle",
          "aria-haspopup": "true",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false"
        }, {
          default: D(() => [
            p("span", ze, b(t.label), 1)
          ]),
          _: 1
        }),
        p("div", {
          id: n.value,
          class: "dropdown-menu",
          role: "menu"
        }, [
          p("div", Be, [
            w(g(x), {
              options: t.options,
              "model-value": t.modelValue,
              "container-classes": "dropdown-item",
              "onUpdate:modelValue": o[0] || (o[0] = (l) => t.$emit("update:modelValue", l))
            }, null, 8, ["options", "model-value"])
          ])
        ], 8, we)
      ]);
    };
  }
});
const Ce = { key: 0 }, Ve = { class: "icon me-1" }, Gt = /* @__PURE__ */ m({
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
    const e = i, n = $(() => e.inline ? "span" : "div");
    return (t, o) => {
      const a = J("font-awesome-icon");
      return s(), _(K(n.value), null, {
        default: D(() => [
          t.$slots.default ? (s(), r("span", Ce, [
            p("span", Ve, [
              w(a, {
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
          ])) : (s(), _(a, {
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
}), De = ["value"], Ue = {
  key: 0,
  disabled: "",
  value: ""
}, Pe = ["value"], Le = /* @__PURE__ */ m({
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
    return (o, a) => (s(), r("div", null, [
      p("select", {
        class: z(["form-select", o.containerClasses]),
        value: o.modelValue,
        onChange: a[0] || (a[0] = (l) => t(g(E)(l)))
      }, [
        o.placeholder ? (s(), r("option", Ue, b(o.placeholder), 1)) : f("", !0),
        (s(!0), r(C, null, V(o.options, ([l, u]) => (s(), r("option", {
          key: l ?? "null",
          value: l
        }, b(u), 9, Pe))), 128))
      ], 42, De)
    ]));
  }
}), Oe = ["id", "value", "checked", "onClick"], Ie = ["for"], x = /* @__PURE__ */ m({
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
      let l = [...n.modelValue];
      if (!a)
        l.push(o);
      else {
        const u = l.indexOf(o);
        u > -1 && l.splice(u, 1);
      }
      e("update:modelValue", l);
    }
    return (o, a) => (s(), r("div", null, [
      (s(!0), r(C, null, V(o.options, ([l, u]) => (s(), r("div", {
        key: l,
        class: z(["form-check", o.containerClasses])
      }, [
        p("input", {
          id: "id_" + l + "_" + o.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: l,
          checked: n.modelValue.includes(l),
          onClick: (d) => t(l)
        }, null, 8, Oe),
        p("label", {
          class: "form-check-label",
          for: "id_" + l + "_" + o.uniqueId
        }, b(u), 9, Ie)
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
  setup(i, { emit: e }) {
    const n = i;
    function t(u, d, y) {
      return Math.min(Math.max(u, d), y);
    }
    const o = $(() => {
      const u = n.numOptions, d = n.currentpage - u, y = n.currentpage + u + 1, I = [], O = [];
      let P;
      for (let k = 1; k <= n.maxPages; k++)
        (k === 1 || k === n.maxPages || k >= d && k < y) && I.push(k);
      for (const k of I)
        P && (k - P === 2 ? O.push(P + 1) : k - P !== 1 && O.push(-42)), O.push(k), P = k;
      return O;
    });
    function a(u) {
      u = t(u, 1, n.maxPages), e("change-page", u);
    }
    const { t: l } = M();
    return (u, d) => (s(), r("ul", Ee, [
      p("li", {
        class: z(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: d[0] || (d[0] = (y) => a(u.currentpage - 1))
        }, b(g(l)("previous")), 1)) : f("", !0)
      ], 2),
      (s(!0), r(C, null, V(o.value, (y) => (s(), r("li", {
        key: y,
        class: z([
          "page-item",
          (y === -42 ? "disabled page-ellipsis " : "") + (y === u.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: (I) => a(y)
        }, b(y), 9, Ne)) : (s(), r("span", Me, "…"))
      ], 2))), 128)),
      p("li", {
        class: z(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (s(), r("a", {
          key: 0,
          class: "page-link",
          onClick: d[1] || (d[1] = (y) => a(u.currentpage + 1))
        }, b(g(l)("next")), 1)) : f("", !0)
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
const Te = ["id", "value", "checked", "onClick"], qe = ["for"], Re = /* @__PURE__ */ m({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    return (n, t) => (s(), r("div", null, [
      (s(!0), r(C, null, V(n.options, ([o, a]) => (s(), r("div", {
        key: o,
        class: z(["form-check", n.containerClasses])
      }, [
        p("input", {
          id: "id_" + o,
          type: "radio",
          class: "form-check-input",
          value: o,
          checked: n.modelValue == o,
          onClick: (l) => e("update:model-value", o)
        }, null, 8, Te),
        p("label", {
          class: "form-check-label",
          for: "id_" + o
        }, b(a), 9, qe)
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
    const e = i, n = $(() => e.id !== null ? e.id : "id_" + N().toString().replace(/-/g, "")), t = $(() => {
      let o = "";
      return e.placement === "right" && (o += "uu-sidebar-right "), e.mobilePlacement === "bottom" && (o += "uu-sidebar-mobile-bottom "), e.stickySidebar && (o += "uu-sidebar-sticky "), e.mobileStickySidebar && (o += "uu-sidebar-mobile-sticky "), o;
    });
    return (o, a) => (s(), r("div", {
      class: z(["uu-sidebar-container", t.value])
    }, [
      p("aside", je, [
        p("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + n.value,
          "aria-expanded": "false"
        }, [
          v(o.$slots, "sidebar-button")
        ], 8, Fe),
        p("div", {
          id: n.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          v(o.$slots, "sidebar")
        ], 8, Ze)
      ]),
      p("section", Ge, [
        v(o.$slots, "default")
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
  setup(i, { emit: e }) {
    return (n, t) => (s(), r("div", We, [
      p("div", Ae, b(n.filter.label), 1),
      n.filter.type === "checkbox" ? (s(), _(g(x), {
        key: 0,
        options: n.filter.options ?? [],
        "model-value": n.value ?? [],
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      n.filter.type === "select" ? (s(), _(g(Le), {
        key: 1,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": t[1] || (t[1] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      n.filter.type === "radio" ? (s(), _(g(Re), {
        key: 2,
        options: n.filter.options ?? [],
        "model-value": n.value ?? "",
        "onUpdate:modelValue": t[2] || (t[2] = (o) => e("update:value", o))
      }, null, 8, ["options", "model-value"])) : f("", !0),
      n.filter.type === "date" ? (s(), r("div", He, [
        p("input", {
          type: "date",
          value: n.value,
          class: "form-control",
          onInput: t[3] || (t[3] = (o) => e("update:value", g(E)(o)))
        }, null, 40, Je)
      ])) : f("", !0)
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
    function a(l, u) {
      let d = { ...o.value };
      d[l] = u, e("update:filter-values", d);
    }
    return (l, u) => (s(!0), r(C, null, V(t.value, (d) => (s(), _(Ke, {
      key: d.field,
      filter: d,
      value: o.value[d.field],
      "onUpdate:value": (y) => a(d.field, y)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), Xe = { class: "search" }, Ye = ["value", "placeholder"], q = /* @__PURE__ */ m({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(i, { emit: e }) {
    function n(l, u = 500) {
      let d;
      return (...y) => {
        clearTimeout(d), d = setTimeout(() => {
          l.apply(this, y);
        }, u);
      };
    }
    function t(l) {
      e("update:modelValue", l);
    }
    const o = n((l) => t(l)), { t: a } = M();
    return (l, u) => (s(), r("div", Xe, [
      p("input", {
        id: "search",
        class: "form-control",
        value: l.modelValue,
        placeholder: g(a)("placeholder"),
        onInput: u[0] || (u[0] = (d) => g(o)(g(E)(d)))
      }, null, 40, Ye)
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
const xe = ["value"], et = ["value"], te = /* @__PURE__ */ m({
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
    return (o, a) => (s(), r("select", {
      value: o.pageSize,
      class: "form-select",
      onChange: a[0] || (a[0] = (l) => t(g(E)(l)))
    }, [
      (s(!0), r(C, null, V(o.pageSizeOptions, (l) => (s(), r("option", {
        key: l,
        value: l
      }, b(l), 9, et))), 128))
    ], 40, xe));
  }
}), tt = ["value"], ot = ["value"], oe = /* @__PURE__ */ m({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(i, { emit: e }) {
    return (n, t) => (s(), r("select", {
      value: n.currentSort,
      class: "form-select",
      onChange: t[0] || (t[0] = (o) => n.$emit("update:current-sort", g(E)(o).trim()))
    }, [
      (s(!0), r(C, null, V(n.sortOptions, ({ field: o, label: a }) => (s(), r("option", {
        key: o,
        value: o
      }, b(a), 9, ot))), 128))
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
    const { t: e } = M();
    return (n, t) => (s(), r("div", null, [
      n.searchQuery ? (s(), r("span", nt, b(g(e)("search", { query: n.searchQuery })), 1)) : f("", !0),
      X(" " + b(g(e)("showing", {
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
  setup(i, { emit: e }) {
    const n = i, t = $(() => Math.ceil(n.totalData / n.pageSize)), o = $(() => ne(n));
    return (a, l) => {
      var u;
      return s(), r("div", at, [
        p("div", lt, [
          p("div", st, [
            a.searchEnabled ? (s(), _(q, {
              key: 0,
              "model-value": a.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": l[0] || (l[0] = (d) => a.$emit("update:search", d))
            }, null, 8, ["model-value"])) : f("", !0),
            w(R, {
              "search-query": a.search,
              "page-num": ((u = a.data) == null ? void 0 : u.length) ?? 0,
              "total-num": a.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            a.sortEnabled ? (s(), r("div", rt, [
              w(oe, {
                "current-sort": a.currentSort,
                "sort-options": a.sortOptions,
                "onUpdate:currentSort": l[1] || (l[1] = (d) => e("update:current-sort", d))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : f("", !0),
            p("div", it, [
              w(te, {
                "page-size-options": a.pageSizeOptions,
                "page-size": a.pageSize,
                "onUpdate:pageSize": l[2] || (l[2] = (d) => e("update:page-size", d))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          a.filtersEnabled && o.value ? (s(), r("div", ut, [
            v(a.$slots, "filters-top", {
              data: a.data,
              isLoading: a.isLoading
            }),
            w(ee, {
              "filter-props": o.value,
              "onUpdate:filterValues": l[3] || (l[3] = (d) => a.$emit("update:filter-values", d))
            }, null, 8, ["filter-props"]),
            v(a.$slots, "filters-bottom", {
              data: a.data,
              isLoading: a.isLoading
            })
          ])) : f("", !0),
          p("div", dt, [
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            p("div", null, [
              a.data ? (s(), _(g(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: a.currentPage,
                onChangePage: l[4] || (l[4] = (d) => a.$emit("update:current-page", d))
              }, null, 8, ["max-pages", "currentpage"])) : f("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ct = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, mt = {
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
    return (a, l) => (s(), _(g(Qe), { class: "uu-list-sidebar" }, {
      sidebar: D(() => [
        a.searchEnabled ? (s(), _(q, {
          key: 0,
          "model-value": a.search,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => a.$emit("update:search", u))
        }, null, 8, ["model-value"])) : f("", !0),
        v(a.$slots, "filters-top", {
          data: a.data,
          isLoading: a.isLoading
        }),
        o.value ? (s(), _(ee, {
          key: 1,
          "filter-props": o.value,
          "onUpdate:filterValues": l[1] || (l[1] = (u) => a.$emit("update:filter-values", u))
        }, null, 8, ["filter-props"])) : f("", !0),
        v(a.$slots, "filters-bottom", {
          data: a.data,
          isLoading: a.isLoading
        })
      ]),
      default: D(() => {
        var u;
        return [
          p("div", null, [
            p("div", ct, [
              w(R, {
                "search-query": a.search,
                "page-num": ((u = a.data) == null ? void 0 : u.length) ?? 0,
                "total-num": a.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              a.sortEnabled ? (s(), r("div", mt, [
                w(oe, {
                  "current-sort": a.currentSort,
                  "sort-options": a.sortOptions,
                  "onUpdate:currentSort": l[2] || (l[2] = (d) => e("update:current-sort", d))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : f("", !0),
              p("div", null, [
                w(te, {
                  "page-size-options": a.pageSizeOptions,
                  "page-size": a.pageSize,
                  "onUpdate:pageSize": l[3] || (l[3] = (d) => e("update:page-size", d))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            p("div", null, [
              a.data ? (s(), _(g(T), {
                key: 0,
                "max-pages": t.value,
                currentpage: a.currentPage,
                onChangePage: l[4] || (l[4] = (d) => a.$emit("update:current-page", d))
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
typeof A == "function" && A(ae);
const ft = /* @__PURE__ */ m({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    return (e, n) => (s(), r("pre", null, b(e.data), 1));
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
  setup(i, { emit: e }) {
    const n = i, t = $(() => {
      switch (n.container) {
        case "sidebar":
          return ae;
        default:
          return pt;
      }
    });
    return (o, a) => (s(), _(K(t.value), {
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
      "onUpdate:search": a[0] || (a[0] = (l) => e("update:search", l)),
      "onUpdate:currentSort": a[1] || (a[1] = (l) => e("update:current-sort", l)),
      "onUpdate:pageSize": a[2] || (a[2] = (l) => e("update:page-size", l)),
      "onUpdate:currentPage": a[3] || (a[3] = (l) => e("update:current-page", l)),
      "onUpdate:filterValues": a[4] || (a[4] = (l) => e("update:filter-values", l))
    }, {
      data: D(({ data: l, isLoading: u }) => [
        v(o.$slots, "data", {
          data: l,
          isLoading: u
        }, () => [
          w(ft, {
            data: l,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": D(({ data: l, isLoading: u }) => [
        v(o.$slots, "filters-top", {
          data: l,
          isLoading: u
        })
      ]),
      "filters-bottom": D(({ data: l, isLoading: u }) => [
        v(o.$slots, "filters-bottom", {
          data: l,
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
    return (e, n) => (s(), r("span", {
      class: z(e.column.classes)
    }, b(e.item[e.column.field]), 3));
  }
}), vt = /* @__PURE__ */ m({
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
      } catch (l) {
        return console.error(l), "";
      }
      let o;
      if (e.column.language !== void 0 && e.column.language !== null && (o = e.column.language), typeof e.column.format == "string") {
        let l = null;
        switch (e.column.format) {
          case "date":
            l = {
              dateStyle: "medium"
            };
            break;
          case "time":
            l = {
              timeStyle: "short"
            };
            break;
          case "datetime":
            l = {
              dateStyle: "medium",
              timeStyle: "short"
            };
            break;
        }
        return new Intl.DateTimeFormat(o, l).format(t);
      }
      return typeof e.column.format == "object" && e.column.format !== null ? new Intl.DateTimeFormat(
        o,
        e.column.format
      ).format(t) : new Intl.DateTimeFormat(o).format(t);
    });
    return (t, o) => (s(), r("span", {
      class: z(t.column.classes)
    }, b(n.value), 3));
  }
}), bt = { key: 0 }, yt = /* @__PURE__ */ m({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.item[e.column.field] ? (s(), r("span", bt, [
      w(g(Y), {
        href: e.item[e.column.field].link,
        "css-classes": e.item[e.column.field].classes,
        "new-tab": e.item[e.column.field].new_tab,
        size: e.column.size,
        variant: e.column.variant
      }, {
        default: D(() => [
          X(b(e.item[e.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : f("", !0);
  }
}), _t = { key: 0 }, $t = ["href", "target"], kt = /* @__PURE__ */ m({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.item[e.column.field] ? (s(), r("span", _t, [
      p("a", {
        href: e.item[e.column.field].link,
        class: z(e.column.classes),
        target: e.item[e.column.field].new_tab ? "_blank" : "_self"
      }, b(e.item[e.column.field].text), 11, $t)
    ])) : f("", !0);
  }
}), St = ["innerHTML"], zt = /* @__PURE__ */ m({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => (s(), r("span", {
      innerHTML: e.item[e.column.field]
    }, null, 8, St));
  }
}), wt = {
  key: 0,
  class: "dropdown"
}, Bt = /* @__PURE__ */ se('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1), Ct = { class: "dropdown-menu" }, Vt = {
  key: 0,
  class: "dropdown-divider"
}, Dt = ["href", "target"], Ut = /* @__PURE__ */ m({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    const e = i, n = $(() => e.item[e.column.field].entries());
    return (t, o) => n.value ? (s(), r("div", wt, [
      Bt,
      p("ul", Ct, [
        (s(!0), r(C, null, V(n.value, ([a, l]) => (s(), r("li", { key: a }, [
          l.divider ? (s(), r("hr", Vt)) : (s(), r("a", {
            key: 1,
            href: l.link,
            class: z(["dropdown-item", l.classes ?? ""]),
            target: l.new_tab ? "_blank" : "_self"
          }, b(l.text), 11, Dt))
        ]))), 128))
      ])
    ])) : f("", !0);
  }
}), Pt = /* @__PURE__ */ m({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(i) {
    return (e, n) => e.column.type == "string" ? (s(), _(ht, {
      key: 0,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "date" ? (s(), _(vt, {
      key: 1,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "button" ? (s(), _(yt, {
      key: 2,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "link" ? (s(), _(kt, {
      key: 3,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "html" ? (s(), _(zt, {
      key: 4,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : e.column.type == "actions" ? (s(), _(Ut, {
      key: 5,
      item: e.item,
      column: e.column
    }, null, 8, ["item", "column"])) : f("", !0);
  }
}), Lt = /* @__PURE__ */ m({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(i) {
    return (e, n) => (s(), r("tr", null, [
      (s(!0), r(C, null, V(e.columns, (t) => (s(), r("td", {
        key: t.field,
        class: "align-middle"
      }, [
        w(Pt, {
          column: t,
          item: e.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ot = {
  key: 0,
  class: "alert alert-info w-100"
}, It = { key: 0 }, Et = { key: 1 }, Nt = ["colspan"], le = /* @__PURE__ */ m({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(i) {
    const e = i, n = $(() => e.data === null || e.data === void 0 || e.data.length === 0), { t } = M();
    return (o, a) => o.isLoading && n.value ? (s(), r("div", Ot, b(g(t)("loading")), 1)) : (s(), r("table", {
      key: 1,
      class: z(["table", o.isLoading ? "loading" : ""])
    }, [
      p("thead", null, [
        p("tr", null, [
          (s(!0), r(C, null, V(o.columns, (l) => (s(), r("th", {
            key: l.field
          }, b(l.label), 1))), 128))
        ])
      ]),
      n.value ? (s(), r("tbody", Et, [
        p("tr", null, [
          p("td", {
            colspan: o.columns.length
          }, b(g(t)("no_data")), 9, Nt)
        ])
      ])) : (s(), r("tbody", It, [
        (s(!0), r(C, null, V(o.data, (l) => (s(), _(Lt, {
          key: l.id,
          item: l,
          columns: o.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
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
typeof H == "function" && H(le);
const Qt = /* @__PURE__ */ m({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(i) {
    const e = i, n = U(e.config.pageSize), t = U(1), o = U(""), a = U("id"), l = U(!0);
    function u() {
      var h;
      let c = {};
      return (h = e.config.filters) == null || h.forEach((S) => {
        var L;
        if (S.initial) {
          c[S.field] = S.initial;
          return;
        }
        switch (S.type) {
          case "date":
            c[S.field] = null;
            break;
          case "checkbox":
            c[S.field] = [];
            break;
          case "radio":
            ((L = S.options) == null ? void 0 : L.length) != 0 && S.options && (c[S.field] = S.options[0][0]);
            break;
        }
      }), c;
    }
    const d = U(u());
    let y = U(null);
    const I = $(() => {
      let c = [];
      c.push("page_size=" + encodeURIComponent(n.value));
      for (const [h, S] of Object.entries(d.value))
        S != null && (typeof S == "object" ? S.forEach(
          (L) => c.push(h + "=" + encodeURIComponent(L))
        ) : c.push(h + "=" + encodeURIComponent(S)));
      return o.value && c.push("search=" + encodeURIComponent(o.value)), c.push("ordering=" + encodeURIComponent(a.value)), t.value = 1, c;
    }), O = $(() => {
      let c = I.value, h = "page=" + encodeURIComponent(t.value);
      return c.length !== 0 && (h = "&" + h), "?" + c.join("&") + h;
    }), P = $(() => {
      let c = new URL(window.location.protocol + "//" + window.location.host);
      return c.pathname = e.config.dataUri, c.search = O.value, console.log(c.toString()), c.toString();
    });
    re(P, () => {
      j();
    });
    const k = U(null);
    function j() {
      k.value && k.value.abort(), k.value = new AbortController(), l.value = !0, fetch(P.value, { signal: k.value.signal }).then((c) => {
        c.json().then((h) => {
          y.value = h, l.value = !1, h.ordering && (a.value = h.ordering), k.value = null;
        });
      }).catch((c) => {
        console.log(c);
      });
    }
    return ie(() => {
      j();
    }), (c, h) => {
      var S, L, F;
      return s(), _(gt, {
        "is-loading": l.value,
        data: ((S = g(y)) == null ? void 0 : S.results) ?? void 0,
        "total-data": ((L = g(y)) == null ? void 0 : L.count) ?? 0,
        "search-enabled": c.config.searchEnabled,
        search: o.value,
        "sort-enabled": c.config.sortEnabled,
        "current-sort": a.value,
        "page-size-options": c.config.pageSizeOptions,
        "sort-options": c.config.sortOptions ?? [],
        "page-size": ((F = g(y)) == null ? void 0 : F.page_size) ?? 10,
        "current-page": t.value,
        "filters-enabled": c.config.filtersEnabled,
        filters: c.config.filters ?? [],
        "filter-values": d.value,
        container: c.config.container,
        "onUpdate:search": h[0] || (h[0] = (B) => o.value = B),
        "onUpdate:currentSort": h[1] || (h[1] = (B) => a.value = B),
        "onUpdate:pageSize": h[2] || (h[2] = (B) => n.value = B),
        "onUpdate:currentPage": h[3] || (h[3] = (B) => t.value = B),
        "onUpdate:filterValues": h[4] || (h[4] = (B) => d.value = B)
      }, {
        data: D(({ data: B, isLoading: Z }) => [
          v(c.$slots, "data", {
            data: B,
            isLoading: Z
          }, () => [
            w(le, {
              data: B,
              columns: c.config.columns,
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
  Re as BSRadioSelect,
  Le as BSSelect,
  Qe as BSSidebar,
  Qt as DSCList,
  gt as UUList,
  Wt as UUListTypes
};
