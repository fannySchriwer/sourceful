import React from 'react';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

const Factory = ({ data: { factory } }) => {
  const {
 name, contact, address, description, employee 
} = factory;

  const { email, website } = contact;
  const {
 city, country, street, postalcode_ 
} = address;

  return (
    <div>
      <h1>{name}</h1>
      <p>{country}</p>
      <h2>Contact information</h2>
      <p>
        <span>website</span>
        {website}
      </p>
      <p>
        <span>email</span>
        {email}
      </p>
      <p>
        <span>address</span>
        {street}
        {postalcode_}
        {city}
        {country}
      </p>
      <p>
Number of employees
{' '}
{employee}
</p>
      <p>{description}</p>
    </div>
  );
};

export default Factory;

Factory.propTypes = {
  data: PropTypes.shape({
    factory: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      employee: PropTypes.number.isRequired,
      certification: PropTypes.shape({
        bsci: PropTypes.shape({
          image: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      }),
      contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
      }),
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        postalcode_: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($id: String!) {
    factory(id: { eq: $id }) {
      name
      address {
        city
        country
        postalcode_
        street
      }
      category {
        jersey
        knit
        woven
      }
      contact {
        email
        website
      }
      continent
      description
      id
      employee
    }
  }
`;
