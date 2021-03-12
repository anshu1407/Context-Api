import React from 'react';
import { AppBar, Grid, makeStyles, Toolbar } from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Image from '../image/linkedin.png';

const useStyles = makeStyles((theme) => ({
  container:{
      display:"flex",
      flexDirection:"row",
  },
  root:{
    '&.MuiAppBar-colorPrimary':{
      color:"black",
backgroundColor:"white"
    }
  }
}));


const headerOptions=[
    {
      icon: <HomeIcon />,
      title: "Home"
    },
    {
      icon: <NetworkCellIcon />,
      title: "My Network"
    },
    {
      icon: < WorkIcon />,
      title: "Jobs"
    },
    {
      icon: <MessageIcon />,
      title: "Messaging"
    },
    {
      icon: <NotificationsIcon />,
      title: "Notifications"
    },
    {
      icon: <SettingsIcon />,
      title: "Setting"
    }
]

function Header() {
  const { container,root } = useStyles();
    return (
      <AppBar elevation={1} className={root}>
        <Toolbar>
         <Grid container>
         <Grid item xs={7} alignItems="center" className={container}>
          <img src={Image} alt="icon" style={{width:40, marginRight:30}}/>
          <SearchBar />
          </Grid>
          <Grid item xs>
          <HeaderOptions options={headerOptions} />
          </Grid>
         </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default Header;
