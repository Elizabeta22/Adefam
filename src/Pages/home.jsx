import React from "react";
import Hero from "../Components/home/cero";
import Courses from "../Components/home/courses";
import Testimonials from "../Components/home/testimonials";
import Partners from "../Components/home/partners";
import CTA from "../Components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
};

export default Home;