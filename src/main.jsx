import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import { HomePage } from './components/pages/Home';
import { LoadingComponent } from "./components/common";


import ExampleList from "./components/ExampleListComponent"
import Login from "./components/LoginComponent";



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <React.StrictMode>
          <Route path="/login" component={Login} />
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
