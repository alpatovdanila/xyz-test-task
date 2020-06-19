export const objectSlice = (object, sliceDefinition) => {
    const slice = {};

    for(const [key, defaultValue] of Object.entries(sliceDefinition)){
        const value = object[key] || defaultValue;
        slice[key] = value;
    }
    return slice;
}