import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Message } from "../components/messages/messages.jsx";
import { TableBox, TableWrapper, SortButton } from "../components/styles/tables.js";
import { Filters } from "./filters.jsx";
import { CreateGlobalContext } from "../context/globalContextBooks.jsx";
import { CreateGlobalAuthors } from "../context/globalContextAuthors.jsx";

/**
 * Component to display table of authors and books
 *
 * @param {Object} props - React component props
 * @param {Array<Object>} props.infoSection - Array of information objects for books and authors
 * @param {string} props.img - URL of the image displayed in the message component
 * @param {Array<string>} props.tableHead - Array of table headers for the book and author list
 * @param {React.ElementType} props.SectionComponent - Component to render each row of the table
 * @param {string} props.message - Message to display when no data is available
 * @param {string} props.name - Name of the filter
 * @param {string} props.id - ID of the filter
 * @returns {JSX.Element}
 */
export function Table({
  infoSection,
  img,
  tableHead,
  SectionComponent,
  message,
  name,
  id,
}) {
  const { setBooks } = useContext(CreateGlobalContext);
  const { setAuthors } = useContext(CreateGlobalAuthors);

  const [inputText, setInputText] = useState("");
  const [filterOption, setFilterOption] = useState("all");
  const [buttonActive, setButtonActive] = useState("all");
  const [sortDirection, setSortDirection] = useState("");

  /**
   * Handles the sorting of the content
   *
   * @param {string} key - The key to sort by
   */
  function handleSort(key) {
    const direction = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(direction);

    const sortedContent = [...infoSection].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    name == "author" ? setAuthors(sortedContent) : setBooks(sortedContent);
  }

  /**
   * Function to manage when option filter is active and working
   *
   * @param {string} filterOption
   * @return {void}
   */
  function handleFilter(filterOption) {
    setFilterOption(filterOption);
    setButtonActive(filterOption);
  }

  const filtredContent = infoSection.filter((info) => {
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
      <Filters
        buttonActive={buttonActive}
        handleFilter={handleFilter}
        setInputText={setInputText}
        name={name}
        id={id}
        inputText={inputText}
        message={message}
      />

      <TableWrapper>
        {filtredContent.length !== 0 ? (
          <TableBox>
            <thead>
              <tr>
                {tableHead.map((head, index) => {
                  return <td key={index}>{head}</td>;
                })}
              </tr>
            </thead>

            <tbody>
              {filtredContent.map((info, index) => {
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

      <SortButton onClick={() => handleSort(name)}>Ordenar {message} por : <strong>{sortDirection === "asc" ? "A-Z" : "Z-A"}</strong> </SortButton>
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
