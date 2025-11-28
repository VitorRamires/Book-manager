import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogDescription = styled(Dialog.Description)`
  margin-bottom: 5px;
`;

export const DialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  background-color: #fff;
  width: 50px;
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
    background-color: #adadad;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: regular;
    transition: 0.2s;
    font-size: 1.05rem;

    &:hover {
      background-color: #c7c7c7;
    }

    &:disabled {
      background-color: #ebebeb;
      color: #797979;
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
  font-size: 1.1rem;
  color: #263072;

  &.alert {
    display: block;
    color: red;
    margin-bottom: 10px;
  }
`;

export const BookList = styled.ul`
  list-style-position: inside;
  margin-top: 35px;

  li {
    margin-top: 8px;
  }
`;
