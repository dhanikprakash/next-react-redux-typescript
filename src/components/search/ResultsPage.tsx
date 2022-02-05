import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import shortid from 'shortid';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { toast } from 'react-toastify';
import { useStyles } from './searchStyles';
import { useDispatch, useSelector } from 'react-redux';
import { loadResults } from '../../redux/actions/searchResultActions';
import { SearchState } from '../../redux/reducers/initialState';
import { Results, Search } from '../../../models/models';

interface DefaultState {
  hasMore: boolean,
  offSet: number,
  items: any[]
}
const defaultState: DefaultState = {
  hasMore: false,
  offSet: 0,
  items: [],
};

export default function ResultsPage() {


  const [offSet, setOffSet] = useState<number>(0);
  const classes: Record<'root' | 'title' | 'pos', string> = useStyles();
  const reduxSearch: Search = useSelector((state: SearchState) => state.search);
  const reduxResults: Results = useSelector((state: SearchState) => state.searchResults);
  const [result, setResult] = useState<DefaultState>(defaultState);
  const dispatch = useDispatch();


  useEffect(() => {
    if (reduxSearch !== null && reduxSearch.query === '') {
      //reset when searchKey changes
      setResult(defaultState);
    }
    dispatch(loadResults(offSet, reduxSearch));
  }, [dispatch, reduxSearch, offSet]);

  useEffect(() => {
    if (reduxResults != null && reduxResults.resultCount >= 0) {
      setResult({
        hasMore: reduxResults.results.length > 0,
        offSet: result.offSet + reduxResults.results.length,
        items: reduxResults.resultCount === 0 ? [] : reduxResults.results,
      });
      if (reduxResults.resultCount === 0 &&
        result.offSet === 0 &&
        reduxSearch.query != null &&
        reduxSearch.query !== ''
      ) {
        toast.warn('No Matching Results', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        setResult(defaultState);
      }
    }
  
  }, [reduxResults]);

  const loadMore = () => {
    setOffSet(result.offSet);
  };

  return (
    <>
      <Card className={classes.root} raised={true}>
        <CardContent>
          <div id='scrollableDiv' style={{ height: 600, overflow: 'auto' }}>
            <InfiniteScroll
              dataLength={result.items.length}
              next={loadMore}
              hasMore={result.hasMore}
              loader={<h4>Loading...</h4>}
              scrollableTarget='scrollableDiv'
            >
              <List>
                {result.items.map((item) => (
                  <div key={shortid.generate()}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={item.artworkUrl100}></Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.artistName}
                        secondary={item.trackName + ' - ' + item.collectionName}
                      ></ListItemText>
                    </ListItem>
                    <Divider variant='inset' component='li' />
                  </div>
                ))}
              </List>
            </InfiniteScroll>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
