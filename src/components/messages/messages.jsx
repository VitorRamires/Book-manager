/* eslint-disable react/prop-types */

import { MessageStyle } from "../styles/message";

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
