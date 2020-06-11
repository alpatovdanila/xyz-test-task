import React, {useEffect, useState} from 'react';
import {GithubRestClient} from "./lib/GithubRestClient";
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {Switch, Route} from "react-router";

const RepositoriesList = () => {
    const params = useParams();
    const [repos, setRepos] = useState({
        incomplete_results: false,
        items: [],
        total_count: 0
    });
    const [fetching, setFetching] = useState(false);

    useEffect(()=>{
        setFetching(true);
        fetch(`https://api.github.com/search/repositories?q=${params.query}`).then(r=>r.json()).then(setRepos).finally(()=>setFetching(false))
    },[params.page, params.query]);

    return <>
        {repos.items.map(repo => <>
            <h1>{repo.fullName}</h1>
            <p>{repo.description}</p>
            </>
        )}
    </>

}

const SearchForm = () => {
    const history = useHistory();
    return <form>
        <input type="text" onKeyDown={e => {
            if(e.key === 'Enter') history.push(`/${e.target.value}/`)
        }}/>
    </form>
}


function App() {
    const [searchResults, setSearchResults] = useState({});
    const params = useParams();
    return (
        <div className="App">
          <Route path={"/:query/:page?/"}>
              <SearchForm/>
            <RepositoriesList/>
          </Route>
        </div>

);
}

export default App;
