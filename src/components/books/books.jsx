import { useContext } from "react";
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

/**
 * Component for render and manage the book list
 *
 * @return {JSX.Element}
 */
export function Books() {
  const { books, formMethods, createBookHandle } =
    useContext(CreateGlobalContext);

  const { authors } = useContext(CreateGlobalAuthors);

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
