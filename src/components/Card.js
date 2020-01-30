import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dummy_action, dummy_fetch } from "../redux/actions";

function Card() {
  const dummy = useSelector(state => state.dummy);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div className="m-10 flex flex-row">
      <div className="w-64 p-6 rounded shadow-2xl text-lg">
        <h1 className="flex justify-center font-bold mb-2">
          Atila Boilerplate
        </h1>
        <ul>
          <li>- Create React App</li>
          <li>- React Hooks</li>
          <li>- Axios</li>
          <li>- Redux</li>
          <li>- Redux devTools</li>
          <li>- TailwindCSS</li>
        </ul>
        <div className="flex flex-col flex items-center">
          <p className="my-2 font-bold text-3xl">{dummy}</p>
          <button
            onClick={() => dispatch(dummy_action())}
            className="px-5 py-1 rounded bg-red-700 text-white hover:bg-red-500 focus:outline-none">
            Add
          </button>
          <button
            onClick={() => dispatch(dummy_fetch())}
            className="px-4 py-1 mt-4 rounded bg-red-700 text-white hover:bg-red-500 focus:outline-none">
            Fetch
          </button>
        </div>
      </div>

      <div className="ml-10 w-64 p-6 rounded shadow-2xl text-lg">
        <h1 className="flex justify-center font-bold mb-2">Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>- {user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
