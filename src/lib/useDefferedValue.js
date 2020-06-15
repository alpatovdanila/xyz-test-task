//@flow
import * as React from 'react';

/** basically an useState with debounced setState function */
export const useDefferedValue = (value:any, timeout:number) => {
    
    const [defferedValue, setDefferedValue] = React.useState(value);
    React.useEffect(()=>{
        const timer = setTimeout(()=>setDefferedValue(value), timeout);
        return ()=>clearTimeout(timer);
    }, [value, timeout]);

    return defferedValue;
}