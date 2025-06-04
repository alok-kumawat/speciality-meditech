// src/pages/AboutPage.jsx
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CompanyTimeline from "../components/about/CompanyTimeline";
import TeamSection from "../components/about/TeamSection";
import Certificates from "../components/home/Certificates";
import Testimonials from "../components/home/Testimonials";

const About = () => (
  <>
    <AboutHero />
    <AboutIntro />
    <Stats />
    <WhyChooseUs />
    <CompanyTimeline />
    <TeamSection />
    <Certificates />
    <Testimonials />
  </>
);

export default About;
