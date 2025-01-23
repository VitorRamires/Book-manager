import { useState, useEffect } from "react";
import { InputFilter } from "../components/styles/tables.js";
import lupa from "../img/lupa.svg";
import PropTypes from "prop-types";

export function Filters({ setInfoFiltered, infoSection }) {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const handleFilter = infoSection.filter((info) =>
      Object.keys(info)
        .filter((key) => key !== "date")
        .some((key) => {
          return info[key]
            .toString()
            .toLowerCase()
            .includes(inputText.toLowerCase());
        })
    );
    setInfoFiltered(handleFilter);
  }, [inputText, infoSection, setInfoFiltered]);

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
    </>
  );
}

Filters.propTypes = {
  setInfoFiltered: PropTypes.func.isRequired,
  infoSection: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  infoFiltered: PropTypes.array.isRequired,
};
