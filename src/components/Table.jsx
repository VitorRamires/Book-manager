import { useState } from "react";
import PropTypes from "prop-types";
import { Message } from "../components/messages/messages.jsx";
import {
  TableBox,
  TableWrapper,
  InputFilter,
} from "../components/styles/tables.js";
import lupa from "../img/lupa.svg";

/**
 * Component for display the table of books and authors list
 *
 * @param {Array<Object>} props.infoSection - object of information of book and author
 * @param {string} props.img - url of image displayed on message component
 * @param {Array<string>} props.tableHead - Array of table heads of book and author list
 * @param {React.ElementType} props.SectioComponent - Component to render each row of the table.
 * @param {string} props.message - Message to display when no data is available.
 * @returns {JSX.Element}
 */
export function Table({
  infoSection,
  img,
  tableHead,
  SectionComponent,
  message,
  name,
  id
}) {
  const [inputText, setInputText] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const handleFilter = infoSection.filter((info) => {
    if (filterOption === "all") {
      return Object.keys(info)
        .filter((key) => key !== "date")
        .some((key) => {
          return info[key]
            .toString()
            .toLowerCase()
            .includes(inputText.toLowerCase());
        });
    } else {
      return info[filterOption]
        .toString()
        .toLowerCase()
        .includes(inputText.toLowerCase());
    }
  });

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
      <button onClick={() => setFilterOption(name)}>
        Filtrar por nome: {message}
      </button>
      <button onClick={() => setFilterOption(id)}>
        Filtrar por ID: {message}
      </button>
      <button onClick={() => setFilterOption("all")}>Resetar Filtro</button>

      <TableWrapper>
        {handleFilter.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                {tableHead.map((head, index) => {
                  return <td key={index}>{head}</td>;
                })}
              </tr>
            </thead>

            <tbody>
              {handleFilter.map((info, index) => {
                return <SectionComponent key={index} componentInfo={info} />;
              })}
            </tbody>
          </TableBox>
        ) : (
          <>
            <Message image={img} section={message} />
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
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
