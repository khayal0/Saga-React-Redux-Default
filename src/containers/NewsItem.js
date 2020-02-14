import React from "react";
import { connect } from "react-redux";
import "../styles/NewsItem.css";

let NewsItem = ({ news }) =>
  news
    ? news.map(article => (
        <div className="container">
          <article>
            <h4>{article.title}</h4>
            <img alt="" src={article.urlToImage} />
            <h4>{article.description}</h4>
            <a href={article.url}>Read More</a>
          </article>
        </div>
      ))
    : null;
const mapStateToProps = state => ({
  news: state.news
});
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
