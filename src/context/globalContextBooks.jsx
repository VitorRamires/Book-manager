/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Context managing global books state
 */
export const CreateGlobalContext = createContext();

/**
 * Provider component Books
 *
 * @param {Object} props
 * @param {React.ReactNode}
 * @returns {JSX.Element}
 */
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


  /**
   *
   * Handles the creation of a new book
   *
   * @param {Object} data - form data for new book
   * @param {string} data.bookName - name of the book 
   * @param {number} data.pages - number of pages
   * @param {number} data.id - ID of book
   * @param {number} data.authorId - ID of the author who has the book registered
   * @param {string} data.date - date the book was created
   */
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
