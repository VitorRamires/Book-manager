import { InputFilter } from "../components/styles/tables.js";
import { ButtonsFilterWrapper } from "../global.js";
import lupa from "../img/lupa.svg";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  headRef,
}) {
  const inputRef = useRef(null);
  const [target, setTarget] = useState();

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

  // Render the filter elements on another div if itself exist
  useEffect(() => {
    if (headRef?.current) {
      setTarget(headRef.current);
    }
  }, [headRef]);

  if (!target) return null;

  return (
    <>
      {createPortal(
        <div className="filters">
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
              Filtrar por nome
            </button>
            <button
              className={buttonActive === id ? "activated-button" : ""}
              onClick={() => handleFilterClick(id)}
            >
              Filtrar por ID
            </button>
            <button
              className={buttonActive === "all" ? "activated-button" : ""}
              onClick={() => handleFilterClick("all")}
            >
              Sem filtros
            </button>
          </ButtonsFilterWrapper>
        </div>,
        document.querySelector(".head")
      )}
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
  headRef: PropTypes.shape({
    current: PropTypes.any,
  }),
};
