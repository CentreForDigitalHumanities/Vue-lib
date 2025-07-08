import type { UUListTypes } from "cdh-vue-lib";

export interface Pokemon {
    id: number;
    name: string;
    type: string[];
    height: number;
}

export const pokemons: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        height: 7,
    },
    {
        id: 4,
        name: "Charmander",
        type: ["Fire"],
        height: 6,
    },
    {
        id: 7,
        name: "Squirtle",
        type: ["Water"],
        height: 5,
    },
    {
        id: 25,
        name: "Pikachu",
        type: ["Electric"],
        height: 4,
    },
    {
        id: 21,
        name: "Spearow",
        type: ["Normal", "Flying"],
        height: 3,
    },
];


function searchData(searchString: string | undefined, data: Pokemon[]): Pokemon[] {
    if (!searchString) {
        return data;
    }
    const lowerSearch = searchString.toLowerCase();
    return data.filter((item) => item.name.toLowerCase().includes(lowerSearch));
}

function filterData(filters: UUListTypes.FilterValues, data: Pokemon[]): Pokemon[] {
    return data.filter((item) => {
        return Object.entries(filters).every(([field, value]) => {
            if (!value) {
                return true;
            }
            if (Array.isArray(value)) {
                const itemValue = item[field as keyof Pokemon];
                if (value.length === 0) {
                    return true;
                }
                if (typeof itemValue === "string") {
                    return (value as string[]).includes(itemValue);
                } else if (typeof itemValue === "number") {
                    return (value as number[]).includes(itemValue);
                } else if (Array.isArray(itemValue)) {
                    return (value as string[]).some((v) => itemValue.includes(v));
                } else {
                    return false; // Unsupported type
                }
            } else {
                return item[field as keyof Pokemon] === value;
            }
        });
    });
}

function sortData(sortString: string, data: Pokemon[]): Pokemon[] {
    const [field, order] = sortString.split("_") as [
        keyof Pokemon,
        "asc" | "desc",
    ];
    return data.sort((a, b) => {
        if (order === "asc") {
            return a[field] < b[field] ? 1 : -1;
        } else {
            return a[field] > b[field] ? 1 : -1;
        }
    });
}

function paginateData(currentPage: number, pageSize: number, data: Pokemon[]): Pokemon[] {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
}

interface FetchParams {
    data: Pokemon[];
    search?: string;
    filters: UUListTypes.FilterValues;
    sortString: string;
    currentPage: number;
    pageSize: number;
}

/**
 *
 * Simulates fetching data from an API with search, filter, sort, and pagination capabilities.
 *
 * Used for the UUList and DSCList components.
 *
 */
export function fetchData(params: FetchParams): { totalItems: number; shownData: Pokemon[] } {
    const { data, search, filters, sortString, currentPage, pageSize } = params;
    const searched = searchData(search, data);
    const filtered = filterData(filters, searched);

    const totalItems = filtered.length;

    const sorted = sortData(sortString, filtered);
    const paginated = paginateData(currentPage, pageSize, sorted);

    const shownData = paginated;

    return { totalItems, shownData };
}
