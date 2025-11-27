import styled from "styled-components";

export const NavHeader = styled.nav`
  position: relative;
  top: 0;
  width: 100%;
  background: #82b8ff;
  font-size: 1.5rem;
  padding: 25px 25px;
  color: #ffffff;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 885px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 35px;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h3 {
    margin-bottom: 50px;
    font-family: "Montserrat", Sans-serif;
    font-size: 2.5rem;

    @media screen and (max-width: 520px) {
      font-size: 1.7rem;
    }
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    color: #acacac;
    vertical-align: middle;
    text-decoration: none;
    border-radius: 5px 0 0 5px;
    font-size: 1.4rem;
    transition: 0.2s;

    &:hover img {
      transform: translateY(-5px);
      background-color: #9dc7ff;
    }

    img {
      width: 105px;
      height: 65px;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 9px;
      transition: 0.3s;
    }

    .navIcon-wrapper {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      font-size: 1.1rem;
    }

    @media screen and (max-width: 885px) {
      width: 100%;
      border-radius: 0;
    }
  }

  a:last-child {
    border-radius: 0 5px 5px 0;

    & img {
      padding: 12px;
    }

    @media screen and (max-width: 885px) {
      border-radius: 0;
    }
  }

  a.active {
    color: #ffffff;
    & img {
      background-color: #9dc7ff;
      box-shadow: 0 0 5px 0 #0000003b;
    }
  }
`;

export const Menu = styled.div`
  width: 1360px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 885px) {
    width: 550px;
    max-width: 100%;
    padding: 0;
    margin: 0 auto 35px auto;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: start;
  font-family: "Montserrat", Sans-serif;
  gap: 45px;

  @media screen and (max-width: 885px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
