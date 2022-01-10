import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";

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
  margin-block-end: 10px;
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
  border-radius: 4px 4px 4px 0;
  margin-block-end: 5px;
  padding: 5px 10px;
  background: rgb(19 37 65 / 48%);
  box-shadow: 0 4px 8px rgb(0 0 0 / 80%);
  border: 1px solid rgb(6 7 12 / 74%);
}


`;

export const MessageMetaData = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  width: 100%;
  margin-block-end: 5px;
  .message__user-date {
    display: flex;
    flex-direction: column;
  }
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
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }
  @media ${breakpoints.media_screens.landscape_tablet} {
    .message__user-date {
      flex-direction: row;
    }
    .date {
      justify-content: flex-end;
    }
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
