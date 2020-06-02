import React from 'react';
import './Home.css'
const logo = require('../../assets/gyfo.jpg');

const Home = () => {
    return(
        <div className="gyfo-logo">
        <img src={logo}  />
        </div>
    );   
}

export default Home;