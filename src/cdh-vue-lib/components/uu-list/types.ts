import {
    BSButtonSize,
    BSButtonVariant,
} from "@/cdh-vue-lib/components/bootstrap/BSButton.vue";

interface FilterDefinition {
    field: string;
    label: string;
    options?: [string | number, string][];
    type: "radio" | "checkbox" | "date" | "select";
    initial?: FilterValue;
}

type FilterValue = string | number | null | string[] | number[];
type FilterValues = Record<string, FilterValue>;

interface Data<IDType> {
    id: IDType;
}

interface SortOption {
    field: string;
    label: string;
}

interface ContainerProps<T extends Data<string> | Data<number>> {
    data?: T[];
    isLoading: boolean;
    totalData: number;
    currentPage: number;
    searchEnabled: boolean;
    search: string;
    sortEnabled: boolean;
    currentSort: string;
    sortOptions: SortOption[];
    pageSize: number;
    pageSizeOptions: number[];
    filtersEnabled: boolean;
    filters?: FilterDefinition[];
    filterValues?: FilterValues;
}

type ContainerEmits = {
    (e: "update:current-page", value: number): void;
    (e: "update:search", value: string): void;
    (e: "update:current-sort", value: string): void;
    (e: "update:page-size", value: number): void;
    (e: "update:filter-values", value: FilterValues): void;
};

interface DDCListData extends Data<string | number> {
    [Key: string]: any;
}

interface _DDC {
    field: string;
    label: string;
}

interface DDCHTML extends _DDC {
    type: "html";
}

interface DDCActions extends _DDC {
    type: "actions";
}

interface DDCString extends _DDC {
    type: "string";
    classes?: string;
}

// Shamelessly stolen from some lib.es5.d.ts
interface DateTimeFormatOptions {
    localeMatcher?: "best fit" | "lookup";
    weekday?: "long" | "short" | "narrow";
    era?: "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    second?: "numeric" | "2-digit";
    timeZoneName?:
        | "short"
        | "long"
        | "shortOffset"
        | "longOffset"
        | "shortGeneric"
        | "longGeneric";
    formatMatcher?: "best fit" | "basic";
    hour12?: boolean;
    timeZone?: string;
    dateStyle: "full" | "long" | "medium" | "short";
    timeStyle: "full" | "long" | "medium" | "short";
}

interface DDCDate extends _DDC {
    type: "date";
    format?: DateTimeFormatOptions | "date" | "time" | "datetime" | null;
    classes?: string;
    language?: string | null;
}

interface DDCLink extends _DDC {
    type: "link";
    classes?: string;
}
interface DDCButton extends _DDC {
    type: "button";
    variant: BSButtonVariant | undefined;
    size: BSButtonSize | undefined;
}
type DataDefinedColumn =
    | DDCHTML
    | DDCActions
    | DDCString
    | DDCLink
    | DDCButton
    | DDCDate;

export {
    FilterDefinition,
    FilterValue,
    FilterValues,
    Data,
    DDCListData,
    SortOption,
    ContainerProps,
    ContainerEmits,
    DataDefinedColumn,
    DDCHTML,
    DDCActions,
    DDCString,
    DDCDate,
    DDCLink,
    DDCButton,
};
