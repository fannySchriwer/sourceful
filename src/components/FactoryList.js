/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';
import CardContainer from './CardContainer';
import Pagination from './Pagination';
import useGetAllFactories from '../hooks/useGetAllFactories';

const FactoryList = ({ filters }) => {
	const { factories } = useGetAllFactories(filters);
	const nrOfFactories = Object.keys(factories).length;
	const [ currentPage, setCurrentPage ] = useState(1);
	const factoriesPerPage = 6;
	const nrOfPages = Math.ceil(nrOfFactories / factoriesPerPage);
	const indexOfLastPost = currentPage * factoriesPerPage;
	const indexOfFirstPost = indexOfLastPost - factoriesPerPage;
	const currentFactories = factories.slice(indexOfFirstPost, indexOfLastPost);

	useEffect(() => {
		if (currentPage > nrOfPages) {
			setCurrentPage(1);
		}
	});

	//Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Fragment>
			<section
				sx={{
					paddingX: [ 4, 5, 6 ],
					paddingY: [ 3, 4 ]
				}}
			>
				<FactoryListCounter nrOfFactories={nrOfFactories} />
				<CardContainer>
					{currentFactories.map((factory) => <FactorySummary key={factory.id} factory={factory} />)}
				</CardContainer>
			</section>
			<Pagination factoriesPerPage={factoriesPerPage} paginate={paginate} totalFactories={nrOfFactories} />
		</Fragment>
	);
};

export default FactoryList;
FactoryList.propTypes = {
	filters: PropTypes.object.isRequired
};
