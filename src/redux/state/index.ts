import { VisibilityFilters } from "@/types/redux";

export interface FTodo {
  text: string;
  complete: boolean;
}

export interface FState {
  visibilityFilter: VisibilityFilters;
  todoList: FTodo[];
}

export const initialState: FState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todoList: [],
};
