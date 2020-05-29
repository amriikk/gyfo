import React from "react";

// rename maybe to ExerciseDetails
const ExerciseDetails = (props) => {

  const { name, reps, description } = props;

  return (
    <div className="Exercise" style={{ border: "3px solid skyblue" }}>
      <button onClick={()=> alert('delete')}>X</button>
      <h2>{name} </h2>
      <h3>{reps}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ExerciseDetails;
