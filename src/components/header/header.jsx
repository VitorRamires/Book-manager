import { NavLink } from "react-router-dom";
import { NavHeader, NavBox, Menu, Arrow, Logo } from "../styles/header.js";
import { useState } from "react";
import logo from "../../img/logo.png";
import arrow from "../../img/arrow.svg";

/**
 * A header to display in books and authors page
 *
 * @returns {JSX.Element}
 */
export function Header() {
  const [menuOpenened, setMenuOpened] = useState(false);
  const [resized, setResized] = useState(null);
  const mobileSizeChanger = 885;

  /**
   *  Function for control the menu state
   *
   * @return {void}
   */
  function toggleMenu() {
    setMenuOpened(!menuOpenened);
  }

  /**
   * Function to verify the size screen
   *
   * @return {void}
   */
  function verifySizeScreen() {
    let widthWindow = window.innerWidth;
    if (mobileSizeChanger <= widthWindow) {
      setResized(false);
    } else {
      setResized(true);
    }
  }
  window.addEventListener("resize", verifySizeScreen);

  return (
    <>
      <NavHeader
        className={
          resized ? (menuOpenened ? "menu-mobile-on" : "menu-mobile-off") : ""
        }
      >
        <Menu className="mobile-elements">
          <h3>Gerenciador de livros</h3>

          <NavBox>
            <NavLink to="/">Livros</NavLink>
            <NavLink to="/autores">Autores</NavLink>
          </NavBox>
        </Menu>

        <Logo>
          <img className="logo" src={logo} alt="logo contato seguro" />
        </Logo>
      </NavHeader>

      <Arrow onClick={toggleMenu} className={menuOpenened ? "rotate" : ""}>
        <img src={arrow} alt="logo contato seguro" />
      </Arrow>
    </>
  );
}
