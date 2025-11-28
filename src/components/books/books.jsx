import { useContext, useRef } from "react";
import { CreateGlobalContext } from "../../context/globalContextBooks.jsx";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";
import { Table } from "../Table.jsx";
import { Book } from "./book.jsx";

import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, ModalBox, Center, Head } from "../../global.js";
import { ItemModal, ModalActions, DialogTrigger } from "../styles/tables.js";
import img from "../../img/book.svg";

/**
 * Component to display a list books
 *
 * @returns {JSX.Element}
 */
export function Books() {
  const { books, formMethods, createBookHandle } =
    useContext(CreateGlobalContext);
  const { authors } = useContext(CreateGlobalAuthors);
  const { handleSubmit, register } = formMethods;
  const headRef = useRef();

  /**
   * Function to reset the form
   */
  function resetForm() {
    formMethods.reset();
  }

  return (
    <Center>
      <Dialog.Root>
        <Head className="head" ref={headRef}>
          <DialogTrigger onClick={resetForm}>Criar Livro</DialogTrigger>
        </Head>

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
                    <option value="">Selecione seu autor</option>
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
        headRef={headRef}
      />
    </Center>
  );
}
