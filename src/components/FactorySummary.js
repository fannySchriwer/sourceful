import React from 'react';

const FactorySummary = ({ factory }) => {
  console.log(factory);
  return (
    <div key={factory.id}>
      <div>
        <h1>{factory.name}</h1>
        <p>{factory.country}</p>
      </div>
      <div>
        <p>Number of employees</p>
        {factory.employee}
      </div>

      <p>{factory.summary}</p>
      <div>Read more</div>
    </div>
  );
};

export default FactorySummary;
