import React from 'react';
import { Link } from 'react-router-dom';
import PATH from '../routes/path';

interface ArticlePreviewProps {
  slug: string;
  author: {
    userName: string;
    profileSrc: string;
  };
}

export default function ArticlePreview({ slug, author }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`${PATH.PROFILE}/${author.userName}`}>
          <img src={author.profileSrc} alt="" />
        </Link>
        <div className="info">
          <Link to={`${PATH.PROFILE}/${author.userName}`} className="author">
            Eric Simons
          </Link>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <Link to={`${PATH.ARTICLE}/${slug}`} className="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
