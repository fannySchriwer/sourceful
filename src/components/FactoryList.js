import React from 'react';
import PropTypes from 'prop-types';
import useFactories from '../hooks/useFactories';
import FactorySummary from './FactorySummary';

const FactoryList = ({ factories }) => (
  <div>
    <h1>Factories</h1>

    {factories.map((factory) => (
      <FactorySummary key={factory.id} factory={factory} />
    ))}
  </div>
);
export default FactoryList;
FactoryList.propTypes = {
  factories: PropTypes.instanceOf(Array).isRequired,
};
