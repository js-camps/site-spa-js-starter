// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route } from "react-router-dom";
import Login from "./LoginComponent/index.jsx";
import Home from "./HomeComponent/Home.jsx";
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

