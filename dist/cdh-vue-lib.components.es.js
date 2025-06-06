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
import { defineComponent as f, computed as _, openBlock as a, createElementBlock as u, normalizeClass as S, createElementVNode as c, renderSlot as h, createCommentVNode as g, onMounted as R, createVNode as w, unref as v, withCtx as L, ref as V, toDisplayString as z, createBlock as k, resolveDynamicComponent as x, onUnmounted as ue, watch as ee, Teleport as de, Fragment as U, renderList as D, createTextVNode as te, createStaticVNode as pe } from "vue";
import { v4 as ce } from "uuid";
import { FontAwesomeIcon as H } from "@fortawesome/vue-fontawesome";
import { Modal as me } from "bootstrap";
import { useI18n as N } from "vue-i18n";
import { u as M } from "./useInputValue-e686f6e9.js";
const fe = ["href", "target"], ge = { class: "btn-text" }, he = ["type", "name", "disabled"], ve = { class: "btn-text" }, be = {
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
  setup(p) {
    const t = p, o = _(() => {
      const e = ["btn"];
      return t.size === "large" ? e.push("btn-lg") : t.size === "small" && e.push("btn-sm"), t.outlined ? e.push(`btn-outline-${t.variant}`) : e.push(`btn-${t.variant}`), t.active && e.push("active"), t.disabled && e.push("cursor-not-allowed"), t.cssClasses && e.push(t.cssClasses), e.join(" ");
    });
    return (e, s) => e.href ? (a(), u("a", {
      key: 0,
      href: e.href,
      class: S(o.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      c("span", ge, [
        h(e.$slots, "default")
      ])
    ], 10, fe)) : (a(), u("button", {
      key: 1,
      type: e.input,
      class: S(o.value),
      name: e.name,
      disabled: e.disabled
    }, [
      c("span", ve, [
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
    return R(() => {
      console.log("BSCard component mounted");
    }), (s, l) => (a(), u("div", ye, [
      s.$slots.header ? (a(), u("div", {
        key: 0,
        class: S(e.value)
      }, [
        h(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (a(), u("div", {
        key: 1,
        class: S(e.value)
      }, [
        c("div", _e, [
          s.$slots.title ? (a(), u("div", $e, [
            h(s.$slots, "title", {}, void 0, !0)
          ])) : g("", !0),
          s.$slots.header_icon ? (a(), u("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: l[0] || (l[0] = (n) => s.$emit("header-icon-clicked"))
          }, [
            h(s.$slots, "header_icon", {}, void 0, !0)
          ])) : g("", !0)
        ])
      ], 2)) : g("", !0),
      s.$slots.image ? (a(), u("div", ke, [
        h(s.$slots, "image", {}, void 0, !0)
      ])) : g("", !0),
      c("div", ze, [
        h(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (a(), u("div", Se, [
        h(s.$slots, "footer", {}, void 0, !0)
      ])) : g("", !0)
    ]));
  }
});
const Ce = (p, t) => {
  const o = p.__vccOpts || p;
  for (const [e, s] of t)
    o[e] = s;
  return o;
}, xt = /* @__PURE__ */ Ce(we, [["__scopeId", "data-v-f6af1ae1"]]);
function j() {
  return "id_" + ce().toString().replace(/-/g, "");
}
const Be = { class: "dropdown" }, Ve = ["aria-labelledby"], eo = /* @__PURE__ */ f({
  __name: "BSDropdown",
  props: {
    id: { default: "" },
    variant: { default: "primary" }
  },
  setup(p) {
    const t = p, o = _(() => t.id ?? j());
    return (e, s) => (a(), u("div", Be, [
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
      c("ul", {
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
    const o = V(j());
    return (e, s) => (a(), u("div", Ue, [
      w(q, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: L(() => [
          c("span", De, z(e.label), 1)
        ]),
        _: 1
      }),
      c("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        c("div", Pe, [
          w(v(oe), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": s[0] || (s[0] = (l) => e.$emit("update:modelValue", l))
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
    return (e, s) => (a(), k(x(o.value), null, {
      default: L(() => [
        e.$slots.default ? (a(), u("span", Ee, [
          c("span", Oe, [
            w(v(H), {
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
          c("span", null, [
            h(e.$slots, "default")
          ])
        ])) : (a(), k(v(H), {
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
}), Ie = { class: "modal-content" }, Me = {
  key: 0,
  class: "modal-title mw-100"
}, Ne = {
  key: 1,
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, je = { class: "modal-body" }, Te = {
  key: 1,
  class: "modal-footer justify-content-start"
}, no = /* @__PURE__ */ f({
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
  emits: ["shown", "hidden", "close-clicked"],
  setup(p, { emit: t }) {
    const o = p, e = t, s = _(() => {
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
    }), l = _(() => {
      const i = [];
      return o.headerColor && i.push(`text-bg-${o.headerColor}`), o.headerBold && i.push("fw-bold"), i.join(" ");
    });
    let n;
    const r = V(null);
    function d(i) {
      var y, P;
      i ? (y = n == null ? void 0 : n.value) == null || y.show() : (P = n == null ? void 0 : n.value) == null || P.hide();
    }
    return R(() => {
      if (!r.value)
        return;
      let i = o.hasBackground;
      i && !o.backgroundClickCloses && (i = "static"), n = V(
        new me(r.value, {
          backdrop: i
        })
      ), r.value.addEventListener(
        "hidden.bs.modal",
        () => e("hidden")
      ), r.value.addEventListener("shown.bs.modal", () => e("shown")), d(o.active);
    }), ue(() => {
      var i;
      (i = n == null ? void 0 : n.value) == null || i.dispose();
    }), ee(
      () => o.active,
      (i) => {
        d(i);
      }
    ), (i, y) => (a(), k(de, { to: "body" }, [
      c("div", {
        ref_key: "modalElement",
        ref: r,
        class: "modal fade",
        tabindex: "-1"
      }, [
        c("div", {
          class: S(["modal-dialog modal-dialog-scrollable", s.value])
        }, [
          c("div", Ie, [
            i.$slots.title || i.showCloseButton ? (a(), u("div", {
              key: 0,
              class: S(["modal-header", l.value])
            }, [
              i.$slots.title ? (a(), u("p", Me, [
                h(i.$slots, "title")
              ])) : g("", !0),
              i.showCloseButton ? (a(), u("button", Ne)) : g("", !0)
            ], 2)) : g("", !0),
            c("div", je, [
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
}), Re = ["value"], qe = {
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
    const o = p, e = t, s = _(() => o.modelValue === null ? T : o.modelValue), l = _(() => o.options.map((r) => {
      const [d, i] = r;
      return [d === null ? T : d, i];
    }));
    function n(r) {
      const d = o.options.find((i) => r === T ? i[0] === null : String(i[0]) === r);
      d && e("update:model-value", d[0]);
    }
    return (r, d) => (a(), u("div", null, [
      c("select", {
        class: S(["form-select", r.containerClasses]),
        value: s.value,
        onChange: d[0] || (d[0] = (i) => n(v(M)(i)))
      }, [
        r.placeholder ? (a(), u("option", qe, z(r.placeholder), 1)) : g("", !0),
        (a(!0), u(U, null, D(l.value, ([i, y]) => (a(), u("option", {
          key: i,
          value: i
        }, z(y), 9, Fe))), 128))
      ], 42, Re)
    ]));
  }
}), Ge = ["id", "value", "checked", "onClick"], Ze = ["for"], oe = /* @__PURE__ */ f({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => j() }
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    const o = p, e = t;
    function s(l) {
      const n = o.modelValue.includes(l), r = [...o.modelValue], d = r.indexOf(l);
      n ? d > -1 && r.splice(d, 1) : r.push(l), e("update:model-value", r);
    }
    return (l, n) => (a(), u("div", null, [
      (a(!0), u(U, null, D(l.options, ([r, d]) => (a(), u("div", {
        key: r,
        class: S(["form-check", l.containerClasses])
      }, [
        c("input", {
          id: "id_" + r + "_" + l.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: r,
          checked: o.modelValue.includes(r),
          onClick: (i) => s(r)
        }, null, 8, Ge),
        c("label", {
          class: "form-check-label",
          for: "id_" + r + "_" + l.uniqueId
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
}, F = /* @__PURE__ */ f({
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
    function e(d, i, y) {
      return Math.min(Math.max(d, i), y);
    }
    const s = _(() => {
      const d = o.numOptions, i = o.currentpage - d, y = o.currentpage + d, P = Array.from({ length: o.maxPages }, (C, O) => O + 1).filter(
        (C) => C === 1 || C === o.maxPages || C >= i && C <= y
      ), E = [];
      return P.forEach((C, O) => {
        if (O === 0) {
          E.push(C);
          return;
        }
        C - P[O - 1] > 1 && E.push("ellipsis"), E.push(C);
      }), E;
    }), l = t;
    function n(d) {
      d !== "ellipsis" && (d = e(d, 1, o.maxPages), l("change-page", d));
    }
    const { t: r } = N();
    return (d, i) => (a(), u("ul", Qe, [
      c("li", {
        class: S(["page-item page-button", d.currentpage === 1 ? "disabled" : ""])
      }, [
        d.showButtons ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: i[0] || (i[0] = (y) => n(d.currentpage - 1))
        }, z(v(r)("previous")), 1)) : g("", !0)
      ], 2),
      (a(!0), u(U, null, D(s.value, (y) => (a(), u("li", {
        key: y,
        class: S([
          "page-item",
          (y === "ellipsis" ? "disabled page-ellipsis " : "") + (y === d.currentpage ? "active" : "")
        ])
      }, [
        y !== -42 ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: (P) => n(y)
        }, z(y), 9, He)) : (a(), u("span", We, "…"))
      ], 2))), 128)),
      c("li", {
        class: S(["page-item page-button", d.currentpage >= d.maxPages ? "disabled" : ""])
      }, [
        d.showButtons ? (a(), u("a", {
          key: 0,
          class: "page-link",
          onClick: i[1] || (i[1] = (y) => n(d.currentpage + 1))
        }, z(v(r)("next")), 1)) : g("", !0)
      ], 2)
    ]));
  }
});
function W(p) {
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
typeof W == "function" && W(F);
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
    return (e, s) => (a(), u("div", null, [
      (a(!0), u(U, null, D(e.options, ([l, n]) => (a(), u("div", {
        key: l,
        class: S(["form-check", e.containerClasses])
      }, [
        c("input", {
          id: "id_" + l,
          type: "radio",
          class: "form-check-input",
          value: l,
          checked: e.modelValue == l,
          onClick: (r) => o("update:model-value", l)
        }, null, 8, Je),
        c("label", {
          class: "form-check-label",
          for: "id_" + l
        }, z(n), 9, Ke)
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
    const t = p, o = _(() => t.id ?? j()), e = _(() => {
      const s = [];
      return t.placement === "right" && s.push("uu-sidebar-right"), t.mobilePlacement === "bottom" && s.push("uu-sidebar-mobile-bottom"), t.stickySidebar && s.push("uu-sidebar-sticky"), t.mobileStickySidebar && s.push("uu-sidebar-mobile-sticky"), s.join(" ");
    });
    return (s, l) => (a(), u("div", {
      class: S(["uu-sidebar-container", e.value])
    }, [
      c("aside", Ye, [
        c("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          h(s.$slots, "sidebar-button")
        ], 8, xe),
        c("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          h(s.$slots, "sidebar")
        ], 8, et)
      ]),
      c("section", tt, [
        h(s.$slots, "default")
      ])
    ], 2));
  }
}), nt = { class: "uu-list-filter" }, st = { class: "uu-list-filter-label" }, at = {
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
    return (e, s) => (a(), u("div", nt, [
      c("div", st, z(e.filter.label), 1),
      e.filter.type === "checkbox" ? (a(), k(v(oe), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": s[0] || (s[0] = (l) => o("update:value", l))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "select" ? (a(), k(v(Ae), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": s[1] || (s[1] = (l) => o("update:value", l))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "radio" ? (a(), k(v(Xe), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": s[2] || (s[2] = (l) => o("update:value", l))
      }, null, 8, ["options", "model-value"])) : g("", !0),
      e.filter.type === "date" ? (a(), u("div", at, [
        c("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: s[3] || (s[3] = (l) => o("update:value", v(M)(l)))
        }, null, 40, lt)
      ])) : g("", !0)
    ]));
  }
}), ne = /* @__PURE__ */ f({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(p, { emit: t }) {
    const o = p, e = _(() => o.filterProps.filters), s = _(() => o.filterProps.filterValues), l = t;
    function n(r, d) {
      let i = { ...s.value };
      i[r] = d, l("update:filter-values", i);
    }
    return (r, d) => (a(!0), u(U, null, D(e.value, (i) => (a(), k(rt, {
      key: i.field,
      filter: i,
      value: s.value[i.field],
      "onUpdate:value": (y) => n(i.field, y)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), it = { class: "search" }, ut = ["value", "placeholder"], A = /* @__PURE__ */ f({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(p, { emit: t }) {
    function o(r, d = 500) {
      let i;
      return (...y) => {
        clearTimeout(i), i = window.setTimeout(() => {
          r(...y);
        }, d);
      };
    }
    const e = t;
    function s(r) {
      e("update:model-value", r);
    }
    const l = o((r) => s(r)), { t: n } = N();
    return (r, d) => (a(), u("div", it, [
      c("input", {
        id: "search",
        class: "form-control",
        value: r.modelValue,
        placeholder: v(n)("placeholder"),
        onInput: d[0] || (d[0] = (i) => v(l)(v(M)(i)))
      }, null, 40, ut)
    ]));
  }
});
function J(p) {
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
typeof J == "function" && J(A);
const dt = ["value"], pt = ["value"], se = /* @__PURE__ */ f({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:page-size"],
  setup(p, { emit: t }) {
    const o = p, e = t;
    function s(l) {
      if (typeof l == "string")
        try {
          l = parseInt(l);
        } catch {
          l = o.pageSizeOptions[0] ?? 10;
        }
      e("update:page-size", l);
    }
    return (l, n) => (a(), u("select", {
      value: l.pageSize,
      class: "form-select",
      onChange: n[0] || (n[0] = (r) => s(v(M)(r)))
    }, [
      (a(!0), u(U, null, D(l.pageSizeOptions, (r) => (a(), u("option", {
        key: r,
        value: r
      }, z(r), 9, pt))), 128))
    ], 40, dt));
  }
}), ct = ["value"], mt = ["value"], ae = /* @__PURE__ */ f({
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
      onChange: e[0] || (e[0] = (s) => o.$emit("update:current-sort", v(M)(s).trim()))
    }, [
      (a(!0), u(U, null, D(o.sortOptions, ({ field: s, label: l }) => (a(), u("option", {
        key: s,
        value: s
      }, z(l), 9, mt))), 128))
    ], 40, ct));
  }
}), ft = { key: 0 }, G = /* @__PURE__ */ f({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(p) {
    const { t } = N();
    return (o, e) => (a(), u("div", null, [
      o.searchQuery ? (a(), u("span", ft, z(v(t)("search", { query: o.searchQuery })), 1)) : g("", !0),
      te(" " + z(v(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function K(p) {
  const t = p;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: l } = o;
          return e(["Search result: ", s(l("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: l } = o;
          return e(["showing ", s(l("pageNum")), " of ", s(l("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: l } = o;
          return e(["Zoekresultaat: ", s(l("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: l } = o;
          return e([s(l("pageNum")), " van ", s(l("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof K == "function" && K(G);
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
    const o = p, e = t, s = _(() => Math.ceil(o.totalData / o.pageSize)), l = _(() => le(o));
    return (n, r) => {
      var d;
      return a(), u("div", gt, [
        c("div", ht, [
          c("div", vt, [
            n.searchEnabled ? (a(), k(A, {
              key: 0,
              "model-value": n.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": r[0] || (r[0] = (i) => n.$emit("update:search", i))
            }, null, 8, ["model-value"])) : g("", !0),
            w(G, {
              "search-query": n.search,
              "page-num": ((d = n.data) == null ? void 0 : d.length) ?? 0,
              "total-num": n.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            n.sortEnabled ? (a(), u("div", bt, [
              w(ae, {
                "current-sort": n.currentSort,
                "sort-options": n.sortOptions,
                "onUpdate:currentSort": r[1] || (r[1] = (i) => e("update:current-sort", i))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : g("", !0),
            c("div", yt, [
              w(se, {
                "page-size-options": n.pageSizeOptions,
                "page-size": n.pageSize,
                "onUpdate:pageSize": r[2] || (r[2] = (i) => e("update:page-size", i))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          n.filtersEnabled && l.value ? (a(), u("div", _t, [
            h(n.$slots, "filters-top", {
              data: n.data,
              isLoading: n.isLoading
            }),
            w(ne, {
              "filter-props": l.value,
              "onUpdate:filterValues": r[3] || (r[3] = (i) => n.$emit("update:filter-values", i))
            }, null, 8, ["filter-props"]),
            h(n.$slots, "filters-bottom", {
              data: n.data,
              isLoading: n.isLoading
            })
          ])) : g("", !0),
          c("div", $t, [
            h(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            c("div", null, [
              n.data ? (a(), k(v(F), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: r[4] || (r[4] = (i) => n.$emit("update:current-page", i))
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
    const o = p, e = t, s = _(() => Math.ceil(o.totalData / o.pageSize)), l = _(() => le(o));
    return (n, r) => (a(), k(v(ot), { class: "uu-list-sidebar" }, {
      sidebar: L(() => [
        n.searchEnabled ? (a(), k(A, {
          key: 0,
          "model-value": n.search,
          "onUpdate:modelValue": r[0] || (r[0] = (d) => n.$emit("update:search", d))
        }, null, 8, ["model-value"])) : g("", !0),
        h(n.$slots, "filters-top", {
          data: n.data,
          isLoading: n.isLoading
        }),
        l.value ? (a(), k(ne, {
          key: 1,
          "filter-props": l.value,
          "onUpdate:filterValues": r[1] || (r[1] = (d) => n.$emit("update:filter-values", d))
        }, null, 8, ["filter-props"])) : g("", !0),
        h(n.$slots, "filters-bottom", {
          data: n.data,
          isLoading: n.isLoading
        })
      ]),
      default: L(() => {
        var d;
        return [
          c("div", null, [
            c("div", zt, [
              w(G, {
                "search-query": n.search,
                "page-num": ((d = n.data) == null ? void 0 : d.length) ?? 0,
                "total-num": n.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              n.sortEnabled ? (a(), u("div", St, [
                w(ae, {
                  "current-sort": n.currentSort,
                  "sort-options": n.sortOptions,
                  "onUpdate:currentSort": r[2] || (r[2] = (i) => e("update:current-sort", i))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : g("", !0),
              c("div", null, [
                w(se, {
                  "page-size-options": n.pageSizeOptions,
                  "page-size": n.pageSize,
                  "onUpdate:pageSize": r[3] || (r[3] = (i) => e("update:page-size", i))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            h(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            c("div", null, [
              n.data ? (a(), k(v(F), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: r[4] || (r[4] = (i) => n.$emit("update:current-page", i))
              }, null, 8, ["max-pages", "currentpage"])) : g("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
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
typeof X == "function" && X(re);
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
    const o = p, e = t, s = _(() => o.container === "sidebar" ? re : kt);
    return (l, n) => (a(), k(x(s.value), {
      "is-loading": l.isLoading,
      data: l.data,
      "total-data": l.totalData,
      "search-enabled": l.searchEnabled,
      search: l.search,
      "sort-enabled": l.sortEnabled,
      "current-sort": l.currentSort,
      "current-page": l.currentPage,
      "page-size-options": l.pageSizeOptions,
      "sort-options": l.sortOptions,
      "page-size": l.pageSize,
      "filters-enabled": l.filtersEnabled,
      filters: l.filters,
      "filter-values": l.filterValues,
      "onUpdate:search": n[0] || (n[0] = (r) => e("update:search", r)),
      "onUpdate:currentSort": n[1] || (n[1] = (r) => e("update:current-sort", r)),
      "onUpdate:pageSize": n[2] || (n[2] = (r) => e("update:page-size", r)),
      "onUpdate:currentPage": n[3] || (n[3] = (r) => e("update:current-page", r)),
      "onUpdate:filterValues": n[4] || (n[4] = (r) => e("update:filter-values", r))
    }, {
      data: L(({ data: r, isLoading: d }) => [
        h(l.$slots, "data", {
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
        h(l.$slots, "filters-top", {
          data: r,
          isLoading: d
        })
      ]),
      "filters-bottom": L(({ data: r, isLoading: d }) => [
        h(l.$slots, "filters-bottom", {
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
    return (e, s) => (a(), u("span", {
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
      c("a", {
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
}), Mt = {
  key: 0,
  class: "dropdown"
}, Nt = { class: "dropdown-menu" }, jt = {
  key: 0,
  class: "dropdown-divider"
}, Tt = ["href", "target"], Rt = /* @__PURE__ */ f({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(p) {
    const t = p, o = _(() => t.item[t.column.field].entries());
    return (e, s) => o.value ? (a(), u("div", Mt, [
      s[0] || (s[0] = pe('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      c("ul", Nt, [
        (a(!0), u(U, null, D(o.value, ([l, n]) => (a(), u("li", { key: l }, [
          n.divider ? (a(), u("hr", jt)) : (a(), u("a", {
            key: 1,
            href: n.link,
            class: S(["dropdown-item", n.classes ?? ""]),
            target: n.new_tab ? "_blank" : "_self"
          }, z(n.text), 11, Tt))
        ]))), 128))
      ])
    ])) : g("", !0);
  }
}), qt = /* @__PURE__ */ f({
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
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (a(), k(Rt, {
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
        w(qt, {
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
    const t = p, o = _(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = N();
    return (s, l) => s.isLoading && o.value ? (a(), u("div", At, z(v(e)("loading")), 1)) : (a(), u("table", {
      key: 1,
      class: S(["table", s.isLoading ? "loading" : ""])
    }, [
      c("thead", null, [
        c("tr", null, [
          (a(!0), u(U, null, D(s.columns, (n) => (a(), u("th", {
            key: n.field
          }, z(n.label), 1))), 128))
        ])
      ]),
      o.value ? (a(), u("tbody", Zt, [
        c("tr", null, [
          c("td", {
            colspan: s.columns.length
          }, z(v(e)("no_data")), 9, Qt)
        ])
      ])) : (a(), u("tbody", Gt, [
        (a(!0), u(U, null, D(s.data, (n) => (a(), k(Ft, {
          key: n.id,
          item: n,
          columns: s.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function Y(p) {
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
typeof Y == "function" && Y(ie);
const so = /* @__PURE__ */ f({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(p) {
    const t = p, o = V(t.config.pageSize), e = V(1), s = V(""), l = V("id"), n = V(!0);
    function r() {
      var b;
      let m = {};
      return (b = t.config.filters) == null || b.forEach(($) => {
        var I;
        if ($.initial) {
          m[$.field] = $.initial;
          return;
        }
        switch ($.type) {
          case "date":
            m[$.field] = null;
            break;
          case "checkbox":
            m[$.field] = [];
            break;
          case "radio":
            ((I = $.options) == null ? void 0 : I.length) != 0 && $.options && (m[$.field] = $.options[0][0]);
            break;
        }
      }), m;
    }
    const d = V(r());
    let i = V(null);
    const y = _(() => {
      let m = [];
      m.push("page_size=" + encodeURIComponent(o.value));
      for (const [b, $] of Object.entries(d.value))
        $ != null && (typeof $ == "object" ? $.forEach(
          (I) => m.push(b + "=" + encodeURIComponent(I))
        ) : m.push(b + "=" + encodeURIComponent($)));
      return s.value && m.push("search=" + encodeURIComponent(s.value)), m.push("ordering=" + encodeURIComponent(l.value)), e.value = 1, m;
    }), P = _(() => {
      let m = y.value, b = "page=" + encodeURIComponent(e.value);
      return m.length !== 0 && (b = "&" + b), "?" + m.join("&") + b;
    }), E = _(() => {
      let m = new URL(window.location.protocol + "//" + window.location.host);
      return m.pathname = t.config.dataUri, m.search = P.value, m.toString();
    });
    ee(E, () => {
      console.log("Loading on url change!"), O();
    });
    const C = V(null);
    function O() {
      var m;
      console.log("Fetching data from API:", E.value), (m = C.value) == null || m.abort(), C.value = new AbortController(), n.value = !0, fetch(E.value, { signal: C.value.signal }).then((b) => {
        console.log("Response received from API:", b), b.json().then(($) => {
          i.value = $, n.value = !1, $.ordering && (l.value = $.ordering), C.value = null;
        });
      }).catch((b) => {
        console.log(b);
      });
    }
    return R(() => {
      console.log("Mounting!"), console.log("Loading on mounted!"), O();
    }), (m, b) => {
      var $, I, Z;
      return a(), k(Ct, {
        "is-loading": n.value,
        data: (($ = v(i)) == null ? void 0 : $.results) ?? void 0,
        "total-data": ((I = v(i)) == null ? void 0 : I.count) ?? 0,
        "search-enabled": m.config.searchEnabled,
        search: s.value,
        "sort-enabled": m.config.sortEnabled,
        "current-sort": l.value,
        "page-size-options": m.config.pageSizeOptions,
        "sort-options": m.config.sortOptions ?? [],
        "page-size": ((Z = v(i)) == null ? void 0 : Z.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": m.config.filtersEnabled,
        filters: m.config.filters ?? [],
        "filter-values": d.value,
        container: m.config.container,
        "onUpdate:search": b[0] || (b[0] = (B) => s.value = B),
        "onUpdate:currentSort": b[1] || (b[1] = (B) => l.value = B),
        "onUpdate:pageSize": b[2] || (b[2] = (B) => o.value = B),
        "onUpdate:currentPage": b[3] || (b[3] = (B) => e.value = B),
        "onUpdate:filterValues": b[4] || (b[4] = (B) => d.value = B)
      }, {
        data: L(({ data: B, isLoading: Q }) => [
          h(m.$slots, "data", {
            data: B,
            isLoading: Q
          }, () => [
            w(ie, {
              data: B,
              columns: m.config.columns,
              "is-loading": Q
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
  no as BSModal,
  oe as BSMultiSelect,
  F as BSPagination,
  Xe as BSRadioSelect,
  Ae as BSSelect,
  ot as BSSidebar,
  so as DSCList,
  Ct as UUList,
  ao as UUListTypes
};
