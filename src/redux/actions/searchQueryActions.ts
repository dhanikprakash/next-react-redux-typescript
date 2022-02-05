import * as types from './actionTypes';
import { Search } from '../../../models/models';

type Actions = { type: string, payload: Search }

export const searchQueryActions = (search: Search): Actions => {
  return { type: types.CREATE_SEARCH, payload: search };
}