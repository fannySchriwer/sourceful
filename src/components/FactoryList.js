import React from 'react';
import useFactories from '../utils/useFactories';
import FactorySummary from './FactorySummary';

const FactoryList = () => {
  const { factories } = useFactories();
  return (
    <div>
      <h1>Factories</h1>

      {factories.map((factory) => (
        <FactorySummary key={factory.id} factory={factory} />
      ))}
    </div>
  );
};

export default FactoryList;
