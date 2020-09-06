import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

import Home from "../Home/Home";
// import Dashboard from "../Dashboard/Dashboard";
import Feed from "../Dashboard/Feed/Feed";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Logout from "../Logout/Logout";
import PasswordReset from "../PasswordReset/PasswordReset";
import PasswordResetComplete from "../PasswordReset/PasswordResetComplete";
import PostComponent from "../Dashboard/PostComponent";
import ProfileUpdate from "../Profile/ProfileUpdate";
import Explore from "../Dashboard/Explore/Explore";
import PostDetail from "../Dashboard/PostDetail/PostDetail";
import ActivateAccount from "../ActivateAccount/ActivateAccount";
import ChangePasswordView from "../Profile/ChangePassword";

const Routes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/dashboard" component={Feed} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/dashboard/:postSlug" component={PostDetail} />
        <Route exact path="/login" component={Login} props={props} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/change/password" component={ChangePasswordView} />
        <Route exact path="/forget-password" component={PasswordReset} />
        <Route exact path="/new-password" component={PasswordResetComplete} />
        <Route exact path="/try" component={PostComponent} />
        <Route exact path="/activate/:uId/:token" component={ActivateAccount} />
        <Route exact path="/edit-profile" component={ProfileUpdate} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
