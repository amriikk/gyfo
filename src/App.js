import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Workouts from './Components/Workouts/Workouts';
import ExerciseContainer from './Components/Exercise/ExerciseContainer';
import SignupForm from './Components/SignupForm/SignupForm';


class App extends Component {
  state = {
    exercises: [],

    toggle: false
  };
  
  toggle = () => {
    this.setState( {toggle:!this.state.toggle} )
  };



  handleSubmit = exercise => {
    // push new customer object into the exercises list in state:
    let exercises = [...this.state.exercises, exercise];
    this.setState({exercises}, ()=> {console.log(this.state.exercises)} ); 
  };


  render() {
    const { name, reps, description } = this.state;
    const { handleChange } = this;

    return (
      <>
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle} 
        />
      <Switch>
      <Route exact path='/' component={() => 
        <ExerciseContainer exercises={this.state.exercises}/>}  
      />
      <Route exact path='/workouts/' component={() => 
        <>
        <Workouts handleSubmit={this.handleSubmit}/>
        <ExerciseContainer exercises={this.state.exercises}/> 
        </>} 
      />
      {/* <Route exact path='/login/' component={LoginPage} />  */}
      <Route exact path='/signup/' component={SignupForm} /> 
     


      </Switch>
      </>
    );
  }
}

export default App;
