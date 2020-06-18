import * as React from "react";
import {constructPageTitle} from "./constructPageTitle";

import {constructPageTitle} from "./constructPageTitle";
export const usePageTitle(){
    const
    React.useEffect(() => {
        document.querySelector('title').innerText = constructPageTitle(params.query);
    }, [location.search])
}