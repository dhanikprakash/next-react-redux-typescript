import * as types from "./actionTypes";

type Actions = { type: string, searchKey: string }

export const searchQueryActions = (searchKey: string): Actions => {
  return { type: types.CREATE_SEARCH, searchKey: searchKey };
}