export const createParamsUrl = (searchParams) => {
    const params = new URLSearchParams();
    for (let key in searchParams) {
        const value = searchParams[key];
        if (value) params.append(key, searchParams[key]);
    }
    return params.toString();
}


export const extractParams = (url) => {
    const extracted = {};
    const searchParams = new URLSearchParams(url);

    for (const [key, value] of searchParams.entries()) {
        if (value) extracted[key] = value;
    }
    return extracted;
}