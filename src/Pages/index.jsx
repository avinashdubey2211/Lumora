import React from "react";
import Hero from "../Component/Hero";
import Categories from "../Component/Categories";
import TrendingProducts from "../Component/TrendingProducts";
import SpecialOffers from "../Component/SpecialOffers";
import Testimonials from "../Component/Testimonials";
import FAQ from "../Component/FAQ";
import OurServices from "../Component/OurServices";

const Pages = () => {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingProducts />
      <SpecialOffers />
      <Testimonials />
      <FAQ />
      <OurServices />
    </>
  );
};

export default Pages;
