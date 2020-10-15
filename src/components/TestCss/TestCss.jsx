import React,{useState} from 'react';
import SecureCss from "./SecureCss";
import UnsecureCss from "./UnsecureCss"

const TestCss = () => {
    const [secure,setSecure]= useState();

    function makeUnsecure(event){
        event.preventDefault();
        setSecure(0);
      }

    function makeSecure(event){
        event.preventDefault();
        setSecure(1);
      }

    return (
        <div>
            
            <h1>Secure CSS </h1>
            <form className="form-button">

            <input class="radio" type="radio" id="secure" checked={secure===1} onClick={makeSecure} name="TestCss" value="1"/>
            <label class="radio-label" for="secure">Secure Css</label>

            <input class="radio" type="radio" id="unsecure" checked={secure===0}  onClick={makeUnsecure} name="TestCss" value="0"/>
            <label class="radio-label" for="unsecure">Unsecure Css</label>
           </form>
            
            {secure===1?<div> <SecureCss/> </div>
            : <div> <UnsecureCss/> </div> }
            
        </div>
    )
}

export default TestCss;
