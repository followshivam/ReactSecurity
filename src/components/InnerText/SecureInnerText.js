import React, {useState, useEffect} from 'react';
import '../../App.css';
import $ from "jquery";
import DOMPurify from "dompurify";


function SecureInnerText() {
  const[state,setState]=useState("Scripts run here");

  function changeText(e){
   setState(e.target.value);
   console.log(state);
  }

//   Runs Scrips Below
//<script> alert("0") </script>
// <img src="?" onerror="alert('hi')" />
/* <a href="https://www.facebook.com/"> Visit Users Facebook Page </a> */
/* <a href="javascript:alert(0)"> Visit Users Facebook Page </a> */



  return (
    <div>
      <h3 className="h3"> Secure InnerText:  </h3>
      <div class="innertext-div2">
      <h4>{state} </h4>
      <input className="input" onChange={changeText} name="text" type="text" placeholder="Enter text here"/>
    </div>
     </div>
  );
}

export default SecureInnerText;
