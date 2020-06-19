//@flow
import * as React from 'react';
import {Empty} from "../ui/empty";
import {useContext} from "react";
import {clearResults} from "../features/search/ducks/search";
import {storeContext} from "../store";


export const IndexPage = () => {
    const {dispatch} = useContext(storeContext);

    React.useEffect(()=>{
        dispatch(clearResults());
    }, []);

    return <Empty>Start searching by typing in the field above</Empty>
}