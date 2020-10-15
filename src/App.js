import React, {useState} from "react";
import TestInnerHtml from "./components/InnerHtml/TestInnerHtml";
import SecureInnerText from './components/InnerText/SecureInnerText';
import LazyLoading from "./components/LazyLoading/LazyLoading";
import Links from "./components/Links/Links";
import Auth0 from "./components/Auth0/Auth0";
import JWT from "./components/JWT/JWT";
import TestCss from "./components/TestCss/TestCss";
import Audit from "./components/Audit/Audit";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import './App.css';
import {AppBar, Toolbar, Typography, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"; 
import logo from "./images/react.png";

const useStyles=makeStyles({
  appbar:{
    backgroundColor:"white"
  },
  typography1:{
      flex:1,
      height:17
  },
  avatar:{
      height:60,
      width:60,
      position:"relative",
      top:-20
  },
  links:{
    color:"black", 
    margin:"1.5em",

  }
});


function App(){
  const classes=useStyles();
  return(
      <Router>
        <div>
            <div>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <Typography className={classes.typography1}>
                         <Avatar className={classes.avatar} src={logo} />
                         <h1>React Security</h1> 
                    </Typography>
                    <Typography>
                      <a className={classes.links} href="/testInnerText"> Test Inner Text </a>
                      <a className={classes.links} href="/testInnerHtml"> Test Inner Html</a>
                      <a className={classes.links} href="/lazyLoading"> Test Lazy Loading usage</a>
                      <a className={classes.links} href="/jwt"> JWT working </a>
                      <a className={classes.links} href="/links"> Test Links Security </a>
                      <a className={classes.links} href="/auth0"> Auth0 security </a>
                      <a className={classes.links} href="/testCss"> Test Css </a>
                      <a className={classes.links} href="/audit"> Audit </a>    
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

            

            <Switch>
            <Route path="/testInnerText"> <SecureInnerText/>  </Route>
            <Route path="/testInnerHtml"> <TestInnerHtml />  </Route>
            <Route path="/lazyLoading"> <LazyLoading/>  </Route>
            <Route path="/jwt"> <JWT/>  </Route>
            <Route path="/links"> <Links/>  </Route>
            <Route path="/auth0"> <Auth0/>  </Route>
            <Route path="/testCss"> <TestCss/>  </Route>
            <Route path="/audit"> <Audit/>  </Route>
              
            </Switch>
            
        </div>
      </Router>
    )
}

export default App;