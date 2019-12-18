/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import FactorySummary from './FactorySummary';
import FactoryListCounter from './FactoryListCounter';
import SectionContainer from './SectionContainer';

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
			<div
				sx={{
					display: 'grid',
					gridTemplateColumns: [ '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)' ],
					gridGap: 4
				}}
			>
				{factories.map((factory) => <FactorySummary key={factory.id} factory={factory} />)}
			</div>
		</section>
	);
};

export default FactoryList;
FactoryList.propTypes = {
	factories: PropTypes.instanceOf(Array).isRequired
};
