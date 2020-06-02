import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import Workouts from '../../Components/Workouts/Workouts';
import ExerciseContainer from '../../Components/Exercise/ExerciseContainer';
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import userService from "../../utils/userService";
import Map from '../../Components/Map/Map';
import getCurrentLatLng from '../../services/geolocation';
import getCurWeatherByLatLng from '../../services/weather-api';
import Home from '../../Components/Home/Home';


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
    icon: null,
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
    console.log('handle log out')
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const loc = await getCurrentLatLng();
    const weatherData = await getCurWeatherByLatLng(loc.lat, loc.lng);
    this.setState( (prevState) => ({
      lat: loc.lat,
      lng: loc.lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon,
    }));
  }

  render() {

    return (
      <>
      <div className='Header'>
        <Map />
        <header className='gyfo'>
          <div>{this.state.temp}&deg;</div>
          GET . YOUR . FLEX . ON
          {this.state.icon && 
            <img
              src={`https://openweathermap.org/img/w/${this.state.icon}.png`}
              alt='Current Conditions'
            />
          }
        </header>
      </div>
      < NavBar 
        toggle={this.toggle}
        toggleStatus={this.state.toggle}
        handleLogout={this.handleLogout}
        user={this.state.user} 
      />
      <Switch>
      <Route exact path='/' component={() => 
        <>
        <Home />
        <ExerciseContainer exercises={this.state.exercises}/>
        </>}  
      />
      <Route exact path='/workouts/' component={() => 
        <>
        <Workouts handleSubmit={this.handleSubmit}/>
        <ExerciseContainer exercises={this.state.exercises}/>
         
        </>} 
      />
      <Route exact path='/login/' render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
      /> 
      <Route exact path='/signup/' render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
      /> 
     

      </Switch>
      </>
    );
  }
}

export default App;
