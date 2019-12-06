import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <>
      <Route path="/news-viewer" exact={true} component={NewsPage} />
      <Route path="/:category?" component={NewsPage} />
    </>
  );
}

export default App;