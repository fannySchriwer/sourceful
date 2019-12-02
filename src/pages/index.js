import React from 'react';
import SEO from '../components/Seo';
import FactoryList from '../components/FactoryList';
import FilterFactoriesForm from '../components/FilterFactoriesForm';

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <h1>This is sourceful</h1>
    <FilterFactoriesForm />
    <FactoryList />
  </div>
);

export default IndexPage;
