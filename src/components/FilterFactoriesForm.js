import React from 'react';
import InputField from '../components/InputField';
import RadioButtonsGroup from '../components/RadioButtonsGroup';
import CheckboxesGroup from '../components/Checkboxes';
import PrimaryButton from '../components/PrimaryButton';

const categories = [
  'Knit',
  'Woven',
  'Jersey'
];

const productTypes = [
  'Tops',
  'Bottoms',
  'Tailoring',
  'Outerwear',
  'Underwear',
  'Sportswear'
];

const continents = [
  'Europe',
  'Asia'
];

const minQuantity = [
  {value: '100', label: '100'},
  {value: '200', label: '200'},
  {value: '300', label: '300'},
  {value: '400', label: '400'},
  {value: '500', label: '500'}
];

const checkboxOptions = [
    {value: 'Oeko-tex', label: 'Oeko-tex'},
    {value: 'BCI', label: 'BCI'},
    {value: 'Gortex', label: 'Gortex'},
    {value: 'Blue-sign', label: 'Blue sign'},
    {value: 'HIGS-index', label: 'HIGS-index'},
    {value: 'RDS', label: 'RDS'},
    {value: 'BSCI', label: 'BSCI'}
];

const handleFilter = () => {
    //filter data query
    console.log('filtered data');
}

const FilterFactoriesForm = () => (
    <div>
        <div style={{ display: 'flex'}}>
            <div>
                <InputField options={productTypes} inputLabel='Product type' />
                <InputField options={categories} inputLabel='Categories' />
                <InputField options={continents} inputLabel='Continents' />
            </div>
            <div style={{ display: 'flex'}}>
                <RadioButtonsGroup val={minQuantity} formLabel='Minimum Qiantity' />
                <CheckboxesGroup checkboxOptions={checkboxOptions} />
            </div>
        </div>
        <div>
            <PrimaryButton label='Apply Filter' propFunction={handleFilter} />
        </div>
    </div>
);

export default FilterFactoriesForm;
