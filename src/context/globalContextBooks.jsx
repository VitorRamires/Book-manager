/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const CreateGlobalContext = createContext();

export function ContextGlobal({ children }) {
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState(0);
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(getBooks);

    if (getBooks.length !== 0) {
      const lastIdBook = getBooks[getBooks.length - 1].id;
      setIds(lastIdBook + 1);
    }
  }, []);


  function createBookHandle(data) {
    setIds(ids + 1);

    const newBook = {
      name: data.bookName,
      pages: data.pages,
      id: ids,
      authorId: data.author,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    setBooks((state) => [...state, newBook]);
    localStorage.setItem("books", JSON.stringify([...books, newBook]));
    reset();
  }

  return (
    <CreateGlobalContext.Provider
      value={{ books, setBooks, createBookHandle, ids, handleSubmit, register }}
    >
      {children}
    </CreateGlobalContext.Provider>
  );
}
