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
import { defineComponent as g, computed as _, openBlock as l, createElementBlock as i, normalizeClass as z, createElementVNode as c, renderSlot as v, createCommentVNode as h, createVNode as C, unref as b, withCtx as L, ref as V, toDisplayString as k, createBlock as $, resolveDynamicComponent as X, onMounted as Y, onUnmounted as ie, watch as x, Teleport as ue, Fragment as D, renderList as U, createTextVNode as ee, createStaticVNode as de } from "vue";
import { v4 as N } from "uuid";
import { FontAwesomeIcon as G } from "@fortawesome/vue-fontawesome";
import { Modal as pe } from "bootstrap";
import { useI18n as T } from "vue-i18n";
import { u as M } from "./useInputValue-e686f6e9.js";
const me = ["href", "target"], ce = { class: "btn-text" }, fe = ["type", "name", "disabled"], ge = { class: "btn-text" }, he = {
  key: 0,
  class: "spinner-border spinner-border-sm ms-2",
  role: "status",
  "aria-hidden": "true"
}, j = /* @__PURE__ */ g({
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
    const t = u, o = _(() => {
      let e = "btn ";
      return t.size === "large" ? e += "btn-lg " : t.size === "small" && (e += "btn-sm "), t.outlined ? e += "btn-outline-" : e += "btn-", e += `${t.variant} `, t.active && (e += "active "), t.disabled && (e += "cursor-not-allowed "), e += ` ${t.cssClasses}`;
    });
    return (e, n) => e.href ? (l(), i("a", {
      key: 0,
      href: e.href,
      class: z(o.value),
      target: e.newTab ? "_blank" : "_self"
    }, [
      c("span", ce, [
        v(e.$slots, "default")
      ])
    ], 10, me)) : (l(), i("button", {
      key: 1,
      type: e.input,
      class: z(o.value),
      name: e.name,
      disabled: e.disabled
    }, [
      c("span", ge, [
        v(e.$slots, "default")
      ]),
      e.loading ? (l(), i("span", he)) : h("", !0)
    ], 10, fe));
  }
}), ve = { class: "card" }, be = { class: "d-flex" }, ye = {
  key: 0,
  class: "me-auto"
}, _e = {
  key: 2,
  class: "card-image-top"
}, $e = { class: "card-body" }, ke = {
  key: 3,
  class: "card-footer"
}, Se = /* @__PURE__ */ g({
  __name: "BSCard",
  props: {
    headerClasses: {}
  },
  emits: ["header-icon-clicked"],
  setup(u, { emit: t }) {
    const o = u, e = _(() => o.headerClasses ? `card-header fw-bold ${o.headerClasses}` : "card-header fw-bold");
    return (n, s) => (l(), i("div", ve, [
      n.$slots.header ? (l(), i("div", {
        key: 0,
        class: z(e.value)
      }, [
        v(n.$slots, "header", {}, void 0, !0)
      ], 2)) : n.$slots.title || n.$slots.header_icon ? (l(), i("div", {
        key: 1,
        class: z(e.value)
      }, [
        c("div", be, [
          n.$slots.title ? (l(), i("div", ye, [
            v(n.$slots, "title", {}, void 0, !0)
          ])) : h("", !0),
          n.$slots.header_icon ? (l(), i("div", {
            key: 1,
            class: "ms-auto card-header-icon",
            onClick: s[0] || (s[0] = (a) => n.$emit("header-icon-clicked"))
          }, [
            v(n.$slots, "header_icon", {}, void 0, !0)
          ])) : h("", !0)
        ])
      ], 2)) : h("", !0),
      n.$slots.image ? (l(), i("div", _e, [
        v(n.$slots, "image", {}, void 0, !0)
      ])) : h("", !0),
      c("div", $e, [
        v(n.$slots, "default", {}, void 0, !0)
      ]),
      n.$slots.footer ? (l(), i("div", ke, [
        v(n.$slots, "footer", {}, void 0, !0)
      ])) : h("", !0)
    ]));
  }
});
const ze = (u, t) => {
  const o = u.__vccOpts || u;
  for (const [e, n] of t)
    o[e] = n;
  return o;
}, Yt = /* @__PURE__ */ ze(Se, [["__scopeId", "data-v-c52e17e8"]]), we = { class: "dropdown" }, Ce = ["aria-labelledby"], xt = /* @__PURE__ */ g({
  __name: "BSDropdown",
  props: {
    id: { default: "" },
    variant: { default: "primary" }
  },
  setup(u) {
    const t = u, o = _(() => t.id ? t.id : "id_" + N().toString());
    return (e, n) => (l(), i("div", we, [
      C(b(j), {
        id: o.value,
        variant: e.variant,
        class: "dropdown-toggle",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: L(() => [
          v(e.$slots, "button")
        ]),
        _: 3
      }, 8, ["id", "variant"]),
      c("ul", {
        class: "dropdown-menu",
        "aria-labelledby": o.value
      }, [
        v(e.$slots, "default")
      ], 8, Ce)
    ]));
  }
}), Be = { class: "dropdown dropdown-select is-hoverable" }, Ve = { class: "me-2" }, De = ["id"], Ue = { class: "dropdown-content ps-4" }, eo = /* @__PURE__ */ g({
  __name: "BSDropdownMultiSelect",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const o = V(N());
    return (e, n) => (l(), i("div", Be, [
      C(j, {
        class: "dropdown-toggle",
        "aria-haspopup": "true",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: L(() => [
          c("span", Ve, k(e.label), 1)
        ]),
        _: 1
      }),
      c("div", {
        id: o.value,
        class: "dropdown-menu",
        role: "menu"
      }, [
        c("div", Ue, [
          C(b(te), {
            options: e.options,
            "model-value": e.modelValue,
            "container-classes": "dropdown-item",
            "onUpdate:modelValue": n[0] || (n[0] = (s) => e.$emit("update:modelValue", s))
          }, null, 8, ["options", "model-value"])
        ])
      ], 8, De)
    ]));
  }
});
const Pe = { key: 0 }, Le = { class: "icon me-1" }, to = /* @__PURE__ */ g({
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
    const t = u, o = _(() => t.inline ? "span" : "div");
    return (e, n) => (l(), $(X(o.value), null, {
      default: L(() => [
        e.$slots.default ? (l(), i("span", Pe, [
          c("span", Le, [
            C(b(G), {
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
            v(e.$slots, "default")
          ])
        ])) : (l(), $(b(G), {
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
}), Ee = ["id"], Oe = { class: "modal-content" }, Ie = {
  key: 0,
  class: "modal-title mw-100"
}, Ne = {
  key: 1,
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, Me = { class: "modal-body" }, Te = {
  key: 1,
  class: "modal-footer justify-content-start"
}, oo = /* @__PURE__ */ g({
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
  setup(u, { emit: t }) {
    const o = u, e = t, n = _(() => o.id ?? `id_${N().toString()}`), s = _(() => {
      let p = "";
      switch (o.centered && (p += "modal-dialog-centered "), o.size) {
        case "small":
          p += "modal-sm modal-fullscreen-sm-down";
          break;
        case "large":
          p += "modal-lg modal-fullscreen-lg-down";
          break;
        case "extra-large":
          p += "modal-xl modal-fullscreen-xl-down";
          break;
        default:
          p += " modal-fullscreen-md-down";
          break;
      }
      return p;
    }), a = _(() => {
      let p = "";
      return o.headerColor && (p += `text-bg-${o.headerColor} `), o.headerBold && (p += "fw-bold "), p;
    });
    let r, d;
    function m(p) {
      var E, P;
      p ? (E = r == null ? void 0 : r.value) == null || E.show() : (P = r == null ? void 0 : r.value) == null || P.hide();
    }
    return Y(() => {
      if (d = V(document.getElementById(n.value)), !d.value)
        return;
      let p = o.hasBackground;
      p && !o.backgroundClickCloses && (p = "static"), r = V(
        new pe(d.value, {
          backdrop: p
        })
      ), d.value.addEventListener(
        "hidden.bs.modal",
        () => e("hidden")
      ), d.value.addEventListener("shown.bs.modal", () => e("shown")), m(o.active);
    }), ie(() => {
      var p;
      (p = r == null ? void 0 : r.value) == null || p.dispose();
    }), x(
      () => o.active,
      (p) => {
        m(p);
      }
    ), (p, E) => (l(), $(ue, { to: "body" }, [
      c("div", {
        id: n.value,
        class: "modal fade",
        tabindex: "-1"
      }, [
        c("div", {
          class: z(["modal-dialog modal-dialog-scrollable", s.value])
        }, [
          c("div", Oe, [
            p.$slots.title || p.showCloseButton ? (l(), i("div", {
              key: 0,
              class: z(["modal-header", a.value])
            }, [
              p.$slots.title ? (l(), i("p", Ie, [
                v(p.$slots, "title")
              ])) : h("", !0),
              p.showCloseButton ? (l(), i("button", Ne)) : h("", !0)
            ], 2)) : h("", !0),
            c("div", Me, [
              v(p.$slots, "default")
            ]),
            p.$slots.footer ? (l(), i("div", Te, [
              v(p.$slots, "footer")
            ])) : h("", !0)
          ])
        ], 2)
      ], 8, Ee)
    ]));
  }
}), je = ["value"], qe = {
  key: 0,
  disabled: "",
  value: ""
}, Re = ["value"], Fe = /* @__PURE__ */ g({
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
    function n(s) {
      typeof o.modelValue == "string" ? e("update:modelValue", s) : e("update:modelValue", Number(s));
    }
    return (s, a) => (l(), i("div", null, [
      c("select", {
        class: z(["form-select", s.containerClasses]),
        value: s.modelValue,
        onChange: a[0] || (a[0] = (r) => n(b(M)(r)))
      }, [
        s.placeholder ? (l(), i("option", qe, k(s.placeholder), 1)) : h("", !0),
        (l(!0), i(D, null, U(s.options, ([r, d]) => (l(), i("option", {
          key: r ?? "null",
          value: r
        }, k(d), 9, Re))), 128))
      ], 42, je)
    ]));
  }
}), Ae = ["id", "value", "checked", "onClick"], Ze = ["for"], te = /* @__PURE__ */ g({
  __name: "BSMultiSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" },
    uniqueId: { default: () => N().toString() }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function n(s) {
      const a = o.modelValue.includes(s), r = [...o.modelValue], d = r.indexOf(s);
      a ? d > -1 && r.splice(d, 1) : r.push(s), e("update:model-value", r);
    }
    return (s, a) => (l(), i("div", null, [
      (l(!0), i(D, null, U(s.options, ([r, d]) => (l(), i("div", {
        key: r,
        class: z(["form-check", s.containerClasses])
      }, [
        c("input", {
          id: "id_" + r + "_" + s.uniqueId,
          type: "checkbox",
          class: "form-check-input",
          value: r,
          checked: o.modelValue.includes(r),
          onClick: (m) => n(r)
        }, null, 8, Ae),
        c("label", {
          class: "form-check-label",
          for: "id_" + r + "_" + s.uniqueId
        }, k(d), 9, Ze)
      ], 2))), 128))
    ]));
  }
}), Ge = {
  class: "pagination justify-content-center",
  role: "navigation",
  "aria-label": "pagination"
}, Qe = ["onClick"], He = {
  key: 1,
  class: "page-link"
}, q = /* @__PURE__ */ g({
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
    function e(d, m, p) {
      return Math.min(Math.max(d, m), p);
    }
    const n = _(() => {
      const d = o.numOptions, m = o.currentpage - d, p = o.currentpage + d, E = Array.from({ length: o.maxPages }, (w, O) => O + 1).filter(
        (w) => w === 1 || w === o.maxPages || w >= m && w <= p
      ), P = [];
      return E.forEach((w, O) => {
        if (O === 0) {
          P.push(w);
          return;
        }
        w - E[O - 1] > 1 && P.push("ellipsis"), P.push(w);
      }), P;
    }), s = t;
    function a(d) {
      d !== "ellipsis" && (d = e(d, 1, o.maxPages), s("change-page", d));
    }
    const { t: r } = T();
    return (d, m) => (l(), i("ul", Ge, [
      c("li", {
        class: z(["page-item page-button", d.currentpage === 1 ? "disabled" : ""])
      }, [
        d.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: m[0] || (m[0] = (p) => a(d.currentpage - 1))
        }, k(b(r)("previous")), 1)) : h("", !0)
      ], 2),
      (l(!0), i(D, null, U(n.value, (p) => (l(), i("li", {
        key: p,
        class: z([
          "page-item",
          (p === "ellipsis" ? "disabled page-ellipsis " : "") + (p === d.currentpage ? "active" : "")
        ])
      }, [
        p !== -42 ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: (E) => a(p)
        }, k(p), 9, Qe)) : (l(), i("span", He, "…"))
      ], 2))), 128)),
      c("li", {
        class: z(["page-item page-button", d.currentpage >= d.maxPages ? "disabled" : ""])
      }, [
        d.showButtons ? (l(), i("a", {
          key: 0,
          class: "page-link",
          onClick: m[1] || (m[1] = (p) => a(d.currentpage + 1))
        }, k(b(r)("next")), 1)) : h("", !0)
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
typeof Q == "function" && Q(q);
const We = ["id", "value", "checked", "onClick"], Je = ["for"], Ke = /* @__PURE__ */ g({
  __name: "BSRadioSelect",
  props: {
    options: {},
    modelValue: {},
    containerClasses: { default: "" }
  },
  emits: ["update:model-value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, n) => (l(), i("div", null, [
      (l(!0), i(D, null, U(e.options, ([s, a]) => (l(), i("div", {
        key: s,
        class: z(["form-check", e.containerClasses])
      }, [
        c("input", {
          id: "id_" + s,
          type: "radio",
          class: "form-check-input",
          value: s,
          checked: e.modelValue == s,
          onClick: (r) => o("update:model-value", s)
        }, null, 8, We),
        c("label", {
          class: "form-check-label",
          for: "id_" + s
        }, k(a), 9, Je)
      ], 2))), 128))
    ]));
  }
}), Xe = { class: "uu-sidebar" }, Ye = ["data-bs-target"], xe = ["id"], et = { class: "uu-sidebar-content" }, tt = /* @__PURE__ */ g({
  __name: "BSSidebar",
  props: {
    id: { default: null },
    placement: { default: "left" },
    mobilePlacement: { default: "top" },
    stickySidebar: { type: Boolean, default: !1 },
    mobileStickySidebar: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = _(() => t.id !== null ? t.id : "id_" + N().toString().replace(/-/g, "")), e = _(() => {
      let n = "";
      return t.placement === "right" && (n += "uu-sidebar-right "), t.mobilePlacement === "bottom" && (n += "uu-sidebar-mobile-bottom "), t.stickySidebar && (n += "uu-sidebar-sticky "), t.mobileStickySidebar && (n += "uu-sidebar-mobile-sticky "), n;
    });
    return (n, s) => (l(), i("div", {
      class: z(["uu-sidebar-container", e.value])
    }, [
      c("aside", Xe, [
        c("button", {
          class: "uu-sidebar-toggle",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#" + o.value,
          "aria-expanded": "false"
        }, [
          v(n.$slots, "sidebar-button")
        ], 8, Ye),
        c("div", {
          id: o.value,
          class: "uu-sidebar-collapse collapse"
        }, [
          v(n.$slots, "sidebar")
        ], 8, xe)
      ]),
      c("section", et, [
        v(n.$slots, "default")
      ])
    ], 2));
  }
}), ot = { class: "uu-list-filter" }, at = { class: "uu-list-filter-label" }, nt = {
  key: 3,
  class: "uu-list-filter-field"
}, st = ["value"], lt = /* @__PURE__ */ g({
  __name: "Filter",
  props: {
    filter: {},
    value: {}
  },
  emits: ["update:value"],
  setup(u, { emit: t }) {
    const o = t;
    return (e, n) => (l(), i("div", ot, [
      c("div", at, k(e.filter.label), 1),
      e.filter.type === "checkbox" ? (l(), $(b(te), {
        key: 0,
        options: e.filter.options ?? [],
        "model-value": e.value ?? [],
        "onUpdate:modelValue": n[0] || (n[0] = (s) => o("update:value", s))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "select" ? (l(), $(b(Fe), {
        key: 1,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        class: "uu-list-filter-field",
        "onUpdate:modelValue": n[1] || (n[1] = (s) => o("update:value", s))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "radio" ? (l(), $(b(Ke), {
        key: 2,
        options: e.filter.options ?? [],
        "model-value": e.value ?? "",
        "onUpdate:modelValue": n[2] || (n[2] = (s) => o("update:value", s))
      }, null, 8, ["options", "model-value"])) : h("", !0),
      e.filter.type === "date" ? (l(), i("div", nt, [
        c("input", {
          type: "date",
          value: e.value,
          class: "form-control",
          onInput: n[3] || (n[3] = (s) => o("update:value", b(M)(s)))
        }, null, 40, st)
      ])) : h("", !0)
    ]));
  }
}), oe = /* @__PURE__ */ g({
  __name: "FilterBar",
  props: {
    filterProps: {}
  },
  emits: ["update:filter-values"],
  setup(u, { emit: t }) {
    const o = u, e = _(() => o.filterProps.filters), n = _(() => o.filterProps.filterValues), s = t;
    function a(r, d) {
      let m = { ...n.value };
      m[r] = d, s("update:filter-values", m);
    }
    return (r, d) => (l(!0), i(D, null, U(e.value, (m) => (l(), $(lt, {
      key: m.field,
      filter: m,
      value: n.value[m.field],
      "onUpdate:value": (p) => a(m.field, p)
    }, null, 8, ["filter", "value", "onUpdate:value"]))), 128));
  }
}), rt = { class: "search" }, it = ["value", "placeholder"], R = /* @__PURE__ */ g({
  __name: "SearchControl",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "update:model-value"],
  setup(u, { emit: t }) {
    function o(r, d = 500) {
      let m;
      return (...p) => {
        clearTimeout(m), m = setTimeout(() => {
          r.apply(this, p);
        }, d);
      };
    }
    const e = t;
    function n(r) {
      e("update:modelValue", r);
    }
    const s = o((r) => n(r)), { t: a } = T();
    return (r, d) => (l(), i("div", rt, [
      c("input", {
        id: "search",
        class: "form-control",
        value: r.modelValue,
        placeholder: b(a)("placeholder"),
        onInput: d[0] || (d[0] = (m) => b(s)(b(M)(m)))
      }, null, 40, it)
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
typeof H == "function" && H(R);
const ut = ["value"], dt = ["value"], ae = /* @__PURE__ */ g({
  __name: "PageSizeControl",
  props: {
    pageSize: {},
    pageSizeOptions: {}
  },
  emits: ["update:pageSize", "update:page-size"],
  setup(u, { emit: t }) {
    const o = u, e = t;
    function n(s) {
      if (typeof s == "string")
        try {
          s = Number(s);
        } catch {
          s = o.pageSizeOptions[0] ?? 10;
        }
      e("update:pageSize", s);
    }
    return (s, a) => (l(), i("select", {
      value: s.pageSize,
      class: "form-select",
      onChange: a[0] || (a[0] = (r) => n(b(M)(r)))
    }, [
      (l(!0), i(D, null, U(s.pageSizeOptions, (r) => (l(), i("option", {
        key: r,
        value: r
      }, k(r), 9, dt))), 128))
    ], 40, ut));
  }
}), pt = ["value"], mt = ["value"], ne = /* @__PURE__ */ g({
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
      onChange: e[0] || (e[0] = (n) => o.$emit("update:current-sort", b(M)(n).trim()))
    }, [
      (l(!0), i(D, null, U(o.sortOptions, ({ field: n, label: s }) => (l(), i("option", {
        key: n,
        value: n
      }, k(s), 9, mt))), 128))
    ], 40, pt));
  }
}), ct = { key: 0 }, F = /* @__PURE__ */ g({
  __name: "SearchResultNum",
  props: {
    searchQuery: {},
    pageNum: {},
    totalNum: {}
  },
  setup(u) {
    const { t } = T();
    return (o, e) => (l(), i("div", null, [
      o.searchQuery ? (l(), i("span", ct, k(b(t)("search", { query: o.searchQuery })), 1)) : h("", !0),
      ee(" " + k(b(t)("showing", {
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
          const { normalize: e, interpolate: n, named: s } = o;
          return e(["Search result: ", n(s("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: n, named: s } = o;
          return e(["showing ", n(s("pageNum")), " of ", n(s("totalNum")), " results"]);
        }
      },
      nl: {
        search: (o) => {
          const { normalize: e, interpolate: n, named: s } = o;
          return e(["Zoekresultaat: ", n(s("query")), ","]);
        },
        showing: (o) => {
          const { normalize: e, interpolate: n, named: s } = o;
          return e([n(s("pageNum")), " van ", n(s("totalNum")), " getoond"]);
        }
      }
    }
  });
}
typeof W == "function" && W(F);
function se(u) {
  const { filters: t, filterValues: o } = u;
  return !t || !o ? null : { filters: t, filterValues: o };
}
const ft = { class: "uu-container" }, gt = { class: "uu-list" }, ht = { class: "uu-list-controls" }, vt = {
  key: 1,
  class: "uu-list-order-control"
}, bt = { class: "uu-list-page-size-control" }, yt = {
  key: 0,
  class: "uu-list-filters"
}, _t = { class: "uu-list-content" }, $t = /* @__PURE__ */ g({
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
    const o = u, e = t, n = _(() => Math.ceil(o.totalData / o.pageSize)), s = _(() => se(o));
    return (a, r) => {
      var d;
      return l(), i("div", ft, [
        c("div", gt, [
          c("div", ht, [
            a.searchEnabled ? (l(), $(R, {
              key: 0,
              "model-value": a.search,
              class: "uu-list-search-control",
              "onUpdate:modelValue": r[0] || (r[0] = (m) => a.$emit("update:search", m))
            }, null, 8, ["model-value"])) : h("", !0),
            C(F, {
              "search-query": a.search,
              "page-num": ((d = a.data) == null ? void 0 : d.length) ?? 0,
              "total-num": a.totalData,
              class: "uu-list-search-text-control"
            }, null, 8, ["search-query", "page-num", "total-num"]),
            a.sortEnabled ? (l(), i("div", vt, [
              C(ne, {
                "current-sort": a.currentSort,
                "sort-options": a.sortOptions,
                "onUpdate:currentSort": r[1] || (r[1] = (m) => e("update:current-sort", m))
              }, null, 8, ["current-sort", "sort-options"])
            ])) : h("", !0),
            c("div", bt, [
              C(ae, {
                "page-size-options": a.pageSizeOptions,
                "page-size": a.pageSize,
                "onUpdate:pageSize": r[2] || (r[2] = (m) => e("update:page-size", m))
              }, null, 8, ["page-size-options", "page-size"])
            ])
          ]),
          a.filtersEnabled && s.value ? (l(), i("div", yt, [
            v(a.$slots, "filters-top", {
              data: a.data,
              isLoading: a.isLoading
            }),
            C(oe, {
              "filter-props": s.value,
              "onUpdate:filterValues": r[3] || (r[3] = (m) => a.$emit("update:filter-values", m))
            }, null, 8, ["filter-props"]),
            v(a.$slots, "filters-bottom", {
              data: a.data,
              isLoading: a.isLoading
            })
          ])) : h("", !0),
          c("div", _t, [
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            c("div", null, [
              a.data ? (l(), $(b(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: a.currentPage,
                onChangePage: r[4] || (r[4] = (m) => a.$emit("update:current-page", m))
              }, null, 8, ["max-pages", "currentpage"])) : h("", !0)
            ])
          ])
        ])
      ]);
    };
  }
}), kt = { class: "w-100 d-flex align-items-center gap-3 uu-list-controls" }, St = {
  key: 0,
  class: "ms-auto"
}, le = /* @__PURE__ */ g({
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
    const o = u, e = t, n = _(() => Math.ceil(o.totalData / o.pageSize)), s = _(() => se(o));
    return (a, r) => (l(), $(b(tt), { class: "uu-list-sidebar" }, {
      sidebar: L(() => [
        a.searchEnabled ? (l(), $(R, {
          key: 0,
          "model-value": a.search,
          "onUpdate:modelValue": r[0] || (r[0] = (d) => a.$emit("update:search", d))
        }, null, 8, ["model-value"])) : h("", !0),
        v(a.$slots, "filters-top", {
          data: a.data,
          isLoading: a.isLoading
        }),
        s.value ? (l(), $(oe, {
          key: 1,
          "filter-props": s.value,
          "onUpdate:filterValues": r[1] || (r[1] = (d) => a.$emit("update:filter-values", d))
        }, null, 8, ["filter-props"])) : h("", !0),
        v(a.$slots, "filters-bottom", {
          data: a.data,
          isLoading: a.isLoading
        })
      ]),
      default: L(() => {
        var d;
        return [
          c("div", null, [
            c("div", kt, [
              C(F, {
                "search-query": a.search,
                "page-num": ((d = a.data) == null ? void 0 : d.length) ?? 0,
                "total-num": a.totalData
              }, null, 8, ["search-query", "page-num", "total-num"]),
              a.sortEnabled ? (l(), i("div", St, [
                C(ne, {
                  "current-sort": a.currentSort,
                  "sort-options": a.sortOptions,
                  "onUpdate:currentSort": r[2] || (r[2] = (m) => e("update:current-sort", m))
                }, null, 8, ["current-sort", "sort-options"])
              ])) : h("", !0),
              c("div", null, [
                C(ae, {
                  "page-size-options": a.pageSizeOptions,
                  "page-size": a.pageSize,
                  "onUpdate:pageSize": r[3] || (r[3] = (m) => e("update:page-size", m))
                }, null, 8, ["page-size-options", "page-size"])
              ])
            ]),
            v(a.$slots, "data", {
              data: a.data,
              isLoading: a.isLoading
            }),
            c("div", null, [
              a.data ? (l(), $(b(q), {
                key: 0,
                "max-pages": n.value,
                currentpage: a.currentPage,
                onChangePage: r[4] || (r[4] = (m) => a.$emit("update:current-page", m))
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
typeof J == "function" && J(le);
const zt = /* @__PURE__ */ g({
  __name: "DebugVisualizer",
  props: {
    data: { default: void 0 },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    return (t, o) => (l(), i("pre", null, k(t.data), 1));
  }
}), wt = /* @__PURE__ */ g({
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
    const o = u, e = t, n = _(() => {
      switch (o.container) {
        case "sidebar":
          return le;
        default:
          return $t;
      }
    });
    return (s, a) => (l(), $(X(n.value), {
      "is-loading": s.isLoading,
      data: s.data,
      "total-data": s.totalData,
      "search-enabled": s.searchEnabled,
      search: s.search,
      "sort-enabled": s.sortEnabled,
      "current-sort": s.currentSort,
      "current-page": s.currentPage,
      "page-size-options": s.pageSizeOptions,
      "sort-options": s.sortOptions,
      "page-size": s.pageSize,
      "filters-enabled": s.filtersEnabled,
      filters: s.filters,
      "filter-values": s.filterValues,
      "onUpdate:search": a[0] || (a[0] = (r) => e("update:search", r)),
      "onUpdate:currentSort": a[1] || (a[1] = (r) => e("update:current-sort", r)),
      "onUpdate:pageSize": a[2] || (a[2] = (r) => e("update:page-size", r)),
      "onUpdate:currentPage": a[3] || (a[3] = (r) => e("update:current-page", r)),
      "onUpdate:filterValues": a[4] || (a[4] = (r) => e("update:filter-values", r))
    }, {
      data: L(({ data: r, isLoading: d }) => [
        v(s.$slots, "data", {
          data: r,
          isLoading: d
        }, () => [
          C(zt, {
            data: r,
            "is-loading": d
          }, null, 8, ["data", "is-loading"])
        ])
      ]),
      "filters-top": L(({ data: r, isLoading: d }) => [
        v(s.$slots, "filters-top", {
          data: r,
          isLoading: d
        })
      ]),
      "filters-bottom": L(({ data: r, isLoading: d }) => [
        v(s.$slots, "filters-bottom", {
          data: r,
          isLoading: d
        })
      ]),
      _: 3
    }, 40, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "current-page", "page-size-options", "sort-options", "page-size", "filters-enabled", "filters", "filter-values"]));
  }
}), Ct = /* @__PURE__ */ g({
  __name: "DDVString",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (l(), i("span", {
      class: z(t.column.classes)
    }, k(t.item[t.column.field]), 3));
  }
}), Bt = /* @__PURE__ */ g({
  __name: "DDVDate",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    const t = u, o = _(() => {
      let e = null;
      try {
        e = new Date(t.item[t.column.field]);
      } catch (a) {
        return console.error(a), "";
      }
      let n;
      if (t.column.language !== void 0 && t.column.language !== null && (n = t.column.language), typeof t.column.format == "string") {
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
        return new Intl.DateTimeFormat(n, a).format(e);
      }
      return typeof t.column.format == "object" && t.column.format !== null ? new Intl.DateTimeFormat(
        n,
        t.column.format
      ).format(e) : new Intl.DateTimeFormat(n).format(e);
    });
    return (e, n) => (l(), i("span", {
      class: z(e.column.classes)
    }, k(o.value), 3));
  }
}), Vt = { key: 0 }, Dt = /* @__PURE__ */ g({
  __name: "DDVButton",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", Vt, [
      C(b(j), {
        href: t.item[t.column.field].link,
        "css-classes": t.item[t.column.field].classes,
        "new-tab": t.item[t.column.field].new_tab,
        size: t.column.size,
        variant: t.column.variant
      }, {
        default: L(() => [
          ee(k(t.item[t.column.field].text), 1)
        ]),
        _: 1
      }, 8, ["href", "css-classes", "new-tab", "size", "variant"])
    ])) : h("", !0);
  }
}), Ut = { key: 0 }, Pt = ["href", "target"], Lt = /* @__PURE__ */ g({
  __name: "DDVLink",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.item[t.column.field] ? (l(), i("span", Ut, [
      c("a", {
        href: t.item[t.column.field].link,
        class: z(t.column.classes),
        target: t.item[t.column.field].new_tab ? "_blank" : "_self"
      }, k(t.item[t.column.field].text), 11, Pt)
    ])) : h("", !0);
  }
}), Et = ["innerHTML"], Ot = /* @__PURE__ */ g({
  __name: "DDVHTML",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => (l(), i("span", {
      innerHTML: t.item[t.column.field]
    }, null, 8, Et));
  }
}), It = {
  key: 0,
  class: "dropdown"
}, Nt = { class: "dropdown-menu" }, Mt = {
  key: 0,
  class: "dropdown-divider"
}, Tt = ["href", "target"], jt = /* @__PURE__ */ g({
  __name: "DDVActions",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    const t = u, o = _(() => t.item[t.column.field].entries());
    return (e, n) => o.value ? (l(), i("div", It, [
      n[0] || (n[0] = de('<button class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="line-height:1rem;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" fill="#000000"></path><path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" fill="#000000"></path><path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" fill="#000000"></path></svg></button>', 1)),
      c("ul", Nt, [
        (l(!0), i(D, null, U(o.value, ([s, a]) => (l(), i("li", { key: s }, [
          a.divider ? (l(), i("hr", Mt)) : (l(), i("a", {
            key: 1,
            href: a.link,
            class: z(["dropdown-item", a.classes ?? ""]),
            target: a.new_tab ? "_blank" : "_self"
          }, k(a.text), 11, Tt))
        ]))), 128))
      ])
    ])) : h("", !0);
  }
}), qt = /* @__PURE__ */ g({
  __name: "DDVColumn",
  props: {
    item: {},
    column: {}
  },
  setup(u) {
    return (t, o) => t.column.type == "string" ? (l(), $(Ct, {
      key: 0,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "date" ? (l(), $(Bt, {
      key: 1,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "button" ? (l(), $(Dt, {
      key: 2,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "link" ? (l(), $(Lt, {
      key: 3,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "html" ? (l(), $(Ot, {
      key: 4,
      item: t.item,
      column: t.column
    }, null, 8, ["item", "column"])) : t.column.type == "actions" ? (l(), $(jt, {
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
  setup(u) {
    return (t, o) => (l(), i("tr", null, [
      (l(!0), i(D, null, U(t.columns, (e) => (l(), i("td", {
        key: e.field,
        class: "align-middle"
      }, [
        C(qt, {
          column: e,
          item: t.item
        }, null, 8, ["column", "item"])
      ]))), 128))
    ]));
  }
}), Ft = {
  key: 0,
  class: "alert alert-info w-100"
}, At = { key: 0 }, Zt = { key: 1 }, Gt = ["colspan"], re = /* @__PURE__ */ g({
  __name: "DataDefinedVisualizer",
  props: {
    data: { default: null },
    columns: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(u) {
    const t = u, o = _(() => t.data === null || t.data === void 0 || t.data.length === 0), { t: e } = T();
    return (n, s) => n.isLoading && o.value ? (l(), i("div", Ft, k(b(e)("loading")), 1)) : (l(), i("table", {
      key: 1,
      class: z(["table", n.isLoading ? "loading" : ""])
    }, [
      c("thead", null, [
        c("tr", null, [
          (l(!0), i(D, null, U(n.columns, (a) => (l(), i("th", {
            key: a.field
          }, k(a.label), 1))), 128))
        ])
      ]),
      o.value ? (l(), i("tbody", Zt, [
        c("tr", null, [
          c("td", {
            colspan: n.columns.length
          }, k(b(e)("no_data")), 9, Gt)
        ])
      ])) : (l(), i("tbody", At, [
        (l(!0), i(D, null, U(n.data, (a) => (l(), $(Rt, {
          key: a.id,
          item: a,
          columns: n.columns
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
typeof K == "function" && K(re);
const ao = /* @__PURE__ */ g({
  __name: "DSCList",
  props: {
    config: {}
  },
  setup(u) {
    const t = u, o = V(t.config.pageSize), e = V(1), n = V(""), s = V("id"), a = V(!0);
    function r() {
      var y;
      let f = {};
      return (y = t.config.filters) == null || y.forEach((S) => {
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
    const d = V(r());
    let m = V(null);
    const p = _(() => {
      let f = [];
      f.push("page_size=" + encodeURIComponent(o.value));
      for (const [y, S] of Object.entries(d.value))
        S != null && (typeof S == "object" ? S.forEach(
          (I) => f.push(y + "=" + encodeURIComponent(I))
        ) : f.push(y + "=" + encodeURIComponent(S)));
      return n.value && f.push("search=" + encodeURIComponent(n.value)), f.push("ordering=" + encodeURIComponent(s.value)), e.value = 1, f;
    }), E = _(() => {
      let f = p.value, y = "page=" + encodeURIComponent(e.value);
      return f.length !== 0 && (y = "&" + y), "?" + f.join("&") + y;
    }), P = _(() => {
      let f = new URL(window.location.protocol + "//" + window.location.host);
      return f.pathname = t.config.dataUri, f.search = E.value, console.log(f.toString()), f.toString();
    });
    x(P, () => {
      O();
    });
    const w = V(null);
    function O() {
      w.value && w.value.abort(), w.value = new AbortController(), a.value = !0, fetch(P.value, { signal: w.value.signal }).then((f) => {
        f.json().then((y) => {
          m.value = y, a.value = !1, y.ordering && (s.value = y.ordering), w.value = null;
        });
      }).catch((f) => {
        console.log(f);
      });
    }
    return Y(() => {
      O();
    }), (f, y) => {
      var S, I, A;
      return l(), $(wt, {
        "is-loading": a.value,
        data: ((S = b(m)) == null ? void 0 : S.results) ?? void 0,
        "total-data": ((I = b(m)) == null ? void 0 : I.count) ?? 0,
        "search-enabled": f.config.searchEnabled,
        search: n.value,
        "sort-enabled": f.config.sortEnabled,
        "current-sort": s.value,
        "page-size-options": f.config.pageSizeOptions,
        "sort-options": f.config.sortOptions ?? [],
        "page-size": ((A = b(m)) == null ? void 0 : A.page_size) ?? 10,
        "current-page": e.value,
        "filters-enabled": f.config.filtersEnabled,
        filters: f.config.filters ?? [],
        "filter-values": d.value,
        container: f.config.container,
        "onUpdate:search": y[0] || (y[0] = (B) => n.value = B),
        "onUpdate:currentSort": y[1] || (y[1] = (B) => s.value = B),
        "onUpdate:pageSize": y[2] || (y[2] = (B) => o.value = B),
        "onUpdate:currentPage": y[3] || (y[3] = (B) => e.value = B),
        "onUpdate:filterValues": y[4] || (y[4] = (B) => d.value = B)
      }, {
        data: L(({ data: B, isLoading: Z }) => [
          v(f.$slots, "data", {
            data: B,
            isLoading: Z
          }, () => [
            C(re, {
              data: B,
              columns: f.config.columns,
              "is-loading": Z
            }, null, 8, ["data", "columns", "is-loading"])
          ])
        ]),
        _: 3
      }, 8, ["is-loading", "data", "total-data", "search-enabled", "search", "sort-enabled", "current-sort", "page-size-options", "sort-options", "page-size", "current-page", "filters-enabled", "filters", "filter-values", "container"]);
    };
  }
}), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  j as BSButton,
  Yt as BSCard,
  xt as BSDropdown,
  eo as BSDropdownMultiSelect,
  to as BSIcon,
  oo as BSModal,
  te as BSMultiSelect,
  q as BSPagination,
  Ke as BSRadioSelect,
  Fe as BSSelect,
  tt as BSSidebar,
  ao as DSCList,
  wt as UUList,
  no as UUListTypes
};
