import React, {useState} from 'react';
import styled from "styled-components";

const SecureCss = () => {

    const [input,setInput] =useState("http://attacker.com/?a");

    // const userInput = 'http://attacker.com/?a';


    const Div = styled.div`
    background: CSS.escape(url(${input}));
    margin: 5em;
    font-size:1.5em;
    `;
    
    function handleChange(e){
        setInput(e.target.value);
        console.log(input);
        
    }
  
    return (
        <div>
        <Div >
            Secure CSS 
            </Div>
        <p>Enter link here</p>

        <input onChange={handleChange} type="text" name="abc"/>

        </div>
    )
}

export default SecureCss
