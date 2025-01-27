import { NavLink } from "react-router-dom";
import { NavHeader, NavBox, Menu, Arrow, Logo } from "../styles/header.js";
import { useState } from "react";
import logo from "../../img/logo.png";
import arrow from "../../img/arrow.svg";

/**
 * Component to display Header
 *
 * @returns {JSX.Element}
 */
export function Header() {
  const [menuOpenened, setMenuOpened] = useState(false);
  const [resized, setResized] = useState(null);
  const mobileSizeChanger = 885;

  /**
   * Function handle to change the menu state
   *
   * @returns {void}
   */
  function toggleMenu() {
    setMenuOpened(!menuOpenened);
  }

  /**
   * Function handle to observe size screen and change state
   *
   * @returns {void}
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
