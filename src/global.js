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

  input, select {
    width: 90%;
    padding: 15px 9px;
    border: 2px solid #bbb;
    outline: none;
    border-radius: 5px;
    margin-top: 5px;
    font-family: "Montserrat", Sans-serif;
    transition: 0.2s;

    &:focus {
      border-color: #59d6f8;
      background-color:#e1eff6;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      color: #282828;

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
