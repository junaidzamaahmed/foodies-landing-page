import React from "react";
import ChefBanner from "./ChefBanner/ChefBanner";
import DeliciousPasta from "./DeliciousPasta/DeliciousPasta";
import "./Home.css";
import OurMenu from "./OurMenu/OurMenu";
import OurStatistic from "./OurStatistic/OurStatistic";
import PackageMenu from "./PackageMenu/PackageMenu";
import PopularBanner from "./PopularBanner/PopularBanner";
import SubscribeBanner from "./SubscribeBanner/SubscribeBanner";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <>
      <TopBanner />
      <PopularBanner />
      <OurStatistic />
      <OurMenu />
      <DeliciousPasta />
      <PackageMenu />
      <ChefBanner />
      <SubscribeBanner />
    </>
  );
};

export default Home;
