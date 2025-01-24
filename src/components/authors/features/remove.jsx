import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { CreateGlobalContext } from "../../../context/globalContextBooks";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ModalActions,
  DialogTrigger,
  Span,
  DialogDescription,
  BookList,
} from "../../styles/remove";
import removeLogo from "../../../img/trash.svg";

export function Remove({ authorUniqueId, setSpecificAuthorId }) {
  const [authorHasBooks, setAuthorHasBooks] = useState(false);
  const [filterAuthorBooks, setFilterAuthorBooks] = useState([]);

  const { setBooks, books } = useContext(CreateGlobalContext);
  const { setAuthors } = useContext(CreateGlobalAuthors);

  const arraySavedOnLocal = JSON.parse(localStorage.getItem("authors"));

  /**
   * Function to remove author and books related to the author
   *
   * @return {void}
   */
  function getAuthorUniqueId() {
    setSpecificAuthorId(authorUniqueId);

    let removeAuthor = arraySavedOnLocal.filter(
      (author) => author.authorId != authorUniqueId
    );

    let removeBooks = books.filter((book) => book.authorId != authorUniqueId);

    setBooks(removeBooks);
    localStorage.setItem("books", JSON.stringify(removeBooks));

    setAuthors(removeAuthor);
    localStorage.setItem("authors", JSON.stringify(removeAuthor));
  }

  /**
   * Function to display all books related to the author
   *
   * @return {void}
   */
  function verifyAuthor() {
    const filteredBooks = books.filter(
      (book) => book.authorId == authorUniqueId
    );
    setFilterAuthorBooks(filteredBooks);
    setAuthorHasBooks(filteredBooks.length > 0);
  }

  useEffect(() => {
    verifyAuthor();
  }, [books]);

  return (
    <Dialog.Root>
      <DialogTrigger onClick={() => setSpecificAuthorId(authorUniqueId)}>
        <img src={removeLogo} alt="Remover" title="Remover" />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>
              <Span className="alert">Deseja remover o autor?</Span>
            </Dialog.Title>
            {authorHasBooks ? (
              <>
                <DialogDescription>
                  Removendo o autor, também removerá estes livros:
                </DialogDescription>
                <BookList>
                  {filterAuthorBooks.map((book) => (
                    <li key={book.id}>{book.name}</li>
                  ))}
                </BookList>
              </>
            ) : (
              <Span>O autor não possui livros registrados.</Span>
            )}
            <ModalActions>
              <Dialog.Close asChild>
                <button>Não</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button onClick={getAuthorUniqueId}>Sim</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Remove.propTypes = {
  authorUniqueId: PropTypes.number.isRequired,
  setSpecificAuthorId: PropTypes.func.isRequired,
};
