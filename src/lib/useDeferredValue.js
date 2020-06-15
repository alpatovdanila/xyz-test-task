//@flow
import * as React from 'react';

/** basically an useState with debounced setState function */
export const useDeferredValue = (value:any, timeout:number) => {
    
    const [deferredValue, setDeferredValue] = React.useState(value);

    React.useEffect(()=>{
        const timer = setTimeout(()=>setDeferredValue(value), timeout);
        return ()=>clearTimeout(timer);
    }, [value, timeout]);

    return deferredValue;
}