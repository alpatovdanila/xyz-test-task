//@flow



export const constructSearchRoutePath = ({query, page, sort, order, lang}) => {
    let url = `/search/?query=${query ? query : ''}`;
    if(page) url+=`&page=${page}`;
    if(lang) url+=`&lang=${lang}`;
    if(sort) url+=`&sort=${sort}`;
    if(order) url+=`&order=${order}`;
    return encodeURI(url);
}

