import React from 'react';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';

const FactoryList = ({ factories }) => {
  const nrOfFactories = Object.keys(factories).length;
  return(
    <div>
      <h1>Factories</h1>
      <FactoryListCounter nrOfFactories={nrOfFactories} />

      {factories.map((factory) => (
        <FactorySummary key={factory.id} factory={factory} />
      ))}
    </div>
  )};

export default FactoryList;
FactoryList.propTypes = {
  factories: PropTypes.instanceOf(Array).isRequired,
};
