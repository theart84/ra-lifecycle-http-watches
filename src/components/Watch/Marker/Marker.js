import React from 'react';
import classes from './Marker.module.css';

const Marker = ({className, offset}) => (
  <span
    className={classes[className]}
    style={{
      transform: `rotate(${offset}deg)`
    }}/>
)


export default Marker;
