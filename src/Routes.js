import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./container/loginComponent";
import Dashboard from "./container/dashboardComponent";

function Routes() {
    return (
        <Router>

            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/search" component={Dashboard} exact />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </Router>
    );
}

export default Routes;
