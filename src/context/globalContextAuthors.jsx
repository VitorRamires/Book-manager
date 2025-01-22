/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Context managing global author state
 */
export const CreateGlobalAuthors = createContext();

/**
 * Provider component Authors
 *
 * @param {Object} props
 * @param {React.ReactNode}
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
   * 
   * Handle the creation of new author
   * 
   * @param {Object} data - form data for new author
   * @param {string} data.author - name of author
   * @param {string} data.email - email of the author
   * @param {number} data.authorId - ID of author
   * @param {string} data.date - date the author was created
   */
  function createAuthorHandle(data) {
    const newAuthor = {
      author: data.authorName,
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
