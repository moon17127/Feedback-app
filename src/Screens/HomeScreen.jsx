import React from 'react';
import Banner from '../components/Banner';
import TrendingMovies from '../components/TrendingMovies';
import Promos from '../components/Promos';
import TopRated from '../components/TopRated';
import Layout from '../Layout/Layout';

function HomeScreen() {
  return (
    <Layout>
      <div className=" container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <TrendingMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen;
