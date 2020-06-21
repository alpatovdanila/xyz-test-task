import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import * as serviceWorker from './lib/serviceWorker';
import {Providers} from "./providers";
import './global.scss';

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App/>
        </Providers>
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.register();
