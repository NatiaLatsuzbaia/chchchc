import React, { Fragment, useEffect  } from "react";
import Main from "../main";


function Contact() {

    useEffect(() => {
        document.body.style.backgroundColor = 'blue'; 
        return () => {
            document.body.style.backgroundColor = ''; 
        };
    }, []);


    return (
        
            <Fragment>
                    <Main />
                    <h1>Contact</h1> 
                    <address>
                       LLC Natia Latsuzbaia<br/>
                        Visit us at: <a href="https://www.facebook.com/">FACEBOOK</a><br/>
                        Phone +995 322 712481<br/>
                        Georgia, Tbilisi, Agmashenebli ave 61<br/>
                    </address>
            </Fragment>
      
    )
}


export default Contact;

