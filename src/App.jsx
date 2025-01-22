import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from "./components/books/books.jsx";
import { Header } from "./components/header/header.jsx";
import { Authors } from "./components/authors/authors.jsx";
import { GlobalCss } from "./global.js";
import { ContextGlobal } from "./context/globalContextBooks.jsx";
import { ContextAuthors } from "./context/globalContextAuthors.jsx";

/**
 * The main application component.
 *
 * @returns {JSX.Element} The rendered application component.
 */
export function App() {
  return (
    <ContextAuthors>
      <ContextGlobal>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/autores" element={<Authors />} />
          </Routes>
          <GlobalCss />
        </BrowserRouter>
      </ContextGlobal>
    </ContextAuthors>
  );
}
