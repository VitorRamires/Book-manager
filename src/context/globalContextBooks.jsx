/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";

/**
 * @typedef {Object} Book
 * @property {string} name
 * @property {number} pages
 * @property {number} id
 * @property {string} authorId
 * @property {string} date
 *
 */


/**
 * Context managing global book state
 */
export const CreateGlobalContext = React.createContext({});


/**
 * Global Context to manage books
 * 
 * @param {Object} props - React component props
 * @param {React.ReactNode} props.children - Child Component what have context access
 * @returns {{JSX.Element}}
 */
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
    console.log(data);

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
