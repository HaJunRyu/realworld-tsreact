import React from 'react';
import { Link } from 'react-router-dom';

interface NavigatorItemProps {
  children: React.ReactNode;
  href: string;
}

export default function NavigatorItem({ children, href }: NavigatorItemProps) {
  return (
    <li className="nav-item">
      <Link to={href} className="nav-link active">
        {children}
      </Link>
    </li>
  );
}
