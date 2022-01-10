import { FeedbackContext } from "context/FeedbackContext";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import FeedFormComponent from "./FeedFormComponent";
import {
  AvatarFeed,
  FeedbackContainer,
  FeedMessage,
  FeedMessageContainer,
  MessageMetaData,
  PostedFeed,
  PostedFeeds,
  UpToDate,
} from "./Feeds.styles";
import avatarSvg from "@/public/assets/utils/avatar.svg";
function Feeds() {
  const { feeds, isLoadingFeeds } = useContext(FeedbackContext);

  const endOfMessageRef = useRef(null);

  useEffect(() => {
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [feeds]);

  return (
    <FeedbackContainer>
      {isLoadingFeeds && <p>Loading...</p>}
      <PostedFeeds>
        {feeds.map(({ user, message, rate, id, createdAt }) => (
          <PostedFeed key={id}>
            <AvatarFeed>
              <Image
                src={avatarSvg}
                layout="fixed"
                width={18}
                height={20}
                alt="Enter Button"
              />
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
      <FeedFormComponent />
    </FeedbackContainer>
  );
}

export default Feeds;
