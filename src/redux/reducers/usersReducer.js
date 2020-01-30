import { DUMMY_FETCH } from "../actions";

const initialState = [];

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DUMMY_FETCH:
      return action.payload;

    default:
      return state;
  }
}

export default usersReducer;
