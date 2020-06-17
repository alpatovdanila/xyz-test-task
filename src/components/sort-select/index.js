//@flow
import * as React from "react";
import styled, {type StyledComponent} from 'styled-components';
import {Link} from "../../ui/link";
import {orders} from "../../api/constants";
import {sortOptions} from "./options";
import {useSearchUrl} from "../../routing/useSearchUrl";

const orderArrow = (order) => (order === orders.ORDER_DESC) ? '🠗' : '↑';

type Props = {
    sort:string,
    order:string,
    onSortSelect: (sort:string)=>void,
    onOrderSelect: (order:string)=>void;
}

export const SortSelect = () => {
    const {sort, setSort, order, setOrder} = useSearchUrl();
    const handleSortSelect = (sortOption) => {
        if (sort === sortOption.sort) {
            setOrder(order === orders.ORDER_DESC ? orders.ORDER_ASC : orders.ORDER_DESC);
        } else {
            setSort(sortOption.sort);
        }
    };

    return (
        <SortSelectList>
            {sortOptions.map(option => (
                <SortSelectOption key={option.label}>
                    <Link onClick={() => handleSortSelect(option)}>
                        {option.label}
                        {sort === option.sort && order && orderArrow(order)}
                    </Link>
                </SortSelectOption>
            ))}
        </SortSelectList>

    )
};

const SortSelectList : StyledComponent<{}, empty, HTMLUlElement> = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
`;

const SortSelectOption : StyledComponent<{}, empty, HTMLLiElement> = styled.li`
    &:not(:last-child){
        margin-right:8px;
    }
`;