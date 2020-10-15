import React from "react";
import {AppBar, Toolbar, Typography, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"; 
import logo from "../../images/tr.jpg";

const useStyles=makeStyles({
    typography1:{
        flex:1,
        height:17
    },
    avatar:{
        height:60,
        width:60,
        position:"relative",
        top:-20
    }
});

function Navbar(){
   const classes=useStyles();
    return(
        <div>
            
                <Toolbar>
                    <Typography className={classes.typography1}>
                        </Typography>
                    <Typography >
                        <a href="/lazyLoading/dashboard">DashBoard </a> &nbsp; &nbsp; &nbsp;
                        <a href="/lazyLoading/customers"> Customers</a>
                    </Typography>
                </Toolbar>
           
        </div>
    )

}

export default Navbar;