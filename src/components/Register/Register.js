import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, makeStyles, Grid } from "@material-ui/core";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";

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

export const Register = () => {
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then()
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={classes.mainContent}>
      <div className={"col-lg-8 offset-lg-2"}>
        <br></br>
        <h1>Register</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:&nbsp;</label>
            <input type="text" name="email" className={"form-control"} />
          </div>
          <div className="form-group">
            <label>Password:&nbsp;</label>
            <input type="password" name="password" className={"form-control"} />
          </div>
          <div className="form-group">
            <Button
              style={{ backgroundColor: "white", color: "black" }}
              type="submit"
              className="btn btn-primary"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
