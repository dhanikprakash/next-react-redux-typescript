import * as types from "../actions/actionTypes";
import initialState from "./initialState";
type Actions = { type: string, searchKey: string }

export default function searchQueryReducer(
  state: string = initialState.searchKey,
  action: Actions
) {
  switch (action.type) {
    case types.CREATE_SEARCH:
      return action.searchKey;
    default:
      return state;
  }
}
