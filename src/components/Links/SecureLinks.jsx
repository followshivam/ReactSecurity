import React from 'react';
import parse  from "url-parse";

const SecureLinks = () => {
    const payload="javascript:alert(1)";
    const payload2="https://www.instagram.com/";

    function isSafeUrl(url){
        var protocoll=parse (url).protocol;
        console.log(protocoll);
        
        if(protocoll==='https:') return true
        if(protocoll==='http:') return true
        return false
    }

    const safe=isSafeUrl(payload);


    return (
        <div>
            <h1>This is Secure link </h1>
            <a href={safe ? payload :null}> Click Me</a>
        </div>
    )
}

export default SecureLinks
