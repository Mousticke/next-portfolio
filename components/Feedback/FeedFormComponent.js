import {
  FeedForm,
  FeedFormContainer,
  FeedInput,
  FeedSendButton,
  NewFeedContainer,
  NewFeedMessageContainer,
  NewFeedStatusInfo,
  NewFeedUserContainer,
} from "./FeedFormComponent.styles";
import StarRating from "./StarRating";
import { FeedbackContext } from "context/FeedbackContext";
import { useContext } from "react";
import returnButton from "@/public/assets/utils/returnButton.svg";
import Image from "next/image";

function FeedFormComponent() {
  const {
    handleChange,
    txStatus,
    formData,
    setFormData,
    hoverRating,
    setHoverRating,
    createFeed,
  } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createFeed();
  };

  return (
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
              <Image
                src={returnButton}
                layout="fixed"
                width={20}
                height={20}
                alt="Enter Button"
              />
            </FeedSendButton>
          </NewFeedMessageContainer>

          <NewFeedStatusInfo id="status">{txStatus}</NewFeedStatusInfo>
        </NewFeedContainer>
      </FeedForm>
    </FeedFormContainer>
  );
}

export default FeedFormComponent;
