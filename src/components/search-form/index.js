//@flow
import * as React from 'react';
import {InputText} from '../../ui/input-text';
import {useDeferredValue} from '../../lib/useDeferredValue';

type Props = {
    initialQuery?: string,
    onSubmit: (value:string) => void,
    submitTimeout?: number;
}

export const SearchForm = ({initialQuery = '', onSubmit, submitTimeout = 250} : Props) => {
    
    const [value, setValue] = React.useState(initialQuery);
    const defferedValue = useDeferredValue(value, submitTimeout);
    
    React.useEffect(()=>onSubmit(defferedValue), [defferedValue])
    
    return <InputText value={value} onChange={e => setValue(e.target.value)}/>
    
}
