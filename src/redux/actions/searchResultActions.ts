import * as types from "./actionTypes";
import * as searchApi from "../../api/searchApi";
import { Results, Search } from "../../../models/models";

type Actions = { type: string, payload: Results }

export const loadResultSuccess = (payload: Results): Actions => {
  return { type: types.LOAD_RESULT_SUCCESS, payload };
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
