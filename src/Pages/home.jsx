import React from "react";
import Hero from "../Components/home/Hero";
import Courses from "../Components/home/Courses";
import Testimonials from "../Components/home/Testimonials";
import Partners from "../Components/home/Partners";
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