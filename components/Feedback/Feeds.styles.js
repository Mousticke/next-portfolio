import styled from "styled-components";

export const FeedbackContainer = styled.section`
  max-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  background-color: rgb(15 26 50 / 28%);
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
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }

  .date {
    margin-inline-start: 15px;
  }
`;

export const FeedMessage = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
`;

export const UpToDate = styled.div`
  text-align: center;
  margin-block-start: 1.25rem;
`;

export const FeedFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  margin-block-start: 2rem;
`;

export const FeedForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding: 1rem 1.5rem;
  border-color: rgb(96 165 250 / 1);
  box-shadow: 10px 10px 15px 10px rgb(0 0 0 / 10%),
    0 10px 10px 10px rgb(0 0 0 / 10%);
`;

export const NewFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const FeedInput = styled.input`
  all: unset;
  flex-grow: 1;
  outline: none;
  min-height: 20px;
  box-sizing: border-box;
  background: transparent;
  color: white;
  text-align: right;

  cursor: text;
  & > ::placeholder {
    color: rgb(107 114 128 / 1);
  }
`;

export const NewFeedMessageContainer = styled.div`
  display: flex;
  background-color: hsl(215deg 69% 14% / 69%);
  border-radius: 4px;
  margin: 6px;
  padding: 8px;
`;

export const NewFeedUserContainer = styled.div`
  display: flex;
  background-color: hsl(215deg 69% 14% / 69%);
  border-radius: 4px;
  margin: 6px;
  padding: 8px;
`;

export const FeedSendButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  & > svg {
    margin: 4px;
  }
`;

export const NewFeedStatusInfo = styled.p`
  display: flex;
  justify-content: flex-end;
  & > span {
    text-align: right;
    & > a {
      justify-content: flex-end;
      color: ${(props) => props.theme.colors.text_secondary};
      cursor: pointer;
    }
  }
`;
