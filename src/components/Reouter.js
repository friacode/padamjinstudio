import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Admin from 'routes/Admin';
import Profile from 'routes/Profile';
import Gallery from 'routes/Gallery';
import Navigation from 'components/Navigation';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  )
};

export default AppRouter;