import { createGlobalStyle, styled } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

// Estilos globais para a aplicação
export const GlobalCss = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }


  @font-face {
    font-family: "Montserrat";
    src: url(../fonts/Montserrat.ttf);
  }
  

  img {
    width: 100%;
    height: 100%;
  }

  body {
    height: 100vh;
    background-color:rgb(255, 255, 255);
    font-family: "Montserrat";
  }

  button {
    padding:5px;
  }

  button, input:not(.input-filter), select{
    border: 1px solid transparent;
    border-radius: 5px;
      &:focus{
        border: 1px solid rgb(104, 104, 104);
        box-shadow: 0 4px 4px 0 rgba(43, 43, 43, 0.21);
        outline: none;
      }
    }


  input, select {
    width: 90%;
    padding: 15px 9px;
    border:1px solid transparent;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;
    font-family: "Montserrat", Sans-serif;
    transition: 0.2s;
    background-color:rgb(230, 230, 230);

    &:focus:not(.input-filter) {
      color: #282828;
      border: 1px solid #199fe3;

      &::placeholder {
        color:rgb(121, 121, 121);
        opacity: 1;
        }
        ::-webkit-input-placeholder {
          color:rgb(121, 121, 121);
        }
        ::-ms-input-placeholder {
          color:rgb(121, 121, 121);
        }
    }
  }

  @keyframes hoverBtn {
    0% {
      box-shadow: 0 0 0 0 #36baf4;
    }
  }

`;

export const Center = styled.div`
  position: relative;
  width: 1360px;
  max-width: 96%;
  margin: 75px auto;
  border-radius: 10px;
  bottom: 15px;
`;

// Estilo para o overlay do diálogo modal
export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.51);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
`;

// Estilo para o conteúdo do diálogo modal
export const ModalBox = styled(Dialog.Content)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 95%;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  max-height: 90%;
  overflow-y: auto;
  color: #263072;
  font-family: "Montserrat", Sans-serif;

  h2 {
    font-family: "Montserrat", Sans-serif;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding-bottom: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 15px;

  & .filters {
    width: 80%;

    @media screen and (max-width: 1119px) {
      margin-top: 20px;
      width: 100%;
    }

    & input {
      padding: 20px 9px !important;
    }
  }
`;

export const ButtonsFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  gap: 5px;
  margin-bottom: 25px;

  @media screen and (max-width: 1119px) {
    justify-content: start;
  }

  button {
    width: max-content;
    font-family: "Montserrat";
    color: #ffffff;
    cursor: pointer;
    transition: 0.2s;
    color: #797979;
    font-weight: 400;
    background-color: transparent;

    @media screen and (max-width: 377px) {
      width: 100%;
    }

    &.activated-button {
      color: #3689f5;
    }
  }
`;
