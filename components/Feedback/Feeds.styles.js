import styled from "styled-components";

export const FeedbackContainer = styled.section`
  max-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
`;

export const PostedFeeds = styled.article`
  display: flex;
  flex-direction: column;
  height: 70vh;
  padding: 0 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export const PostedFeed = styled.div`
  display: flex;
  margin-block-start: 8px;
  align-items: flex-end;
`;

export const AvatarFeed = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  display: grid;
  place-items: center;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 0 3px 3px #17eb7d;
  & > svg {
    opacity: 1;
    padding-top: 3px;
  }
`;

export const FeedMessageContainer = styled.div`
  padding: 4px;
  font-size: 12px;
  line-height: 16px;
  word-break: break-word;
  white-space: break-spaces;
  background-color: rgba(19, 19, 19, 0.5);
  border-radius: 4px 4px 4px 0;
  margin-block-end: 5px;
  padding: 5px 30px;
`;

export const MessageMetaData = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  width: fit-content;
  margin-block-end: 5px;
  .user {
    margin-inline-end: 15px;
  }
  .star {
    margin-inline-start: 2px;

    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("/assets/stars/starOn.svg");
  }

  .date {
    margin-inline-start: 15px;
  }
`;

export const FeedMessage = styled.p`
  font-weight: 400;
  font-size: 15px;
`;

export const UpToDate = styled.div`
  text-align: center;
  margin-block-start: 1.25rem;
`;
