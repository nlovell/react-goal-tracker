import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    inputValidation();
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (inputValidation())
      props.onAddGoal(enteredValue);
  };

  const inputValidation = () => {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
