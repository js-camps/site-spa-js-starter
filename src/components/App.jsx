// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/LoginComponent";
import Home from "../components/HomeComponent";
const routes = () => {
    return (
        <>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route></Route>
        </>
    );
};
export default routes;

