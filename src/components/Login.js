import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  mainContent: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
  },
  input: {
    borderBottom: "white",
    color: "white",
  },
});

export const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const auth = firebase.auth;
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        setTimeout(null, 50);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <div className={classes.mainContent}>
      <div className="col-lg-8 offset-lg-2">
        <br></br>
        <h2>Login</h2>
        <br></br>
        <form name="form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              className={"form-control"}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <span style={{ fontSize: "large", marginRight: "10" }}>
              No Account?
            </span>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "20px",
              }}
              href="/register"
              className="btn btn-link"
            >
              Register
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                float: "right",
              }}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
