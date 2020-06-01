import React from 'react';
import ExerciseDetails from './ExerciseDetails'

const ExerciseContainer = (props) => {
        return(       
            <div className="ExercisePost" >
            <hr /><br />
                {props.exercises.map(exercise => {
                    return <ExerciseDetails key={exercise.description} {...exercise} />;
                })}
            </div>)
}

export default ExerciseContainer;
