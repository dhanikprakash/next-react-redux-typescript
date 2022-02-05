import { handleResponse } from './apiUtils';
import {Results} from '../../models/models';

const baseUrl = 'https://itunes.apple.com/';
const limit = 10;

export function getResults(offset:number, searchKey:string): Promise<Results> {
    return fetch(baseUrl+`search?media=music&offset=${offset}&limit=${limit}&term=${searchKey}`)
      .then(handleResponse)

  }