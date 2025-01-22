import { createGlobalStyle, styled } from "styled-components";

export const GlobalCss = createGlobalStyle`

  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
  }


  @font-face {
    font-family: "Montserrat";
    src: url(../fonts/Montserrat.ttf);
  }
  

  img{
    width: 100%;
    height: 100%;
  }

  body{
    height: 100vh;
    background-color:rgb(255, 255, 255);
    font-family: "Montserrat";
  }


  button, a, input, select{

    border: 1px solid transparent;
    border-radius: 5px;
    padding:5px;

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

    &:focus {
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
    0%{
      box-shadow: 0 0 0 0 #36baf4;
    }
  }

`;

export const Center = styled.div`
  position: relative;
  width: 1360px;
  max-width: 90%;
  margin: 75px auto;
  padding: 25px;
  border-radius: 10px;
  background-color: #e1eff6;
  bottom: 15px;
`;
