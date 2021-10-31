import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner';
import MainTitle from './components/MainTitle';
import Showcase from './components/showcase/Showcase';
import PopularArticles from './components/popular-articles/PopularArticles';
import LatestStories from './components/latest-stories/LatestStories';

const App = () => (
  <>
    <Header />
    <Banner />
    <MainTitle />
    <Showcase />
    <PopularArticles />
    <LatestStories />
  </>
);

export default App;
