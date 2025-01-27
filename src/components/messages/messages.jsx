import { MessageStyle } from "../styles/message";
import PropTypes from "prop-types";

/**
 * Component to display a message when no authors or books are available
 *
 * @param {Object} props - React component props
 * @param {string} props.image - URL of the image to display
 * @param {string} props.section - Section name to display in the message
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
