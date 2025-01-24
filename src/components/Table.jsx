import React from "react";
import PropTypes from "prop-types";
import { Message } from "../components/messages/messages.jsx";
import { TableBox, TableWrapper } from "../components/styles/tables.js";
import { Filters } from "./filters.jsx";

export function Table({
  infoSection,
  img,
  tableHead,
  SectionComponent,
  message,
  name,
  id,
}) {
  const [inputText, setInputText] = React.useState("");
  const [filterOption, setFilterOption] = React.useState("all");
  const [buttonActive, setButtonActive] = React.useState("all");

  function handleFilter(filterOption) {
    localStorage.setItem("filterOption", filterOption);
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
