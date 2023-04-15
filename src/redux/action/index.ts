import { FAction, VisibilityFilters } from "@/types/redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from "../actionTypes";

const addTodo = (text: string): FAction => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

const toggleTodo = (index: number): FAction => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};

const removeTodo = (index: number): FAction => {
  return {
    type: REMOVE_TODO,
    payload: index,
  };
};

const setVisibilityFilter = (filter: VisibilityFilters): FAction => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter,
  };
};

export { addTodo, toggleTodo, removeTodo, setVisibilityFilter };
