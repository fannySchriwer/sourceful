import React from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <h1>This is sourceful</h1>
    <FilterFactoriesForm />
  </div>
);

export default IndexPage;
