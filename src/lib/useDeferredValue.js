//@flow
import * as React from 'react';

// Todo: flow typing
/** basically an useState with debounced setState function */
export const useDeferredValue = (value, timeout) => {
    
    const [deferredValue, setDeferredValue] = React.useState(value);

    React.useEffect(()=>{
        const timer = setTimeout(()=>setDeferredValue(value), timeout);
        return ()=>clearTimeout(timer);
    }, [value, timeout]);

    return deferredValue;
}