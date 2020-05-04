import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { isLoaded, isEmpty } from "react-redux-firebase";
import firebase from "firebase";

export function PrivateRoute({ children, ...rest }) {
  const [auth] = useAuthState(firebase.auth());
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
