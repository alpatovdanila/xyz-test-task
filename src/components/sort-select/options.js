//@flow

import {sorts} from "../../api/endpoints/repositories";

const {SORT_BEST_MATCH, SORT_FORKS, SORT_HELP_WANTED_ISSUES, SORT_STARS, SORT_UPDATED} = sorts;

export const sortOptions = [
    {label: 'Best match', sort: SORT_BEST_MATCH},
    {label: '«Help wanted» issues', sort: SORT_HELP_WANTED_ISSUES},
    {label: 'Updated', sort: SORT_UPDATED},
    {label: 'Stars', sort: SORT_STARS},
    {label: 'Forks', sort: SORT_FORKS},
];