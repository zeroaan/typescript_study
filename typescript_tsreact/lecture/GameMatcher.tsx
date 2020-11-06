import * as React from "react";
import { useRouteMatch } from "react-router";
import Lotto from "../6.로또추첨기/Lotto";
import Tictactoe from "../7.틱택토/TicTacToe";
import MineSearch from "../8.지뢰찾기/MineSearch";

const GameMatcher = () => {
  const match = useRouteMatch<{ name: string }>();
  // const location = useLocation();
  // const history = useHistory();

  if (!match) {
    return <div>일치하는 게임이 없습니다.</div>;
  }
  // 주소 뒤에 붙는 쿼리스트링을 가져올 수 있음
  // let urlSearchParams = new URLSearchParams(location.search.slice(1));
  // console.log(urlSearchParams.get("query"));
  if (match.params.name === "lotto-generator") {
    return <Lotto />;
  } else if (match.params.name === "tictactoe") {
    return <Tictactoe />;
  } else if (match.params.name === "mine-search") {
    return <MineSearch />;
  } else {
    return <div>일치하는 게임이 없습니다.</div>;
  }
};

export default GameMatcher;
