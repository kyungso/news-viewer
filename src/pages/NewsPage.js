import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    const category = match.params.category === 'news-viewer' ? 'all' : match.params.category;
    return (
      <>
        <Categories />
        <NewsList category={category} />
      </>
    );
};

export default NewsPage;