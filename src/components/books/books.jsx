import React from "react";
import { CreateGlobalContext } from "../../context/globalContextBooks.jsx";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";
import { Table } from "../Table.jsx";
import { Book } from "./book.jsx";

import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  ModalBox,
  ItemModal,
  ModalActions,
  DialogTrigger,
} from "../styles/tables.js";
import { Center } from "../../global.js";
import img from "../../img/book.svg";

export function Books() {
  const { books, formMethods, createBookHandle } =
    React.useContext(CreateGlobalContext);

  const { authors } = React.useContext(CreateGlobalAuthors);

  const { handleSubmit, register } = formMethods;

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
                  defaultValue="Selecione o autor"
                >
                  {authors.length != 0 ? (
                    authors.map((author) => {
                      return (
                        <option key={author.authorId} value={author.authorId}>
                          {author.author}
                        </option>
                      );
                    })
                  ) : (
                    <option value="Selecione seu autor">
                      Selecione seu autor
                    </option>
                  )}
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

      <Table
        infoSection={books}
        img={img}
        tableHead={["Id", "Livro", "Autor", "Páginas", "Ações"]}
        SectionComponent={Book}
        message={"Livro"}
        name={"name"}
        id={"id"}
      />
    </Center>
  );
}
