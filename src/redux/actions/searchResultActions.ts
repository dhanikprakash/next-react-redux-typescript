import * as types from "./actionTypes";
import * as searchApi from "../../api/searchApi";
import { SearchResult } from "../../../models/Results";

type Actions = { type: string, results: SearchResult }

export const loadResultSuccess = (results: SearchResult): Actions => {
  return { type: types.LOAD_RESULT_SUCCESS, results };
}

export const loadResults = (offSet: number, limit: number, searchKey: string): any => {
  return async function (dispatch: any) {
    try {
      const results = await searchApi.getResults(offSet, limit, searchKey);
      dispatch(loadResultSuccess(results));
    } catch (error) {
      // In real app, dispatch error handlers.
      console.log("Api call error");
    }
  };
}
