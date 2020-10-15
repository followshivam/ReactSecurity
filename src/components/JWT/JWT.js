import React from 'react'
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

const header={
    alg: 'HS256', 
    type:'JWT'
};
const payload={
    name:"Shivam Tyagi",
    iat:1516239022
};

const jwtSecret="newgensecurity";

const encodingReplacements={
    "+":"-",
    "/":"_",
    "=":""
};
const makeUrlSafe= encoded => {
    return encoded.replace(
        /[+/=]/g,
        match=> encodingReplacements[match]
    );
};
const encode=obj => {
    //binary to ascii ie base 64 representation
    const encoded= btoa(
        JSON.stringify(obj)
    );
    return makeUrlSafe(encoded);
}
const makeSignature= (header,payload,secret) => {
    const hashed=hmacSHA256(
        `${encode(header)}.${encode(payload)}`,
        secret
    );
    const stringified=Base64.stringify(hashed);
    return makeUrlSafe(stringified);
}
const getJwt=(header,payload, signature) => {
    return `${header}.${payload}.${signature}`
}



const App = () => {
    return (
        <div className="App">
            JWT implementation
            <p>Header</p>
            <pre>
                <code> {encode(header)} </code>
            </pre>
            <p>Payload</p>
            <pre>
                <code> {encode(payload)} </code>
            </pre>
            <p>Signature</p>
            <pre>
                <code> 
                {makeSignature(header, payload, jwtSecret)} 
                </code>
            </pre>
            <p>Here is your JWT:</p>
            <pre>
                <code> 
                {getJwt(
                    encode(header),
                    encode(payload),
                    makeSignature
                    (header,payload,jwtSecret))}
                ) </code>
            </pre>
            
            
        </div>
    )
}

export default App
