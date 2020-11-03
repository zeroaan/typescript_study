import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import TicTacToe from "./TicTacToe";

const Hot = hot(TicTacToe); // HOC

ReactDOM.render(<Hot />, document.querySelector("#root"));
