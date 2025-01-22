import { useContext } from "react";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";
import { Message } from "../messages/messages.jsx";
import { Author } from "./author.jsx";
import { Center } from "../../global.js";

import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  TableBox,
  TableWrapper,
  AlreadyCreated,
} from "../styles/tables.js";
import * as Dialog from "@radix-ui/react-dialog";
import img from "../../img/Author.svg";

export function Authors() {
  const {
    authors,
    formMethods,
    createAuthorHandle,
    authorNotExistMessage,
    setAuthorNotExistMessage,
  } = useContext(CreateGlobalAuthors);
  const { handleSubmit, register } = formMethods;
  

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
                <label htmlFor="authorName">Autor</label>
                <input
                  id="authorName"
                  placeholder="Digite o nome do autor"
                  {...register("authorName", { required: true })}
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

      <TableWrapper>
        {authors.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Email</td>
                <td>Ações</td>
              </tr>
            </thead>

            <tbody>
              {authors.map((author) => {
                return (
                  <Author key={author.id} author={author}/>
                );
              })}
            </tbody>
          </TableBox>
        ) : (
          <Message image={img} section="Autor" />
        )}
      </TableWrapper>



    </Center>
  );
}
