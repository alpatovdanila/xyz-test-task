import type {Repository} from "./repository";

export type SearchResults = {
    total_count:number,
    items:Array<Repository>,
    incomplete_results:boolean,
}

export type SearchSlice = {
    query: ?string,
    page: ?string,
    sort: ?string,
    order: ?string,
    perPage: ?number,
    fetching: boolean,
    lang: ?string,
    results: SearchResults,
}