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

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

interface ReducerState {
  tableData: string[];
  timer: number;
  result: string;
}

const initialState: ReducerState = {
  tableData: [],
  timer: 0,
  result: "",
};

export const START_GAME = "START_GAME" as const;

interface StartGameAction {
  type: typeof START_GAME;
  row: number;
  cell: number;
  mine: number;
}

type ReducerActions = StartGameAction;
const reducer = (state: ReducerState, action: ReducerActions) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    tableData: state.tableData, dispatch;
  }, [state.tableData]);

  return (
    <>
      <TableContext.Provider value={{ value }}>
        <Form />
        <div>{state.timer}</div>
        <Table />
        <div>{state.result}</div>
      </TableContext.Provider>
    </>
  );
};

export default MineSearch;
