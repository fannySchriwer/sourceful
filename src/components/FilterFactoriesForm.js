import React, { useState } from 'react';
import Select from './SelectField';
import RadioButtonsGroup from './RadioButtonGroup';
import CheckboxesGroup from './CheckboxGroup';
import PrimaryButton from './PrimaryButton';
import useGetAllFactories from '../hooks/useGetAllFactories';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import FactoryList from './FactoryList';

const categories = ['knit', 'woven', 'jersey'];

const productTypes = [
  'tops',
  'bottoms',
  'tailoring',
  'outerwear',
  'underwear',
  'sportswear',
];

const continents = ['europe', 'asia'];

const minQuantity = [
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '300', label: '300' },
  { value: '400', label: '400' },
  { value: '500', label: '500' },
];

const checkboxOptions = [
  { id: '1', value: 'Oeko-tex', label: 'Oeko-tex' },
  { id: '2', value: 'BCI', label: 'BCI' },
  { id: '3', value: 'Gortex', label: 'Gortex' },
  { id: '4', value: 'Blue-sign', label: 'Blue sign' },
  { id: '5', value: 'HIGS-index', label: 'HIGS-index' },
  { id: '6', value: 'RDS', label: 'RDS' },
  { id: '7', value: 'BSCI', label: 'BSCI' },
];

const FilterFactoriesForm = () => {
  const [filters, setFilters] = useState({
    productType: '',
    category: '',
    continent: '',
    quantity: '',
    certification: [
      { value: 'Blue-sign', isChecked: false },
      { value: 'HIGS-index', isChecked: false },
      { value: 'BCI', isChecked: false },
      { value: 'BSCI', isChecked: false },
    ],
  });

  function handleCheckbox(event) {
    const certifications = filters.certification;
    certifications.forEach((c) => {
      if (c.value === event.target.value) {
        c.isChecked = event.target.checked;
      }
    });
    setFilters({ ...filters, certification: certifications });
  }

  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  }

  useEffect(() => {
    console.log('filters', filters);
  }, [filters]);

  function clearFilter() {
    setFilters({
      productType: '',
      category: '',
      continent: '',
      quantity: '',
      certification: [
        { value: 'Blue-sign', isChecked: false },
        { value: 'HIGS-index', isChecked: false },
        { value: 'BCI', isChecked: false },
        { value: 'BSCI', isChecked: false },
      ],
    });
  }

  const { factories } = useGetAllFactories(filters);
  const { loggedInUser } = useIsLoggedIn();
  console.log(loggedInUser);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <Select
            options={productTypes}
            inputLabel="Product type"
            onChange={handleChange}
            name="productType"
          />
          <Select
            options={categories}
            inputLabel="Categories"
            onChange={handleChange}
            name="category"
          />
          <Select
            options={continents}
            inputLabel="Continent"
            onChange={handleChange}
            name="continent"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <RadioButtonsGroup
            options={minQuantity}
            formLabel="Minimum Qiantity"
            name="quantity"
            onChange={handleChange}
          />
          <CheckboxesGroup
            checkboxOptions={checkboxOptions}
            name="certification"
            onChange={handleCheckbox}
          />
        </div>
      </div>
      <div>
        <PrimaryButton
          label="Remove Filters"
          propFunction={clearFilter}
          value="submit"
        />
      </div>
      <FactoryList factories={factories} />
    </div>
  );
};

export default FilterFactoriesForm;
