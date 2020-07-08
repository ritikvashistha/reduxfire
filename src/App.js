import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home/Home.component";
import Navbar from "./components/Navbar/Navbar.component";
import SignIn from "./components/SignIn/SignIn.component";
import SignUp from "./components/SignUp/SignUp.component";

import { auth } from "./configs/firebase.config";
import { setCurrentUser, clearCurrentUser } from "./redux/auth/auth.actions";
import ImagesPage from "./components/ImagesPage/ImagesPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import PostssPage from "./components/PostsPage/PostsPage.jsx";
import AlbumsPage from "./components/AlbumsPage/AlbumsPage.jsx";
function App({ currentUser, setCurrentUser, clearCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        clearCurrentUser();
      }
    });
    console.log(currentUser);
    return () => unsubscribeFromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />

        <PrivateRoute path="/homepage" exact component={HomePage} />
        <PrivateRoute path="/imagespage" exact component={ImagesPage} />
        <PrivateRoute path="/postspage" exact component={PostssPage} />
        <PrivateRoute path="/albumspage" exact component={AlbumsPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
