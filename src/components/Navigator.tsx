import React from 'react';
import { Link } from 'react-router-dom';
import NavigatorItem from './NavigatorItem';

export default function Navigator() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <NavigatorItem href="/">Home</NavigatorItem>
          <NavigatorItem href="/article">New Post</NavigatorItem>
          <NavigatorItem href="/settings">Settings</NavigatorItem>
          <NavigatorItem href="/login">Sign in</NavigatorItem>
          <NavigatorItem href="/register">Sign up</NavigatorItem>
        </ul>
      </div>
    </nav>
  );
}
