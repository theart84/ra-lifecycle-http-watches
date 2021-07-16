import React from 'react';
import Watch from "../Watch/Watch";
import PropTypes from "prop-types";

const WorldWatches = ({watches, deleteWatch}) => {
  return (
    <div className="row pt-5">
      <div className="col d-flex flex-wrap">
        {watches.map(({id, name, timeZone}) => (
          <Watch
            key={id}
            id={id}
            title={name}
            timeZone={timeZone}
            deleteWatch={deleteWatch}
          />))
        }
      </div>
    </div>
  );
};

WorldWatches.propTypes = {
  watches: PropTypes.array.isRequired,
  deleteWatch: PropTypes.func.isRequired
}

export default WorldWatches;
