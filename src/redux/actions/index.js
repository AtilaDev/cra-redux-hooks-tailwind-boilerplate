import axios from "axios";

// Action Types
export const DUMMY_ACTION = "DUMMY_ACTION";
export const DUMMY_FETCH = "DUMMY_FETCH";

// Action Creators
export function dummy_action() {
  return {
    type: DUMMY_ACTION
  };
}

// Thunk
export function dummy_fetch() {
  return async dispatch => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;

    dispatch({
      type: DUMMY_FETCH,
      payload: data
    });
  };
}
