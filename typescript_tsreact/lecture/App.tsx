import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./store/actions/user";
import { RootState } from "./store/reducers";
import { UserState } from "./store/reducers/user";

const App = () => {
  const { isLoggingIn, data } = useSelector<RootState, UserState>(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const onClickLogin = () => {
    dispatch(
      logIn({
        id: "zero",
        password: "비밀",
      })
    );
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div>
        {isLoggingIn ? (
          <div>로그인 중</div>
        ) : data ? (
          <div>{data.nickname}</div>
        ) : (
          "로그인 해주세요."
        )}
        {!data ? (
          <button onClick={onClickLogin}>로그인</button>
        ) : (
          <button onClick={onClickLogout}>로그아웃</button>
        )}
      </div>
    </>
  );
};

export default App;
