import { FeedbackContext } from "context/FeedbackContext";
import { useContext, useState } from "react";
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

  return (
    <div>
      {isLoadingFeeds && <p>Loading...</p>}
      {JSON.stringify(feeds)}
      <div>
        <input
          value={formData.message}
          type="text"
          placeholder="Your feedback."
          onChange={(e) => handleChange(e, "message")}
        />
        <input
          value={formData.user}
          type="text"
          placeholder="Define the username."
          onChange={(e) => handleChange(e, "user")}
        />
        <StarRating
          rating={formData.rate}
          setFormData={setFormData}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <p id="status">{txStatus}</p>

        <button id="publish" onClick={createFeed}>
          Add Feedback
        </button>
      </div>
    </div>
  );
}

export default Feeds;
