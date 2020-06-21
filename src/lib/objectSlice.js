// @flow
export const objectSlice = (object: Object, sliceDefinition: Object) : Object => {
    const slice = {};

    for(const [key, defaultValue] of Object.entries(sliceDefinition)){
        const value = object[key] || defaultValue;
        slice[key] = value;
    }
    return slice;
}