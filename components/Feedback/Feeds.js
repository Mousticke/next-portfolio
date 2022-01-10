import { FeedbackContext } from "context/FeedbackContext";

import { useContext } from "react";
import FeedFormComponent from "./FeedFormComponent";
import { FeedbackContainer } from "./Feeds.styles";
import PostedFeedsComponent from "./PostedFeedsComponent";
function Feeds() {
  const { feeds, isLoadingFeeds } = useContext(FeedbackContext);

  return (
    <FeedbackContainer>
      {isLoadingFeeds && <p>Loading...</p>}
      <PostedFeedsComponent feeds={feeds} />
      <FeedFormComponent />
    </FeedbackContainer>
  );
}

export default Feeds;
