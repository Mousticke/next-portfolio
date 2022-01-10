import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  AvatarFeed,
  FeedMessage,
  FeedMessageContainer,
  MessageMetaData,
  PostedFeed,
  PostedFeeds,
  UpToDate,
} from "./Feeds.styles";
import avatarSvg from "@/public/assets/utils/avatar.svg";

function PostedFeedsComponent({ feeds }) {
  const endOfMessageRef = useRef(null);

  useEffect(() => {
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [feeds]);

  return (
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
  );
}

export default React.memo(PostedFeedsComponent);
