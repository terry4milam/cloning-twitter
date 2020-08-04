import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 4vh;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: scroll;
`;

export const ModalContent = styled.div`
  position: relative;
  margin: auto;
  width: 40%;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  @media(max-width: 768px) {
    width: 80%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 8px;
  border-bottom: 1px solid rgb(204, 214, 221);
  h2 {
    margin-bottom: 0;
    font-size: 19px;
    font-weight: 800;
  }
`;

export const CloseButton = styled.button`
  display: inline-flex;
  color: rgb(29, 161, 242);
  background-color: transparent;
  font-size: 33px;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
export const Button = styled.button`
  background-color: rgb(29, 161, 242);
  color: rgb(255, 255, 255);
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    background-color: rgb(26, 145, 218);
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const ModalBody = styled.div`
  padding: ${(props) => props.padding};
`;

export const Flex = styled.div`
  display: flex;
  div {
    margin-right: 8px;
  }
  textarea {
    width: 100%;
    outline: none;
    border: none;
    resize: none;
    font-size: 16px;
    font-weight: 500;
    color: rgb(0, 0, 0);
  }
`;