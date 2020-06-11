// @flow
import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Link} from '../../atoms/link';

type Props = {
    pagesCount: number,
    currentPage: number,
    onPageClick?: (page: number)=>void,
}

export const Paginator = ({pagesCount, onPageClick, currentPage}: Props) => {
    const pages = useMemo(() => Array.from({length: pagesCount}, (_, i) => i + 1), [pagesCount]);

    const handlePageClick = (page, e) => {
        e.preventDefault();
        onPageClick && onPageClick(page);
    };

    return <PaginatorContainer>
        {pages.map(page => (
            <PaginatorItem key={page}>
                {(page === currentPage) && <span>{page}</span>}
                {page !== currentPage && <Link onClick={(e) => handlePageClick(page, e)}>{page}</Link>}
            </PaginatorItem>
        ))}
    </PaginatorContainer>
};

const PaginatorContainer = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    padding:0;
    margin:0;
    flex-wrap:wrap;
`;

const PaginatorItem = styled.li`
    &:not(:last-child){
        margin-right:16px;
    }
`;