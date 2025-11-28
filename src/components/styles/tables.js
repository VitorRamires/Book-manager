import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogTrigger = styled(Dialog.Trigger)`
  width: 200px;
  max-width: 100%;
  font-size: 1.5rem;
  height: 60px;
  background-color: #199fe3;
  color: #ffff;
  outline: none;
  border: none;
  padding: 0 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Montserrat", Sans-serif;
  -webkit-box-shadow: 0 0 0 0.35em transparent;
  box-shadow: 0 0 0 0.35em transparent;

  @media screen and (max-width: 377px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.3rem;
  }

  &:hover {
    animation: hoverBtn 1s;
    -webkit-animation: hoverBtn 1s;
    animation: hoverBtn 1s;
  }
  span {
    font-size: 2rem;
    transition: 0.2s;
  }
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
    background-color: #47afca;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: regular;
    transition: 0.2s;
    font-size: 1.05rem;

    &:hover {
      background-color: #0abdec;
    }
  }

  button:last-child {
    background-color: #34798a;
    transition: 0.1s;
    border: 1px solid #2c6d7d;

    &:hover {
      background-color: #2c6d7d;
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  height: 620px;
  padding: 30px;
  background-color: #f0f0f0;
  box-shadow: 0 0 15px 1px #0000003b;
  border-radius: 10px;
`;

export const TableBox = styled.table`
  width: 100%;
  font-family: "Montserrat", Sans-serif;

  @media screen and (max-width: 900px) {
    width: 800px;
  }

  table,
  th,
  td {
    text-align: start;
    padding: 5px;
  }

  thead tr {
    background-color: #d7d6d6;
    font-size: 1.1rem;
    color: black;
  }

  tr {
    width: 100%;
    font-size: 0.9rem;
  }

  tbody {
    border-top: 15px solid #e1eff6;
  }

  tbody tr {
    color: #3b3b3b;
  }

  tbody tr:nth-child(odd) {
    background-color: #99d1f9;
  }

  tbody tr:nth-child(even) {
    background-color: #c1e5f7;
  }

  td {
    padding: 10px;
    position: relative;
  }
`;

export const Actions = styled.td`
  display: flex;
  align-items: stretch;
  justify-content: start;
  gap: 20px;

  img {
    width: 25px;
    height: 25px;
    transition: 0.1s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const AlreadyCreated = styled.p`
  margin-top: 20px;
  font-size: 0.95rem;
  color: #ff5858;
`;

export const InputFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 0 15px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.2s;
  box-shadow: 0 0 15px 1px #0000003b;

  &:focus-within {
    border-color: #199fe3;
    box-shadow: 0 4px 4px 0 rgba(43, 43, 43, 0.19);

    img {
      width: 25px;
    }
  }

  input {
    background-color: transparent;
    width: 100%;
    margin: 0;
  }

  img {
    width: 20px;
    height: auto;
    transition: 0.2s;
  }
`;

export const SortButton = styled.button`
  max-width: 100%;
  padding: 10px 5px;
  color: #ffffff;
  margin: 15px 15px 0 0;
  cursor: pointer;
  font-family: "Montserrat";
  color: black;
  transition: 0.2s;

  &:hover {
    background-color: #e2e2e2;
  }
`;
