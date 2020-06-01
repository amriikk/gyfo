import React, {Component} from 'react';
import './Workouts.css'

class Workouts extends Component {
  state = {
    name: "",
    reps: "",
    description: "",
    exercises: [],
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, reps, description } = this.state;
    console.log(this.props);
    this.props.handleSubmit({name, reps, description});

    // push new exercise object into the exercises list in state:  
        this.setState({ name: "", reps: "", description: "" });
  };


  render() {
    const { name, reps, description } = this.state;
    const { handleChange } = this;

    return (
        <div className="Workouts">
          <h2>Add New Workout</h2>
          <hr />
          <p>Having trouble finding what you are looking for?</p>
          <p>No worries! Add it right below!</p>
          <hr /><br />
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


        
      </div>
    );
  }
}

export default Workouts;