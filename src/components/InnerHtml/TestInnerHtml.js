import React, {useState} from "react";
import UnsecureInnerHtml from "./UnsecureInnerHtml";
import SecureInnerHtml from "./SecureInnerHtml";
import '../../App.css';

function TestInnerHtml(props){
    const [secure,setSecure]= useState();

    function makeUnsecure(event){
        event.preventDefault();
        setSecure(0);
      }

    function makeSecure(event){
        event.preventDefault();
        setSecure(1);
      }
    
      
    return(
        <div>
            
            <h1>dangerouslySetInnerHTML</h1>
            <form className="form-button">

            <input class="radio" type="radio" id="secure" checked={secure===1} onClick={makeSecure} name="InnerHTML" value="1"/>
            <label class="radio-label" for="secure">Secure </label>

            <input class="radio" type="radio" checked={secure===0} id="unsecure" onClick={makeUnsecure} name="InnerHTML" value="0"/>
            <label class="radio-label" for="unsecure">Unsecure</label>
        
            </form>
            
            {secure===1?<div> <SecureInnerHtml/> </div>
            : <div> <UnsecureInnerHtml/> </div> }
            
        </div>
    )
}

export default TestInnerHtml;