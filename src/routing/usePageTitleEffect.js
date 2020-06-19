import * as React from "react";

import {useGetParams} from "../lib/useGetParams";

export const usePageTitleEffect = () => {
    const {query} = useGetParams();
    const title = query ? `${query} — Github Repositories Search` : `Github Repositories Search`
    document.querySelector('title').innerText = title;
}