import * as React from "react";
import { useContext } from "react";
import { CODE, TableContext } from "./MineSearch";

interface Props {
  rowIndex: number;
  cellIndex: number;
}

const getTdStyle = (code: number): object => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPENED:
      return {
        background: "white",
      };
    default:
      return {
        background: "white",
      };
  }
};
const getTdText = (code: number): string => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    default:
      return "";
  }
};

const Td: React.FC<Props> = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);

  return (
    <>
      <td style={getTdStyle(tableData[rowIndex][cellIndex])}>
        {getTdText(tableData[rowIndex][cellIndex])}
      </td>
    </>
  );
};

export default Td;
