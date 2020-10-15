import React, {useState} from 'react';
import DOMPurify from "dompurify";

function App() {
  const[state,setState]=useState();

const text= `<p>this is test</p>
<img src="?" onerror="alert('hi')" />
`; 

//STEPS
// <img src="?" onerror="alert('hi')" />
//npm i dompurify
//import DOMPurify from "dompurify";
//sanitize using DOMPurify as below
//<div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(text)}}>


  return (
    <div>
      <p> DangerouslySetInnerHTML </p>
      <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(text)}}></div>
    </div>
  );
}

export default App;

