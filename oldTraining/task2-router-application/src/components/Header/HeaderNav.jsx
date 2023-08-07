import React from 'react'
import Navbar from "./Navbar";
import HeroImage from "../HeroImage/HeroImage";

import "./HeaderNav.css";
function HeaderNav () {
    return (
        <React.Fragment>
                <img src="butterfly.svg" height="150px" width="auto" alt="" />
                <center>
                <div className="container">
                    <Navbar />
                </div>
                </center>                
        </React.Fragment>
    )
}

export default React.memo(HeaderNav);