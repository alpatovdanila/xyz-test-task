import {Order, ORDER_DESC} from "./constants";

export const SORT_STARS = 'stars';

export const SORT_FORKS = 'forks';

export const SORT_UPDATED = 'updated';

export const  SORT_BEST_MATCH = '';

export const SORT_HELP_WANTED_ISSUES = 'help-wanted-issues';

export type Sort = SORT_STARS | SORT_UPDATED  | SORT_BEST_MATCH | SORT_HELP_WANTED_ISSUES | SORT_FORKS;

export type Owner = {}

export type Repository = {
    archive_url: string,
    archived: boolean,
    assignees_url:string,
    blobs_url: string,
    branches_url: string,
    clone_url: string,
    collaborators_url: string,
    comments_url: string,
    commits_url: string,
    compare_url: string,
    contents_url: string,
    contributors_url: string,
    created_at: string,
    default_branch:string,
    deployments_url:string,
    description: string,
    disabled:boolean,
    downloads_url: string,
    events_url: string,
    fork: boolean,
    forks: number,
    forks_count: number,
    forks_url: string,
    full_name: string,
    git_commits_url: string,
    git_refs_url: string,
    git_tags_url: string,
    git_url: string,
    has_downloads: boolean,
    has_issues: boolean,
    has_pages: boolean,
    has_projects: boolean,
    has_wiki: boolean,
    homepage: string,
    hooks_url: string,
    html_url: string,
    id: number,
    issue_comment_url: string,
    issue_events_url: string,
    issues_url: string,
    keys_url: string,
    labels_url: string,
    language: string,
    languages_url: string,
    license?: string,
    merges_url: string,
    milestones_url: string,
    mirror_url?: string,
    name: string,
    node_id: string,
    notifications_url: string,
    open_issues: 1
    open_issues_count: 1
    owner: Owner,
    private: boolean,
    pulls_url: string,
    pushed_at: string,
    releases_url: string,
    score: 1
    size: 952
    ssh_url: string,
    stargazers_count: 110
    stargazers_url: string,
    statuses_url: string,
    subscribers_url: string,
    subscription_url: string,
    svn_url: string,
    tags_url: string,
    teams_url: string,
    trees_url: string,
    updated_at: string,
    url: string,
    watchers: 110
    watchers_count: 110
}

export type RepositoriesSearchResult = {
    total_count:number,
    incomplete_results:boolean,
    items:Array<Repository>
}

export const search = (query: string, sort: Sort = SORT_BEST_MATCH, order: Order = ORDER_DESC): Request => `/search/repositories?q=${query}&sort=${sort}&order=${order}`;