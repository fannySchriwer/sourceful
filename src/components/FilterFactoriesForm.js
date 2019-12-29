/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useEffect, Fragment } from 'react';
import Select from './SelectField';
import RadioButtonGroup from './RadioButtonGroup';
import CheckboxGroup from './CheckboxGroup';
import PrimaryButton from './PrimaryButton';
import { graphql, useStaticQuery } from 'gatsby';

import FactoryList from './FactoryList';
import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';

const minQuantity = [
	{ value: '0', label: 'None' },
	{ value: '100', label: '100' },
	{ value: '200', label: '200' },
	{ value: '300', label: '300' },
	{ value: '400', label: '400' },
	{ value: '500', label: '> 500' }
];

const FilterFactoriesForm = () => {
	const {
		datoCmsCategoryFilter,
		datoCmsSearchSection,
		datoCmsContinentFilter,
		datoCmsCertificateFilter,
		datoCmsProductFilter
	} = useStaticQuery(
		graphql`
			query {
				datoCmsCategoryFilter {
					filters {
						title
					}
				}
				datoCmsContinentFilter {
					continent {
						id
						continentName
					}
				}
				datoCmsProductFilter {
					productFilter {
						productName
					}
				}
				datoCmsCertificateFilter {
					certificateFilters {
						certificateName
					}
				}
				datoCmsSearchSection {
					slug
					text
				}
			}
		`
	);

	const { slug, text } = datoCmsSearchSection;
	const certificateNames = [];
	datoCmsCertificateFilter.certificateFilters.map(({ certificateName }) => {
		const certificateStatus = { isChecked: false };
		const certificate = { ...certificateStatus, value: `${certificateName}` };
		certificateNames.push(certificate);
	});

	const continents = [];
	datoCmsContinentFilter.continent.map(({ continentName }) => {
		continents.push(continentName);
	});
	const categories = [];
	datoCmsCategoryFilter.filters.map(({ title }) => {
		categories.push(title);
	});

	const productTypes = [];
	datoCmsProductFilter.productFilter.map(({ productName }) => {
		productTypes.push(productName);
	});

	const [ filters, setFilters ] = useState({
		productType: '',
		category: '',
		continent: '',
		quantity: '0',
		certification: certificateNames
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
			[event.target.name]: value
		});
	}

	function clearFilter() {
		setFilters({
			productType: '',
			category: '',
			continent: '',
			quantity: '0',
			certification: certificateNames
		});
	}

	return (
		<Fragment>
			<section
				id={slug}
				sx={{
					backgroundColor: 'lightGrey',
					marginTop: 6,
					paddingY: [ 4, 5 ]
				}}
			>
				<SectionHeader>{text}</SectionHeader>
				<SectionContainer>
					<div
						sx={{
							width: [ '100%', '40%', '40%' ]
						}}
					>
						<Select
							options={productTypes}
							inputLabel="Product type"
							onChange={handleChange}
							name="productType"
							defaultValue={filters.productType}
						/>
						<Select
							options={categories}
							inputLabel="Categories"
							onChange={handleChange}
							name="category"
							defaultValue={filters.category}
						/>
						<Select
							options={continents}
							inputLabel="Continent"
							onChange={handleChange}
							name="continent"
							defaultValue={filters.continent}
						/>
					</div>
					<div
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							width: [ '100%', '55%', null ]
						}}
					>
						<RadioButtonGroup
							options={minQuantity}
							formLabel="Minimum Qiantity"
							name="quantity"
							defaultValue={filters.quantity}
							onChange={handleChange}
						/>
						<CheckboxGroup
							name="certification"
							onChange={handleCheckbox}
							checkBoxStateValues={filters.certification}
						/>
					</div>
				</SectionContainer>
				<div
					sx={{
						display: 'flex',
						justifyContent: 'center',
						paddingBottom: [ 3, 4 ]
					}}
				>
					<PrimaryButton propFunction={clearFilter} value="submit">
						Remove filters
					</PrimaryButton>
				</div>
			</section>
			<FactoryList filters={filters} />
		</Fragment>
	);
};

export default FilterFactoriesForm;
