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
import { defineComponent as g, computed as y, openBlock as l, createElementBlock as i, normalizeClass as z, createElementVNode as m, renderSlot as v, createCommentVNode as h, createVNode as C, unref as b, withCtx as P, ref as V, toDisplayString as k, createBlock as $, resolveDynamicComponent as Y, onMounted as x, onUnmounted as ue, watch as ee, Teleport as de, Fragment as U, renderList as D, createTextVNode as te, createStaticVNode as pe } from "vue";
import { v4 as N } from "uuid";
import { FontAwesomeIcon as Q } from "@fortawesome/vue-fontawesome";
import { Modal as ce } from "bootstrap";
import { useI18n as T } from "vue-i18n";
import { u as M } from "./useInputValue-637a42e1.js";
const me = ["href", "target"], fe = { class: "btn-text" }, ge = ["type", "name", "disabled"], he = { class: "btn-text" }, ve = {
  key: 0,
  class: "spinner-border spinner-border-sm ms-2",
  role: "status",
  "aria-hidden": "true"
}, q = /* @__PURE__ */ g({
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
  setup(d) {
    const t = d, o = y(() => {
      let e = "btn ";
      return t.size === "large" ? e += "btn-lg " : t.size === "small" && (e += "btn-sm "), t.outlined ? e += "btn-outline-" : e += "btn-", e += `${t.variant} `, t.active && (e += "active "), t.disabled && (e += "cursor-not-allowed "), e += ` ${t.cssClasses}`;
    });
    return (e, s) => e.href ? (l(), i("a", {
      key: 0,
      href: e.href,
      class: z(o.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      m("span", fe, [
        v(e.$slots, "default")
      ])
    ], 10, me)) : (l(), i("button", {
      key: 1,
      type: e.input,
      class: z(o.value),
      name: e.name,
      disabled: e.disabled
    }, [
      m("span", he, [
        v(e.$slots, "default")
      ]),
      e.loading ? (l(), i("span", ve)) : h("", !0)
    ], 10, ge));
  }
}), be = { class: "card" }, ye = { class: "d-flex" }, _e = {
  key: 0,
  class: "me-auto"
}, $e = {
  key: 2,
  class: "card-image-top"
}, ke = { class: "card-body" }, Se = {
  key: 3,
  class: "card-footer"
}, ze = /* @__PURE__ */ g({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(d, { emit: t }) {
    const o = d, e = y(() => o.headerClasses ? `card-header fw-bold ${o.headerClasses}` : "card-header fw-bold");
    return (s, r) => (l(), i("div", be, [
      s.$slots.header ? (l(), i("div", {
        key: 0,
        class: z(e.value)
      }, [
        v(s.$slots, "header", {}, void 0, !0)
      ], 2)) : s.$slots.title || s.$slots.header_icon ? (l(), i("div", {
        key: 1,
        class: z(e.value)
      }, [
        m("div", ye, [
          s.$slots.title ? (l(), i("div", _e, [
            v(s.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          s.$slots.header_icon ? (l(), i("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: r[0] || (r[0] = (n) => s.$emit("header-icon-clicked"))
          }, [
            v(s.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      s.$slots.image ? (l(), i("div", $e, [
        v(s.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      m("div", ke, [
        v(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (l(), i("div", Se, [
        v(s.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const we = (d, t) => {
  const o = d.__vccOpts || d;
  for (const [e, s] of t)
    o[e] = s;
  return o;
}, xt = /* @__PURE__ */ we(ze, [["__scopeId", "data-v-c52e17e8"]]), Ce = { class: "dropdown" }, Be = ["aria-labelledby"], eo = /* @__PURE__ */ g({
  __name: "BSDropdown",
  props: {
    id: { default: "" },
    variant: { default: "primary" }
  },
  setup(d) {
    const t = d, o = y(() => t.id ? t.id : "id_" + N().toString());
    return (e, s) => (l(), i("div", Ce, [
      C(b(q), {
        id: o.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: P(() => [
          v(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      m("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        v(e.$slots, "default")
      ], 8, Be)
    ]));
  }
}), Ve = { class: "dropdown dropdown-select is-hoverable" }, Ue = { class: "me-2" }, De = ["id"], Le = { class: "dropdown-content ps-4" }, to = /* @__PURE__ */ g({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: t }) {
    const o = V(N());
    return (e, s) => (l(), i("div", Ve, [
      C(q, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: P(() => [
          m("span", Ue, k(e.label), 1)
        ]),
        _: 1
      }),
      m("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        m("div", Le, [
          C(b(oe), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": s[0] || (s[0] = (r) => e.$emit("update:modelValue", r))
          }, null, 8, ["options", "model-value"])
        ])
      ], 8, De)
    ]));
  }
});
const Pe = { key: 0 }, Ee = { class: "icon me-1" }, oo = /* @__PURE__ */ g({
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
  setup(d) {
    const t = d, o = y(() => t.inline ? "span" : "div");
    return (e, s) => (l(), $(Y(o.value), null, {
      default: P(() => [
        e.$slots.default ? (l(), i("span", Pe, [
          m("span", Ee, [
            C(b(Q), {
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
            v(e.$slots, "default")
          ])
        ])) : (l(), $(b(Q), {
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
}), Oe = ["id"], Ie = { class: "modal-content" }, Ne = {
  key: 0,
  class: "modal-title mw-100"
}, Me = {
  key: 1,
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, Te = { class: "modal-body" }, je = {
  key: 1,
  class: "modal-footer justify-content-start"
}, no = /* @__PURE__ */ g({
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
  setup(d, { emit: t }) {
    const o = d, e = t, s = y(() => o.id ?? `id_${N().toString()}`), r = y(() => {
      let c = "";
      switch (o.centered && (c += "modal-dialog-centered "), o.size) {
        case "small":
          c += "modal-sm modal-fullscreen-sm-down";
          break;
        case "large":
          c += "modal-lg modal-fullscreen-lg-down";
          break;
        case "extra-large":
          c += "modal-xl modal-fullscreen-xl-down";
          break;
        default:
          c += " modal-fullscreen-md-down";
          break;
      }
      return c;
    }), n = y(() => {
      let c = "";
      return o.headerColor && (c += `text-bg-${o.headerColor} `), o.headerBold && (c += "fw-bold "), c;
    });
    let a, u;
    function p(c) {
      var E, L;
      c ? (E = a == null ? void 0 : a.value) == null || E.show() : (L = a == null ? void 0 : a.value) == null || L.hide();
    }
    return x(() => {
      if (u = V(document.getElementById(s.value)), !u.value)
        return;
      let c = o.hasBackground;
      c && !o.backgroundClickCloses && (c = "static"), a = V(
        new ce(u.value, {
          backdrop: c
        })
      ), u.value.addEventListener(
        "hidden.bs.modal",
        () => e("hidden")
      ), u.value.addEventListener("shown.bs.modal", () => e("shown")), p(o.active);
    }), ue(() => {
      var c;
      (c = a == null ? void 0 : a.value) == null || c.dispose();
    }), ee(
      () => o.active,
      (c) => {
        p(c);
      }
    ), (c, E) => (l(), $(de, { to: "body" }, [
      m("div", {
        id: s.value,
        class: "modal fade",
        tabindex: "-1"
      }, [
        m("div", {
          class: z(["modal-dialog modal-dialog-scrollable", r.value])
        }, [
          m("div", Ie, [
            c.$slots.title || c.showCloseButton ? (l(), i("div", {
              key: 0,
              class: z(["modal-header", n.value])
            }, [
              c.$slots.title ? (l(), i("p", Ne, [
                v(c.$slots, "title")
              ])) : h("", !0),
              c.showCloseButton ? (l(), i("button", Me)) : h("", !0)
            ], 2)) : h("", !0),
            m("div", Te, [
              v(c.$slots, "default")
            ]),
            c.$slots.footer ? (l(), i("div", je, [
              v(c.$slots, "footer")
            ])) : h("", !0)
          ])
        ], 2)
      ], 8, Oe)
    ]));
  }
}), qe = ["value"], Fe = {
  key: 0,
  disabled: "",
  value: ""
}, Re = ["value"], j = "___NULL_VALUE___", Ae = /* @__PURE__ */ g({
  __name: "BSSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    placeholder: { default: void 0 }
  },
  emits: ["update:model-value"],
  setup(d, { emit: t }) {
    const o = d, e = t, s = y(() => o.modelValue === null ? j : o.modelValue), r = y(() => {
      const a = o.options.map((u) => {
        const [p, c] = u;
        return [p === null ? j : p, c];
      });
      return console.log("Mapped options:", a), a;
    });
    function n(a) {
      const u = o.options.find((p) => a === j ? p[0] === null : String(p[0]) === a);
      u && (console.log("Found option pair:", u), e("update:model-value", u[0]));
    }
    return (a, u) => (l(), i("div", null, [
      m("select", {
        class: z(["form-select", a.containerClasses]),
        value: s.value,
        onChange: u[0] || (u[0] = (p) => n(b(M)(p)))
      }, [
        a.placeholder ? (l(), i("option", Fe, k(a.placeholder), 1)) : h("", !0),
        (l(!0), i(U, null, D(r.value, ([p, c]) => (l(), i("option", {
          key: p,
          value: p
        }, k(c), 9, Re))), 128))
      ], 42, qe)
    ]));
  }
}), Ze = ["id", "value", "checked", "onClick"], Ge = ["for"], oe = /* @__PURE__ */ g({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => N().toString() }
  },
  emits: ["update:model-value"],
  setup(d, { emit: t }) {
    const o = d, e = t;
    function s(r) {
      const n = o.modelValue.includes(r), a = [...o.modelValue], u = a.indexOf(r);
      n ? u > -1 && a.splice(u, 1) : a.push(r), e("update:model-value", a);
    }
    return (r, n) => (l(), i("div", null, [
      (l(!0), i(U, null, D(r.options, ([a, u]) => (l(), i("div", {
        key: a,
        class: z(["form-check", r.containerClasses])
      }, [
        m("input", {
          id: "id_" + a + "_" + r.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: a,
          checked: o.modelValue.includes(a),
          onClick: (p) => s(a)
        }, null, 8, Ze),
        m("label", {
          class: "form-check-label",
          for: "id_" + a + "_" + r.uniqueId
        }, k(u), 9, Ge)
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
}, F = /* @__PURE__ */ g({
  __name: "BSPagination",
  props: {
    maxPages: {},
    currentpage: {},
    showButtons: { type: Boolean, default: !0 },
    numOptions: { default: 2 }
  },
  emits: ["change-page"],
  setup(d, { emit: t }) {
    const o = d;
    function e(u, p, c) {
      return Math.min(Math.max(u, p), c);
    }
    const s = y(() => {
      const u = o.numOptions, p = o.currentpage - u, c = o.currentpage + u, E = Array.from({ length: o.maxPages }, (w, O) => O + 1).filter(
        (w) => w === 1 || w === o.maxPages || w >= p && w <= c
      ), L = [];
      return E.forEach((w, O) => {
        if (O === 0) {
          L.push(w);
          return;
        }
        w - E[O - 1] > 1 && L.push("ellipsis"), L.push(w);
      }), L;
    }), r = t;
    function n(u) {
      u !== "ellipsis" && (u = e(u, 1, o.maxPages), r("change-page", u));
    }
    const { t: a } = T();
    return (u, p) => (l(), i("ul", Qe, [
      m("li", {
        class: z(["page-item page-button", u.currentpage === 1 ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: p[0] || (p[0] = (c) => n(u.currentpage - 1))
        }, k(b(a)("previous")), 1)) : h("", !0)
      ], 2),
      (l(!0), i(U, null, D(s.value, (c) => (l(), i("li", {
        key: c,
        class: z([
          "page-item",
          (c === "ellipsis" ? "disabled page-ellipsis " : "") + (c === u.currentpage ? "active" : "")
        ])
      }, [
        c !== -42 ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: (E) => n(c)
        }, k(c), 9, He)) : (l(), i("span", We, "…"))
      ], 2))), 128)),
      m("li", {
        class: z(["page-item page-button", u.currentpage >= u.maxPages ? "disabled" : ""])
      }, [
        u.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: p[1] || (p[1] = (c) => n(u.currentpage + 1))
        }, k(b(a)("next")), 1)) : h("", !0)
      ], 2)
    ]));
  }
});
function H(d) {
  const t = d;
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
typeof H == "function" && H(F);
const Je = ["id", "value", "checked", "onClick"], Ke = ["for"], Xe = /* @__PURE__ */ g({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:model-value"],
  setup(d, { emit: t }) {
    const o = t;
    return (e, s) => (l(), i("div", null, [
      (l(!0), i(U, null, D(e.options, ([r, n]) => (l(), i("div", {
        key: r,
        class: z(["form-check", e.containerClasses])
      }, [
        m("input", {
          id: "id_" + r,
          type: "radio",
          class: "form-check-input",
          value: r,
          checked: e.modelValue == r,
          onClick: (a) => o("update:model-value", r)
        }, null, 8, Je),
        m("label", {
          class: "form-check-label",
          for: "id_" + r
        }, k(n), 9, Ke)
      ], 2))), 128))
    ]));
  }
}), Ye = { class: "uu-sidebar" }, xe = ["data-bs-target"], et = ["id"], tt = { class: "uu-sidebar-content" }, ot = /* @__PURE__ */ g({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(d) {
    const t = d, o = y(() => t.id !== null ? t.id : "id_" + N().toString().replace(/-/g, "")), e = y(() => {
      let s = "";
      return t.placement === "right" && (s += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (s += "uu-sidebar-mobile-bottom "), t.stickySidebar && (s += "uu-sidebar-sticky "), t.mobileStickySidebar && (s += "uu-sidebar-mobile-sticky "), s;
    });
    return (s, r) => (l(), i("div", {
      class: z(["uu-sidebar-container", e.value])
    }, [
      m("aside", Ye, [
        m("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          v(s.$slots, "sidebar-button")
        ], 8, xe),
        m("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          v(s.$slots, "sidebar")
        ], 8, et)
      ]),
      m("section", tt, [
        v(s.$slots, "default")
      ])
    ], 2));
  }
}), nt = { class: "uu-list-filter" }, st = { class: "uu-list-filter-label" }, at = {
  key: 3,
  class: "uu-list-filter-field"
}, lt = ["value"], rt = /* @__PURE__ */ g({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(d, { emit: t }) {
    const o = t;
    return (e, s) => (l(), i("div", nt, [
      m("div", st, k(e.filter.label), 1),
      e.filter.type === "checkbox" ? (l(), $(b(oe), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": s[0] || (s[0] = (r) => o("update:value", r))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "select" ? (l(), $(b(Ae), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": s[1] || (s[1] = (r) => o("update:value", r))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "radio" ? (l(), $(b(Xe), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": s[2] || (s[2] = (r) => o("update:value", r))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "date" ? (l(), i("div", at, [
        m("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: s[3] || (s[3] = (r) => o("update:value", b(M)(r)))
        }, null, 40, lt)
      ])) : h("", !0)
    ]));
  }
}), ne = /* @__PURE__ */ g({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(d, { emit: t }) {
    const o = d, e = y(() => o.filterProps.filters), s = y(() => o.filterProps.filterValues), r = t;
    function n(a, u) {
      let p = { ...s.value };
      p[a] = u, r("update:filter-values", p);
    }
    return (a, u) => (l(!0), i(U, null, D(e.value, (p) => (l(), $(rt, {
      key: p.field,
      filter: p,
      value: s.value[p.field],
      "onUpdate:value": (c) => n(p.field, c)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), it = { class: "search" }, ut = ["value", "placeholder"], R = /* @__PURE__ */ g({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(d, { emit: t }) {
    function o(a, u = 500) {
      let p;
      return (...c) => {
        clearTimeout(p), p = setTimeout(() => {
          a.apply(this, c);
        }, u);
      };
    }
    const e = t;
    function s(a) {
      e("update:modelValue", a);
    }
    const r = o((a) => s(a)), { t: n } = T();
    return (a, u) => (l(), i("div", it, [
      m("input", {
        id: "search",
        class: "form-control",
        value: a.modelValue,
        placeholder: b(n)("placeholder"),
        onInput: u[0] || (u[0] = (p) => b(r)(b(M)(p)))
      }, null, 40, ut)
    ]));
  }
});
function W(d) {
  const t = d;
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
typeof W == "function" && W(R);
const dt = ["value"], pt = ["value"], se = /* @__PURE__ */ g({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(d, { emit: t }) {
    const o = d, e = t;
    function s(r) {
      if (typeof r == "string")
        try {
          r = Number(r);
        } catch {
          r = o.pageSizeOptions[0] ?? 10;
        }
      e("update:pageSize", r);
    }
    return (r, n) => (l(), i("select", {
      value: r.pageSize,
      class: "form-select",
      onChange: n[0] || (n[0] = (a) => s(b(M)(a)))
    }, [
      (l(!0), i(U, null, D(r.pageSizeOptions, (a) => (l(), i("option", {
        key: a,
        value: a
      }, k(a), 9, pt))), 128))
    ], 40, dt));
  }
}), ct = ["value"], mt = ["value"], ae = /* @__PURE__ */ g({
  __name: "SortControl",
  props: {
    currentSort: {},
    sortOptions: {}
  },
  emits: ["update:current-sort", "update:currentSort"],
  setup(d, { emit: t }) {
    return (o, e) => (l(), i("select", {
      value: o.currentSort,
      class: "form-select",
      onChange: e[0] || (e[0] = (s) => o.$emit("update:current-sort", b(M)(s).trim()))
    }, [
      (l(!0), i(U, null, D(o.sortOptions, ({ field: s, label: r }) => (l(), i("option", {
        key: s,
        value: s
      }, k(r), 9, mt))), 128))
    ], 40, ct));
  }
}), ft = { key: 0 }, A = /* @__PURE__ */ g({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(d) {
    const { t } = T();
    return (o, e) => (l(), i("div", null, [
      o.searchQuery ? (l(), i("span", ft, k(b(t)("search", { query: o.searchQuery })), 1)) : h("", !0),
      te(" " + k(b(t)("showing", {
        pageNum: o.pageNum,
        totalNum: Intl.NumberFormat().format(o.totalNum)
      })), 1)
    ]));
  }
});
function J(d) {
  const t = d;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      en: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: r } = o;
          return e(["Search result: ", s(r("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: r } = o;
          return e(["showing ", s(r("pageNum")), " of ", s(r("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: e, interpolate: s, named: r } = o;
          return e(["Zoekresultaat: ", s(r("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: s, named: r } = o;
          return e([s(r("pageNum")), " van ", s(r("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof J == "function" && J(A);
function le(d) {
  const { filters: t, filterValues: o } = d;
  return !t || !o ? null : { filters: t, filterValues: o };
}
const gt = { class: "uu-container" }, ht = { class: "uu-list" }, vt = { class: "uu-list-controls" }, bt = {
  key: 1,
  class: "uu-list-order-control"
}, yt = { class: "uu-list-page-size-control" }, _t = {
  key: 0,
  class: "uu-list-filters"
}, $t = { class: "uu-list-content" }, kt = /* @__PURE__ */ g({
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
  setup(d, { emit: t }) {
    const o = d, e = t, s = y(() => Math.ceil(o.totalData / o.pageSize)), r = y(() => le(o));
    return (n, a) => {
      var u;
      return l(), i("div", gt, [
        m("div", ht, [
          m("div", vt, [
            n.searchEnabled ? (l(), $(R, {
              key: 0,
              "model-value": n.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": a[0] || (a[0] = (p) => n.$emit("update:search", p))
            }, null, 8, ["model-value"])) : h("", !0),
            C(A, {
              "search-query": n.search,
              "page-num": ((u = n.data) == null ? void 0 : u.length) ?? 0,
              "total-num": n.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            n.sortEnabled ? (l(), i("div", bt, [
              C(ae, {
                "current-sort": n.currentSort,
                "sort-options": n.sortOptions,
                "onUpdate:currentSort": a[1] || (a[1] = (p) => e("update:current-sort", p))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : h("", !0),
            m("div", yt, [
              C(se, {
                "page-size-options": n.pageSizeOptions,
                "page-size": n.pageSize,
                "onUpdate:pageSize": a[2] || (a[2] = (p) => e("update:page-size", p))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          n.filtersEnabled && r.value ? (l(), i("div", _t, [
            v(n.$slots, "filters-top", {
              data: n.data,
              isLoading: n.isLoading
            }),
            C(ne, {
              "filter-props": r.value,
              "onUpdate:filterValues": a[3] || (a[3] = (p) => n.$emit("update:filter-values", p))
            }, null, 8, ["filter-props"]),
            v(n.$slots, "filters-bottom", {
              data: n.data,
              isLoading: n.isLoading
            })
          ])) : h("", !0),
          m("div", $t, [
            v(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (l(), $(b(F), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: a[4] || (a[4] = (p) => n.$emit("update:current-page", p))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), St = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, zt = {
  key: 0,
  class: "ms-auto"
}, re = /* @__PURE__ */ g({
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
  setup(d, { emit: t }) {
    const o = d, e = t, s = y(() => Math.ceil(o.totalData / o.pageSize)), r = y(() => le(o));
    return (n, a) => (l(), $(b(ot), { class: "uu-list-sidebar" }, {
      sidebar: P(() => [
        n.searchEnabled ? (l(), $(R, {
          key: 0,
          "model-value": n.search,
          "onUpdate:modelValue": a[0] || (a[0] = (u) => n.$emit("update:search", u))
        }, null, 8, ["model-value"])) : h("", !0),
        v(n.$slots, "filters-top", {
          data: n.data,
          isLoading: n.isLoading
        }),
        r.value ? (l(), $(ne, {
          key: 1,
          "filter-props": r.value,
          "onUpdate:filterValues": a[1] || (a[1] = (u) => n.$emit("update:filter-values", u))
        }, null, 8, ["filter-props"])) : h("", !0),
        v(n.$slots, "filters-bottom", {
          data: n.data,
          isLoading: n.isLoading
        })
      ]),
      default: P(() => {
        var u;
        return [
          m("div", null, [
            m("div", St, [
              C(A, {
                "search-query": n.search,
                "page-num": ((u = n.data) == null ? void 0 : u.length) ?? 0,
                "total-num": n.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              n.sortEnabled ? (l(), i("div", zt, [
                C(ae, {
                  "current-sort": n.currentSort,
                  "sort-options": n.sortOptions,
                  "onUpdate:currentSort": a[2] || (a[2] = (p) => e("update:current-sort", p))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : h("", !0),
              m("div", null, [
                C(se, {
                  "page-size-options": n.pageSizeOptions,
                  "page-size": n.pageSize,
                  "onUpdate:pageSize": a[3] || (a[3] = (p) => e("update:page-size", p))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            v(n.$slots, "data", {
              data: n.data,
              isLoading: n.isLoading
            }),
            m("div", null, [
              n.data ? (l(), $(b(F), {
                key: 0,
                "max-pages": s.value,
                currentpage: n.currentPage,
                onChangePage: a[4] || (a[4] = (p) => n.$emit("update:current-page", p))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ];
      }),
      _: 3
    }));
  }
});
function K(d) {
  const t = d;
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
const wt = /* @__PURE__ */ g({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(d) {
    return (t, o) => (l(), i("pre", null, k(t.data), 1));
  }
}), Ct = /* @__PURE__ */ g({
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
  setup(d, { emit: t }) {
    const o = d, e = t, s = y(() => {
      switch (o.container) {
        case "sidebar":
          return re;
        default:
          return kt;
      }
    });
    return (r, n) => (l(), $(Y(s.value), {
      "is-loading": r.isLoading,
      data: r.data,
      "total-data": r.totalData,
      "search-enabled": r.searchEnabled,
      search: r.search,
      "sort-enabled": r.sortEnabled,
      "current-sort": r.currentSort,
      "current-page": r.currentPage,
      "page-size-options": r.pageSizeOptions,
      "sort-options": r.sortOptions,
      "page-size": r.pageSize,
      "filters-enabled": r.filtersEnabled,
      filters: r.filters,
      "filter-values": r.filterValues,
      "onUpdate:search": n[0] || (n[0] = (a) => e("update:search", a)),
      "onUpdate:currentSort": n[1] || (n[1] = (a) => e("update:current-sort", a)),
      "onUpdate:pageSize": n[2] || (n[2] = (a) => e("update:page-size", a)),
      "onUpdate:currentPage": n[3] || (n[3] = (a) => e("update:current-page", a)),
      "onUpdate:filterValues": n[4] || (n[4] = (a) => e("update:filter-values", a))
    }, {
      data: P(({ data: a, isLoading: u }) => [
        v(r.$slots, "data", {
          data: a,
          isLoading: u
        }, () => [
          C(wt, {
            data: a,
            "is-loading": u
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": P(({ data: a, isLoading: u }) => [
        v(r.$slots, "filters-top", {
          data: a,
          isLoading: u
        })
      ]),
      "filters-bottom": P(({ data: a, isLoading: u }) => [
        v(r.$slots, "filters-bottom", {
          data: a,
          isLoading: u
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), Bt = /* @__PURE__ */ g({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    return (t, o) => (l(), i("span", {
      class: z(t.column.classes)
    }, k(t.item[t.column.field]), 3));
  }
}), Vt = /* @__PURE__ */ g({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    const t = d, o = y(() => {
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
    }, k(o.value), 3));
  }
}), Ut = { key: 0 }, Dt = /* @__PURE__ */ g({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", Ut, [
      C(b(q), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: P(() => [
          te(k(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : h("", !0);
  }
}), Lt = { key: 0 }, Pt = ["href", "target"], Et = /* @__PURE__ */ g({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", Lt, [
      m("a", {
        href: t.item[t.column.field].link,
        class: z(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, k(t.item[t.column.field].text), 11, Pt)
    ])) : h("", !0);
  }
}), Ot = ["innerHTML"], It = /* @__PURE__ */ g({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    return (t, o) => (l(), i("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, Ot));
  }
}), Nt = {
  key: 0,
  class: "dropdown"
}, Mt = { class: "dropdown-menu" }, Tt = {
  key: 0,
  class: "dropdown-divider"
}, jt = ["href", "target"], qt = /* @__PURE__ */ g({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    const t = d, o = y(() => t.item[t.column.field].entries());
    return (e, s) => o.value ? (l(), i("div", Nt, [
      s[0] || (s[0] = pe('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      m("ul", Mt, [
        (l(!0), i(U, null, D(o.value, ([r, n]) => (l(), i("li", { key: r }, [
          n.divider ? (l(), i("hr", Tt)) : (l(), i("a", {
            key: 1,
            href: n.link,
            class: z(["dropdown-item", n.classes ?? ""]),
            target: n.new_tab ? "_blank" : "_self"
          }, k(n.text), 11, jt))
        ]))), 128))
      ])
    ])) : h("", !0);
  }
}), Ft = /* @__PURE__ */ g({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(d) {
    return (t, o) => t.column.type == "string" ? (l(), $(Bt, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (l(), $(Vt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (l(), $(Dt, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (l(), $(Et, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (l(), $(It, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (l(), $(qt, {
      key: 5,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : h("", !0);
  }
}), Rt = /* @__PURE__ */ g({
  __name: "DDVRow",
  props: {
    item: {},
    columns: {}
  },
  setup(d) {
    return (t, o) => (l(), i("tr", null, [
      (l(!0), i(U, null, D(t.columns, (e) => (l(), i("td", {
        key: e.field,
        class: "align-middle"
      }, [
        C(Ft, {
          column: e,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), At = {
  key: 0,
  class: "alert alert-info w-100"
}, Zt = { key: 0 }, Gt = { key: 1 }, Qt = ["colspan"], ie = /* @__PURE__ */ g({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(d) {
    const t = d, o = y(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = T();
    return (s, r) => s.isLoading && o.value ? (l(), i("div", At, k(b(e)("loading")), 1)) : (l(), i("table", {
      key: 1,
      class: z(["table", s.isLoading ? "loading" : ""])
    }, [
      m("thead", null, [
        m("tr", null, [
          (l(!0), i(U, null, D(s.columns, (n) => (l(), i("th", {
            key: n.field
          }, k(n.label), 1))), 128))
        ])
      ]),
      o.value ? (l(), i("tbody", Gt, [
        m("tr", null, [
          m("td", {
            colspan: s.columns.length
          }, k(b(e)("no_data")), 9, Qt)
        ])
      ])) : (l(), i("tbody", Zt, [
        (l(!0), i(U, null, D(s.data, (n) => (l(), $(Rt, {
          key: n.id,
          item: n,
          columns: s.columns
        }, null, 8, ["item", "columns"]))), 128))
      ]))
    ], 2));
  }
});
function X(d) {
  const t = d;
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
const so = /* @__PURE__ */ g({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(d) {
    const t = d, o = V(t.config.pageSize), e = V(1), s = V(""), r = V("id"), n = V(!0);
    function a() {
      var _;
      let f = {};
      return (_ = t.config.filters) == null || _.forEach((S) => {
        var I;
        if (S.initial) {
          f[S.field] = S.initial;
          return;
        }
        switch (S.type) {
          case "date":
            f[S.field] = null;
            break;
          case "checkbox":
            f[S.field] = [];
            break;
          case "radio":
            ((I = S.options) == null ? void 0 : I.length) != 0 && S.options && (f[S.field] = S.options[0][0]);
            break;
        }
      }), f;
    }
    const u = V(a());
    let p = V(null);
    const c = y(() => {
      let f = [];
      f.push("page_size=" + encodeURIComponent(o.value));
      for (const [_, S] of Object.entries(u.value))
        S != null && (typeof S == "object" ? S.forEach(
          (I) => f.push(_ + "=" + encodeURIComponent(I))
        ) : f.push(_ + "=" + encodeURIComponent(S)));
      return s.value && f.push("search=" + encodeURIComponent(s.value)), f.push("ordering=" + encodeURIComponent(r.value)), e.value = 1, f;
    }), E = y(() => {
      let f = c.value, _ = "page=" + encodeURIComponent(e.value);
      return f.length !== 0 && (_ = "&" + _), "?" + f.join("&") + _;
    }), L = y(() => {
      let f = new URL(window.location.protocol + "//" + window.location.host);
      return f.pathname = t.config.dataUri, f.search = E.value, console.log(f.toString()), f.toString();
    });
    ee(L, () => {
      O();
    });
    const w = V(null);
    function O() {
      w.value && w.value.abort(), w.value = new AbortController(), n.value = !0, fetch(L.value, { signal: w.value.signal }).then((f) => {
        f.json().then((_) => {
          p.value = _, n.value = !1, _.ordering && (r.value = _.ordering), w.value = null;
        });
      }).catch((f) => {
        console.log(f);
      });
    }
    return x(() => {
      O();
    }), (f, _) => {
      var S, I, Z;
      return l(), $(Ct, {
        "is-loading": n.value,
        data: ((S = b(p)) == null ? void 0 : S.results) ?? void 0,
        "total-data": ((I = b(p)) == null ? void 0 : I.count) ?? 0,
        "search-enabled": f.config.searchEnabled,
        search: s.value,
        "sort-enabled": f.config.sortEnabled,
        "current-sort": r.value,
        "page-size-options": f.config.pageSizeOptions,
        "sort-options": f.config.sortOptions ?? [],
        "page-size": ((Z = b(p)) == null ? void 0 : Z.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": f.config.filtersEnabled,
        filters: f.config.filters ?? [],
        "filter-values": u.value,
        container: f.config.container,
        "onUpdate:search": _[0] || (_[0] = (B) => s.value = B),
        "onUpdate:currentSort": _[1] || (_[1] = (B) => r.value = B),
        "onUpdate:pageSize": _[2] || (_[2] = (B) => o.value = B),
        "onUpdate:currentPage": _[3] || (_[3] = (B) => e.value = B),
        "onUpdate:filterValues": _[4] || (_[4] = (B) => u.value = B)
      }, {
        data: P(({ data: B, isLoading: G }) => [
          v(f.$slots, "data", {
            data: B,
            isLoading: G
          }, () => [
            C(ie, {
              data: B,
              columns: f.config.columns,
              "is-loading": G
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
