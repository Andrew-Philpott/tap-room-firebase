import React from "react";
import { Container } from "@material-ui/core";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Account = () => {
  const [user] = useAuthState(firebase.auth());
  if (user) {
    return (
      <>
        <h1 style={{ color: "white" }}>Welcome {user.username}</h1>
        <Container style={{ color: "white", textAlign: "center" }}>
          <h2>Todays deals</h2>
          <h4>Growler for $15</h4>
          <h4>
            Free wings with your purchase <br />
            of $30 in food or beverages
          </h4>
        </Container>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default withFirestore(Account);
