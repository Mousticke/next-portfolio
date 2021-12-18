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

//TODO - Resume like experiences
//TODO - About me
//TODO - Projects
//TODO - e2e Cypress
//TODO - Review / last Refactor
//TODO - Git push master + workflow
//TODO - margin-block-start: 0em; margin-block-end: 0em; margin-inline-start: 0px; margin-inline-end: 0px;
//TODO - site url in process env
//TODO - next sitemap

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <SEO />
        <Landing />
        <About />
        <Experience />
        <Project />
        <Contact />
      </Layout>
      <SocialMedia />
      <CustomRight />
    </>
  );
}
