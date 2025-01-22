import { useState } from "react";

import { Edit } from "./features/edit.jsx";
import { Preview } from "./features/view.jsx";
import { Remove } from "./features/remove.jsx";

import { Actions } from "../styles/tables.js";
import PropTypes from "prop-types";

/**
 * Component to render a unique author
 *
 * @param {Object} props.componentInfo - Object with author informations
 * @returns {JSX.Element}
 */
export function Author({ componentInfo }) {
  const [specificAuthorId, setSpecificAuthorId] = useState(null);

  return (
    <tr key={componentInfo.authorId}>
      <td>{componentInfo.authorId}</td>
      <td>{componentInfo.author}</td>
      <td>{componentInfo.email}</td>
      <Actions>
        <Edit authorIdEdit={componentInfo.authorId} />
        <Preview authorIdPreview={componentInfo.authorId} />
        <Remove
          authorUniqueId={componentInfo.authorId}
          setSpecificAuthorId={setSpecificAuthorId}
          specificAuthorId={specificAuthorId}
        />
      </Actions>
    </tr>
  );
}

Author.propTypes = {
  componentInfo: PropTypes.shape({
    authorId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
