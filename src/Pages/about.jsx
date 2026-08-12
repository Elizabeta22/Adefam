import React from 'react'
import AboutHero from "../Components/about/abouthero";
import OurStory from "../Components/about/ourstory";
import MissionVision from "../Components/about/missionvision";
import Team from "../Components/about/team";
import OurTarget from '../Components/about/ourtarget';

const About = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurTarget />
      <Team />
    </>
  );
};

export default About;