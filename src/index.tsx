import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from "./redux/reducers/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore({
  search: {query: ''} ,
  searchResults: {
  resultCount: 0, 
  results: [{
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
    });



ReactDOM.render(

 <ReduxProvider store={store}>
   <CssBaseline />
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
