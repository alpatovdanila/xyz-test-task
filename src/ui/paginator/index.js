
import * as React from 'react';
import {Link} from '../link';
import {Flex, FlexItem} from "../layout";



export const Paginator = ({pagesCount, onPageClick, currentPage}) => {
    const pages = React.useMemo(() => Array.from({length: pagesCount}, (_, i) => i + 1), [pagesCount]);

    const handlePageClick = (page, e) => {
        e.preventDefault();
        onPageClick && onPageClick(page);
    };

    return <Flex valignCenter spacing={16}>
        {pages.map(page => (
            <FlexItem key={page}>
                {(page === currentPage) && <span>{page}</span>}
                {page !== currentPage && <Link onClick={(e) => handlePageClick(page, e)}>{page}</Link>}
            </FlexItem>
        ))}
    </Flex>
};
