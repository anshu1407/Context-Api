import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { signIn } from '../firebase/authentication';
import RoutesConstants from '../routes/RouteConstants';

const useStyles = makeStyles(() => ({
  heading: {
    fontWeight: "bold",
  },
  root: {
    marginTop: 200,
  },
  margin: {
    marginTop: 10,
    marginBottom: 10
  },
}))
const initialState={
  email:'',
  password:'',
}
const Login = ({history}) => {
  const { heading, root, margin } = useStyles();
  const [userDetails, setUserDetails]= useState(initialState);

  const handleChange= (e)=>{
    const {name, value}= e.target;
    setUserDetails({...userDetails,[name]:value});
  };

  const handleLoginForm= async()=>{
    const user= await signIn(userDetails.email, userDetails.password);
    if(user.uid){
      console.log(user, '--------------------->user');
      localStorage.setItem('token', user.refreshToken);
      localStorage.setItem('LoggedinId', user.uid);
      history.push(`${RoutesConstants.Dashboard.path}`);
    }else{
      console.log( '--------------------->error');
    }
  }
  return (
    <Grid container justify="center" className={root}>
      <Grid item xs={0} sm={4} lg={4}/>
      <Grid item xs={12} sm={4} lg={4} style={{border: "1px solid grey",borderRadius:5, padding:20}}>
        <Typography className={heading}>Email</Typography>
        <TextField
          placeholder="Email"
          fullWidth
          size="small"
          variant="outlined"
          className={margin}
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />
        <Typography className={heading}>Password</Typography>
        <TextField
          type="password"
          placeholder="Password"
          size="small"
          variant="outlined"
          fullWidth
          className={margin}
          name="password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <Grid container justify="center">
        <Button
        variant="contained"
        color="primary"
        className={margin}
        onClick={handleLoginForm}>
          Login
          </Button>
        </Grid>
      <Grid container alignItems="center" className={margin}>
      <Typography>Don't have an account?</Typography>
        <Button
        type="submit"
        component={Link}
        to={`${RoutesConstants.SignUp.path}`}
        color="primary">SignUp</Button>
      </Grid>
      </Grid>
      <Grid item  xs={0} sm={4} lg={4}/>
    </Grid>
  )
}

export default Login;
