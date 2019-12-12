/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Login from '../components/Login';
import Navigation from '../components/Navigation'

const IndexPage = () => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <SEO title="Home" />
    <Navigation />
    <SignUp />
    <Login />
    <FilterFactoriesForm />
  </Fragment>
);

export default IndexPage;
