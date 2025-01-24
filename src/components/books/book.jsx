import { useContext } from "react";
import { CreateGlobalAuthors } from "../../context/globalContextAuthors.jsx";

import { Edit } from "./features/edit.jsx";
import { Preview } from "./features/view.jsx";
import { Remove } from "./features/remove.jsx";

import { Actions } from "../styles/tables.js";
import PropTypes from "prop-types";

export function Book({ componentInfo }) {
  const { authors } = useContext(CreateGlobalAuthors);

  return (
    <tr key={componentInfo.id}>
      <td>
        <p>{componentInfo.id}</p>
      </td>
      <td>
        <p>{componentInfo.name}</p>
      </td>
      <td>
        <p>
          {
            authors.find((author) => author.authorId == componentInfo.authorId)
              ?.author
          }
        </p>
      </td>
      <td>
        <p>{componentInfo.pages}</p>
      </td>
      <Actions>
        <Edit bookId={componentInfo.id} book={componentInfo} />
        <Preview bookIdPreview={componentInfo.id} />
        <Remove bookIdRemove={componentInfo.id} />
      </Actions>
    </tr>
  );
}

Book.propTypes = {
  componentInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    pages: PropTypes.string.isRequired,
  }).isRequired,
};
