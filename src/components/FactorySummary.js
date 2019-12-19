/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SummaryCard from './SummaryCard';

const FactorySummary = ({ factory }) => (
	<SummaryCard key={factory.id}>
		<div>
			<Styled.h2 sx={{ marginBottom: 2 }}>{factory.name}</Styled.h2>
		</div>
		<div>
			<Styled.p sx={{ fontStyle: 'italic' }}>{factory.address.country}</Styled.p>
			<Styled.p sx={{ fontStyle: 'italic' }}>
				Number of employees: <span sx={{ fontWeight: 'subheading' }}>{factory.employee}</span>
			</Styled.p>
		</div>
		<div>
			<Styled.p sx={{ marginY: 3 }}>{factory.summary}</Styled.p>
			<Link
				to={factory.id}
				sx={{
					fontStyle: 'italic',
					textDecoration: 'none',
					color: 'primary',
					fontWeight: 'subheading',
					fontFamily: 'body'
				}}
			>
				Read more...
			</Link>
		</div>
	</SummaryCard>
);

export default FactorySummary;

FactorySummary.propTypes = {
	factory: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		address: PropTypes.shape({
			country: PropTypes.string.isRequired
		}),
		employee: PropTypes.number.isRequired,
		summary: PropTypes.string.isRequired
	}).isRequired
};
