import * as React from "react";
import { useCallback, useContext, memo, useMemo } from "react";
import { CODE, TableContext } from "./MineSearch";
import {
  openCell,
  clickMine,
  flagCell,
  questionCell,
  normalizeCell,
} from "./actions";

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
    case CODE.CLICKED_MINE:
      return {
        background: "red",
      };
    case CODE.OPENED:
      return {
        background: "white",
      };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: "orange",
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: "yellow",
      };
    default:
      return {
        background: "white",
      };
  }
};
const getTdText = (code: number): string | number => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "";
    case CODE.CLICKED_MINE:
      return "@";
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return "!";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return "?";
    default:
      return code || "";
  }
};

const Td: React.FC<Props> = ({ rowIndex, cellIndex }) => {
  const { tableData, halted, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch(openCell(rowIndex, cellIndex));
        return;
      case CODE.MINE:
        dispatch(clickMine(rowIndex, cellIndex));
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch(flagCell(rowIndex, cellIndex));
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          dispatch(questionCell(rowIndex, cellIndex));
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          dispatch(normalizeCell(rowIndex, cellIndex));
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return useMemo(
    () => (
      <>
        <td
          style={getTdStyle(tableData[rowIndex][cellIndex])}
          onClick={onClickTd}
          onContextMenu={onRightClickTd}
        >
          {getTdText(tableData[rowIndex][cellIndex])}
        </td>
      </>
    ),
    [tableData[rowIndex][cellIndex], halted]
  );
};

export default memo(Td);
