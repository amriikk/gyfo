import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Workouts from './Components/Workouts/Workouts';
import Exercise from './Components/Exercise/Exercise';
import SignupForm from './Components/SignupForm/SignupForm';


class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",

    name: "",
    reps: "",
    description: "",
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
    const { name, reps, description } = this.state;

    // push new customer object into the exercises list in state:
    this.setState(
      {
        exercises: [
          ...this.state.exercises,
          {
            name,
            reps,
            description
          }
        ]
      },
      // blank out the inputs after state update completes:
      () => {
        this.setState({ name: "", reps: "", description: "" });
      }
    );
  };


  render() {
    const { name, reps, description } = this.state;
    const { handleChange } = this;

    return (
      <>
      {/* <Switch> */}
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle} 
      />
      {/* <Route exact path='/workouts/' render={({ history }) =>  */}
      <Workouts />
      {/* }/> */}


      <div className="Workouts">
      <hr />
      <br />
      <form onSubmit={this.handleSubmit}>
          <label>
            NAME :
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label>
            REPS :
            <input
              type="text"
              name="reps"
              id="reps"
              value={reps}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label>
            DESCRIPTION : 
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <input type="submit" value="Enter" />
      </form>
        <br /><br />
        
        {this.state.exercises.map(customer => {
          return <Exercise key={customer.description} {...customer} />;
        })}

      </div>
      {/* </Switch> */}
      </>
    );
  }
}

export default App;
