//@flow

export const constructSearchRoutePath = ({query, page, sort, order}) : string => {
    if(!query) return '';
    return encodeURI(`/search/?query=${query}${page ? `&page=${page}`:``}${sort ? `&sort=${sort}`:``}${order ? `&order=${order}`:``}`);
}

