import { Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    iconHover:{
        '&:hover': {
            color: "grey",
           },
           cursor:"pointer",
    },
    container:{
        display:"flex",
        flexDirection:"row",
    },
}));

const HeaderOptions = ({ options, flexStyle}) => {
    const {iconHover, container} = useStyles();
    return (
        <Grid container justify="space-between" className={container}>
           {options.length && options.map((option) => 
               <Grid className={clsx(flexStyle, iconHover)}>
               <Grid style={{color: option?.color, margin:5}}>{option.icon}</Grid>
                <Typography>{option.title}</Typography>
               </Grid>
           )}
        </Grid>
    )
}

export default HeaderOptions
