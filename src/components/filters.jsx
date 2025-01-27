import {
  InputFilter,
  ButtonsFilterWrapper,
} from "../components/styles/tables.js";
import lupa from "../img/lupa.svg";
import PropTypes from "prop-types";
import { useRef } from "react";


/**
 * Component to display input and buttons filters
 * 
 * @param {Object} props - React component props
 * @param {string} props.inputText - value of input when digited
 * @param {Function} props.setInputText - Method to save the value of inputText
 * @param {string} props.buttonActive - Show wich button filter is active
 * @param {string} props.name - Filter name option
 * @param {string} props.id - Filter id option
 * @param {string} props.message - Show what filter section will display
 * @param {Function} props.handleFilter - Function to show what filter is activated
 * @returns {JSX.Element}
 */
export function Filters({
  inputText,
  setInputText,
  buttonActive,
  name,
  handleFilter,
  id,
  message,
}) {
  const inputRef = useRef(null);

  /**
   * Function to focus when click on button filter
   *
   * @param {string} filterOption
   * @return {void}
   */
  const handleFilterClick = (filterOption) => {
    handleFilter(filterOption);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
          placeholder="Ao selecionar um filtro digite aqui para filtrar"
          ref={inputRef}
        />
        <img src={lupa} alt="" />
      </InputFilter>

      <ButtonsFilterWrapper>
        <button
          className={buttonActive === name ? "activated-button" : ""}
          onClick={() => handleFilterClick(name)}
        >
          Filtrar por nome: {message}
        </button>
        <button
          className={buttonActive === id ? "activated-button" : ""}
          onClick={() => handleFilterClick(id)}
        >
          Filtrar por ID: {message}
        </button>
        <button
          className={buttonActive === "all" ? "activated-button" : ""}
          onClick={() => handleFilterClick("all")}
        >
          Sem filtros
        </button>
      </ButtonsFilterWrapper>
    </>
  );
}

Filters.propTypes = {
  inputText: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  buttonActive: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  name: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string.isRequired,
};
