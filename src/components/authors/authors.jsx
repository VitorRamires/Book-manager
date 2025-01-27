import { useContext } from "react";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";
import { Author } from "./author.jsx";
import { Center } from "../../global.js";
import { Table } from "../Table.jsx";

import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, ModalBox } from "../../global.js";
import {
  ItemModal,
  ModalActions,
  DialogTrigger,
  AlreadyCreated,
} from "../styles/tables.js";
import img from "../../img/Author.svg";

/**
 * Component to display a list Authors
 *
 * @returns {JSX.Element}
 */
export function Authors() {
  const {
    authors,
    formMethods,
    createAuthorHandle,
    authorNotExistMessage,
    setAuthorNotExistMessage,
  } = useContext(CreateGlobalAuthors);
  const { handleSubmit, register } = formMethods;

  /**
   * Function to reset the form
   */
  function resetForm() {
    formMethods.reset();
    setAuthorNotExistMessage("");
  }

  return (
    <Center>
      <Dialog.Root>
        <DialogTrigger onClick={resetForm}>
          Criar Autor <span>+</span>
        </DialogTrigger>
        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Crie seu autor</Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <form onSubmit={handleSubmit(createAuthorHandle)}>
              <ItemModal>
                <label htmlFor="author">Autor</label>
                <input
                  id="author"
                  placeholder="Digite o nome do autor"
                  {...register("author", { required: true })}
                />
              </ItemModal>
              <ItemModal>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Digite o email do autor"
                  {...register("email", { required: true })}
                />
              </ItemModal>
              <ModalActions>
                <button>Criar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </ModalActions>
              <AlreadyCreated>{authorNotExistMessage}</AlreadyCreated>
            </form>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Root>

      <Table
        infoSection={authors}
        img={img}
        tableHead={["Id", "Autor", "email", "Ações"]}
        SectionComponent={Author}
        message={"Autor"}
        name={"author"}
        id={"authorId"}
      />
    </Center>
  );
}
