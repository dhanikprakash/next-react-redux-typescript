import * as searchQueryActions from "../actions/searchQueryActions";
import searchQueryReducer from "./searchQueryReducer";

it("should add searchKey when passed CREATE_SEARCH", () => {
    // arrange
    const initialState = {
        searchKey: "",
        results: {},
    };

    const searchKey = "John";

    const action = searchQueryActions.searchQueryActions(searchKey);
    // act
    const newState = searchQueryReducer(initialState.searchKey, action);

    // assert
    expect(newState).toEqual(searchKey);
});
