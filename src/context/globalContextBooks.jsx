/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CreateGlobalAuthors } from "./globalContextAuthors";

/**
 * Context managing global books state
 */
export const CreateGlobalContext = createContext();

/**
 * Provider component books
 *
 * @param {Object} props
 * @param {React.ReactNode}
 * @returns {JSX.Element}
 */
export function ContextGlobal({ children }) {
  const { authors } = useContext(CreateGlobalAuthors);
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState(0);

  const formMethods = useForm();

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
   * @param {Object} data - form data
   * @param {string} data.bookName - name of the book
   * @param {number} data.pages - number of pages
   * @param {number} data.id - ID of book
   * @param {number} data.authorId - ID of the author who has the book registered
   * @param {string} data.author - Author of the book created
   * @param {string} data.date - date the book was created
   */
  function createBookHandle(data) {
    setIds(ids + 1);
    const authorBook = authors.find((author) => author.authorId == data.author);

    const newBook = {
      name: data.bookName,
      pages: data.pages,
      id: ids,
      authorId: data.author,
      author: authorBook.author,
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
