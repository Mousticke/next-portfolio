import { CustomRight, SEO, SocialMedia, Something } from "@/components";
import Layout from "Layout/Layout";

function FeedBack() {
  return (
    <>
      <Layout>
        <SEO page="/feedback" />
      </Layout>
      <SocialMedia />
      <CustomRight />
    </>
  );
}

export default FeedBack;
