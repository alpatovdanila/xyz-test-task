import * as React from "react";

import {useSearchUrl} from "./useSearchUrl";

export const usePageTitleEffect = () => {
    const {query} = useSearchUrl();
    const title = query ? `${query} — Github Repositories Search` : `Github Repositories Search`
    document.querySelector('title').innerText = title;
}