/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";

/**
 * @typedef {Object} Author
 * @property {string} author
 * @property {string} email
 * @property {number} authorId
 * @property {string} date
 *
 */

/**
 * Context managing global author state
 */
export const CreateGlobalAuthors = createContext(/** @type {GlobalContextValue} */ ({}));

/**
 * Global Context to manage author
 *
 * @param {Object} props - React component props
 * @param {React.ReactNode} props.children - Child Component what have context access
 * @returns {JSX.Element}
 */
export function ContextAuthors({ children }) {
  const [authors, setAuthors] = useState([]);
  const [authorsId, setAuthorsId] = useState(0);
  const [authorNotExistMessage, setAuthorNotExistMessage] = useState("");
  const formMethods = useForm();

  useEffect(() => {
    const getAuthors = JSON.parse(localStorage.getItem("authors")) || [];
    setAuthors(getAuthors);
    if (getAuthors.length !== 0) {
      const lastIdAuthor = getAuthors[getAuthors.length - 1].authorId;
      setAuthorsId(lastIdAuthor + 1);
    }
  }, []);

  /**
   * Handles the creation of a new author
   *
   * @param {Object} data - Form data of react-hook-form
   * @param {string} data.author - author name
   * @param {number} data.email - numbers page
   * @param {number} data.authorId - author id
   * @param {string} data.date - author date was created
   */
  function createAuthorHandle(data) {
    const newAuthor = {
      author: data.author,
      email: data.email,
      authorId: authorsId,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    const authorExist = authors.some((item) => item.author == newAuthor.author);
    if (authorExist) {
      setAuthorNotExistMessage("Autor já criado");
    } else {
      setAuthorNotExistMessage("");
      setAuthorsId(authorsId + 1);
      setAuthors((state) => [...state, newAuthor]);
      localStorage.setItem("authors", JSON.stringify([...authors, newAuthor]));
    }
  }

  return (
    <CreateGlobalAuthors.Provider
      value={{
        authors,
        setAuthors,
        formMethods,
        createAuthorHandle,
        authorsId,
        authorNotExistMessage,
        setAuthorNotExistMessage,
      }}
    >
      {children}
    </CreateGlobalAuthors.Provider>
  );
}
