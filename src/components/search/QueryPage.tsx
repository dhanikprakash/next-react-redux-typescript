import * as React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './searchStyles';
import { useDispatch } from 'react-redux';
import { searchQueryActions } from '../../redux/actions/searchQueryActions';
import { Search } from '../../../models/models';


const QueryPage: React.FC = () => {
    const [raised, setRaised] = useState<boolean>(false);
    const classes: Record<'root' | 'title' | 'pos', string> = useStyles();
    const [searhText, setSearchText] = useState<string>('');
    const toggleRaised = (): void => setRaised(!raised);
    const dispatch = useDispatch();

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        console.log('Dispatch Search Query: ' + searhText);
        const search: Search = { query:searhText.replace(/ /g, '+') };
        dispatch(searchQueryActions(search))
    };
   
    return (
        <>
            <Card
                className={classes.root}
                onMouseOver={toggleRaised}
                onMouseOut={toggleRaised}
                raised={raised}
            >
                <CardContent>
                    <Typography variant='h5' component='h2'>
                        Next Front-End Search - Apple API
          </Typography>
                    <Typography
                        className={classes.title}
                        color='textSecondary'
                        gutterBottom
                    >
                        React/Redux/Thunk/Node/Styled component/FP/Jest/Material UI
          </Typography>

                    <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                        <TextField
                            id='standard-basic'
                            onChange={onSearchChange}
                            label='Artist/Album/Song'
                        />
                        <Button variant='contained' color='primary' type='submit'>
                            Search
            </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}
export default QueryPage;