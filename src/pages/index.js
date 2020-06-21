//@flow
import * as React from 'react';
import {Empty} from "../ui/empty";
import {useContext} from "react";
import {clearResults} from "../store/ducks/search";
import {storeContext} from "../store";


export const Index = () => {
    const {dispatch} = useContext(storeContext);

    React.useEffect(()=>{
        dispatch(clearResults());
    }, []);

    return <Empty>Start searching by typing in the field above</Empty>
}