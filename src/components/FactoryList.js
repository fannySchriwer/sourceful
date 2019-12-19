/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';
import CardContainer from './CardContainer';

const FactoryList = ({ factories }) => {
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
		</section>
	);
};

export default FactoryList;
FactoryList.propTypes = {
	factories: PropTypes.instanceOf(Array).isRequired
};
