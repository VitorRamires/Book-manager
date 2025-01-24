/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";

export const CreateGlobalContext = React.createContext({});

export function ContextGlobal({ children }) {
  const [books, setBooks] = React.useState([]);
  const [ids, setIds] = React.useState(0);

  const formMethods = useForm();

  React.useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(getBooks);

    if (getBooks.length !== 0) {
      const lastIdBook = getBooks[getBooks.length - 1].id;
      setIds(lastIdBook + 1);
    }
  }, []);

  function createBookHandle(data) {
    setIds(ids + 1);
    console.log(data)

    const newBook = {
      name: data.bookName,
      pages: data.pages,
      id: ids,
      authorId: data.author,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    setBooks((state) => [...state, newBook]);
    localStorage.setItem("books", JSON.stringify([...books, newBook]));
    formMethods.reset();
  }

  return (
    <CreateGlobalContext.Provider
      value={{ books, setBooks, createBookHandle, ids, formMethods }}
    >
      {children}
    </CreateGlobalContext.Provider>
  );
}
