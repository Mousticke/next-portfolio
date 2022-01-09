import { CustomRight, Feeds, SEO, SocialMedia } from "@/components";
import { FeedbackProvider } from "context/FeedbackContext";
import Layout from "Layout/Layout";

function FeedBack() {
  return (
    <FeedbackProvider>
      <Layout>
        <SEO page="/feedback" />
        <Feeds />
      </Layout>
      <SocialMedia />
      <CustomRight />
    </FeedbackProvider>
  );
}

export default FeedBack;
