/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
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

export function Edit({ authorIdEdit }) {
  const [getId, setGetId] = useState(authorIdEdit);
  const [formValue, setFormValues] = useState({});

  const { setAuthors, authors } = useContext(CreateGlobalAuthors);

  let selectedAuthor = authors.filter((item) => item.authorId === getId)[0];

  function getIdHandle() {
    setGetId(authorIdEdit);
  }

  function handleInputChange({ target }) {
    const { id, value } = target;
    setFormValues({ ...formValue, [id]: value });
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    const saveEditAuthors = authors.map((item) => {
      if (item.authorId === selectedAuthor.authorId) {
        return { ...item, ...formValue };
      }
      return item;
    });

    setAuthors(saveEditAuthors);
    localStorage.setItem("authors", JSON.stringify(saveEditAuthors));
  }

  useEffect(() => {
    if (selectedAuthor) {
      setFormValues(selectedAuthor);
    }
  }, []);

  return (
    <Dialog.Root>
      <DialogTrigger>
        <img src={editLogo} alt="" title="Editar" onClick={getIdHandle} />
      </DialogTrigger>

      <Dialog.Portal>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Edite o autor</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <form onSubmit={handleSubmitEdit}>
              <ItemModal>
                <label htmlFor="author">Nome do autor</label>
                <input
                  id="author"
                  onChange={handleInputChange}
                  value={formValue.author || ""}
                />
              </ItemModal>
              <ItemModal>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={handleInputChange}
                  value={formValue.email || ""}
                />
              </ItemModal>
              <ModalActions>
                <button>Editar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </ModalActions>
            </form>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Edit.propTypes = {
  authorIdEdit: PropTypes.number.isRequired,
};
