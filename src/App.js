import React, {useEffect, useState} from 'react';
import {GithubRestClient} from "./api/request";
import {useHistory, useLocation, useParams, BrowserRouter} from 'react-router-dom';
import {Switch, Route} from "react-router";
import {SearchForm} from './components/search-form';
import { Shell } from './components/shell';





function App() {
    

    return (
        <div className="App">
        <BrowserRouter>
          <Route path={"/:query/(sort=:sort)?/(order=:sort)?"}>
              <Shell/>
            
          </Route>
          </BrowserRouter>
        </div>

);
}

export default App;
