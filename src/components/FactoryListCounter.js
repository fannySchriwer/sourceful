/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const FactoryListCounter = ({ nrOfFactories }) => {
	return (
		<div>
			<p sx={{ fontStyle: 'italic', color: 'primary' }}>
				{nrOfFactories > 1 && `${nrOfFactories} factories found`}
			</p>
			<p sx={{ fontStyle: 'italic', color: 'primary' }}>
				{nrOfFactories === 1 && `${nrOfFactories} factory found`}
			</p>
			<p sx={{ fontStyle: 'italic', color: 'primary' }}>
				{nrOfFactories === 0 && 'No factories found, try clearing your filters'}
			</p>
		</div>
	);
};

export default FactoryListCounter;
FactoryListCounter.propTypes = {
	nrOfFactories: PropTypes.number.isRequired
};
