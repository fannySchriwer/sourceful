/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../hooks/useAuth';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import ModalPortal from '../components/Modal/ModalPortal';


const Factory = ({ data: { factory } }) => {
  const auth = useAuth();
  const [modalOpen, setModalOpen, closeModal] = useModal();
  const [loadedUser, setLoadedUser] = useState(false);

  useEffect(() => {
    if(auth.currentUser){
      setLoadedUser(true)    
    }
  }, [auth]);

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
  certificates.bsci
    ? (bsci = (
      <div>
        <span>{certificates.bsci.name}</span>
        <img src={certificates.bsci.logo} alt="BSCI logo" />
      </div>
    ))
    : bsci;


  return (
    <Fragment>
      <h1>{name}</h1>
     <button onClick={setModalOpen}> 
       <FontAwesomeIcon
       icon={['far', 'heart']}
       sx={{ color: 'primary', fontSize: 6 }}
     /></button>
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

      <ModalPortal>
        <Modal
          closeModal={closeModal}
          modalOpen={modalOpen}
          isLoaded={loadedUser}
          factory={factory}
        />
      </ModalPortal>
    </Fragment>
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
      quantity
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
