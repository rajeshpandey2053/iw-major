import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Login from '../Login/Login';
import Register from '../Register/Register';

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes