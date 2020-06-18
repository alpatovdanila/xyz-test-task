import * as React from "react";
import {Link} from "../../ui/link";
import {SORT_BEST_MATCH, SORT_FORKS, SORT_STARS, SORT_UPDATED, SORT_HELP_WANTED_ISSUES, ORDER_ASC, ORDER_DESC} from '../../model/search';
import {useSearchUrl} from "../../routing/useSearchUrl";
import {Flex, FlexItem} from "../../ui/layout";


const sortOptions = [
    {label: 'Best match', sort: SORT_BEST_MATCH},
    {label: '«Help wanted» issues', sort: SORT_HELP_WANTED_ISSUES},
    {label: 'Updated', sort: SORT_UPDATED},
    {label: 'Stars', sort: SORT_STARS},
    {label: 'Forks', sort: SORT_FORKS},
];

const invertedOrder = order => order === ORDER_DESC ? ORDER_ASC : ORDER_DESC

const orderArrow = (order) => (order === ORDER_DESC) ? '🠗' : '↑';

export const SortSelect = ({sort, onSortSelect, order, onOrderSelect}) => {


    const handleSortSelect = (sortOption) => {
        if (sort === sortOption.sort) {
            onOrderSelect(invertedOrder(order));
        } else {
            onSortSelect(sortOption.sort);
        }
    };

    return (
        <Flex spacing={16}>
            {sortOptions.map(option => (
                <FlexItem key={option.label}>
                    <Link onClick={() => handleSortSelect(option)}>
                        {sort === option.sort && <b>{option.label}</b>}
                        {sort !== option.sort && option.label}
                        {sort === option.sort && orderArrow(order)}
                    </Link>
                </FlexItem>
            ))}
        </Flex>

    )
};
