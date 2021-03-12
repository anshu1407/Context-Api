import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { userData } from '../firebase/authentication';
import RouteConstant from '../routes/RouteConstants';
import Feeds from './Feeds';
import Header from './Header';
import Posts from './Posts';
import SideBar from './SideBar';
const useStyles= makeStyles((theme)=>({
  container:{
    marginTop: 60,
    paddingTop: 20,
    marginLeft: 10, 
  },
}));

const id = localStorage.getItem("LoggedinId");

console.log(id);

const Home = ({history})=> {
  const { container }= useStyles();
  const [userDetails, setUserDetails]= useState({});

  const getUserDetails= async()=>{
    const res= await userData(id);
    if(res){
      setUserDetails(res);
    }else{
      console.log('error');
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [])

    return (
      <>
        <Grid style={{backgroundColor: "#f3f2ef"}}>
        <Header />
            <Grid container className={container}>
            <Grid item xs={2} style={{marginRight: 15 }}>
              <SideBar userDetails={userDetails}/>
            <h1>Home Page sidebar</h1>
            <br/>
            <span
              onClick={() => history.push(
                `${RouteConstant.NewsList.path}`,
              )}>NewsList</span>
            </Grid>
            <Grid item xs={7}style={{marginRight: 15}}>
              <Posts />
            </Grid>
            <Grid item xs style={{marginRight: 10}}>
              <Feeds />
            </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Home;
