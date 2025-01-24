/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";


export const CreateGlobalAuthors = React.createContext({});
export function ContextAuthors({ children }) {
  const [authors, setAuthors] =  React.useState([]);
  const [authorsId, setAuthorsId] =  React.useState(0);
  const [authorNotExistMessage, setAuthorNotExistMessage] =  React.useState("");
  const formMethods = useForm();

  React.useEffect(() => {
    const getAuthors = JSON.parse(localStorage.getItem("authors")) || [];
    setAuthors(getAuthors);
    if (getAuthors.length !== 0) {
      const lastIdAuthor = getAuthors[getAuthors.length - 1].authorId;
      setAuthorsId(lastIdAuthor + 1);
    }
  }, []);

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
