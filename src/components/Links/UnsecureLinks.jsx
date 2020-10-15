import React from 'react'

const UnsecureLinks = () => {
    
    const payload="javascript:alert(1)";
    return (
        <div>
            <h1>This is unsecure link</h1>
            <a href={payload}> Click Me</a>

        </div>
    )
}

export default UnsecureLinks
