import { useState } from "react";
import PropTypes from "prop-types";
import { Message } from "../components/messages/messages.jsx";
import {
  TableBox,
  TableWrapper,
  InputFilter,
} from "../components/styles/tables.js";
import lupa from "../img/lupa.svg";

export function Table({ infoSection, img, tableHead, SectionComponent }) {
  const [inputText, setInputText] = useState("");

  const infoFiltered = infoSection.filter((info) =>
    Object.values(info).some((objectValue) => {
      return objectValue.toString().toLowerCase().includes(inputText.toLowerCase());
    })
  );

  return (
    <>
      <InputFilter className="filter-info">
        <input
          type="text"
          className="input-filter"
          value={inputText}
          onChange={({ target }) => {
            setInputText(target.value);
          }}
          placeholder="Pesquise por qualquer informação aqui"
        />
        <img src={lupa} alt="" />
      </InputFilter>

      <TableWrapper>
        {infoFiltered.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                {tableHead.map((head, index) => {
                  return <td key={index}>{head}</td>;
                })}
              </tr>
            </thead>

            <tbody>
              {infoFiltered.map((info, index) => {
                return <SectionComponent key={index} componentInfo={info} />;
              })}
            </tbody>
          </TableBox>
        ) : (
          <>
            <Message image={img} section="Livro" />
          </>
        )}
      </TableWrapper>
    </>
  );
}

Table.propTypes = {
  infoSection: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  tableHead: PropTypes.array.isRequired,
  SectionComponent: PropTypes.elementType.isRequired,
};
