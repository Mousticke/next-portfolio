import Head from "next/head";
import Layout from "../Layout/Layout";
import { Header, CustomRight, SocialMedia, Landing } from "@/components";

//TODO - SEO
//TODO - Contact form
//TODO - Resume like experiences
//TODO - About me
//TODO - Projects
//TODO - PWA
//TODO - e2e Cypress
//TODO - Review / last Refactor
//TODO - Git push master + workflow

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Head>
          <title>Akim Benchiha</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Akim's Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
      </Layout>
      <SocialMedia />
      <CustomRight />
    </>
  );
}
