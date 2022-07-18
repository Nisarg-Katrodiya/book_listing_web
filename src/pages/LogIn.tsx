import React, {ReactElement, FC} from "react";
import { Link } from "react-router-dom";

import { 
  Grid, 
  Box, 
  Paper,
  Typography,
  Divider,
  InputLabel, TextField,
  Button,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const useStyle = makeStyles(() => ({
  orderlistStyle: {
    listStylePosition: 'inside',
    margin: 0,
    paddingLeft: 0,
  },
  listStyle: {
    lineHeight: 22 / 14,
    fontSize: '14px',
  },
  textInputEmail: {
    marginBottom: '20px'
  },
  textInputPassword: {
    marginTop: '20px'
  },
  inputLabel: {
    marginBottom: '10px',
    fontSize: '14px',
  },
  inputStyle: {
    width: '350px'
  },
  buttonSpace: {
    marginTop: '20px'
  },
  buttonStyle: {
    height: '45px',
    backgroundColor : '#f14d54',
    marginLeft: '10px'
  },
  color: {
    color : '#FFF',
    textDecoration: 'none'
  }
}));

const Login: FC<any> = (): ReactElement => {

  const classes = useStyle();

    return (
      <>
        <Typography variant="h3" sx={{ mb: '40px', display: 'flex', justifyContent: 'center'}}>
          Login or Create an Account
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h6" sx={{mb: 2}}>
                  New Customer
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{mt: 2, mb: 2}}>
                  Registration is free and easy.
                </Typography>
                <ul className={classes.orderlistStyle}>
                  <li className={classes.listStyle}>Faster checkout</li>
                  <li className={classes.listStyle}>Save muffle shipping addresses</li>
                  <li className={classes.listStyle}>View and track orders and more</li>
                </ul>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h6" sx={{mb: 2}}>
                  Registered Customers
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{mt: 2, mb: 2}}>
                  if you have an account with us, please log in.
                </Typography>
                <div className={classes.textInputEmail}>
                  <InputLabel className={classes.inputLabel}>
                    Email Address*
                  </InputLabel>
                  <TextField type='email' size="small" variant="outlined" className={classes.inputStyle}/>
                </div>
                <div>
                  <InputLabel className={classes.inputLabel}>
                    Password*
                  </InputLabel>
                  <TextField type='password' size="small" variant="outlined" className={classes.inputStyle}/>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.buttonSpace}>
            <Grid item xs={6}>
              <Button variant="contained" className={classes.buttonStyle}>
              <Link to="/register" className={classes.color}>
                  Create an Account
                </Link>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" className={classes.buttonStyle}>
                <Link to="/" className={classes.color}>
                  Login
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default Login;