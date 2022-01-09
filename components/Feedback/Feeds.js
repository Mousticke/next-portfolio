import { FeedbackContext } from "context/FeedbackContext";
import { create } from "lodash";
import { useContext } from "react";
import {
  FeedbackContainer,
  FeedForm,
  FeedFormContainer,
  FeedInput,
  FeedSendButton,
  NewFeedContainer,
  NewFeedMessageContainer,
  NewFeedStatusInfo,
  NewFeedUserContainer,
} from "./Feeds.styles";
import StarRating from "./StarRating";

function Feeds() {
  const {
    feeds,
    isLoadingFeeds,
    handleChange,
    txStatus,
    createFeed,
    formData,
    setFormData,
    hoverRating,
    setHoverRating,
  } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createFeed();
  };

  return (
    <FeedbackContainer>
      {isLoadingFeeds && <p>Loading...</p>}
      {JSON.stringify(feeds)}
      <FeedFormContainer>
        <FeedForm>
          <StarRating
            rating={formData.rate}
            setFormData={setFormData}
            hoverRating={hoverRating}
            setHoverRating={setHoverRating}
          />
          <NewFeedContainer>
            <NewFeedUserContainer>
              <FeedInput
                value={formData.user}
                type="text"
                required
                placeholder="Username. (5 characters minimum)"
                onChange={(e) => handleChange(e, "user")}
              />
            </NewFeedUserContainer>

            <NewFeedMessageContainer>
              <FeedInput
                value={formData.message}
                type="text"
                required
                placeholder="Feedback. (10 characters minimum)"
                onChange={(e) => handleChange(e, "message")}
              />
              <FeedSendButton id="publish" onClick={handleSubmit}>
                <svg
                  aria-hidden="true"
                  role="img"
                  className="mvc-input-text-send-icon iconify iconify--fluent"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                  style={{ color: "white" }}
                >
                  <g fill="none">
                    <path
                      d="M4.641 12.5l2.873 2.704a.75.75 0 0 1-1.028 1.092l-4.25-4a.75.75 0 0 1 0-1.092l4.25-4a.75.75 0 1 1 1.028 1.092L4.641 11H14.75a1.75 1.75 0 0 0 1.75-1.75v-4.5a.75.75 0 0 1 1.5 0v4.5a3.25 3.25 0 0 1-3.25 3.25H4.641z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </FeedSendButton>
            </NewFeedMessageContainer>

            <NewFeedStatusInfo id="status">{txStatus}</NewFeedStatusInfo>
          </NewFeedContainer>
        </FeedForm>
      </FeedFormContainer>
    </FeedbackContainer>
  );
}

export default Feeds;
