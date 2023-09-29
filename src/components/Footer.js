import React from 'react';

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        
        <footer className="footer ">
        <div className="container">
        <p>copyright © {currentYear} </p>
         </div>
        </footer>
    );
}

export default Footer;