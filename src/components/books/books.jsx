import { useContext } from "react";
import { CreateGlobalContext } from "../../context/globalContextBooks.jsx";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";

import { Message } from "../messages/messages.jsx";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
  TableBox,
  TableWrapper,
} from "../styles/tables.js";
import { Center } from "../../global.js";
import img from "../../img/book.svg";
import Book from "./book.jsx";

export function Livros() {
  const { books, handleSubmit, register, createBookHandle } =
    useContext(CreateGlobalContext);
  const { authors } = useContext(CreateGlobalAuthors);

  return (
    <Center>
      <Dialog.Root>
        <DialogTrigger>
          Criar Livro <span>+</span>
        </DialogTrigger>

        <DialogOverlay>
          <ModalBox>
            <Dialog.Title>Crie seu livro</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <form onSubmit={handleSubmit(createBookHandle)}>
              <ItemModal>
                <label htmlFor="bookName">Nome do livro</label>
                <input
                  id="bookName"
                  {...register("bookName", { required: true })}
                  placeholder="Digite o nome do livro"
                />
              </ItemModal>
              <ItemModal>
                <label htmlFor="pages">Páginas</label>
                <input
                  id="pages"
                  type="number"
                  {...register("pages", { required: true })}
                  placeholder="Digite a quantidade de páginas"
                />
              </ItemModal>

              <ItemModal>
                <label htmlFor="authors">Autor</label>

                <select
                  name="authors"
                  id="authors"
                  {...register("author", { required: true })}
                  defaultValue={"selecione o autor"}
                >
                  {authors.map((author) => {
                    return (
                      <option key={author.authorId} value={author.authorId}>
                        {author.author}
                      </option>
                    );
                  })}
                </select>
              </ItemModal>
              <ModalActions>
                <button>Criar</button>
                <Dialog.Close asChild>
                  <button>Cancelar</button>
                </Dialog.Close>
              </ModalActions>
            </form>
          </ModalBox>
        </DialogOverlay>
      </Dialog.Root>

      <TableWrapper>
        {books.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                <td>Id</td>
                <td>Livro</td>
                <td>Autor</td>
                <td>Páginas</td>
                <td>Ações</td>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => {
                return <Book key={book.id} book={book} />;
              })}
            </tbody>
          </TableBox>
        ) : (
          <>
            <Message image={img} section="Livro" />
          </>
        )}
      </TableWrapper>

      
    </Center>
  );
}
