import * as types from "./actionTypes";
import * as searchResultActions from "./searchResultActions";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import { Results } from "../../../models/models";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const results = {};
const search = {query: 'John'};
const offSet = 0;

describe("Async Actions", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    describe("Load Results Thunk", () => {
        it("should create LOAD_RESULT_SUCCESS when loading search results", () => {
            fetchMock.mock("*", {
                body: results,
                headers: { "content-type": "application/json" },
            });

            const expectedActions = [{ type: types.LOAD_RESULT_SUCCESS, results }];

            const store = mockStore({ results: {} });
            return store
                .dispatch(searchResultActions.loadResults(offSet, search))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                });
        });
    });
});
