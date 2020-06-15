export const ORDER_DESC = 'desc';
export const ORDER_ASC = 'asc';
export const SORT_STARS = 'stars';
export const SORT_FORKS = 'forks';
export const SORT_UPDATED = 'updated';
export const SORT_BEST_MATCH = '';
export const SORT_HELP_WANTED_ISSUES = 'help-wanted-issues';

export const search = (query, sort = SORT_BEST_MATCH, order = ORDER_DESC) => `/search/repositories?q=${query}&sort=${sort}&order=${order}`;