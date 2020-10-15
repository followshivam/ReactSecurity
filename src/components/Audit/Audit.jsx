import React from 'react';
import Terminal from 'terminal-in-react'; 

const Audit = () => {

    function showMsg(){
        return "Hello World!"
    }

    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection:"column"
        }}
        >
        <pre>
            <code>
                1. In your Terminal go to root directory and run: npm audit
            </code>
        </pre>
        <pre>    
            <code>
                2. If this generates issues, solve those.
            </code>
        </pre>
         <Terminal
          commandPassThrough={cmd => `-Output:${cmd}: === npm audit security report === 0 vulnerabilities `}      
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
           

           
        </div>
    )
}

export default Audit