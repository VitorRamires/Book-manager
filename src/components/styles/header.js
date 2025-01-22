import styled from "styled-components";

export const NavHeader = styled.nav`
  position: relative;
  width: 100%;
  background: #1e4175;
  font-size: 1.5rem;
  padding: 50px 25px;
  color: rgb(255, 255, 255);
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;



  @media screen and (max-width: 885px) {
    height: 525px;
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
    color: rgb(172, 172, 172);
    vertical-align: middle;
    text-decoration: none;
    height: 100%;
    transition: 0.1s;
    border-radius: 5px 0 0 5px;
    padding: 15px;
    background-color: rgb(236, 236, 236);
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
    color: rgb(255, 255, 255);
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

export const Logo = styled.div`
  img {
    width: 300px;
    max-width: 100%;
    height: auto;
  }
`;

export const Arrow = styled.div`
  display: none;
  width: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 35px;
  transition: 0.2s;
  cursor: pointer;

  &.rotate {
    transform: translate(-50%, 0) rotate(180deg);
  }

  @media screen and (max-width: 885px) {
    display: block;
  }
`;
