import React, { Component } from "react";
import UserList from "./components/users.list";
import UserDetail from "./components/users.detail";
import injectSheet from "react-jss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.style.js";

/**
 * @description - Render the App class.
 * @returns {Node} - HTML code.
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <UserList />
          </Route>
          <Route path="/user/:id">
            <UserDetail />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default injectSheet(styles)(App);
