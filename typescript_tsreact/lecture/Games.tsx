import * as React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/game/lotto-generator">로또추첨기</Link>
          &nbsp;
          <Link to="/game/tictactoe">틱택토</Link>
          &nbsp;
          <Link to="/game/mine-search">지뢰찾기</Link>
          &nbsp;
          <Link to="/game/index">게임 매쳐</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={GameMatcher} />
            <Route exact path="/game/:name" component={GameMatcher} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Games;
