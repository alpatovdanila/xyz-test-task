//@flow
import * as React from 'react';

// Todo: flow typing
/** basically an useState with debounced setState function */
export const useDeferredValue = <T> (value: T , timeout:number) => {
    
    const [deferredValue, setDeferredValue] = React.useState<T>(value);

    React.useEffect(()=>{
        const timer = setTimeout(()=>setDeferredValue(value), timeout);
        return ()=>clearTimeout(timer);
    }, [value, timeout]);

    return deferredValue;
}