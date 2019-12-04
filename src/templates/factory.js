import React from 'react';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

const Factory = ({ data: { factory } }) => {
  const {
    name,
    category,
    contact,
    address,
    description,
    employee,
    certification,
  } = factory;

  const { email, website } = contact;
  const {
 city, country, street, postalcode_ 
} = address;
  const { image, title } = certification.bsci;
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
      <p>{description}</p>
      {category.map((c) => (
        <p>{c}</p>
      ))}
      <p>{title}</p>
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

      category: PropTypes.arrayOf(PropTypes.string).isRequired,
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
      category
      address {
        city
        country
        postalcode_
        street
      }
      certification {
        bsci {
          image
          title
        }
      }
      contact {
        email
        phone
        website
      }
      continent
      description
      employee
      id
      name
      summary
    }
  }
`;
