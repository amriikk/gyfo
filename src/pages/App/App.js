import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import Workouts from '../../Components/Workouts/Workouts';
import ExerciseContainer from '../../Components/Exercise/ExerciseContainer';
import SignupForm from '../../Components/SignupForm/SignupForm';
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from "../../utils/userService";
import Map from '../../Components/Map/Map';
// import { getCurrentLatLng } from '../../services/geolocation';
// import { getCurWeatherByLatLng } from '../../services/weather-api';




class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    exercises: [],
    user: userService.getUser(),
    lat: null,
    lng: null,
    temp: null,
    toggle: false,
  };
  
  toggle = () => {
    this.setState( {toggle:!this.state.toggle} )
  };

  handleSubmit = exercise => {
    // push new customer object into the exercises list in state:
    let exercises = [...this.state.exercises, exercise];
    this.setState({exercises}, ()=> {console.log(this.state.exercises)} ); 
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  // async componentDidMount() {
  //   // Destructure the object returned from getCurrentLatLng()
  //   const {lat, lng} = await getCurrentLatLng();
  //   const weatherData = await getCurWeatherByLatLng(lat, lng);
  //   this.setState({
  //     lat,
  //     lng,
  //     temp: Math.round(weatherData.main.temp),
  //     icon: weatherData.weather[0].icon
  //   });
  // }

  render() {

    return (
      <>
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle}
        user={this.props.user} 
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
      <Route exact path='/login/' component={LoginPage} /> 
      <Route exact path='/signup/' component={SignupForm} /> 
     
      {/* <Map lat={this.state.lat} lng={this.state.lng}/>
        <header className='App-header'>
          <div>{this.state.temp}&deg;</div>
          REACT WEATHER
          {this.state.icon && 
            <img
              src={`https://openweathermap.org/img/w/${this.state.icon}.png`}
              alt='Current Conditions'
            />
          }
        </header> */}

      </Switch>
      </>
    );
  }
}

export default App;
