import React from 'react';
import './NavBar.css'
import { FaAlignRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    
    const li_1 = [
            {
                link: "/",
                text:"Home"

            },
            {
                link: "/signup/",
                text:"Sign Up"
            },
            {
                link: "/login/",
                text:"Log In"
            },
        ];

    const li_2 = [
            {
                link: "/",
                text:"Dashboard"

            },
            {
                link: "/workouts/",
                text:"Workouts",
                isLoggedIn: true,
            },
            {
                link: "/journal/",
                text:"Journal",
                isLoggedIn: true,
            },
    ];


      
        var li = props.user ? li_2 : li_1
        let nav = ( <div className="navBar">
        <button onClick={props.toggle}>
            <FaAlignRight />
        </button>
        <ul className={props.toggleStatus ? "links show-nav" : "links"}>
            {
                
                li.map((objLink, i) => {
                    return ( <li key={i}><Link to={objLink.link}>{objLink.text}</Link></li> )
                })
            }
        </ul>
        

     </div> )
        
        return (<div className="NavBar">
            {nav}
                    {props.user ? (
            <div>
            <br />
            <span className="NavBar-welcome">WELCOME, {props.user.name} </span>
            <Link to="" className="Nav-Logout" onClick={props.handleLogout}>
                LOG OUT
            </Link>
            </div>
            ) : null }
            {/* {nav} <br /> */}
    </div>
            )
};

export default NavBar;