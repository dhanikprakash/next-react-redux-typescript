import { Results } from './../../../models/models';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

type Actions = { type: string, payload: Results }

export default function searchResultReducer(
  state = initialState.searchResults,
  action: Actions
): any {
  switch (action.type) {
    case types.LOAD_RESULT_SUCCESS:
      return {...state, 
        resultCount: action.payload.resultCount, 
        results: state.results.concat(action.payload.results)}
    default:
      return state;
  }
}
