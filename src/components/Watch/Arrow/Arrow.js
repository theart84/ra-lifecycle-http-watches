import React from 'react';
import PropTypes from 'prop-types';
import classes from './Arrow.module.css';

const Arrow = ({styles, time}) => (
  <span
    style={{transform: `rotate(${time}deg)`}}
    className={`${classes[styles[0]]} ${classes[styles[1]]}`}/>
);

Arrow.propTypes = {
  styles: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired
}

export default Arrow;
