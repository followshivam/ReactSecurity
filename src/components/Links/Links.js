import React from 'react';
import UnsecureLinks from "./UnsecureLinks";
import SecureLinks from "./SecureLinks";
import {BrowserRouter as Router, Switch, 
    Route, Redirect, Link} from "react-router-dom";


const App = () => {
    
    return (
        <Router>
        <div>
            React Javascript URLs <br/>

            
            <Switch>
                <Route path="/links/unsecureLinks">
                    <a href="/links/secureLinks"> Test Secure Links/Buttons refs </a> 
                    <UnsecureLinks/> 
                </Route>
                <Route path="/links/secureLinks">
                    <a href="/links/unsecureLinks"> Test Unsecure Links/Buttons refs </a> <br/>
                    <SecureLinks/> 
                </Route>
                <Route path="/">
                    <a href="/links/unsecureLinks"> Test Unsecure Links/Buttons refs </a> <br/>
                    <a href="/links/secureLinks"> Test Secure Links/Buttons refs </a>
                </Route>
            </Switch>

            
        </div>
        </Router>
    )
}

export default App
