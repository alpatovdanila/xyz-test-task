import * as React from "react";
import styled from 'styled-components';
import {Link} from "../../ui/link";
import {ORDER_ASC,ORDER_DESC} from "../../api/constants";
import {sortOptions} from "./options";


const orderArrow = (order) => (order === ORDER_DESC) ? '🠗' : '↑';

export const SortSelect = ({sort, order, onSortSelect, onOrderSelect}) => {

    const handleSortSelect = (sortOption) => {
        if (sort === sortOption.sort) {
            onOrderSelect(order === ORDER_DESC ? ORDER_ASC : ORDER_DESC);
        } else {
            onSortSelect(sortOption.sort);
        }
    };

    return (
        <SortSelectList>
            {sortOptions.map(option => (
                <SortSelectOption>
                    <Link key={option.label} onClick={() => handleSortSelect(option)}>
                        {option.label}
                        {sort === option.sort && order && orderArrow(order)}
                    </Link>
                </SortSelectOption>
            ))}
        </SortSelectList>

    )
};

const SortSelectList = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
`;

const SortSelectOption = styled.li`
    &:not(:last-child){
        margin-right:8px;
    }
`;