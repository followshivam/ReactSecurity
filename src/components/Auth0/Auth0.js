import React, {useState} from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import "../../App.css";
import {useAuth0} from "@auth0/auth0-react";


function App() {

    const {isLoading} =useAuth0();
    
    if(isLoading) return <div> Loading...</div>

    return (
    <>
     <br/> <br/> <br/>
     O- AUth Implementation for React Security <br/>
     <LoginButton /> <br/>
     <LogoutButton />
     <Profile/>
    </>
  );
}

export default App;

