import * as searchQueryActions from "../actions/searchQueryActions";
import searchQueryReducer from "./searchQueryReducer";

it("should add searchKey when passed CREATE_SEARCH", () => {
    // arrange
    const initialState = {
        search: { query: ''},
        results: {},
    };

    const search = {query: 'John'};

    const action = searchQueryActions.searchQueryActions(search);
    // act
    const newState = searchQueryReducer(initialState.search, action);

    // assert
    expect(newState).toEqual(search);
});
