import * as types from '../actionTypes';
import * as searchQueryActions from '../searchQueryActions';

describe('createSearch', () => {
  it('should create a CREATE_SEARCH action', () => {
    //arrange
    const search = {query: 'John'};
    const expectedAction = {
      type: types.CREATE_SEARCH,
      action: search,
    };

    //act
    const action = searchQueryActions.searchQueryActions(search);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
