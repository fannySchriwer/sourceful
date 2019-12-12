/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Navigation from '../components/Navigation'

const IndexPage = () => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <SEO title="Home" />
    <Navigation />
    <SignUp />
    <FilterFactoriesForm />
  </Fragment>
);

export default IndexPage;
