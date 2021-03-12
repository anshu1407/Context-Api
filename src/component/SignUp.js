import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react';
import { signUp, uploadSingleFile } from '../firebase/authentication';
import RoutesConstants from  '../routes/RouteConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 200,
    border: "1px solid grey",
    padding: 20,
    borderRadius: 5,
  },
  btnStyle: {
    marginTop: 10,
  }
}))

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  profile:'',
}

const SignUp = ({history}) => {
  const { root, btnStyle } = useStyles();
  const [userDetails, setUserDetails] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleFile = async (event)=>{
    const file= event.target.files[0]
    const fileUrl = await uploadSingleFile(file)
    console.log(fileUrl, '----------------fileUrl');
    setUserDetails({...userDetails, [event.target.name]:fileUrl})
  }

  const handleSubmitForm = async () => {
    console.log(userDetails, '--------------->>>>userDetails');
    const response = await signUp(userDetails.email, userDetails.password, userDetails);
    if(response?.uid){
      console.log(response, '------------------>>> user');
      history.push(`${RoutesConstants.LOGIN.path}`);
    }else{
      console.log('------------------>>> error');
    }
  }

  return (
    <Grid container justify="center">
      <Grid item xs={0} sm={4} lg={4} />
      <Grid item xs={12} sm className={root}>
        <div style={{ display: 'flex' }}>
          <TextField
            label="FirstName"
            placeholder="Enter Firstname"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={userDetails.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <TextField
            label="Lastname"
            style={{ marginLeft: 8 }}
            placeholder="Enter Lastname"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={userDetails.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={userDetails.email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Set Password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={userDetails.password}
          name="password"
          onChange={handleChange}
        />

        <TextField
        type="file"
        label="Profile Pic"
        placeholder="Profile Pic"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        name="profile"
        onChange={handleFile}/>

        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            className={btnStyle}
            onClick={handleSubmitForm}>SignUp</Button>
        </Grid>
      </Grid>
      <Grid item xs={0} sm={4} lg={4} />
    </Grid>
  )
}

export default SignUp
