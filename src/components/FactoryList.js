/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';
import SectionContainer from './SectionContainer';

const FactoryList = ({ factories }) => {
	const nrOfFactories = Object.keys(factories).length;
	return (
		<section>
			<FactoryListCounter nrOfFactories={nrOfFactories} />
			<SectionContainer>
				{factories.map((factory) => <FactorySummary key={factory.id} factory={factory} />)}
			</SectionContainer>
		</section>
	);
};

export default FactoryList;
FactoryList.propTypes = {
	factories: PropTypes.instanceOf(Array).isRequired
};
