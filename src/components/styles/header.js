import styled from "styled-components";

export const NavHeader = styled.nav`
  position: relative;
  top: 0;
  width: 100%;
  background: #1e4175;
  font-size: 1.5rem;
  padding: 50px 25px;
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

  &.menu-mobile-on {
    height: 200px;
    overflow: hidden;
    transition: 0.5s;

    .mobile-elements {
      display: none;
    }

    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
    width: 130px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #acacac;
    vertical-align: middle;
    text-decoration: none;
    height: 100%;
    transition: 0.1s;
    border-radius: 5px 0 0 5px;
    padding: 15px;
    background-color: #ececec;
    font-size: 1.4rem;

    @media screen and (max-width: 885px) {
      width: 100%;
      border-radius: 0;
    }
  }

  a:last-child {
    border-radius: 0 5px 5px 0;

    @media screen and (max-width: 885px) {
      border-radius: 0;
    }
  }

  a.active {
    background-color: #199fe3;
    color: #ffffff;
  }
`;

export const Menu = styled.div`
  padding: 0 40px;

  @media screen and (max-width: 885px) {
    width: 550px;
    max-width: 100%;
    padding: 0;
    margin: 0 auto 35px auto;
  }
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: "Montserrat", Sans-serif;

  @media screen and (max-width: 885px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;


