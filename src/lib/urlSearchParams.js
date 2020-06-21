// @flow
export const createParamsUrl = (searchParams:Object) : string => {
    const params = new URLSearchParams();
    for (let key in searchParams) {
        const value = searchParams[key];
        if (value) params.append(key, searchParams[key]);
    }
    return decodeURIComponent(params.toString());
}


export const extractParams = (url:string) : Object => {
    const extracted = {};
    const searchParams = new URLSearchParams(url);

    for (const [key, value] of searchParams.entries()) {
        if (value) extracted[key] = value;
    }
    return extracted;
}