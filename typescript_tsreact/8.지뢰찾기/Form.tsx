import * as React from "react";
import { useState, useCallback, useContext, memo } from "react";
import { TableContext } from "./MineSearch";
import { startGame } from "./actions";

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onchangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (name === "row") {
        setRow(Number(value));
      } else if (name === "cell") {
        setCell(Number(value));
      } else if (name === "mine") {
        setMine(Number(value));
      }
    },
    []
  );
  const onClickBtn = useCallback(() => {
    dispatch(startGame(row, cell, mine));
  }, [row, cell, mine]);

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="세로"
          name="row"
          value={row}
          onChange={onchangeInput}
        />
        <input
          type="number"
          placeholder="가로"
          name="cell"
          value={cell}
          onChange={onchangeInput}
        />
        <input
          type="number"
          placeholder="지뢰"
          name="mine"
          value={mine}
          onChange={onchangeInput}
        />
        <button onClick={onClickBtn}>시작</button>
      </div>
    </>
  );
};

export default memo(Form);
