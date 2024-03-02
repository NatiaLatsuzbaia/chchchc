import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom"

function Main(){
    useEffect(() => {
        document.body.style.backgroundColor = 'green'; 
        return () => {
            document.body.style.backgroundColor = ''; 
        };
    }, []);

    const llink = {
        textDecoration: "none",
        color: "black"


    }

   
    return(
        <Fragment>
            <nav>
                <ul>
                    <li><Link to={"/"} style={llink} >მთავარი</Link></li>
                    <li><Link to={"/contact"} style={llink}>კონტაქტი</Link></li>
                    <li><Link to={"/about"} style={llink}>ჩვენს შესახებ</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Main;