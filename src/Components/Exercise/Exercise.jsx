// import React from "react";

// const Exercise = (props) => {

//   const { name, reps, description } = props;

//   return (
//     <div style={{ border: "2px solid skyblue" }}>
//       <h2>{name} </h2>
//       <h3>{reps}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default Exercise;

import React from "react";

export default function Exercise(props) {
  const { firstName, lastName, email } = props;

  return (
    <div style={{ 
        border: "3px solid skyblue" }}>
      <h2>{firstName} </h2>
      <h3>{lastName}</h3>
      <p>{email}</p>
    </div>
  );
}
