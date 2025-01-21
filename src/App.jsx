import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Livros } from "./components/books/books.jsx";
import { Header } from "./components/header/header.jsx";
import { Authors } from "./components/authors/authors.jsx";
import { GlobalCss } from "./global.js";
import { ContextGlobal } from "./context/globalContextBooks.jsx";
import { ContextAuthors } from "./context/globalContextAuthors.jsx";

export function App() {
  return (
    <ContextAuthors>
      <ContextGlobal>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Livros />} />
            <Route path="/autores" element={<Authors />} />
          </Routes>
          <GlobalCss />
        </BrowserRouter>
      </ContextGlobal>
    </ContextAuthors>
  );
}
