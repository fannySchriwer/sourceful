import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FactorySummary = ({ factory }) => (
  <div key={factory.id}>
    <div>
      <h1>{factory.name}</h1>
      <p>{factory.address.country}</p>
    </div>
    <div>
      <p>
        Number of employees:
        {factory.employee}
      </p>
    </div>

    <p>{factory.summary}</p>
    <Link to={factory.name}>Read more</Link>
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
