import React from 'react';
import { Link } from 'react-router-dom';
import PATH from '../routes/path';
import { Article } from '../types/Article';
import { convertDate } from '../utils';

interface ArticlePreviewProps {
  article: Article;
}

export default function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`${PATH.PROFILE}/${article.author.username}`}>
          <img src={article.author.image} alt="" />
        </Link>
        <div className="info">
          <Link to={`${PATH.PROFILE}/${article.author.username}`} className="author">
            {article.author.username}
          </Link>
          <span className="date">{convertDate(article.createdAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link to={`${PATH.ARTICLE}/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
