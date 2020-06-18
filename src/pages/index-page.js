//@flow
import * as React from 'react';
import {Empty} from "../ui/empty";
import {useContext} from "react";
import {storeContext} from "../model";
import {clearResults} from "../model/search";

export const IndexPage = () => {
    const {dispatch} = useContext(storeContext);

    React.useEffect(()=>{
        dispatch(clearResults());
    }, [])

    return <Empty>Start searching by typing in the field above</Empty>
}