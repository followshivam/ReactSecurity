import React, {useState, useEffect} from 'react';
import '../../App.css';
import $ from "jquery";
import DOMPurify from "dompurify";


function SecureInnerHtml() {
  const[state,setState]=useState(" Scripts run here ");

  function changeText(e){
   setState(e.target.value);
   console.log(state);
  }

//STEPS
//npm i dompurify
//import DOMPurify from "dompurify";
//sanitize using DOMPurify as below
//<div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(text)}}>

//RUN SCRIPTS BELOW
//<script> alert("0") </script>
// <img src="?" onerror="alert('hi')" />
/* <a href="https://www.facebook.com/"> Visit Users Facebook Page </a> */
/* <a href="javascript:alert(0)"> Visit Users Facebook Page </a> */

  return (
    <div>
        <h2 className="h2"> Secure InnerHTML </h2>
      <h4 dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(state)}} className="h4"></h4>
      <input className="input" onChange={changeText} name="text" type="text" placeholder="Enter text here"/>
      
    </div>
  );
}

export default SecureInnerHtml;
