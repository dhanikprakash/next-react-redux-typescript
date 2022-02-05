import * as types from "./actionTypes";
import { Search } from "../../../models/models";

type Actions = { type: string, search: Search }

export const searchQueryActions = (search: Search): Actions => {
  return { type: types.CREATE_SEARCH, search: search };
}