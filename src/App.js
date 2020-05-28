import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    workouts: [],

    toggle: false
  };
  
  toggle = () => {
    this.setState( {toggle:!this.state.toggle} )
  };


  render() {

    // const li = [
    //   {
    //       link: "/",
    //       text:"Home"
    //   },
    //   {
    //       link: "/workouts/",
    //       text:"Workouts"
    //   },
    //   {
    //     link: "/signup/",
    //     text:"Sign Up"
    //   },
    //   {
    //       link: "/login/",
    //       text:"Log In"
    //   },
    // ];

    return (
      <>
      <h1>g.y.f.o.</h1>
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle} 
      />
      
      {/* <div className="navBar">
            <button onClick={this.Toggle}>
                <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? "links show-nav" : "links"}>
                {
                    li.map((objLink, i) => {
                        return ( <li key={i}><Link to={objLink.link}>{objLink.text}</Link></li> )
                    })
                }
          </ul>
      </div> */}
      </>
    );
  }
}

export default App;
