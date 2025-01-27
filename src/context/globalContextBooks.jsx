/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";

/**
 * @typedef {Object} Book
 * @property {string} name - The name of the book
 * @property {number} pages - The number of pages in the book
 * @property {number} id - The unique identifier for the book
 * @property {string} authorId - The unique identifier for the author of the book
 * @property {string} authorName - The name of the author of the book
 * @property {string} date - The date the book was created
*/

/**
 * @typedef {Object} GlobalContextValueBook
 * @property {Book[]} books - The list of books
 * @property {function} setBooks - Function to set the list of books
 * @property {function} createBookHandle - Function to create a new book
 * @property {number} ids - The current ID counter
 * @property {Object} formMethods - The form methods from react-hook-form
*/

/**
 * Context managing global book state
*/
export const CreateGlobalContext = createContext(/** @type {GlobalContextValueBook} */ ({}));

/**
 * Global Context to manage books
 *
 * @param {Object} props - React component props
 * @param {React.ReactNode} props.children - Child Component what have context access
 * @returns {{JSX.Element}}
*/
export function ContextGlobal({ children }) {
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
   * Handles the creation of a new book
   *
   * @param {Object} data - Form data of react-hook-form
   * @param {string} data.bookName - book name
   * @param {number} data.pages - book pages
   * @param {number} data.id - book id
   * @param {string} data.authorId - autohor id of book
   * @param {string} data.date - book date was created
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
