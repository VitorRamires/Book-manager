import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalBox = styled(Dialog.Content)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 100%;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  max-height: 90%;
  overflow-y: auto;
  color: #263072;
  font-family: "Montserrat", Sans-serif;
`;

export const DialogDescription = styled(Dialog.Description)`
  margin-top: 10px;
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  border: 2px solid #bbb;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s;
  background: none;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  margin-top: 35px;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color:rgb(235, 235, 235);
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: regular;
    transition: 0.2s;
    font-size: 1.05rem;

    &:hover {
      background-color: rgb(199, 199, 199);
    }

    &:disabled {
      background-color: rgb(235, 235, 235);
      color: rgb(196, 196, 196);
      cursor: not-allowed;
    }

    &:last-child {
      background-color: #ff4848;
      color: #ffffff;
      transition: 0.2s;

      &:hover {
        background-color: #fd0000;
      }
    }
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  color: #263072;

  &.alert {
    color: red;
  }
`;

export const BookList = styled.ul`
  list-style-position: inside;
  margin-top: 35px;

  li {
    margin-top: 8px;
  }
`;
