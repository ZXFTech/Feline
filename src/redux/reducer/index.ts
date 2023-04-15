import { combineReducers } from "@reduxjs/toolkit";
import { FAction, VisibilityFilters } from "@/types/redux";
import { setVisibilityFilter } from "../action";
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "../actionTypes";
import { initialState, FState, FTodo } from "../state";

const todos = (state = [], action: FAction): FTodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          complete: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action: FAction
): VisibilityFilters => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todosList: todos,
});

// 上面等价于
// function todoApp(
//   state = {} as { visibilityFilter?: VisibilityFilters; todoList: FTodo[] },
//   action: FAction
// ): FState {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todoList: todos(state.todoList, action),
//   };
// }

export default todoApp;
