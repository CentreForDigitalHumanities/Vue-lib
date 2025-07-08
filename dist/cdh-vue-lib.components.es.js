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
import { defineComponent as f, computed as _, openBlock as a, createElementBlock as u, normalizeClass as S, createElementVNode as m, renderSlot as h, createCommentVNode as g, createVNode as w, unref as v, withCtx as L, ref as V, toDisplayString as z, createBlock as k, resolveDynamicComponent as Y, onMounted as x, onUnmounted as ue, watch as ee, Teleport as de, Fragment as U, renderList as D, createTextVNode as te, createStaticVNode as pe } from "vue";
import { v4 as me } from "uuid";
import { FontAwesomeIcon as Q } from "@fortawesome/vue-fontawesome";
import { Modal as ce } from "bootstrap";
import { useI18n as j } from "vue-i18n";
import { u as N } from "./useInputValue-e686f6e9.js";
const fe = ["id", "href", "target"], ge = { class: "btn-text" }, he = ["id", "type", "name", "disabled"], ve = { class: "btn-text" }, be = {
  key: 0,
  class: "spinner-border spinner-border-sm ms-2",
  role: "status",
  "aria-hidden": "true"
}, q = /* @__PURE__ */ f({
  __name: "BSButton",
  props: {
    id: {},
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
  setup(p) {
    const t = p, o = _(() => {
      const e = ["btn"];
      return t.size === "large" ? e.push("btn-lg") : t.size === "small" && e.push("btn-sm"), t.outlined ? e.push(`btn-outline-${t.variant}`) : e.push(`btn-${t.variant}`), t.active && e.push("active"), t.disabled && e.push("cursor-not-allowed"), t.cssClasses && e.push(t.cssClasses), e.join(" ");
    });
    return (e, l) => e.href ? (a(), u("a", {
      key: 0,
      id: e.id,
      href: e.href,
      class: S(o.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      m("span", ge, [
        h(e.$slots, "default")
      ])
    ], 10, fe)) : (a(), u("button", {
      key: 1,
      id: e.id,
      type: e.input,
      class: S(o.value),
      name: e.name,
      disabled: e.disabled
    }, [
      m("span", ve, [
        h(e.$slots, "default")
      ]),
      e.loading ? (a(), u("span", be)) : g("", !0)
    ], 10, he));
  }
}), ye = { class: "card" }, _e = { class: "d-flex" }, $e = {
  key: 0,
  class: "me-auto"
}, ke = {
  key: 2,
  class: "card-image-top"
}, ze = { class: "card-body" }, Se = {
  key: 3,
  class: "card-footer"
}, we = /* @__PURE__ */ f({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(p, { emit: t }) {
    const o = p, e = _(() => o.headerClasses ? `card-header fw-bold ${o.headerClasses}` : "card-header fw-bold");
    return (l, n) => (a(), u("div", ye, [
      l.$slots.header ? (a(), u("div", {
        key: 0,
        class: S(e.value)
      }, [
        h(l.$slots, "header", {}, void 0, !0)
      ], 2)) : l.$slots.title || l.$slots.header_icon ? (a(), u("div", {
        key: 1,
        class: S(e.value)
      }, [
        m("div", _e, [
          l.$slots.title ? (a(), u("div", $e, [
            h(l.$slots, "title", {}, void 0, !0)
          ])) : g("", !0),
          l.$slots.header_icon ? (a(), u("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: n[0] || (n[0] = (s) => l.$emit("header-icon-clicked"))
          }, [
            h(l.$slots, "header_icon", {}, void 0, !0)
          ])) : g("", !0)
        ])
      ], 2)) : g("", !0),
      l.$slots.image ? (a(), u("div", ke, [
        h(l.$slots, "image", {}, void 0, !0)
      ])) : g("", !0),
      m("div", ze, [
        h(l.$slots, "default", {}, void 0, !0)
      ]),
      l.$slots.footer ? (a(), u("div", Se, [
        h(l.$slots, "footer", {}, void 0, !0)
      ])) : g("", !0)
    ]));
  }
});
const Ce = (p, t) => {
  const o = p.__vccOpts || p;
  for (const [e, l] of t)
    o[e] = l;
  return o;
}, xt = /* @__PURE__ */ Ce(we, [["__scopeId", "data-v-6f3d1273"]]);
function M() {
  return "id_" + me().toString().replace(/-/g, "");
}
const Be = { class: "dropdown" }, Ve = ["aria-labelledby"], eo = /* @__PURE__ */ f({
  __name: "BSDropdown",
  props: {
    id: { default: null },
    variant: { default: "primary" }
  },
  setup(p) {
    const t = p, o = _(() => t.id ?? M());
    return (e, l) => (a(), u("div", Be, [
      w(v(q), {
        id: o.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: L(() => [
          h(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      m("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        h(e.$slots, "default")
      ], 8, Ve)
    ]));
  }
}), Ue = { class: "dropdown dropdown-select is-hoverable" }, De = { class: "me-2" }, Le = ["id"], Pe = { class: "dropdown-content ps-4" }, to = /* @__PURE__ */ f({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(p, { emit: t }) {
    const o = V(M());
    return (e, l) => (a(), u("div", Ue, [
      w(q, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: L(() => [
          m("span", De, z(e.label), 1)
        ]),
        _: 1
      }),
      m("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        m("div", Pe, [
          w(v(oe), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": l[0] || (l[0] = (n) => e.$emit("update:modelValue", n))
          }, null, 8, ["options", "model-value"])
        ])
      ], 8, Le)
    ]));
  }
});
const Ee = { key: 0 }, Oe = { class: "icon me-1" }, oo = /* @__PURE__ */ f({
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
  setup(p) {
    const t = p, o = _(() => t.inline ? "span" : "div");
    return (e, l) => (a(), k(Y(o.value), null, {
      default: L(() => [
        e.$slots.default ? (a(), u("span", Ee, [
          m("span", Oe, [
            w(v(Q), {
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
            h(e.$slots, "default")
          ])
        ])) : (a(), k(v(Q), {
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
}), Ie = { class: "modal-content" }, Ne = {
  key: 0,
  class: "modal-title mw-100"
}, je = {
  key: 1,
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, Me = { class: "modal-body" }, Te = {
  key: 1,
  class: "modal-footer justify-content-start"
}, so = /* @__PURE__ */ f({
  __name: "BSModal",
  props: {
    id: { default: null },
    active: { type: Boolean },
    hasBackground: { type: Boolean, default: !0 },
    backgroundClickCloses: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 },
    size: { default: "default" },
    headerColor: { default: "primary" },
    headerBold: { type: Boolean, default: !0 },
    centered: { type: Boolean, default: !1 }
  },
  emits: ["shown", "hidden"],
  setup(p, { emit: t }) {
    const o = p, e = t, l = _(() => {
      const i = [];
      switch (o.centered && i.push("modal-dialog-centered"), o.size) {
        case "small":
          i.push("modal-sm modal-fullscreen-sm-down");
          break;
        case "large":
          i.push("modal-lg modal-fullscreen-lg-down");
          break;
        case "extra-large":
          i.push("modal-xl modal-fullscreen-xl-down");
          break;
        default:
          i.push("modal-fullscreen-md-down");
          break;
      }
      return i.join(" ");
    }), n = _(() => {
      const i = [];
      return o.headerColor && i.push(`text-bg-${o.headerColor}`), o.headerBold && i.push("fw-bold"), i.join(" ");
    });
    let s;
    const r = V(null);
    function d(i) {
      var b, P;
      i ? (b = s == null ? void 0 : s.value) == null || b.show() : (P = s == null ? void 0 : s.value) == null || P.hide();
    }
    return x(() => {
      if (!r.value)
        return;
      let i = o.hasBackground;
      i && !o.backgroundClickCloses && (i = "static"), s = V(
        new ce(r.value, {
          backdrop: i
        })
      ), r.value.addEventListener(
        "hidden.bs.modal",
        () => e("hidden")
      ), r.value.addEventListener("shown.bs.modal", () => e("shown")), d(o.active);
    }), ue(() => {
      var i;
      (i = s == null ? void 0 : s.value) == null || i.dispose();
    }), ee(
      () => o.active,
      (i) => {
        d(i);
      }
    ), (i, b) => (a(), k(de, { to: "body" }, [
      m("div", {
        ref_key: "modalElement",
        ref: r,
        class: "modal fade",
        tabindex: "-1"
      }, [
        m("div", {
          class: S(["modal-dialog modal-dialog-scrollable", l.value])
        }, [
          m("div", Ie, [
            i.$slots.title || i.showCloseButton ? (a(), u("div", {
              key: 0,
              class: S(["modal-header", n.value])
            }, [
              i.$slots.title ? (a(), u("p", Ne, [
                h(i.$slots, "title")
              ])) : g("", !0),
              i.showCloseButton ? (a(), u("button", je)) : g("", !0)
            ], 2)) : g("", !0),
            m("div", Me, [
              h(i.$slots, "default")
            ]),
            i.$slots.footer ? (a(), u("div", Te, [
              h(i.$slots, "footer")
            ])) : g("", !0)
          ])
        ], 2)
      ], 512)
    ]));
  }
}), qe = ["value"], Re = {
  key: 0,
  disabled: "",
  value: ""
}, Fe = ["value"], T = "___NULL_VALUE___", Ae = /* @__PURE__ */ f({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    const o = p, e = t, l = _(() => o.modelValue === null ? T : o.modelValue), n = _(() => o.options.map((r) => {
      const [d, i] = r;
      return [d === null ? T : d, i];
    }));
    function s(r) {
      const d = o.options.find((i) => r === T ? i[0] === null : String(i[0]) === r);
      d && e("update:model-value", d[0]);
    }
    return (r, d) => (a(), u("div", null, [
      m("select", {
        class: S(["form-select", r.containerClasses]),
        value: l.value,
        onChange: d[0] || (d[0] = (i) => s(v(N)(i)))
      }, [
        r.placeholder ? (a(), u("option", Re, z(r.placeholder), 1)) : g("", !0),
        (a(!0), u(U, null, D(n.value, ([i, b]) => (a(), u("option", {
          key: i,
          value: i
        }, z(b), 9, Fe))), 128))
      ], 42, qe)
    ]));
  }
}), Ge = ["id", "value", "checked", "onClick"], Ze = ["for"], oe = /* @__PURE__ */ f({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => M() }
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    const o = p, e = t;
    function l(n) {
      const s = o.modelValue.includes(n), r = [...o.modelValue], d = r.indexOf(n);
      s ? d > -1 && r.splice(d, 1) : r.push(n), e("update:model-value", r);
    }
    return (n, s) => (a(), u("div", null, [
      (a(!0), u(U, null, D(n.options, ([r, d]) => (a(), u("div", {
        key: r,
        class: S(["form-check", n.containerClasses])
      }, [
        m("input", {
          id: `${n.uniqueId}-${r}`,
          type: "checkbox",
          class: "form-check-input",
          value: r,
          checked: o.modelValue.includes(r),
          onClick: (i) => l(r)
        }, null, 8, Ge),
        m("label", {
          class: "form-check-label",
          for: `${n.uniqueId}-${r}`
        }, z(d), 9, Ze)
      ], 2))), 128))
    ]));
  }
}), Qe = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, He = ["onClick"], We = {
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
  setup(p, { emit: t }) {
    const o = p;
    function e(d, i, b) {
      return Math.min(Math.max(d, i), b);
    }
    const l = _(() => {
      const d = o.numOptions, i = o.currentpage - d, b = o.currentpage + d, P = Array.from({ length: o.maxPages }, (C, O) => O + 1).filter(
        (C) => C === 1 || C === o.maxPages || C >= i && C <= b
      ), E = [];
      return P.forEach((C, O) => {
        if (O === 0) {
          E.push(C);
          return;
        }
        C - P[O - 1] > 1 && E.push("ellipsis"), E.push(C);
      }), E;
    }), n = t;
    function s(d) {
      d !== "ellipsis" && (d = e(d, 1, o.maxPages), n("change-page", d));
    }
    const { t: r } = j();
    return (d, i) => (a(), u("ul", Qe, [
      m("li", {
        class: S(["page-item page-button", d.currentpage === 1 ? "disabled" : ""])
      }, [
        d.showButtons ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: i[0] || (i[0] = (b) => s(d.currentpage - 1))
        }, z(v(r)("previous")), 1)) : g("", !0)
      ], 2),
      (a(!0), u(U, null, D(l.value, (b) => (a(), u("li", {
        key: b,
        class: S([
          "page-item",
          (b === "ellipsis" ? "disabled page-ellipsis " : "") + (b === d.currentpage ? "active" : "")
        ])
      }, [
        b !== -42 ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: (P) => s(b)
        }, z(b), 9, He)) : (a(), u("span", We, "…"))
      ], 2))), 128)),
      m("li", {
        class: S(["page-item page-button", d.currentpage >= d.maxPages ? "disabled" : ""])
      }, [
        d.showButtons ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: i[1] || (i[1] = (b) => s(d.currentpage + 1))
        }, z(v(r)("next")), 1)) : g("", !0)
      ], 2)
    ]));
  }
});
function H(p) {
  const t = p;
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
typeof H == "function" && H(R);
const Je = ["id", "value", "checked", "onClick"], Ke = ["for"], Xe = /* @__PURE__ */ f({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    const o = t;
    return (e, l) => (a(), u("div", null, [
      (a(!0), u(U, null, D(e.options, ([n, s]) => (a(), u("div", {
        key: n,
        class: S(["form-check", e.containerClasses])
      }, [
        m("input", {
          id: "id_" + n,
          type: "radio",
          class: "form-check-input",
          value: n,
          checked: e.modelValue == n,
          onClick: (r) => o("update:model-value", n)
        }, null, 8, Je),
        m("label", {
          class: "form-check-label",
          for: "id_" + n
        }, z(s), 9, Ke)
      ], 2))), 128))
    ]));
  }
}), Ye = { class: "uu-sidebar" }, xe = ["data-bs-target"], et = ["id"], tt = { class: "uu-sidebar-content" }, ot = /* @__PURE__ */ f({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(p) {
    const t = p, o = M(), e = _(() => t.id ?? o), l = _(() => {
      const n = [];
      return t.placement === "right" && n.push("uu-sidebar-right"), t.mobilePlacement === "bottom" && n.push("uu-sidebar-mobile-bottom"), t.stickySidebar && n.push("uu-sidebar-sticky"), t.mobileStickySidebar && n.push("uu-sidebar-mobile-sticky"), n.join(" ");
    });
    return (n, s) => (a(), u("div", {
      class: S(["uu-sidebar-container", l.value])
    }, [
      m("aside", Ye, [
        m("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + e.value,
          "aria-expanded": "false"
        }, [
          h(n.$slots, "sidebar-button")
        ], 8, xe),
        m("div", {
          id: e.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          h(n.$slots, "sidebar")
        ], 8, et)
      ]),
      m("section", tt, [
        h(n.$slots, "default")
      ])
    ], 2));
  }
}), st = { class: "uu-list-filter" }, nt = { class: "uu-list-filter-label" }, at = {
  key: 3,
  class: "uu-list-filter-field"
}, lt = ["value"], rt = /* @__PURE__ */ f({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(p, { emit: t }) {
    const o = t;
    return (e, l) => (a(), u("div", st, [
      m("div", nt, z(e.filter.label), 1),
      e.filter.type === "checkbox" ? (a(), k(v(oe), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": l[0] || (l[0] = (n) => o("update:value", n))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "select" ? (a(), k(v(Ae), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": l[1] || (l[1] = (n) => o("update:value", n))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "radio" ? (a(), k(v(Xe), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": l[2] || (l[2] = (n) => o("update:value", n))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "date" ? (a(), u("div", at, [
        m("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: l[3] || (l[3] = (n) => o("update:value", v(N)(n)))
        }, null, 40, lt)
      ])) : g("", !0)
    ]));
  }
}), se = /* @__PURE__ */ f({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(p, { emit: t }) {
    const o = p, e = _(() => o.filterProps.filters), l = _(() => o.filterProps.filterValues), n = t;
    function s(r, d) {
      let i = { ...l.value };
      i[r] = d, n("update:filter-values", i);
    }
    return (r, d) => (a(!0), u(U, null, D(e.value, (i) => (a(), k(rt, {
      key: i.field,
      filter: i,
      value: l.value[i.field],
      "onUpdate:value": (b) => s(i.field, b)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), it = { class: "search" }, ut = ["value", "placeholder"], F = /* @__PURE__ */ f({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    function o(r, d = 500) {
      let i;
      return (...b) => {
        clearTimeout(i), i = setTimeout(() => {
          r(...b);
        }, d);
      };
    }
    const e = t;
    function l(r) {
      e("update:model-value", r);
    }
    const n = o((r) => l(r)), { t: s } = j();
    return (r, d) => (a(), u("div", it, [
      m("input", {
        id: "search",
        class: "form-control",
        value: r.modelValue,
        placeholder: v(s)("placeholder"),
        onInput: d[0] || (d[0] = (i) => v(n)(v(N)(i)))
      }, null, 40, ut)
    ]));
  }
});
function W(p) {
  const t = p;
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
typeof W == "function" && W(F);
const dt = ["value"], pt = ["value"], ne = /* @__PURE__ */ f({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:page-size"],
  setup(p, { emit: t }) {
    const o = p, e = t;
    function l(n) {
      if (typeof n == "string") {
        const s = parseInt(n);
        isNaN(s) ? n = o.pageSizeOptions[0] ?? 10 : n = s;
      }
      e("update:page-size", n);
    }
    return (n, s) => (a(), u("select", {
      value: n.pageSize,
      class: "form-select",
      onChange: s[0] || (s[0] = (r) => l(v(N)(r)))
    }, [
      (a(!0), u(U, null, D(n.pageSizeOptions, (r) => (a(), u("option", {
        key: r,
        value: r
      }, z(r), 9, pt))), 128))
    ], 40, dt));
  }
}), mt = ["value"], ct = ["value"], ae = /* @__PURE__ */ f({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort"],
  setup(p, { emit: t }) {
    return (o, e) => (a(), u("select", {
      value: o.currentSort,
      class: "form-select",
      onChange: e[0] || (e[0] = (l) => o.$emit("update:current-sort", v(N)(l).trim()))
    }, [
      (a(!0), u(U, null, D(o.sortOptions, ({ field: l, label: n }) => (a(), u("option", {
        key: l,
        value: l
      }, z(n), 9, ct))), 128))
    ], 40, mt));
  }
}), ft = { key: 0 }, A = /* @__PURE__ */ f({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(p) {
    const { t } = j();
    return (o, e) => (a(), u("div", null, [
      o.searchQuery ? (a(), u("span", ft, z(v(t)("search", { query: o.searchQuery })), 1)) : g("", !0),
      te(" " + z(v(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function J(p) {
  const t = p;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (o) => {
          const { normalize: e, interpolate: l, named: n } = o;
          return e(["Search result: ", l(n("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: l, named: n } = o;
          return e(["showing ", l(n("pageNum")), " of ", l(n("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: e, interpolate: l, named: n } = o;
          return e(["Zoekresultaat: ", l(n("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: l, named: n } = o;
          return e([l(n("pageNum")), " van ", l(n("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof J == "function" && J(A);
function le(p) {
  const { filters: t, filterValues: o } = p;
  return !t || !o ? null : { filters: t, filterValues: o };
}
const gt = { class: "uu-container" }, ht = { class: "uu-list" }, vt = { class: "uu-list-controls" }, bt = {
  key: 1,
  class: "uu-list-order-control"
}, yt = { class: "uu-list-page-size-control" }, _t = {
  key: 0,
  class: "uu-list-filters"
}, $t = { class: "uu-list-content" }, kt = /* @__PURE__ */ f({
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
  setup(p, { emit: t }) {
    const o = p, e = t, l = _(() => Math.ceil(o.totalData / o.pageSize)), n = _(() => le(o));
    return (s, r) => {
      var d;
      return a(), u("div", gt, [
        m("div", ht, [
          m("div", vt, [
            s.searchEnabled ? (a(), k(F, {
              key: 0,
              "model-value": s.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": r[0] || (r[0] = (i) => s.$emit("update:search", i))
            }, null, 8, ["model-value"])) : g("", !0),
            w(A, {
              "search-query": s.search,
              "page-num": ((d = s.data) == null ? void 0 : d.length) ?? 0,
              "total-num": s.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            s.sortEnabled ? (a(), u("div", bt, [
              w(ae, {
                "current-sort": s.currentSort,
                "sort-options": s.sortOptions,
                "onUpdate:currentSort": r[1] || (r[1] = (i) => e("update:current-sort", i))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : g("", !0),
            m("div", yt, [
              w(ne, {
                "page-size-options": s.pageSizeOptions,
                "page-size": s.pageSize,
                "onUpdate:pageSize": r[2] || (r[2] = (i) => e("update:page-size", i))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          s.filtersEnabled && n.value ? (a(), u("div", _t, [
            h(s.$slots, "filters-top", {
              data: s.data,
              isLoading: s.isLoading
            }),
            w(se, {
              "filter-props": n.value,
              "onUpdate:filterValues": r[3] || (r[3] = (i) => s.$emit("update:filter-values", i))
            }, null, 8, ["filter-props"]),
            h(s.$slots, "filters-bottom", {
              data: s.data,
              isLoading: s.isLoading
            })
          ])) : g("", !0),
          m("div", $t, [
            h(s.$slots, "data", {
              data: s.data,
              isLoading: s.isLoading
            }),
            m("div", null, [
              s.data ? (a(), k(v(R), {
                key: 0,
                "max-pages": l.value,
                currentpage: s.currentPage,
                onChangePage: r[4] || (r[4] = (i) => s.$emit("update:current-page", i))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), zt = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, St = {
  key: 0,
  class: "ms-auto"
}, re = /* @__PURE__ */ f({
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
  setup(p, { emit: t }) {
    const o = p, e = t, l = _(() => Math.ceil(o.totalData / o.pageSize)), n = _(() => le(o));
    return (s, r) => (a(), k(v(ot), { class: "uu-list-sidebar" }, {
      sidebar: L(() => [
        s.searchEnabled ? (a(), k(F, {
          key: 0,
          "model-value": s.search,
          "onUpdate:modelValue": r[0] || (r[0] = (d) => s.$emit("update:search", d))
        }, null, 8, ["model-value"])) : g("", !0),
        h(s.$slots, "filters-top", {
          data: s.data,
          isLoading: s.isLoading
        }),
        n.value ? (a(), k(se, {
          key: 1,
          "filter-props": n.value,
          "onUpdate:filterValues": r[1] || (r[1] = (d) => s.$emit("update:filter-values", d))
        }, null, 8, ["filter-props"])) : g("", !0),
        h(s.$slots, "filters-bottom", {
          data: s.data,
          isLoading: s.isLoading
        })
      ]),
      default: L(() => {
        var d;
        return [
          m("div", null, [
            m("div", zt, [
              w(A, {
                "search-query": s.search,
                "page-num": ((d = s.data) == null ? void 0 : d.length) ?? 0,
                "total-num": s.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              s.sortEnabled ? (a(), u("div", St, [
                w(ae, {
                  "current-sort": s.currentSort,
                  "sort-options": s.sortOptions,
                  "onUpdate:currentSort": r[2] || (r[2] = (i) => e("update:current-sort", i))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : g("", !0),
              m("div", null, [
                w(ne, {
                  "page-size-options": s.pageSizeOptions,
                  "page-size": s.pageSize,
                  "onUpdate:pageSize": r[3] || (r[3] = (i) => e("update:page-size", i))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            h(s.$slots, "data", {
              data: s.data,
              isLoading: s.isLoading
            }),
            m("div", null, [
              s.data ? (a(), k(v(R), {
                key: 0,
                "max-pages": l.value,
                currentpage: s.currentPage,
                onChangePage: r[4] || (r[4] = (i) => s.$emit("update:current-page", i))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function K(p) {
  const t = p;
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
typeof K == "function" && K(re);
const wt = /* @__PURE__ */ f({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(p) {
    return (t, o) => (a(), u("pre", null, z(t.data), 1));
  }
}), Ct = /* @__PURE__ */ f({
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
  setup(p, { emit: t }) {
    const o = p, e = t, l = _(() => o.container === "sidebar" ? re : kt);
    return (n, s) => (a(), k(Y(l.value), {
      "is-loading": n.isLoading,
      data: n.data,
      "total-data": n.totalData,
      "search-enabled": n.searchEnabled,
      search: n.search,
      "sort-enabled": n.sortEnabled,
      "current-sort": n.currentSort,
      "current-page": n.currentPage,
      "page-size-options": n.pageSizeOptions,
      "sort-options": n.sortOptions,
      "page-size": n.pageSize,
      "filters-enabled": n.filtersEnabled,
      filters: n.filters,
      "filter-values": n.filterValues,
      "onUpdate:search": s[0] || (s[0] = (r) => e("update:search", r)),
      "onUpdate:currentSort": s[1] || (s[1] = (r) => e("update:current-sort", r)),
      "onUpdate:pageSize": s[2] || (s[2] = (r) => e("update:page-size", r)),
      "onUpdate:currentPage": s[3] || (s[3] = (r) => e("update:current-page", r)),
      "onUpdate:filterValues": s[4] || (s[4] = (r) => e("update:filter-values", r))
    }, {
      data: L(({ data: r, isLoading: d }) => [
        h(n.$slots, "data", {
          data: r,
          isLoading: d
        }, () => [
          w(wt, {
            data: r,
            "is-loading": d
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": L(({ data: r, isLoading: d }) => [
        h(n.$slots, "filters-top", {
          data: r,
          isLoading: d
        })
      ]),
      "filters-bottom": L(({ data: r, isLoading: d }) => [
        h(n.$slots, "filters-bottom", {
          data: r,
          isLoading: d
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), Bt = /* @__PURE__ */ f({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    return (t, o) => (a(), u("span", {
      class: S(t.column.classes)
    }, z(t.item[t.column.field]), 3));
  }
}), Vt = /* @__PURE__ */ f({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    const t = p, o = _(() => {
      let e = null;
      try {
        e = new Date(t.item[t.column.field]);
      } catch (s) {
        return console.error(s), "";
      }
      let l;
      if (t.column.language !== void 0 && t.column.language !== null && (l = t.column.language), typeof t.column.format == "string") {
        let s = null;
        switch (t.column.format) {
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
        return new Intl.DateTimeFormat(l, s).format(e);
      }
      return typeof t.column.format == "object" && t.column.format !== null ? new Intl.DateTimeFormat(
        l,
        t.column.format
      ).format(e) : new Intl.DateTimeFormat(l).format(e);
    });
    return (e, l) => (a(), u("span", {
      class: S(e.column.classes)
    }, z(o.value), 3));
  }
}), Ut = { key: 0 }, Dt = /* @__PURE__ */ f({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    return (t, o) => t.item[t.column.field] ? (a(), u("span", Ut, [
      w(v(q), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: L(() => [
          te(z(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : g("", !0);
  }
}), Lt = { key: 0 }, Pt = ["href", "target"], Et = /* @__PURE__ */ f({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    return (t, o) => t.item[t.column.field] ? (a(), u("span", Lt, [
      m("a", {
        href: t.item[t.column.field].link,
        class: S(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, z(t.item[t.column.field].text), 11, Pt)
    ])) : g("", !0);
  }
}), Ot = ["innerHTML"], It = /* @__PURE__ */ f({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    return (t, o) => (a(), u("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, Ot));
  }
}), Nt = {
  key: 0,
  class: "dropdown"
}, jt = { class: "dropdown-menu" }, Mt = {
  key: 0,
  class: "dropdown-divider"
}, Tt = ["href", "target"], qt = /* @__PURE__ */ f({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    const t = p, o = _(() => t.item[t.column.field].entries());
    return (e, l) => o.value ? (a(), u("div", Nt, [
      l[0] || (l[0] = pe('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      m("ul", jt, [
        (a(!0), u(U, null, D(o.value, ([n, s]) => (a(), u("li", { key: n }, [
          s.divider ? (a(), u("hr", Mt)) : (a(), u("a", {
            key: 1,
            href: s.link,
            class: S(["dropdown-item", s.classes ?? ""]),
            target: s.new_tab ? "_blank" : "_self"
          }, z(s.text), 11, Tt))
        ]))), 128))
      ])
    ])) : g("", !0);
  }
}), Rt = /* @__PURE__ */ f({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    return (t, o) => t.column.type == "string" ? (a(), k(Bt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (a(), k(Vt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (a(), k(Dt, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (a(), k(Et, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (a(), k(It, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (a(), k(qt, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : g("", !0);
  }
}), Ft = /* @__PURE__ */ f({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(p) {
    return (t, o) => (a(), u("tr", null, [
      (a(!0), u(U, null, D(t.columns, (e) => (a(), u("td", {
        key: e.field,
        class: "align-middle"
      }, [
        w(Rt, {
          column: e,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), At = {
  key: 0,
  class: "alert alert-info w-100"
}, Gt = { key: 0 }, Zt = { key: 1 }, Qt = ["colspan"], ie = /* @__PURE__ */ f({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(p) {
    const t = p, o = _(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = j();
    return (l, n) => l.isLoading && o.value ? (a(), u("div", At, z(v(e)("loading")), 1)) : (a(), u("table", {
      key: 1,
      class: S(["table", l.isLoading ? "loading" : ""])
    }, [
      m("thead", null, [
        m("tr", null, [
          (a(!0), u(U, null, D(l.columns, (s) => (a(), u("th", {
            key: s.field
          }, z(s.label), 1))), 128))
        ])
      ]),
      o.value ? (a(), u("tbody", Zt, [
        m("tr", null, [
          m("td", {
            colspan: l.columns.length
          }, z(v(e)("no_data")), 9, Qt)
        ])
      ])) : (a(), u("tbody", Gt, [
        (a(!0), u(U, null, D(l.data, (s) => (a(), k(Ft, {
          key: s.id,
          item: s,
          columns: l.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function X(p) {
  const t = p;
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
typeof X == "function" && X(ie);
const no = /* @__PURE__ */ f({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(p) {
    const t = p, o = V(t.config.pageSize), e = V(1), l = V(""), n = V("id"), s = V(!0);
    function r() {
      var y;
      let c = {};
      return (y = t.config.filters) == null || y.forEach(($) => {
        var I;
        if ($.initial) {
          c[$.field] = $.initial;
          return;
        }
        switch ($.type) {
          case "date":
            c[$.field] = null;
            break;
          case "checkbox":
            c[$.field] = [];
            break;
          case "radio":
            ((I = $.options) == null ? void 0 : I.length) != 0 && $.options && (c[$.field] = $.options[0][0]);
            break;
        }
      }), c;
    }
    const d = V(r());
    let i = V(null);
    const b = _(() => {
      let c = [];
      c.push("page_size=" + encodeURIComponent(o.value));
      for (const [y, $] of Object.entries(d.value))
        $ != null && (typeof $ == "object" ? $.forEach(
          (I) => c.push(y + "=" + encodeURIComponent(I))
        ) : c.push(y + "=" + encodeURIComponent($)));
      return l.value && c.push("search=" + encodeURIComponent(l.value)), c.push("ordering=" + encodeURIComponent(n.value)), e.value = 1, c;
    }), P = _(() => {
      let c = b.value, y = "page=" + encodeURIComponent(e.value);
      return c.length !== 0 && (y = "&" + y), "?" + c.join("&") + y;
    }), E = _(() => {
      let c = new URL(window.location.protocol + "//" + window.location.host);
      return c.pathname = t.config.dataUri, c.search = P.value, c.toString();
    });
    ee(E, () => {
      O();
    });
    const C = V(null);
    function O() {
      var c;
      (c = C.value) == null || c.abort(), C.value = new AbortController(), s.value = !0, fetch(E.value, { signal: C.value.signal }).then((y) => {
        y.json().then(($) => {
          i.value = $, s.value = !1, $.ordering && (n.value = $.ordering), C.value = null;
        });
      }).catch((y) => {
        console.log(y);
      });
    }
    return x(() => {
      O();
    }), (c, y) => {
      var $, I, G;
      return a(), k(Ct, {
        "is-loading": s.value,
        data: (($ = v(i)) == null ? void 0 : $.results) ?? void 0,
        "total-data": ((I = v(i)) == null ? void 0 : I.count) ?? 0,
        "search-enabled": c.config.searchEnabled,
        search: l.value,
        "sort-enabled": c.config.sortEnabled,
        "current-sort": n.value,
        "page-size-options": c.config.pageSizeOptions,
        "sort-options": c.config.sortOptions ?? [],
        "page-size": ((G = v(i)) == null ? void 0 : G.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": c.config.filtersEnabled,
        filters: c.config.filters ?? [],
        "filter-values": d.value,
        container: c.config.container,
        "onUpdate:search": y[0] || (y[0] = (B) => l.value = B),
        "onUpdate:currentSort": y[1] || (y[1] = (B) => n.value = B),
        "onUpdate:pageSize": y[2] || (y[2] = (B) => o.value = B),
        "onUpdate:currentPage": y[3] || (y[3] = (B) => e.value = B),
        "onUpdate:filterValues": y[4] || (y[4] = (B) => d.value = B)
      }, {
        data: L(({ data: B, isLoading: Z }) => [
          h(c.$slots, "data", {
            data: B,
            isLoading: Z
          }, () => [
            w(ie, {
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
}), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  q as BSButton,
  xt as BSCard,
  eo as BSDropdown,
  to as BSDropdownMultiSelect,
  oo as BSIcon,
  so as BSModal,
  oe as BSMultiSelect,
  R as BSPagination,
  Xe as BSRadioSelect,
  Ae as BSSelect,
  ot as BSSidebar,
  no as DSCList,
  Ct as UUList,
  ao as UUListTypes
};
