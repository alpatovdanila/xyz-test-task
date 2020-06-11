export class GithubRestClient {

    fetchJson(url, params){
        return fetch(url, params).then(r=>r.json());
    }

    async searchRepositories(query){
       return this.fetchJson(`https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`);
    }
}

