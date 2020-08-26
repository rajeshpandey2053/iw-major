import React from "react";
import {Switch, Route} from 'react-router-dom';
import Profile from '../Profile/Profile';


import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Login from '../Login/Login';
import Register from '../Register/Register';


const Routes = (props) => {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/login' component={Login} props={props}/>
                <Route exact path='/register' component={Register} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes;