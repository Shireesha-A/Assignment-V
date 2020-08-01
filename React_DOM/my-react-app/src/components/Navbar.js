import React from 'react';

const Navbar=(props)=>{
    return(
        <nav>
            <h1 style={{color:"blue",textAlign:"center"}}>{props.heading}</h1>
        </nav>

    );
}
export default Navbar;