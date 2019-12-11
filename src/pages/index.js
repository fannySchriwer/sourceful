/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Login from '../components/Login';

const IndexPage = () => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <SEO title="Home" />
    <h1
      sx={{
        color: 'primary',
      }}
    >
      This is sourceful
    </h1>
    <SignUp />
    <Login />
    <FilterFactoriesForm />
  </Fragment>
);

export default IndexPage;
