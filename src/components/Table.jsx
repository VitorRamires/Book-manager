import { Message } from "../components/messages/messages.jsx";
import { TableBox, TableWrapper } from "../components/styles/tables.js";

import PropTypes from "prop-types";

export function Table({ infoSection, img, tableHead, SectionComponent }) {

  return (
    <TableWrapper>
      {infoSection.length !== 0 ? (
        <TableBox>
          <thead>
            <tr>
              {tableHead.map((head, index) => {
                return <td key={index}>{head}</td>;
              })}
            </tr>
          </thead>

          <tbody>
            {infoSection.map((info) => {
              return <SectionComponent key={info.authorId} componentInfo={info} />;
            })}
          </tbody>
        </TableBox>
      ) : (
        <>
          <Message image={img} section="Livro" />
        </>
      )}
    </TableWrapper>
  );
}

Table.propTypes = {
  infoSection: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  tableHead: PropTypes.array.isRequired,
  SectionComponent: PropTypes.elementType.isRequired,
};
