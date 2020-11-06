import { ADD_POST, AddPostAction } from "../actions/post";

const initialState: string[] = [];

type PostReducerActions = AddPostAction;
const postReducer = (
  prevState = initialState,
  action: PostReducerActions
): string[] => {
  switch (action.type) {
    case ADD_POST:
      return [...prevState];
    default:
      return prevState;
  }
};

export default postReducer;
