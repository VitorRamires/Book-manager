import { useContext } from "react";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";

import { Edit } from "./features/edit.jsx";
import { Preview } from "./features/view.jsx";
import { Remove } from "./features/remove.jsx";

import { Actions } from "../styles/tables.js";
import PropTypes from "prop-types";

export default function Book({ book }) {
  const { authors } = useContext(CreateGlobalAuthors);

  return (
    <tr key={book.id}>
      <td>
        <p>{book.id}</p>
      </td>
      <td>
        <p>{book.name}</p>
      </td>
      <td>
        <p>
          {authors.find((author) => author.authorId == book.authorId)?.author}
        </p>
      </td>
      <td>
        <p>{book.pages}</p>
      </td>
      <Actions>
        <Edit bookId={book.id} book={book} />
        <Preview bookIdPreview={book.id} />
        <Remove bookIdRemove={book.id} />
      </Actions>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
};
