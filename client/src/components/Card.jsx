import classes from './Card.module.css';
import React from 'react';
function Card(props) {
  const color = props.color || "pink"
  return <div style={{backgroundColor:color}} className={classes.card}> {props.children}</div>;
}

export default Card;