import { useState, useContext, useEffect } from "react";
import { CreateGlobalContext } from "../../../context/globalContextBooks";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import PropTypes from "prop-types";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
} from "../../styles/edit";
import editLogo from "../../../img/edit.svg";


/**
 * Component to display the book resume infos
 *
 * @param {Object} props - React component props
 * @param {number} props.bookId -Ids of books
 * @returns {JSX.Element}
 */
export function Edit({ bookId }) {
  const [getId, setGetId] = useState(bookId);
  const [formValue, setFormValues] = useState({});


  const { authors } = useContext(CreateGlobalAuthors);
  const { setBooks, books } = useContext(CreateGlobalContext);

  let selectedBook = books.filter((item) => item.id === getId)[0];

  useEffect(() => {
    if (selectedBook) {
      setFormValues(selectedBook);
    }
  }, []);


  /**
   * Function catch the id of book Clicked
   * 
   * @return {void}
   */
  function getIdHandle() {
    setGetId(bookId);
  }

  /**
   * Function to save changes of book in state when input change is triggered
   * 
   * @param {Event} event - input change event
   * @param {EventTarget & {id:string, value:string}} event.target - targets elements of event
   * @return {void}
   */
  function handleInputChange({ target }) {
    const { id, value } = target;
    setFormValues({ ...formValue, [id]: value });
  }


  /**
   * Function to apply the uptades to book the changes when form is submitted
   * 
   * @param {Event} event - The form submit event
   * @return {void}
   */
  function handleSubmitEdit(event) {
    event.preventDefault();
    const saveEditBooks = books.map((book) => {
      if (book.id === selectedBook.id) {
        return { ...book, ...formValue };
      }
      return book;
    });
    setBooks(saveEditBooks);
    localStorage.setItem("books", JSON.stringify(saveEditBooks));
  }

  return (
    <>
      <Dialog.Root>
        <DialogTrigger>
          <img src={editLogo} alt="" title="Editar" onClick={getIdHandle} />
        </DialogTrigger>
        <Dialog.Portal>
          <DialogOverlay>
            <ModalBox>
              <Dialog.Title>Edite seu livro</Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <form onSubmit={handleSubmitEdit}>
                <ItemModal>
                  <label htmlFor="name">Nome do livro</label>
                  <input
                    id="name"
                    onChange={handleInputChange}
                    value={formValue.name || ""}
                  />
                </ItemModal>
                <ItemModal>
                  <label htmlFor="pages">Páginas</label>
                  <input
                    id="pages"
                    type="number"
                    onChange={handleInputChange}
                    value={formValue.pages || ""}
                  />
                </ItemModal>
                <ItemModal>
                  <label htmlFor="authorId">Autor</label>
                  <select
                    name="author"
                    id="authorId"
                    onChange={handleInputChange}
                    value={formValue.authorId || ""}
                  >
                    {authors.map((author) => {
                      return (
                        <option key={author.author} value={author.authorId}>
                          {author.author}
                        </option>
                      );
                    })}
                  </select>
                </ItemModal>
                <ModalActions>
                  <button onClick={handleSubmitEdit}>Editar</button>
                  <Dialog.Close asChild>
                    <button>Cancelar</button>
                  </Dialog.Close>
                </ModalActions>
              </form>
            </ModalBox>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

Edit.propTypes = {
  bookId: PropTypes.number.isRequired,
};
