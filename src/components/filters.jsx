import {
  InputFilter,
  ButtonsFilterWrapper,
} from "../components/styles/tables.js";
import lupa from "../img/lupa.svg";
import PropTypes from "prop-types";

export function Filters({
  inputText,
  setInputText,
  buttonActive,
  name,
  handleFilter,
  id,
  message,
}) {

  

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

      <ButtonsFilterWrapper>
        <button
          className={buttonActive === name ? "activated-button" : ""}
          onClick={() => handleFilter(name)}
        >
          Filtrar por nome: {message}
        </button>
        <button
          className={buttonActive === id ? "activated-button" : ""}
          onClick={() => handleFilter(id)}
        >
          Filtrar por ID: {message}
        </button>
        <button
          className={buttonActive === "all" ? "activated-button" : ""}
          onClick={() => handleFilter("all")}
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
