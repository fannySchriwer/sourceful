import React from 'react';
import PropTypes from 'prop-types';

const FactoryListCounter = ({ nrOfFactories }) => {
  return(
    <div>
      <p>{nrOfFactories > 1 &&
        `${nrOfFactories} factories found`}
      </p>
      <p>{nrOfFactories === 1 &&
        `${nrOfFactories} factory found`}
      </p>
      <p>{nrOfFactories === 0 &&
        'No factories found, try clearing your filters'}
      </p>
    </div>
  )};

export default FactoryListCounter;
FactoryListCounter.propTypes = {
  nrOfFactories: PropTypes.number.isRequired,
};
