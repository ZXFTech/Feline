import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "@/redux/store";
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from "@/redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
