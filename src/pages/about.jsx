import React, { Fragment, useEffect } from "react";
import Main from "../main";

function About() {
    useEffect(() => {
        document.body.style.backgroundColor = 'purple'; 
        return () => {
            document.body.style.backgroundColor = ''; 
        };
    }, []);


    return(
        <Fragment>
             <Main />
             <h2 >We are very friendly community</h2>
        </Fragment>

       
    ) 
}

export default About;