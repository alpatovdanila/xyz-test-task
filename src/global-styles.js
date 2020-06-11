import styled, {createGlobalStyle} from 'styled-components';



export const theme = {
    colors:{
        primary:'blue',
        secondary:'blue',
        list:'blue'
    },
    spaceUnit:'0.5rem',
}

export const GlobalStyle = createGlobalStyle`
    html{
        font-size:16px;
    }
`