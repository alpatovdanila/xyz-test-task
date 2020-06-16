import styled, {createGlobalStyle} from 'styled-components';



export const theme = {
    colors:{
        primary:'blue',
        secondary:'blue',
        list:'blue',
        gray1:'gray',
        gray2:'lightgray',
        gray3:'lightgray',
    },
    spaceUnit:'0.5rem',
}

export const GlobalStyle = createGlobalStyle`
    html{
        font-size:16px;
    }
`