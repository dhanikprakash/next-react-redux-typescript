import * as types from "./actionTypes";
import * as searchQueryActions from "./searchQueryActions";

describe("createSearch", () => {
  it("should create a CREATE_SEARCH action", () => {
    //arrange
    const searchKey = "John";
    const expectedAction = {
      type: types.CREATE_SEARCH,
      searchKey,
    };

    //act
    const action = searchQueryActions.searchQueryActions(searchKey);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
