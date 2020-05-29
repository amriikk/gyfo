import React from "react";

const Exercise = (props) => {

  const { name, reps, description } = props;

  return (
    <div className="Exercise" style={{ border: "3px solid skyblue" }}>
      <h2>{name} </h2>
      <h3>{reps}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Exercise;
