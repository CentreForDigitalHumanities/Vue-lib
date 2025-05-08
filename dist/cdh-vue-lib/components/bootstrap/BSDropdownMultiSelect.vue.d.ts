declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    options: {
        type: import("vue").PropType<[string | number, string][]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string[] | number[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | string[] | number[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    options: {
        type: import("vue").PropType<[string | number, string][]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string[] | number[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string | number | string[] | number[]) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=BSDropdownMultiSelect.vue.d.ts.map