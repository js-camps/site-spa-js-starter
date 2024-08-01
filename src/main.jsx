import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { LoadingComponent } from "./components/common";


import ExampleList from "./components/ExampleListComponent"


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <React.StrictMode>
          <Route path="/login" component={LoginPage} />
          <Route
              path="/"
              exact
              component={() => <HomePage LoadingComponent={LoadingComponent} />}
          />
          <Route path="/items">
              <ExampleList />
          </Route>
      </React.StrictMode>
    </Router>,
)
