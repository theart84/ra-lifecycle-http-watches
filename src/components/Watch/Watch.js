import React, { useEffect, useMemo, useRef, useState } from "react";
import shortid from "shortid";
import { generateArray, convertTimeToDegree } from "../../utils/helpFunctions";
import Marker from "./Marker/Marker";
import Arrow from "./Arrow/Arrow";

import classes from "./Watch.module.css";

const hourOffset = new Date().getTimezoneOffset() / 60;

const Watch = ({ id, title, deleteWatch, timeZone = hourOffset }) => {
  const [hour, minute, second] = convertTimeToDegree();
  const array = useMemo(
    () =>
      generateArray(12).map((item) => (
        <Marker
          key={shortid.generate()}
          className="hour-marker"
          offset={30 * item}
        />
      )),
    []
  );

  const [clock, setClock] = useState({
    hour: hour - timeZone * 30,
    minute: minute,
    second: second,
  });

  const ref = useRef();

  useEffect(() => {
    const timerID = setTimeout(() => {
      setClock({
        hour: hour - timeZone * 30,
        minute: minute,
        second: second,
      });
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  const onClickHandler = () => {
    const { id } = ref.current.dataset;
    deleteWatch(id);
  };

  return (
    <div ref={ref} className={classes["watch-container"]} data-id={id}>
      <div className={classes["watch-title"]}>
        <h5>{title}</h5>
      </div>
      <div className={classes["watch-body"]}>
        <span className={classes["watch-face"]}>{array}</span>
        <Arrow
          time={clock.hour}
          styles={["watch-arrow", "watch-arrow__hour"]}
        />
        <Arrow
          time={clock.minute}
          styles={["watch-arrow", "watch-arrow__minute"]}
        />
        <Arrow
          time={clock.second}
          styles={["watch-arrow", "watch-arrow__second"]}
        />
      </div>
      <button className={classes["watch-delete"]} onClick={onClickHandler}>
        X
      </button>
    </div>
  );
};

export default Watch;
