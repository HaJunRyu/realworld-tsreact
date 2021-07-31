import React from 'react';

interface PageNationItemProps {
  isCurrentPage: boolean;
  children: React.ReactNode;
}

export default function PageNationItem({ isCurrentPage, children }: PageNationItemProps) {
  return (
    <li className={`page-item ${isCurrentPage && 'active'}`}>
      <button className="page-link">{children}</button>
    </li>
  );
}
