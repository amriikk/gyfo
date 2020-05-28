import React, {Component} from 'react';
import { FaAlignRight} from 'react-icons/fa';
import './App.css';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    workouts: [],

    toggle: false
  };
  
  Toggle = () => {
    this.setState( {toggle:!this.state.toggle} )
  };


  render() {

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

    return (
      <>
      <h1>g.y.f.o.</h1>
      <div className="navBar">
            <button onClick={this.Toggle}>
                <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? "links show-nav" : "links"}>
                {
                    li.map((objLink, i) => {
                        return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
                    })
                }
          </ul>
      </div>
      </>
    );
  }
}

export default App;
