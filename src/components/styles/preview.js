import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";


export const DialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  background-color: transparent;
`;

export const ItemModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 25px 0;
  padding: 10px 15px;
  border-radius: 5px;

  h3 {
    font-family: "Montserrat", Sans-serif;
    font-size: 1.1rem;
    font-weight: normal;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  margin-bottom: 25px;
`;

export const ViewInfo = styled.div`
  margin: 10px 0;

  div:nth-child(odd) {
    background-color: #f2f9fc;
  }

  div:nth-child(even) {
    background-color: #e5f3fa;
  }
`;

export const ViewInfoDinamic = styled(ViewInfo).withConfig({
  shouldForwardProp: (prop) => prop !== "autoPermission",
})`
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 35px;

  button {
    width: 100px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #ff4848;
    transition: 0.2s;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: regular;
    font-size: 1.05rem;

    &:hover {
      background-color: #fd0000;
    }
  }
`;
