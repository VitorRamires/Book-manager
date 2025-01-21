/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import PropTypes from "prop-types";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ModalActions,
  DialogTrigger,
  Span,
} from "../../styles/remove";
import removeLogo from "../../../img/trash.svg";
import { CreateGlobalContext } from "../../../context/globalContextBooks";

export function Remove({ authorIdRemove }) {
  const [getAuthorIdRemove] = useState(authorIdRemove);
  const [authorHasBooks, setAuthorHasBooks] = useState(null);

  const { setAuthors } = useContext(CreateGlobalAuthors);
  const { books, setBooks } = useContext(CreateGlobalContext)

  const arraySavedOnLocal = JSON.parse(localStorage.getItem("authors"));

  let filterAuthorBooks = books.filter(
    (books) => books.authorId == getAuthorIdRemove
  );

  // Remover Autores
  let actualItem = arraySavedOnLocal.filter(
    (author) => author.authorId === getAuthorIdRemove
  )[0];

  let removeAuthor = arraySavedOnLocal.filter(
    (author) => author.authorId != actualItem.authorId
  );

  // Remover Livros
  let removeBooks = books.filter((book) => {
    !filterAuthorBooks.includes(book.id), console.log(filterAuthorBooks);
  });

  function verifyAuthor() {
    books.some((book) => book.authorId == actualItem.authorId)
      ? setAuthorHasBooks(true)
      : setAuthorHasBooks(false);
  }

  function filterArray() {
    setAuthors(removeAuthor);
    setBooks(removeBooks);
    localStorage.setItem("authors", JSON.stringify(removeAuthor));
    localStorage.setItem("books", JSON.stringify(removeBooks));
  }

  useEffect(() => {
    verifyAuthor();
  }, [books]);

  return (
    <>
      <Dialog.Root>
        <DialogTrigger>
          <img src={removeLogo} alt="" title="Remover" />
        </DialogTrigger>

        <Dialog.Portal>
          <DialogOverlay>
            <ModalBox>
              <Dialog.Title>
                <Span>Deseja remover o autor?</Span>

                {authorHasBooks ? (
                  <>
                    <Span>
                      Removendo o autor, também removera estes livros:
                    </Span>
                    {filterAuthorBooks.map((book) => (
                      <div key={book.id}>{book.name}</div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </Dialog.Title>
              <Dialog.Description></Dialog.Description>
              <ModalActions>
                <Dialog.Close asChild>
                  <button onClick={filterArray}>Sim</button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button>Não</button>
                </Dialog.Close>
              </ModalActions>
            </ModalBox>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

Remove.propTypes = {
  authorIdRemove: PropTypes.number.isRequired,
};
