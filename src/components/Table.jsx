import { useState } from "react";
import PropTypes from "prop-types";
import { Message } from "./messages/messages.jsx";
import { TableBox, TableWrapper } from "./styles/tables.js";
import { Filters } from "./filters.jsx";

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
}) {
  const [infoFiltered, setInfoFiltered] = useState([]);

  return (
    <>
      <Filters setInfoFiltered={setInfoFiltered} infoSection={infoSection} />

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
  filterName: PropTypes.string.isRequired,
  filterPages: PropTypes.string,
};
