import searchResultReducer from "./searchResultReducer";
import * as types from "../actions/actionTypes";
import { SearchResult, Result } from "../../../models/Results";

it("should update results when passed LOAD_RESULT_SUCCESS", () => {
    // arrange
    const initialState = {
        searchKey: "",
        results: {
            resultCount: 0, results: [{
                "wrapperType": "track",
                "kind": "song",
                "artistId": 208469,
                "collectionId": 1453889314,
                "trackId": 1453889319,
                "artistName": "John Denver",
                "collectionName": "The Essential John Denver",
                "trackName": "Take Me Home, Country Roads",
                "collectionCensoredName": "The Essential John Denver",
                "trackCensoredName": "Take Me Home, Country Roads (Original Version)",
                "artistViewUrl": "https://music.apple.com/us/artist/john-denver/208469?uo=4",
                "collectionViewUrl": "https://music.apple.com/us/album/take-me-home-country-roads-original-version/1453889314?i=1453889319&uo=4",
                "trackViewUrl": "https://music.apple.com/us/album/take-me-home-country-roads-original-version/1453889314?i=1453889319&uo=4",
                "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/f6/78/89/f67889ec-2f3a-fbeb-8595-a4b5f548907a/mzaf_9052433173588669699.plus.aac.p.m4a",
                "artworkUrl30": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/14/63/d4/1463d42d-c025-f214-dcd9-effc8ad8c536/source/30x30bb.jpg",
                "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/14/63/d4/1463d42d-c025-f214-dcd9-effc8ad8c536/source/60x60bb.jpg",
                "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/14/63/d4/1463d42d-c025-f214-dcd9-effc8ad8c536/source/100x100bb.jpg",
                "collectionPrice": 14.99,
                "trackPrice": 1.29,
                "releaseDate": "1971-01-01T12:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 2,
                "discNumber": 1,
                "trackCount": 18,
                "trackNumber": 3,
                "trackTimeMillis": 190040,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Pop",
                "isStreamable": true
            }]
        },
    };

    const data: SearchResult = {
        resultCount: 1, results: [{
            "wrapperType": "track",
            "kind": "song",
            "artistId": 472054,
            "collectionId": 337970390,
            "trackId": 337970492,
            "artistName": "John Mayer",
            "collectionName": "Battle Studies (Deluxe Version)",
            "trackName": "Half of My Heart",
            "collectionCensoredName": "Battle Studies (Deluxe Version)",
            "trackCensoredName": "Half of My Heart",
            "artistViewUrl": "https://music.apple.com/us/artist/john-mayer/472054?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/half-of-my-heart/337970390?i=337970492&uo=4",
            "trackViewUrl": "https://music.apple.com/us/album/half-of-my-heart/337970390?i=337970492&uo=4",
            "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/Music/3d/6d/98/mzm.zgtpqwtv.aac.p.m4a",
            "artworkUrl30": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d3/c6/b0/d3c6b0e3-9571-9303-8d86-eb75d2c108e5/source/30x30bb.jpg",
            "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d3/c6/b0/d3c6b0e3-9571-9303-8d86-eb75d2c108e5/source/60x60bb.jpg",
            "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/d3/c6/b0/d3c6b0e3-9571-9303-8d86-eb75d2c108e5/source/100x100bb.jpg",
            "collectionPrice": 13.99,
            "trackPrice": 1.29,
            "releaseDate": "1971-01-01T12:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 12,
            "trackNumber": 3,
            "trackTimeMillis": 250343,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Rock",
            "isStreamable": true

        }]
    };

    const action = { type: types.LOAD_RESULT_SUCCESS, results: data };
    // act
    const newState = searchResultReducer(initialState.results, action);

    // assert
    expect(newState).toEqual(data);
});
