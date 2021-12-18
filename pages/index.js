import Head from "next/head";
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
        <Head>
          <title>Akim Benchiha</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
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
