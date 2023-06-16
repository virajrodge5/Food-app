import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>      //The spread operator ensures that all the key-value pairs in the input object which are received on props.input are added as props to <input>, basically done to make this custom input element highly configurable from outside this component through props
  );
});             //Wrapping with React.forwardRef is done so that it is possible to use refs with custom created components


export default Input;