import { useState } from "react";

import { Edit } from "./features/edit.jsx";
import { Preview } from "./features/view.jsx";
import { Remove } from "./features/remove.jsx";
import { Actions } from "../styles/tables.js";

import PropTypes from "prop-types";

export function Author({ author }) {
  const [specificAuthorId, setSpecificAuthorId] = useState(null);

  return (
    <tr key={author.authorId}>
      <td>{author.authorId}</td>
      <td>{author.author}</td>
      <td>{author.email}</td>
      <Actions>
        <Edit authorIdEdit={author.authorId} />
        <Preview authorIdPreview={author.authorId} />
        <Remove
          authorUniqueId={author.authorId}
          setSpecificAuthorId={setSpecificAuthorId}
          specificAuthorId={specificAuthorId}
        />
      </Actions>
    </tr>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    authorId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
