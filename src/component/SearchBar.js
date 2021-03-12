import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { fade, Grid, InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputStyle:{
        border: '1px solid black',
        width: 350,
        borderRadius: 5,
        padding:3,
        height:40
    },
    margin:{
        marginRight:5,
    }
}));

const SearchBar=()=>{
    const { inputStyle, margin} = useStyles();
    return (
        <Grid container alignItems="center" className={inputStyle} >
            <InputBase
            startAdornment={<SearchIcon className={margin}/>}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
    )
}

export default SearchBar
