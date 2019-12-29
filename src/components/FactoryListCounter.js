/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const FactoryListCounter = ({ nrOfFactories }) => {

  const setContentText = () => {
    if (nrOfFactories > 1) {
      return `${nrOfFactories} factories found`;
    } if (nrOfFactories === 1) {
      return `${nrOfFactories} factory found`;
    } if(nrOfFactories === 0) {
      return 'No factories found, try clearing your filters';
    }
  }

	return (
		<div sx={{ textAlign: 'center' }}>
			<Styled.h5 sx={{ fontStyle: 'italic', color: 'primary' }}>
				{ setContentText() }
			</Styled.h5>
		</div>
	);
};

export default FactoryListCounter;
FactoryListCounter.propTypes = {
	nrOfFactories: PropTypes.number.isRequired
};
