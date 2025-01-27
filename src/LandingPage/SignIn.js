import React, { useState } from "react";
import apple from "./apple.png";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { withRouter } from "react-router";
import "./_signIn.scss";

import textField from "@material-ui/core/TextField";

const useCustomStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fcfcfb",
  },
}));
function Form(props) {
  const classes = useCustomStyles();
  return <TextField InputProps={{ classes }} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your five a day
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    borderRadius: 0,
    backgroundColor: "unset",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  props.setIsSignedIn(false);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const validateEmail = () => {
    console.log(email.includes("@"));
    console.log(email.includes("."));
    setIsEmailValid(email.includes("@") && email.includes("."));
  };
  const [password, setPassword] = useState("");

  return (
    <div className="main-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={apple} width={"150px"} height={"100px"}></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Hello, there!<br></br>Sign in to start :)
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your email address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              // onBlur waliduje czy email jest ok jak wychodzę z inputa z mailem
              onBlur={() => {
                validateEmail();
              }}
              //jak z niego nie korzystamy to jest domyślnie ustawiony na false i nie wywala błedu
              error={!isEmailValid}
              helperText={
                isEmailValid
                  ? ""
                  : "Oops, something's missing in your email address"
              }
            />
            <TextField
              className="password-input"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="white"
              className={classes.submit}
              onClick={() => {
                // czyim dzieckiem jest SignIn - komponent?
                props.setIsSignedIn(true);
                props.history.push("/main-page");
              }}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default withRouter(SignIn);
