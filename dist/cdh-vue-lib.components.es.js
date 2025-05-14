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
import { defineComponent as f, computed as $, openBlock as l, createElementBlock as i, normalizeClass as z, createElementVNode as m, renderSlot as b, createCommentVNode as h, createVNode as C, unref as g, withCtx as U, ref as P, toDisplayString as y, createBlock as _, resolveDynamicComponent as X, Fragment as V, renderList as D, createTextVNode as Y, createStaticVNode as le, watch as re, onMounted as ie } from "vue";
import { v4 as M } from "uuid";
import { FontAwesomeIcon as G } from "@fortawesome/vue-fontawesome";
import { useI18n as T } from "vue-i18n";
import { u as N } from "./useInputValue-e686f6e9.js";
const ue = ["href", "target"], de = { class: "btn-text" }, pe = ["type", "name", "disabled"], me = { class: "btn-text" }, ce = {
  key: 0,
  class: "spinner-border spinner-border-sm ms-2",
  role: "status",
  "aria-hidden": "true"
}, q = /* @__PURE__ */ f({
  __name: "BSButton",
  props: {
    href: {},
    name: {},
    variant: { default: "dark" },
    size: { default: "normal" },
    outlined: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    input: { default: "button" },
    newTab: { type: Boolean, default: !1 },
    cssClasses: {}
  },
  setup(u) {
    const t = u, o = $(() => {
      let e = "btn ";
      return t.size === "large" ? e += "btn-lg " : t.size === "small" && (e += "btn-sm "), t.outlined ? e += "btn-outline-" : e += "btn-", e += `${t.variant} `, t.active && (e += "active "), t.disabled && (e += "cursor-not-allowed "), e += ` ${t.cssClasses}`;
    });
    return (e, s) => e.href ? (l(), i("a", {
      key: 0,
      href: e.href,
      class: z(o.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      m("span", de, [
        b(e.$slots, "default")
      ])
    ], 10, ue)) : (l(), i("button", {
      key: 1,
      type: e.input,
      class: z(o.value),
      name: e.name,
      disabled: e.disabled
    }, [
      m("span", me, [
        b(e.$slots, "default")
      ]),
      e.loading ? (l(), i("span", ce)) : h("", !0)
    ], 10, pe));
  }
}), fe = { class: "card" }, ge = { class: "d-flex" }, he = {
  key: 0,
  class: "me-auto"
}, ve = {
  key: 2,
  class: "card-image-top"
}, be = { class: "card-body" }, ye = {
  key: 3,
  class: "card-footer"
}, _e = /* @__PURE__ */ f({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(u, { emit: t }) {
    const o = u, e = $(() => o.headerClasses ? `card-header fw-bold ${o.headerClasses}` : "card-header fw-bold");
    return (s, a) => (l(), i("div", fe, [
      s.$slots.header ? (l(), i("div", {
        key: 0,
        class: z(e.value)
      }, [
        b(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (l(), i("div", {
        key: 1,
        class: z(e.value)
      }, [
        m("div", ge, [
          s.$slots.title ? (l(), i("div", he, [
            b(s.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          s.$slots.header_icon ? (l(), i("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: a[0] || (a[0] = (n) => s.$emit("header-icon-clicked"))
          }, [
            b(s.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      s.$slots.image ? (l(), i("div", ve, [
        b(s.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      m("div", be, [
        b(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (l(), i("div", ye, [
        b(s.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const $e = (u, t) => {
  const o = u.__vccOpts || u;
  for (const [e, s] of t)
    o[e] = s;
  return o;
}, Ft = /* @__PURE__ */ $e(_e, [["__scopeId", "data-v-c52e17e8"]]), ke = { class: "dropdown" }, Se = ["aria-labelledby"], At = /* @__PURE__ */ f({
  __name: "BSDropdown",
  props: {
    id: { default: "" },
    variant: { default: "primary" }
  },
  setup(u) {
    const t = u, o = $(() => t.id ? t.id : "id_" + M().toString());
    return (e, s) => (l(), i("div", ke, [
      C(g(q), {
        id: o.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: U(() => [
          b(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      m("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        b(e.$slots, "default")
      ], 8, Se)
    ]));
  }
}), ze = { class: "dropdown dropdown-select is-hoverable" }, we = { class: "me-2" }, Ce = ["id"], Be = { class: "dropdown-content ps-4" }, Zt = /* @__PURE__ */ f({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const o = P(M());
    return (e, s) => (l(), i("div", ze, [
      C(q, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: U(() => [
          m("span", we, y(e.label), 1)
        ]),
        _: 1
      }),
      m("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        m("div", Be, [
          C(g(x), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": s[0] || (s[0] = (a) => e.$emit("update:modelValue", a))
          }, null, 8, ["options", "model-value"])
        ])
      ], 8, Ce)
    ]));
  }
});
const Ve = { key: 0 }, De = { class: "icon me-1" }, Gt = /* @__PURE__ */ f({
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
    return (e, s) => (l(), _(X(o.value), null, {
      default: U(() => [
        e.$slots.default ? (l(), i("span", Ve, [
          m("span", De, [
            C(g(G), {
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
            b(e.$slots, "default")
          ])
        ])) : (l(), _(g(G), {
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
}), Ue = ["value"], Pe = {
  key: 0,
  disabled: "",
  value: ""
}, Le = ["value"], Oe = /* @__PURE__ */ f({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function s(a) {
      typeof o.modelValue == "string" ? e("update:modelValue", a) : e("update:modelValue", Number(a));
    }
    return (a, n) => (l(), i("div", null, [
      m("select", {
        class: z(["form-select", a.containerClasses]),
        value: a.modelValue,
        onChange: n[0] || (n[0] = (r) => s(g(N)(r)))
      }, [
        a.placeholder ? (l(), i("option", Pe, y(a.placeholder), 1)) : h("", !0),
        (l(!0), i(V, null, D(a.options, ([r, d]) => (l(), i("option", {
          key: r ?? "null",
          value: r
        }, y(d), 9, Le))), 128))
      ], 42, Ue)
    ]));
  }
}), Ee = ["id", "value", "checked", "onClick"], Ie = ["for"], x = /* @__PURE__ */ f({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => M().toString() }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function s(a) {
      const n = o.modelValue.includes(a), r = [...o.modelValue], d = r.indexOf(a);
      n ? d > -1 && r.splice(d, 1) : r.push(a), e("update:model-value", r);
    }
    return (a, n) => (l(), i("div", null, [
      (l(!0), i(V, null, D(a.options, ([r, d]) => (l(), i("div", {
        key: r,
        class: z(["form-check", a.containerClasses])
      }, [
        m("input", {
          id: "id_" + r + "_" + a.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: r,
          checked: o.modelValue.includes(r),
          onClick: (p) => s(r)
        }, null, 8, Ee),
        m("label", {
          class: "form-check-label",
          for: "id_" + r + "_" + a.uniqueId
        }, y(d), 9, Ie)
      ], 2))), 128))
    ]));
  }
}), Ne = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Me = ["onClick"], Te = {
  key: 1,
  class: "page-link"
}, R = /* @__PURE__ */ f({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(u, { emit: t }) {
    const o = u;
    function e(d, p, k) {
      return Math.min(Math.max(d, p), k);
    }
    const s = $(() => {
      const d = o.numOptions, p = o.currentpage - d, k = o.currentpage + d, I = Array.from({ length: o.maxPages }, (w, O) => O + 1).filter(
        (w) => w === 1 || w === o.maxPages || w >= p && w <= k
      ), L = [];
      return I.forEach((w, O) => {
        if (O === 0) {
          L.push(w);
          return;
        }
        w - I[O - 1] > 1 && L.push("ellipsis"), L.push(w);
      }), L;
    }), a = t;
    function n(d) {
      d !== "ellipsis" && (d = e(d, 1, o.maxPages), a("change-page", d));
    }
    const { t: r } = T();
    return (d, p) => (l(), i("ul", Ne, [
      m("li", {
        class: z(["page-item page-button", d.currentpage === 1 ? "disabled" : ""])
      }, [
        d.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: p[0] || (p[0] = (k) => n(d.currentpage - 1))
        }, y(g(r)("previous")), 1)) : h("", !0)
      ], 2),
      (l(!0), i(V, null, D(s.value, (k) => (l(), i("li", {
        key: k,
        class: z([
          "page-item",
          (k === "ellipsis" ? "disabled page-ellipsis " : "") + (k === d.currentpage ? "active" : "")
        ])
      }, [
        k !== -42 ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: (I) => n(k)
        }, y(k), 9, Me)) : (l(), i("span", Te, "…"))
      ], 2))), 128)),
      m("li", {
        class: z(["page-item page-button", d.currentpage >= d.maxPages ? "disabled" : ""])
      }, [
        d.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: p[1] || (p[1] = (k) => n(d.currentpage + 1))
        }, y(g(r)("next")), 1)) : h("", !0)
      ], 2)
    ]));
  }
});
function Q(u) {
  const t = u;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        next: (o) => {
          const { normalize: e } = o;
          return e(["Next"]);
        },
        previous: (o) => {
          const { normalize: e } = o;
          return e(["Previous"]);
        }
      },
      nl: {
        next: (o) => {
          const { normalize: e } = o;
          return e(["Volgende"]);
        },
        previous: (o) => {
          const { normalize: e } = o;
          return e(["Vorige"]);
        }
      }
    }
  });
}
typeof Q == "function" && Q(R);
const qe = ["id", "value", "checked", "onClick"], Re = ["for"], je = /* @__PURE__ */ f({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, s) => (l(), i("div", null, [
      (l(!0), i(V, null, D(e.options, ([a, n]) => (l(), i("div", {
        key: a,
        class: z(["form-check", e.containerClasses])
      }, [
        m("input", {
          id: "id_" + a,
          type: "radio",
          class: "form-check-input",
          value: a,
          checked: e.modelValue == a,
          onClick: (r) => o("update:model-value", a)
        }, null, 8, qe),
        m("label", {
          class: "form-check-label",
          for: "id_" + a
        }, y(n), 9, Re)
      ], 2))), 128))
    ]));
  }
}), Fe = { class: "uu-sidebar" }, Ae = ["data-bs-target"], Ze = ["id"], Ge = { class: "uu-sidebar-content" }, Qe = /* @__PURE__ */ f({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = $(() => t.id !== null ? t.id : "id_" + M().toString().replace(/-/g, "")), e = $(() => {
      let s = "";
      return t.placement === "right" && (s += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (s += "uu-sidebar-mobile-bottom "), t.stickySidebar && (s += "uu-sidebar-sticky "), t.mobileStickySidebar && (s += "uu-sidebar-mobile-sticky "), s;
    });
    return (s, a) => (l(), i("div", {
      class: z(["uu-sidebar-container", e.value])
    }, [
      m("aside", Fe, [
        m("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          b(s.$slots, "sidebar-button")
        ], 8, Ae),
        m("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          b(s.$slots, "sidebar")
        ], 8, Ze)
      ]),
      m("section", Ge, [
        b(s.$slots, "default")
      ])
    ], 2));
  }
}), He = { class: "uu-list-filter" }, We = { class: "uu-list-filter-label" }, Je = {
  key: 3,
  class: "uu-list-filter-field"
}, Ke = ["value"], Xe = /* @__PURE__ */ f({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, s) => (l(), i("div", He, [
      m("div", We, y(e.filter.label), 1),
      e.filter.type === "checkbox" ? (l(), _(g(x), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": s[0] || (s[0] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "select" ? (l(), _(g(Oe), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": s[1] || (s[1] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "radio" ? (l(), _(g(je), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": s[2] || (s[2] = (a) => o("update:value", a))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "date" ? (l(), i("div", Je, [
        m("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: s[3] || (s[3] = (a) => o("update:value", g(N)(a)))
        }, null, 40, Ke)
      ])) : h("", !0)
    ]));
  }
}), ee = /* @__PURE__ */ f({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(u, { emit: t }) {
    const o = u, e = $(() => o.filterProps.filters), s = $(() => o.filterProps.filterValues), a = t;
    function n(r, d) {
      let p = { ...s.value };
      p[r] = d, a("update:filter-values", p);
    }
    return (r, d) => (l(!0), i(V, null, D(e.value, (p) => (l(), _(Xe, {
      key: p.field,
      filter: p,
      value: s.value[p.field],
      "onUpdate:value": (k) => n(p.field, k)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), Ye = { class: "search" }, xe = ["value", "placeholder"], j = /* @__PURE__ */ f({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(u, { emit: t }) {
    function o(r, d = 500) {
      let p;
      return (...k) => {
        clearTimeout(p), p = setTimeout(() => {
          r.apply(this, k);
        }, d);
      };
    }
    const e = t;
    function s(r) {
      e("update:modelValue", r);
    }
    const a = o((r) => s(r)), { t: n } = T();
    return (r, d) => (l(), i("div", Ye, [
      m("input", {
        id: "search",
        class: "form-control",
        value: r.modelValue,
        placeholder: g(n)("placeholder"),
        onInput: d[0] || (d[0] = (p) => g(a)(g(N)(p)))
      }, null, 40, xe)
    ]));
  }
});
function H(u) {
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
typeof H == "function" && H(j);
const et = ["value"], tt = ["value"], te = /* @__PURE__ */ f({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function s(a) {
      if (typeof a == "string")
        try {
          a = Number(a);
        } catch {
          a = o.pageSizeOptions[0] ?? 10;
        }
      e("update:pageSize", a);
    }
    return (a, n) => (l(), i("select", {
      value: a.pageSize,
      class: "form-select",
      onChange: n[0] || (n[0] = (r) => s(g(N)(r)))
    }, [
      (l(!0), i(V, null, D(a.pageSizeOptions, (r) => (l(), i("option", {
        key: r,
        value: r
      }, y(r), 9, tt))), 128))
    ], 40, et));
  }
}), ot = ["value"], nt = ["value"], oe = /* @__PURE__ */ f({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(u, { emit: t }) {
    return (o, e) => (l(), i("select", {
      value: o.currentSort,
      class: "form-select",
      onChange: e[0] || (e[0] = (s) => o.$emit("update:current-sort", g(N)(s).trim()))
    }, [
      (l(!0), i(V, null, D(o.sortOptions, ({ field: s, label: a }) => (l(), i("option", {
        key: s,
        value: s
      }, y(a), 9, nt))), 128))
    ], 40, ot));
  }
}), at = { key: 0 }, F = /* @__PURE__ */ f({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(u) {
    const { t } = T();
    return (o, e) => (l(), i("div", null, [
      o.searchQuery ? (l(), i("span", at, y(g(t)("search", { query: o.searchQuery })), 1)) : h("", !0),
      Y(" " + y(g(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function W(u) {
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
typeof W == "function" && W(F);
function ne(u) {
  const { filters: t, filterValues: o } = u;
  return !t || !o ? null : { filters: t, filterValues: o };
}
const st = { class: "uu-container" }, lt = { class: "uu-list" }, rt = { class: "uu-list-controls" }, it = {
  key: 1,
  class: "uu-list-order-control"
}, ut = { class: "uu-list-page-size-control" }, dt = {
  key: 0,
  class: "uu-list-filters"
}, pt = { class: "uu-list-content" }, mt = /* @__PURE__ */ f({
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
    const o = u, e = t, s = $(() => Math.ceil(o.totalData / o.pageSize)), a = $(() => ne(o));
    return (n, r) => {
      var d;
      return l(), i("div", st, [
        m("div", lt, [
          m("div", rt, [
            n.searchEnabled ? (l(), _(j, {
              key: 0,
              "model-value": n.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": r[0] || (r[0] = (p) => n.$emit("update:search", p))
            }, null, 8, ["model-value"])) : h("", !0),
            C(F, {
              "search-query": n.search,
              "page-num": ((d = n.data) == null ? void 0 : d.length) ?? 0,
              "total-num": n.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            n.sortEnabled ? (l(), i("div", it, [
              C(oe, {
                "current-sort": n.currentSort,
                "sort-options": n.sortOptions,
                "onUpdate:currentSort": r[1] || (r[1] = (p) => e("update:current-sort", p))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : h("", !0),
            m("div", ut, [
              C(te, {
                "page-size-options": n.pageSizeOptions,
                "page-size": n.pageSize,
                "onUpdate:pageSize": r[2] || (r[2] = (p) => e("update:page-size", p))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          n.filtersEnabled && a.value ? (l(), i("div", dt, [
            b(n.$slots, "filters-top", {
              data: n.data,
              isLoading: n.isLoading
            }),
            C(ee, {
              "filter-props": a.value,
              "onUpdate:filterValues": r[3] || (r[3] = (p) => n.$emit("update:filter-values", p))
            }, null, 8, ["filter-props"]),
            b(n.$slots, "filters-bottom", {
              data: n.data,
              isLoading: n.isLoading
            })
          ])) : h("", !0),
          m("div", pt, [
            b(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (l(), _(g(R), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: r[4] || (r[4] = (p) => n.$emit("update:current-page", p))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), ct = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, ft = {
  key: 0,
  class: "ms-auto"
}, ae = /* @__PURE__ */ f({
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
    const o = u, e = t, s = $(() => Math.ceil(o.totalData / o.pageSize)), a = $(() => ne(o));
    return (n, r) => (l(), _(g(Qe), { class: "uu-list-sidebar" }, {
      sidebar: U(() => [
        n.searchEnabled ? (l(), _(j, {
          key: 0,
          "model-value": n.search,
          "onUpdate:modelValue": r[0] || (r[0] = (d) => n.$emit("update:search", d))
        }, null, 8, ["model-value"])) : h("", !0),
        b(n.$slots, "filters-top", {
          data: n.data,
          isLoading: n.isLoading
        }),
        a.value ? (l(), _(ee, {
          key: 1,
          "filter-props": a.value,
          "onUpdate:filterValues": r[1] || (r[1] = (d) => n.$emit("update:filter-values", d))
        }, null, 8, ["filter-props"])) : h("", !0),
        b(n.$slots, "filters-bottom", {
          data: n.data,
          isLoading: n.isLoading
        })
      ]),
      default: U(() => {
        var d;
        return [
          m("div", null, [
            m("div", ct, [
              C(F, {
                "search-query": n.search,
                "page-num": ((d = n.data) == null ? void 0 : d.length) ?? 0,
                "total-num": n.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              n.sortEnabled ? (l(), i("div", ft, [
                C(oe, {
                  "current-sort": n.currentSort,
                  "sort-options": n.sortOptions,
                  "onUpdate:currentSort": r[2] || (r[2] = (p) => e("update:current-sort", p))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : h("", !0),
              m("div", null, [
                C(te, {
                  "page-size-options": n.pageSizeOptions,
                  "page-size": n.pageSize,
                  "onUpdate:pageSize": r[3] || (r[3] = (p) => e("update:page-size", p))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            b(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (l(), _(g(R), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: r[4] || (r[4] = (p) => n.$emit("update:current-page", p))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function J(u) {
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
typeof J == "function" && J(ae);
const gt = /* @__PURE__ */ f({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    return (t, o) => (l(), i("pre", null, y(t.data), 1));
  }
}), ht = /* @__PURE__ */ f({
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
  setup(u, { emit: t }) {
    const o = u, e = t, s = $(() => {
      switch (o.container) {
        case "sidebar":
          return ae;
        default:
          return mt;
      }
    });
    return (a, n) => (l(), _(X(s.value), {
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
      "onUpdate:search": n[0] || (n[0] = (r) => e("update:search", r)),
      "onUpdate:currentSort": n[1] || (n[1] = (r) => e("update:current-sort", r)),
      "onUpdate:pageSize": n[2] || (n[2] = (r) => e("update:page-size", r)),
      "onUpdate:currentPage": n[3] || (n[3] = (r) => e("update:current-page", r)),
      "onUpdate:filterValues": n[4] || (n[4] = (r) => e("update:filter-values", r))
    }, {
      data: U(({ data: r, isLoading: d }) => [
        b(a.$slots, "data", {
          data: r,
          isLoading: d
        }, () => [
          C(gt, {
            data: r,
            "is-loading": d
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": U(({ data: r, isLoading: d }) => [
        b(a.$slots, "filters-top", {
          data: r,
          isLoading: d
        })
      ]),
      "filters-bottom": U(({ data: r, isLoading: d }) => [
        b(a.$slots, "filters-bottom", {
          data: r,
          isLoading: d
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), vt = /* @__PURE__ */ f({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (l(), i("span", {
      class: z(t.column.classes)
    }, y(t.item[t.column.field]), 3));
  }
}), bt = /* @__PURE__ */ f({
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
    return (e, s) => (l(), i("span", {
      class: z(e.column.classes)
    }, y(o.value), 3));
  }
}), yt = { key: 0 }, _t = /* @__PURE__ */ f({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", yt, [
      C(g(q), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: U(() => [
          Y(y(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : h("", !0);
  }
}), $t = { key: 0 }, kt = ["href", "target"], St = /* @__PURE__ */ f({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", $t, [
      m("a", {
        href: t.item[t.column.field].link,
        class: z(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, y(t.item[t.column.field].text), 11, kt)
    ])) : h("", !0);
  }
}), zt = ["innerHTML"], wt = /* @__PURE__ */ f({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (l(), i("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, zt));
  }
}), Ct = {
  key: 0,
  class: "dropdown"
}, Bt = { class: "dropdown-menu" }, Vt = {
  key: 0,
  class: "dropdown-divider"
}, Dt = ["href", "target"], Ut = /* @__PURE__ */ f({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    const t = u, o = $(() => t.item[t.column.field].entries());
    return (e, s) => o.value ? (l(), i("div", Ct, [
      s[0] || (s[0] = le('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      m("ul", Bt, [
        (l(!0), i(V, null, D(o.value, ([a, n]) => (l(), i("li", { key: a }, [
          n.divider ? (l(), i("hr", Vt)) : (l(), i("a", {
            key: 1,
            href: n.link,
            class: z(["dropdown-item", n.classes ?? ""]),
            target: n.new_tab ? "_blank" : "_self"
          }, y(n.text), 11, Dt))
        ]))), 128))
      ])
    ])) : h("", !0);
  }
}), Pt = /* @__PURE__ */ f({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.column.type == "string" ? (l(), _(vt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (l(), _(bt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (l(), _(_t, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (l(), _(St, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (l(), _(wt, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (l(), _(Ut, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : h("", !0);
  }
}), Lt = /* @__PURE__ */ f({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(u) {
    return (t, o) => (l(), i("tr", null, [
      (l(!0), i(V, null, D(t.columns, (e) => (l(), i("td", {
        key: e.field,
        class: "align-middle"
      }, [
        C(Pt, {
          column: e,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ot = {
  key: 0,
  class: "alert alert-info w-100"
}, Et = { key: 0 }, It = { key: 1 }, Nt = ["colspan"], se = /* @__PURE__ */ f({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = $(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = T();
    return (s, a) => s.isLoading && o.value ? (l(), i("div", Ot, y(g(e)("loading")), 1)) : (l(), i("table", {
      key: 1,
      class: z(["table", s.isLoading ? "loading" : ""])
    }, [
      m("thead", null, [
        m("tr", null, [
          (l(!0), i(V, null, D(s.columns, (n) => (l(), i("th", {
            key: n.field
          }, y(n.label), 1))), 128))
        ])
      ]),
      o.value ? (l(), i("tbody", It, [
        m("tr", null, [
          m("td", {
            colspan: s.columns.length
          }, y(g(e)("no_data")), 9, Nt)
        ])
      ])) : (l(), i("tbody", Et, [
        (l(!0), i(V, null, D(s.data, (n) => (l(), _(Lt, {
          key: n.id,
          item: n,
          columns: s.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function K(u) {
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
typeof K == "function" && K(se);
const Qt = /* @__PURE__ */ f({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(u) {
    const t = u, o = P(t.config.pageSize), e = P(1), s = P(""), a = P("id"), n = P(!0);
    function r() {
      var v;
      let c = {};
      return (v = t.config.filters) == null || v.forEach((S) => {
        var E;
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
            ((E = S.options) == null ? void 0 : E.length) != 0 && S.options && (c[S.field] = S.options[0][0]);
            break;
        }
      }), c;
    }
    const d = P(r());
    let p = P(null);
    const k = $(() => {
      let c = [];
      c.push("page_size=" + encodeURIComponent(o.value));
      for (const [v, S] of Object.entries(d.value))
        S != null && (typeof S == "object" ? S.forEach(
          (E) => c.push(v + "=" + encodeURIComponent(E))
        ) : c.push(v + "=" + encodeURIComponent(S)));
      return s.value && c.push("search=" + encodeURIComponent(s.value)), c.push("ordering=" + encodeURIComponent(a.value)), e.value = 1, c;
    }), I = $(() => {
      let c = k.value, v = "page=" + encodeURIComponent(e.value);
      return c.length !== 0 && (v = "&" + v), "?" + c.join("&") + v;
    }), L = $(() => {
      let c = new URL(window.location.protocol + "//" + window.location.host);
      return c.pathname = t.config.dataUri, c.search = I.value, console.log(c.toString()), c.toString();
    });
    re(L, () => {
      O();
    });
    const w = P(null);
    function O() {
      w.value && w.value.abort(), w.value = new AbortController(), n.value = !0, fetch(L.value, { signal: w.value.signal }).then((c) => {
        c.json().then((v) => {
          p.value = v, n.value = !1, v.ordering && (a.value = v.ordering), w.value = null;
        });
      }).catch((c) => {
        console.log(c);
      });
    }
    return ie(() => {
      O();
    }), (c, v) => {
      var S, E, A;
      return l(), _(ht, {
        "is-loading": n.value,
        data: ((S = g(p)) == null ? void 0 : S.results) ?? void 0,
        "total-data": ((E = g(p)) == null ? void 0 : E.count) ?? 0,
        "search-enabled": c.config.searchEnabled,
        search: s.value,
        "sort-enabled": c.config.sortEnabled,
        "current-sort": a.value,
        "page-size-options": c.config.pageSizeOptions,
        "sort-options": c.config.sortOptions ?? [],
        "page-size": ((A = g(p)) == null ? void 0 : A.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": c.config.filtersEnabled,
        filters: c.config.filters ?? [],
        "filter-values": d.value,
        container: c.config.container,
        "onUpdate:search": v[0] || (v[0] = (B) => s.value = B),
        "onUpdate:currentSort": v[1] || (v[1] = (B) => a.value = B),
        "onUpdate:pageSize": v[2] || (v[2] = (B) => o.value = B),
        "onUpdate:currentPage": v[3] || (v[3] = (B) => e.value = B),
        "onUpdate:filterValues": v[4] || (v[4] = (B) => d.value = B)
      }, {
        data: U(({ data: B, isLoading: Z }) => [
          b(c.$slots, "data", {
            data: B,
            isLoading: Z
          }, () => [
            C(se, {
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
}), Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  q as BSButton,
  Ft as BSCard,
  At as BSDropdown,
  Zt as BSDropdownMultiSelect,
  Gt as BSIcon,
  x as BSMultiSelect,
  R as BSPagination,
  je as BSRadioSelect,
  Oe as BSSelect,
  Qe as BSSidebar,
  Qt as DSCList,
  ht as UUList,
  Ht as UUListTypes
};
