import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import ExampleList from "./components/ExampleListComponent"
import Login from "./components/LoginComponent";
import Home from "./components/HomeComponent";

// import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
// import { config } from "./utils/oktaConfig";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <React.StrictMode>
          {/*<Security {...config}>*/}
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              {/*<Route path="/implicit/callback" component={LoginCallback} />*/}
              <Route path="/items">
                  <ExampleList />
              </Route>
          {/*</Security>*/}
      </React.StrictMode>
    </Router>,
)
