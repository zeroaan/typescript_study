import * as React from "react";
import { useReducer, createContext, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
};

interface Context {
  tableData: number[][];
  halted: boolean;
  dispatch: React.Dispatch<ReducerActions>;
}

export const TableContext = createContext<Context>({
  tableData: [],
  halted: true,
  dispatch: () => {},
});

interface ReducerState {
  tableData: number[][];
  timer: number;
  result: string;
  halted: boolean;
}

const initialState: ReducerState = {
  tableData: [],
  timer: 0,
  result: "",
  halted: true,
};

const plantMine = (row: number, cell: number, mine: number): number[][] => {
  const candidate = Array(row * cell)
    .fill(null)
    .map((arr, i) => {
      return i;
    });
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData: number[] = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }
  return data;
};

const START_GAME = "START_GAME" as const;
const OPEN_CELL = "OPEN_CELL" as const;
const CLICK_MINE = "CLICK_MINE" as const;
const FLAG_CELL = "FLAG_CELL" as const;
const QUESTION_CELL = "QUESTION_CELL" as const;
const NORMALIZE_CELL = "NORMALIZE_CELL" as const;

interface StartGameAction {
  type: typeof START_GAME;
  row: number;
  cell: number;
  mine: number;
}
export const startGame = (
  row: number,
  cell: number,
  mine: number
): StartGameAction => {
  return { type: START_GAME, row, cell, mine };
};

interface OpenCellAction {
  type: typeof OPEN_CELL;
  row: number;
  cell: number;
}
export const openCell = (row: number, cell: number): OpenCellAction => {
  return { type: OPEN_CELL, row, cell };
};

interface ClickMineAction {
  type: typeof CLICK_MINE;
  row: number;
  cell: number;
}
export const clickMine = (row: number, cell: number): ClickMineAction => {
  return { type: CLICK_MINE, row, cell };
};

interface FlagCellAction {
  type: typeof FLAG_CELL;
  row: number;
  cell: number;
}
export const flagCell = (row: number, cell: number): FlagCellAction => {
  return { type: FLAG_CELL, row, cell };
};

interface QuestionCellAction {
  type: typeof QUESTION_CELL;
  row: number;
  cell: number;
}
export const questionCell = (row: number, cell: number): QuestionCellAction => {
  return { type: QUESTION_CELL, row, cell };
};

interface NormalizeCellAction {
  type: typeof NORMALIZE_CELL;
  row: number;
  cell: number;
}
export const normalizeCell = (
  row: number,
  cell: number
): NormalizeCellAction => {
  return { type: NORMALIZE_CELL, row, cell };
};

type ReducerActions =
  | StartGameAction
  | OpenCellAction
  | ClickMineAction
  | FlagCellAction
  | QuestionCellAction
  | NormalizeCellAction;
const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
      };
    }
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      let around: number[] = [];
      if (tableData[action.row - 1]) {
        around = around.concat(
          tableData[action.row - 1][action.cell - 1],
          tableData[action.row - 1][action.cell],
          tableData[action.row - 1][action.cell + 1]
        );
      }
      around = around.concat(
        tableData[action.row][action.cell - 1],
        tableData[action.row][action.cell + 1]
      );
      if (tableData[action.row + 1]) {
        around = around.concat(
          tableData[action.row + 1][action.cell - 1],
          tableData[action.row + 1][action.cell],
          tableData[action.row + 1][action.cell + 1]
        );
      }
      const count: number = around.filter((v) =>
        [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
      ).length;
      tableData[action.row][action.cell] = count;
      return { ...state, tableData };
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return { ...state, tableData, halted: true };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.MINE) {
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.FLAG;
      }
      return { ...state, tableData };
    }
    case QUESTION_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.QUESTION;
      }
      return { ...state, tableData };
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
        tableData[action.row][action.cell] = CODE.MINE;
      } else {
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return { ...state, tableData };
    }
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<ReducerState, ReducerActions>
  >(reducer, initialState);
  const { tableData, halted, timer, result } = state;

  const value = useMemo(
    () => ({
      tableData,
      halted,
      dispatch,
    }),
    [tableData, halted]
  );

  return (
    <>
      <TableContext.Provider value={value}>
        <Form />
        <div>{timer}</div>
        <Table />
        <div>{result}</div>
      </TableContext.Provider>
    </>
  );
};

export default MineSearch;
