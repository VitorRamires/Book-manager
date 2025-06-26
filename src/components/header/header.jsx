import { NavLink } from "react-router-dom";
import { NavHeader, NavBox, Menu } from "../styles/header.js";

/**
 * Component to display Header
 *
 * @returns {JSX.Element}
 */
export function Header() {
  return (
    <>
      <NavHeader>
        <Menu className="mobile-elements">
          <h3>Gerenciador de livros</h3>

          <NavBox>
            <NavLink to="/">Livros</NavLink>
            <NavLink to="/autores">Autores</NavLink>
          </NavBox>
        </Menu>
      </NavHeader>
    </>
  );
}
