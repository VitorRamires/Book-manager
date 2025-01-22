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
 * Component to edit a book
 *
 * @param {number} props.bookId- ID of book for edit
 * @returns {JSX.Element}
 */
export function Edit({ bookId }) {
  const [getId, setGetId] = useState(bookId);
  const [formValue, setFormValues] = useState({});

  const { authors } = useContext(CreateGlobalAuthors);
  const { setBooks, books } = useContext(CreateGlobalContext);

  let selectedBook = books.filter((item) => item.id === getId)[0];

  /**
   * Function to get and save the book ID on state
   *
   * @return {void}
   */
  function getIdHandle() {
    setGetId(bookId);
  }

  /**
   * Function to uptade the values of a existed book when value changes
   *
   * @param {Object} target - target of a input
   * @param {string} id - ID of input
   * @param {string} value - value of input
   * @return {void}
   */
  function handleInputChange({ target }) {
    const { id, value } = target;
    setFormValues({ ...formValue, [id]: value });
  }

  /**
   * Function to submiting the changes of a book
   *
   * @param {Event} event - Submit event of form
   * @return {void}
   */
  function handleSubmitEdit(event) {
    event.preventDefault();
    const saveEditBooks = books.map((item) => {
      if (item.id === selectedBook.id) {
        return { ...item, ...formValue };
      }
      return item;
    });
    setBooks(saveEditBooks);
    localStorage.setItem("books", JSON.stringify(saveEditBooks));
  }

  useEffect(() => {
    if (selectedBook) {
      setFormValues(selectedBook);
    }
  }, []);

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
                    defaultValue={"selecione o autor"}
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
