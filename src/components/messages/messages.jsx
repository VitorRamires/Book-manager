import { MessageStyle } from "../styles/message";
import PropTypes from "prop-types";

/**
 * Component to display message if not exist author or book on list
 *
 * @param {Object} props - React component props
 * @param {string} image - Empty list image URL of book or author
 * @param {string} section - Indicate the section
 * @returns {JSX.Element}
 */
export function Message({ image, section }) {
  return (
    <MessageStyle>
      <img src={image} alt="" />
      <p>
        <span>Não há nenhum {section} por aqui...</span>
      </p>
      <p>
        Crie um {section} clicando no botão <strong>Criar {section}</strong>
      </p>
    </MessageStyle>
  );
}

Message.propTypes = {
  image: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
