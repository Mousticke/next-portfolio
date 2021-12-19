import Layout from "../Layout/Layout";
import {
  Header,
  CustomRight,
  SocialMedia,
  Landing,
  About,
  Contact,
  Experience,
  Project,
  SEO,
} from "@/components";
import { useRef, useEffect } from "react";
import scrollConfig from "@/config/scrollConfig";

//TODO - Resume like experiences
//TODO - About me
//TODO - Projects
//TODO - e2e Cypress
//TODO - Review / last Refactor
//TODO - Git push master + workflow

export default function Home() {
  const revealAboutContainer = useRef(null);
  const revealExperienceContainer = useRef(null);
  const revealProjectContainer = useRef(null);
  const revealContactContainer = useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default;
      if (revealAboutContainer.current) {
        sr().reveal(revealAboutContainer.current, scrollConfig());
      }

      if (revealExperienceContainer.current) {
        sr().reveal(revealExperienceContainer.current, scrollConfig());
      }

      if (revealProjectContainer.current) {
        sr().reveal(revealProjectContainer.current, scrollConfig());
      }

      if (revealContactContainer.current) {
        sr().reveal(revealContactContainer.current, scrollConfig());
      }
    }
    animate();
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <SEO />
        <Landing id="home" />
        <About id="about" ref={revealAboutContainer} />
        <Experience id="experience" ref={revealExperienceContainer} />
        <Project id="projects" ref={revealProjectContainer} />
        <Contact id="contact" ref={revealContactContainer} />
      </Layout>
      <SocialMedia />
      <CustomRight />
    </>
  );
}
