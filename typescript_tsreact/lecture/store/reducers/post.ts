import produce from "immer";
import { ADD_POST, AddPostAction } from "../actions/post";

const initialState: string[] = [];

type PostReducerActions = AddPostAction;
const postReducer = (
  prevState = initialState,
  action: PostReducerActions
): string[] => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case ADD_POST:
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

export default postReducer;
