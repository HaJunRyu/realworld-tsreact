import React, { useState } from 'react';
import PageNationItem from './PageNationItem';

export default function PageNation() {
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCurrentPageHandler: React.MouseEventHandler<HTMLUListElement> = event => {
    const target = event.target as HTMLElement;
    if (!target.matches('.page-link')) return;
    const pageNumber = target.textContent as string;

    setCurrentPage(parseInt(pageNumber, 10));
  };

  return (
    <nav>
      <ul className="pagination" onClick={onChangeCurrentPageHandler}>
        {Array.from({ length: 50 }, (_, i) => i + 1).map(pageNumber => (
          <PageNationItem key={pageNumber} isCurrentPage={pageNumber === currentPage}>
            {pageNumber}
          </PageNationItem>
        ))}
      </ul>
    </nav>
  );
}
