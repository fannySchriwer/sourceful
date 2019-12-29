/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';
import CardContainer from './CardContainer';
import Pagination from './Pagination';

import useGetAllFactories from '../hooks/useGetAllFactories';

const FactoryList = ({ filters }) => {
	const { factories } = useGetAllFactories(filters);
	const nrOfFactories = Object.keys(factories).length;

	return (
		<section
			sx={{
				paddingX: [ 4, 5, 6 ],
				paddingY: [ 3, 4 ]
			}}
		>
			<FactoryListCounter nrOfFactories={nrOfFactories} />
			<CardContainer>
				{factories.map((factory) => <FactorySummary key={factory.id} factory={factory} />)}
			</CardContainer>
			<Pagination />
		</section>
	);
};

export default FactoryList;
FactoryList.propTypes = {
	factories: PropTypes.instanceOf(Array).isRequired
};
