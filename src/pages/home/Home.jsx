import React from "react";
import Hero from "../../components/hero/Hero";
import StatsCounter from "./components/statscounter/StatsCounter";
import ServicesOverview from "./components/Servicesoverview/ServicesOverview";
import Offer from "./components/offer/Offer";
import FeaturedStaff from "./components/staff/FeaturedStaff";
import Testimonials from "./components/testimonials/Testimonials";
import Action from "./components/action/Action";

function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServicesOverview />
      <Offer/>
      <FeaturedStaff/>
      <Testimonials/>
      <Action/>
    </>
  );
}

export default Home;
