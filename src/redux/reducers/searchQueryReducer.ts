import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { Search } from "../../../models/models";
type Actions = { type: string, payload: Search }

export default function searchQueryReducer(
  state = initialState.search,
  action: Actions
): any {
  switch (action.type) {
    case types.CREATE_SEARCH:
      return {...state, query: action.payload.query}
    default:
      return state;
  }
}
