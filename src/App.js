import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import Catpage from "./pages/cat-page/cat-page.component";
import LoginSignup from "./pages/login-signup/login-signup.component";
import Header from "./components/header/Header.components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Header currentUser={this.state.currentUser }/>
          <Switch>
            <Route path='/login-signup' component={LoginSignup} />
            <Route path='/category' component={Catpage} />
            <Route path='/' component={Homepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
