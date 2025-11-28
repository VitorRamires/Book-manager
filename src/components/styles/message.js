import styled from "styled-components";

export const MessageStyle = styled.div`
  text-align: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 1.4rem;
  margin-top: 160px;

  @media screen and (max-width: 620px) {
    margin-top: 70px;
    }

  img {
    width: 120px;
    height: auto;
    margin-bottom: 15px;

    @media screen and (max-width: 620px) {
      width: 100px;
    }
  }

  span {
    color: #465386;
    font-weight: bold;

    @media screen and (max-width: 620px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 3px 0;
    color: #465386;
    margin: 15px 0;

    @media screen and (max-width: 620px) {
      font-size: 1rem;
    }
  }
`;
