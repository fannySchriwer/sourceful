import React from 'react';
import PropTypes from 'prop-types';

const FactorySummary = ({ factory }) => (
  <div key={factory.id}>
    <div>
      <h1>{factory.name}</h1>
      <p>{factory.address.country}</p>
    </div>
    <div>
      <p>Number of employees</p>
      {factory.employee}
    </div>

    <p>{factory.summary}</p>
    <div>Read more</div>
  </div>
);

export default FactorySummary;

FactorySummary.propTypes = {
  factory: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }),
    employee: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
};
