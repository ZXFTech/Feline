export interface FAction {
  type: string;
  payload: any;
}

export enum VisibilityFilters {
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE",
  SHOW_ALL = "SHOW_ALL",
}
