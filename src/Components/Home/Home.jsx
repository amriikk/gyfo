import React from 'react';
import './Home.css'
const logo = require('../../assets/gyfo.jpg');

const Home = () => {
    return(
        <div className="gyfo-logo">
        <br /><br />
        <img src={logo} alt='gyfo-logo' />
        <br /><br />
        </div>
    );   
}

export default Home;