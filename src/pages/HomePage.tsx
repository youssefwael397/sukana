import React from 'react';
import Header from '../components/Header/Header';
import ExploreSection from '../components/ExploreSection/ExploreSection';
import AboutSection from '../components/AboutSection/AboutSection';
import AdvertiseSection from '../components/AdvertiseSection/AdvertiseSection';
import HelpSection from '../components/HelpSection/HelpSection';
import RecentlyViewed from '../components/RecentlyViewed/RecentlyViewed';
import NewlyListedHomes from '../components/NewlyListedHomes/NewlyListedHomes';
import { useSelector } from 'react-redux';
import { RootState } from '../api/store';

const HomePage: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <Header />
      {isLoggedIn && <RecentlyViewed />}
      <ExploreSection />
      {isLoggedIn && <NewlyListedHomes />}
      <AboutSection />
      <AdvertiseSection />
      <HelpSection />
    </div>
  );
};

export default HomePage;
