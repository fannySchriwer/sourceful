/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const FactoryListCounter = ({ nrOfFactories }) => {
	return (
		<div sx={{ textAlign: 'center' }}>
			<Styled.h5>{nrOfFactories > 1 && `${nrOfFactories} factories found`}</Styled.h5>
			<Styled.h5>{nrOfFactories === 1 && `${nrOfFactories} factory found`}</Styled.h5>
			<Styled.h5 sx={{ fontStyle: 'italic', color: 'primary' }}>
				{nrOfFactories === 0 && 'No factories found, try clearing your filters'}
			</Styled.h5>
		</div>
	);
};

export default FactoryListCounter;
FactoryListCounter.propTypes = {
	nrOfFactories: PropTypes.number.isRequired
};
