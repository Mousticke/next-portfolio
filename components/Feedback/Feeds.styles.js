import styled from "styled-components";

export const FeedbackContainer = styled.section`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  background-color: rgb(15 26 50 / 28%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
`;

export const FeedFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
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
