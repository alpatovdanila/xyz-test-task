import styled, {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';


export const theme = {
    colors: {
        primary: 'blue',
        secondary: 'blue',
        list: 'blue',
        link:'#ca116f',
        gray: '#606060',
        gray2: '#808080',
        gray3: '#A0A0A0',
        gray4: '#D6D6D6',
        gray5:'#eaeaea',
        statusDanger:'#c33527',
        bodyBackground:'white',
        text:'black',
    },
    spaceUnit: '0.5rem',
}

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap');
    html{
        
        font-size:16px;
    }
    body{
        font-family: 'IBM Plex Sans', sans-serif;
    }
    
    .icon{
        vertical-align:middle;
    }
`