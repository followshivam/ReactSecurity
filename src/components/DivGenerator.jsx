import React, {useState} from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'; 

const useStyles=makeStyles({
    spread:{
        textAlign:"center",
        backgroundColor:"cyan",
        height:40
    },
    unspread:{
        
        textAlign:"center",
        backgroundColor:"cyan",
        height:40,
        display:"block",
        width:200,
        position:"relative",
        left:"50%"
    }
});

function DivGenerator(props){
    const classes= useStyles();
    // const [state, setstate] = useState(false);
    
    function changeState(e){
        const value=parseInt(e.target.id);
        console.log(value);
        props.selectDiv(value);
    }

    return(
        <div onClick={changeState} id={props.id} 
        className={props.class==="spread"?classes.spread:classes.unspread}>
            Div {props.id}
        </div>
    )
}

export default DivGenerator;