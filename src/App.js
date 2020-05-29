import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

import Exercise from './Components/Exercise/Exercise';
import Workouts from './Components/Workouts/Workouts';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    customers: [],

    exercises: [],

    toggle: false
  };
  
  toggle = () => {
    this.setState( {toggle:!this.state.toggle} )
  };

  ///////////////////////////////////////////////////


  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email } = this.state;

    // push new customer object into the customers list in state:
    this.setState(
      {
        customers: [
          ...this.state.customers,
          {
            firstName,
            lastName,
            email
          }
        ]
      },
      // blank out the inputs after state update completes:
      () => {
        this.setState({ firstName: "", lastName: "", email: "" });
      }
    );
  };


  render() {
    const { firstName, lastName, email } = this.state;
    const { handleChange } = this;

    return (
      <>
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle} 
      />
      <Workouts />

      <div className="Workouts">
      <hr />
      <br />
      <form onSubmit={this.handleSubmit}>
          <label>
            NAME :
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            REPS :
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            DESCRIPTION : 
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Register" />
        </form>

        <hr />
        {this.state.customers.map(customer => {
          return <Exercise key={customer.email} {...customer} />;
        })}

      </div>
      </>
    );
  }
}

export default App;
