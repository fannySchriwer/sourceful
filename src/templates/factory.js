import React from 'react';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

const Factory = ({ data: { factory } }) => {
  const {
    name,
    contact,
    address,
    description,
    employee,
    producttype,
    certificates,
  } = factory;
  const { email, website } = contact;
  const { city, country, street } = address;

  let bsci;
  // eslint-disable-next-line no-unused-expressions
  certificates.bsci
    ? (bsci = (
      <div>
        <span>{certificates.bsci.name}</span>
        <img src={certificates.bsci.logo} alt="BSCI logo" />
      </div>
    ))
    : bsci;

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
        {city}
        {country}
      </p>
      <p>
        Number of employees
        {employee}
      </p>
      <p>Product types:</p>
      {producttype.map((prod, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={i}>{prod}</p>
      ))}
      <p>{description}</p>
      {bsci}
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
      producttype: PropTypes.array.isRequired,
      certifications: PropTypes.shape({
        bsci: PropTypes.shape({
          logo: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      }),
      contact: PropTypes.shape({
        email: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
      }),
      certificates: PropTypes.shape({
        bsci: PropTypes.shape({
          logo: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      }),
      address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
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
      producttype
      certificates {
        bsci {
          logo
          name
        }
      }
    }
  }
`;
