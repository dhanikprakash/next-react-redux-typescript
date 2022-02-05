import * as types from "./actionTypes";
import * as searchApi from "../../api/searchApi";
import { Results, Search } from "../../../models/models";

type Actions = { type: string, results: Results }

export const loadResultSuccess = (results: Results): Actions => {
  return { type: types.LOAD_RESULT_SUCCESS, results };
}

export const loadResults = (offSet: number, search: Search): any => {
  return async function (dispatch: any) {
    try {
      const results = await searchApi.getResults(offSet, search.query);
      dispatch(loadResultSuccess(results));
    } catch (error) {
      // In real app, dispatch error handlers.
      console.log("Api call error");
    }
  };
}
