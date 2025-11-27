import { NavLink } from "react-router-dom";
import { NavHeader, NavBox, Menu } from "../styles/header.js";
import { NavIcon } from "./navIcon.jsx";
import authorIcon from "../../img/authorIcon.svg";
import bookIcon from "../../img/bookIcon.svg";
import authorIconActive from "../../img/authorIcon-active.svg";
import bookIconActive from "../../img/bookIcon-active.svg";
import { useRef } from "react";

/**
 * Component to display Header
 *
 * @returns {JSX.Element}
 */
export function Header() {
  const ref = useRef();

  return (
    <>
      <NavHeader>
        <Menu className="nav-elements">
          <NavBox>
            <NavLink to="/" ref={ref}>
              {({ isActive }) => (
                <NavIcon
                  iconSrc={isActive ? bookIconActive : bookIcon}
                  navPage="Livros"
                />
              )}
            </NavLink>
            <NavLink to="/autores" ref={ref}>
              {({ isActive }) => (
                <NavIcon
                  iconSrc={isActive ? authorIconActive : authorIcon}
                  navPage="Autores"
                />
              )}
            </NavLink>
          </NavBox>
        </Menu>
      </NavHeader>
    </>
  );
}
