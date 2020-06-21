//@flow
import * as React from 'react';
import {useHistory, useLocation} from 'react-router';
import {createParamsUrl, extractParams} from "./urlSearchParams";
import {objectSlice} from "./objectSlice";

export const useGetParams = (sliceDefinition: Object) => {
    const location = useLocation();
    const history = useHistory();

    const params = React.useMemo(() => {
        const allParams = extractParams(location.search);
        const slicedParams = sliceDefinition ? objectSlice(allParams, sliceDefinition) : allParams;
        return [allParams, slicedParams]
    }, [location.search]);

    const update = (newParams:Object, newPathName?:string) => {
        const nextParams = {...params[0], ...newParams}
        history.push({
            pathname:newPathName ? newPathName : location.pathname,
            search:createParamsUrl(nextParams)
        });
    }

    return [
        params[1],
        update,
    ]
}