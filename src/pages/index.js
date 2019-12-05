import React from 'react';
import SEO from '../components/Seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Login from '../components/Login';

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <h1>This is sourceful</h1>
    <SignUp />
    <Login />
    <FilterFactoriesForm />
  </div>
);

export default IndexPage;
