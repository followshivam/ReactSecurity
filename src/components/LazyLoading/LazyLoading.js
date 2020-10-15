import React, {lazy, Suspense} from 'react';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import "../../App.css";
// import Dashboard from "./Dashboard";
// import Customers from "./Customers";

const Dashboard = lazy(()=> import ("./Dashboard"));
const Customers = lazy(()=> import ("./Customers"));


function App() {
  const isAdmin=localStorage.getItem('role')==="ADMIN";
  return (
    <Router> 
    <div>
        <Navbar/>
        <div className="content">
          <h2>LAZY LOADING: to hide files withour access</h2>
          <h5>User Role:  {isAdmin? "Admin" : "User"}  </h5>
          <Suspense fallback={<div> Loading Page... </div>}>
          <Switch class="switch"> 
            <Route path="/lazyLoading/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/lazyLoading/customers">
            { isAdmin? <Customers/>: <Redirect to="/dashboard" />}
              
            </Route>
          </Switch>
          </Suspense>
        </div>
    </div>
    </Router>
  );
}

export default App;
