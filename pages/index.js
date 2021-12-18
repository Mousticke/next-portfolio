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
