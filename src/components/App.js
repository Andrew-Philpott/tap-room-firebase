import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { BeerDetail } from "./Beer/BeerDetail";
import { BeerList } from "./Beer/BeerList";
import { NewBeerForm } from "./Beer/NewBeerForm";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { EditBeerForm } from "./Beer/EditBeerForm";
import { PrivateRoute } from "./PrivateRoute";
import { Account } from "./Account/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/ontap" component={BeerList} />
          <Route exact path="/new" component={NewBeerForm} />
          <Route exact path="/beers/edit/:id" component={EditBeerForm} />
          <Route exact path="/about" />
          <PrivateRoute
            exact
            path="/account"
            component={Account}
          ></PrivateRoute>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
