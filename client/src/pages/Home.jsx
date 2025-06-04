import React from "react";
import { HomeSlider } from "../components/home/HomeSlider";
import ProductCategoryHome from "../components/home/ProductCategoryHome";
import FreeShippingOffer from "../components/home/FreeShippingOffer";
import ProuuctSuggestionBanner from "../components/home/ProuuctSuggestionBanner";
import BigDealsBanners from "../components/home/BigDealsBanners";

const Home = () => {
  return (
    <main className="max-w-screen mx-auto px-4 md:px-6 lg:px-8">
      {/* hero image slider*/}
      <section className="  mt-3 h-auto rounded-xl ">
        <HomeSlider />
      </section>
      {/* product category slider */}
      <section>
        <ProductCategoryHome />
      </section>
      {/* free shipping bar  */}
      <section>
        <FreeShippingOffer />
      </section>

      <section>
        <BigDealsBanners />
      </section>
      {/* product banner  */}
      <section>
        <ProuuctSuggestionBanner />
      </section>
    </main>
  );
};

export default Home;
