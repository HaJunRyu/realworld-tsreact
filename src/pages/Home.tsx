import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import realworldApis from '../apis/realworldApi';
import ArticlePreview from '../components/ArticlePreview';
import PageNation from '../components/PageNation';
import { Article } from '../types/Article';

export default function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    const getArticles = async () => {
      const { articles } = await realworldApis.getArticles({ limit: 10 });

      console.log(articles);

      setArticles(articles);
    };

    getArticles();
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/">
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Global Feed
                  </Link>
                </li>
              </ul>
              {articles.length === 0 && 'Loading...'}
            </div>

            {articles.map(article => (
              <ArticlePreview key={article.slug} article={article} />
            ))}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <Link to="" className="tag-pill tag-default">
                  programming
                </Link>
                <Link to="" className="tag-pill tag-default">
                  javascript
                </Link>
                <Link to="" className="tag-pill tag-default">
                  emberjs
                </Link>
                <Link to="" className="tag-pill tag-default">
                  angularjs
                </Link>
                <Link to="" className="tag-pill tag-default">
                  react
                </Link>
                <Link to="" className="tag-pill tag-default">
                  mean
                </Link>
                <Link to="" className="tag-pill tag-default">
                  node
                </Link>
                <Link to="" className="tag-pill tag-default">
                  rails
                </Link>
              </div>
            </div>
          </div>
        </div>
        <PageNation />
      </div>
    </div>
  );
}
