// This file provides the /api/mockData endpoint for the DSCList component.
// Normally, you would use a real API endpoint on a backend server for this.

import { fetchData, type Pokemon, pokemons } from "~/shared/mockData";


interface DSCListQueryParams {
    page_size: number;
    results: Pokemon[];
    search?: string;
    ordering: string;
    page: number;
}

export default defineEventHandler((event) => {
    const queryParams: DSCListQueryParams = getQuery(event);

    const { totalItems, shownData } = fetchData({
        currentPage: queryParams.page,
        data: pokemons,
        filters: {},
        pageSize: queryParams.page_size,
        search: queryParams.search || "",
        sortString: queryParams.ordering || "id_asc",
    });


    return {
        count: totalItems,
        results: shownData,
        page_size: queryParams.page_size,
        pages: Math.ceil(totalItems / queryParams.page_size),
    };
});
