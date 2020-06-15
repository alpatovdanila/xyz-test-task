import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Root} from './components/root';

function App() {
    return (
        <BrowserRouter>
            <Route path={"/:query/(sort=:sort)?/(order=:sort)?"}><Root/></Route>
        </BrowserRouter>
    );
}

export default App;
