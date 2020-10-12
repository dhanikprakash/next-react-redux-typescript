import { handleResponse } from "./apiUtils";
import {SearchResult} from "../../models/Results";

const baseUrl = "http://localhost:3001/api/";

export function getResults(offset:number, limit:number, searchKey:string): Promise<SearchResult> {
    return fetch(baseUrl+`search?media=music&offset=${offset}&limit=${limit}&term=${searchKey}`)
      .then(handleResponse)

  }