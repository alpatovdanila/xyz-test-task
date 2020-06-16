//@flow


export const constructRoutePath = ({query, page, sort, order}) : string => {
    if(!query) return '';
    return encodeURI(`/?q=${query}${page ? `&page=${page}`:``}${sort ? `&sort=${sort}`:``}${order ? `&order=${order}`:``}`);
}

