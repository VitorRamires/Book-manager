import { useState, useContext } from "react";
import { CreateGlobalAuthors } from "../../../context/globalContextAuthors";
import PropTypes from "prop-types";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  DialogTitle,
  ViewInfo,
} from "../../styles/preview";
import previewLogo from "../../../img/preview.svg";
import { CreateGlobalContext } from "../../../context/globalContextBooks";


/**
 * Component to display preview informations of a book
 * 
 * @param {number} props.bookIdPreview - ID of book for preview
 * @returns {JSX.Element}
 */
export function Preview({ bookIdPreview }) {
  const [getIdPreview, setGetIdPreview] = useState(bookIdPreview);

  const { authors } = useContext(CreateGlobalAuthors);
  const { books } = useContext(CreateGlobalContext);

  let filterIdPreview =
    books.filter((item) => item.id === getIdPreview)[0] || [];

  /**
   * Function to capture and save the book id in state
   * 
   * @return {void}
   */
  function getIdPreviewHandle() {
    setGetIdPreview(bookIdPreview);
  }

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img
          src={previewLogo}
          alt=""
          title="Preview"
          onClick={getIdPreviewHandle}
        />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <DialogTitle>Visualizando</DialogTitle>
            <Dialog.Description></Dialog.Description>

            <ViewInfo>
              <ItemModal>
                <h4>Nome do livro:</h4>
                <p>{filterIdPreview.name}</p>
              </ItemModal>
              <ItemModal>
                <h4>Autor do livro:</h4>
                <p>
                  {
                    authors.find(
                      (item) => item.authorId == filterIdPreview.authorId
                    )?.author
                  }
                </p>
              </ItemModal>
              <ItemModal>
                <h4>Páginas:</h4>
                <p>{filterIdPreview.pages}</p>
              </ItemModal>
              <ItemModal>
                <h4>Criado em:</h4>
                <p>{filterIdPreview.date}</p>
              </ItemModal>
            </ViewInfo>

            <ModalActions>
              <Dialog.Close asChild>
                <button>Fechar</button>
              </Dialog.Close>
            </ModalActions>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Preview.propTypes = {
  bookIdPreview: PropTypes.number.isRequired,
};
