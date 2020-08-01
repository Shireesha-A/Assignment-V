import React from 'react';

const Navbar=(props)=>{
    return(
        <nav>
            <h2 style={{color:"blue",textAlign:"center",textDecoration:"underline"}}>{props.heading}</h2>
        </nav>

    );
}
export default Navbar;