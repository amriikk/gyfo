import React from 'react';
import { FaAlignRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    const li = [
        {
            link: "/",
            text:"Home"
        },
        {
            link: "/workouts/",
            text:"Workouts"
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

    return(
        <div className="navBar">
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
         </div>
    ) 
}

export default NavBar