import { DUMMY_ACTION } from "../actions";

const initialState = 0;

function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      return state + 1;

    default:
      return state;
  }
}

export default dummyReducer;
