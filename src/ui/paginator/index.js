// @flow
import * as React from 'react';
import {Link} from '../link';
import {Flex, FlexItem} from "../layout";

type Props = {
    pagesCount:number,
    onPageClick?:(number, Event)=>void,
    currentPage:number,
}

export const Paginator = ({pagesCount, onPageClick, currentPage}: Props) => {
    const pages = React.useMemo(() => Array.from({length: pagesCount > 100 ? 100 : pagesCount}, (_, i) => i + 1), [pagesCount]);

    const handlePageClick = (page, e) => {
        e.preventDefault();
        onPageClick && onPageClick(page, e);
    };

    return <Flex valignCenter spacing={16} wrap>
        {pages.map(page => (
            <FlexItem key={page}>
                {(page === currentPage) && <span>{page}</span>}
                {page !== currentPage && <Link onClick={(e) => handlePageClick(page, e)}>{page}</Link>}
            </FlexItem>
        ))}
    </Flex>
};
