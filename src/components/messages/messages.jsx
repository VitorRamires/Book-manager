/* eslint-disable react/prop-types */

import { MessageStyle } from "../styles/message";


/**
 * 
 * A message component to display wiht image and section text
 * 
 * @param {string} image - URL of image provider by author and book components
 * @param {string} section - section name provider by author and book components
 * @returns {JSX.Element} - Render message component
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
