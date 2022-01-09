import { FeedbackContext } from "context/FeedbackContext";
import { useContext, useEffect, useRef } from "react";
import {
  AvatarFeed,
  FeedbackContainer,
  FeedForm,
  FeedFormContainer,
  FeedInput,
  FeedMessage,
  FeedMessageContainer,
  FeedSendButton,
  MessageMetaData,
  NewFeedContainer,
  NewFeedMessageContainer,
  NewFeedStatusInfo,
  NewFeedUserContainer,
  PostedFeed,
  PostedFeeds,
  UpToDate,
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

  const endOfMessageRef = useRef(null);

  useEffect(() => {
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [feeds]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createFeed();
  };

  return (
    <FeedbackContainer>
      {isLoadingFeeds && <p>Loading...</p>}
      <PostedFeeds>
        {feeds.map(({ user, message, rate, id, createdAt }) => (
          <PostedFeed key={id}>
            <AvatarFeed>
              <svg
                aria-hidden="true"
                role="img"
                className="mvc-avatar-icon iconify iconify--fa-solid"
                width="18.38"
                height="21"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  fill="currentColor"
                ></path>
              </svg>
            </AvatarFeed>
            <FeedMessageContainer>
              <MessageMetaData>
                <span className="user">{user}</span>
                <span>-</span>
                <span className="date">{createdAt}</span>
                <div>
                  <span className="rate">Rated : {rate}</span>
                  <span className="star"></span>
                </div>
              </MessageMetaData>

              <FeedMessage>{message}</FeedMessage>
            </FeedMessageContainer>
          </PostedFeed>
        ))}
        <UpToDate ref={endOfMessageRef}>
          <p>You{"'"}re up to date 🎉</p>
        </UpToDate>
      </PostedFeeds>

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
