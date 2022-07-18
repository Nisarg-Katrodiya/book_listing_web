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
  buttonSpace: {
    marginTop: '20px'
  },
  buttonStyle: {
    height: '45px',
    backgroundColor : '#f14d54',
  },
  color: {
    color : '#FFF',
    textDecoration: 'none',
  }
}));

const Login: FC<any> = (): ReactElement => {

  const classes = useStyle();

    return (
      <>
        <Typography variant="h3" sx={{ mb: '40px', display: 'flex', justifyContent: 'center'}}>
          Create an Account
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6" sx={{mb: 2}}>
                  Personal Information
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{mt: 2, mb: 2}}>
                  please enter the following information to create your account.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} >
                    <InputLabel className={classes.inputLabel}>
                      First Name
                    </InputLabel>
                    <TextField 
                      type='text' 
                      size="small"
                      fullWidth
                      variant="outlined" />
                  </Grid>
                  <Grid item xs={6} >
                    <InputLabel className={classes.inputLabel}>
                      Last Name
                    </InputLabel>
                    <TextField
                      type='text'
                      size="small"
                      fullWidth
                      variant="outlined" />
                  </Grid>
                  <Grid item xs={12} >
                    <InputLabel className={classes.inputLabel}>
                      Email Address*
                    </InputLabel>
                    <TextField
                      type='email'
                      size="small"
                      fullWidth
                      variant="outlined" />
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Typography variant="h6" sx={{mb: 2}}>
                  Personal Information
                </Typography>
                <Divider />
                <Grid container spacing={2}>
                  <Grid item xs={6} sx={{mt: 2, mb: 2}}>
                    <InputLabel className={classes.inputLabel}>
                      Password*
                    </InputLabel>
                    <TextField 
                      type='password' 
                      size="small" 
                      variant="outlined" 
                      fullWidth />
                  </Grid>
                  <Grid item xs={6} sx={{mt: 2, mb: 2}}>
                    <InputLabel className={classes.inputLabel}>
                      Confirm Password*
                    </InputLabel>
                    <TextField 
                      type='password' 
                      size="small" 
                      variant="outlined"
                      fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" className={classes.buttonStyle}>
                      <Link to="/" className={classes.color}>
                        Register
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default Login;