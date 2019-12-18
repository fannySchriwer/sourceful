/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FactorySummary = ({ factory }) => (
	<article
		key={factory.id}
		sx={{
			boxShadow: 'hover',
			paddingX: 3,
			paddingY: 4,
			marginX: [ null, 3, 4 ],
			marginY: [ 3, 4 ],
			maxWidth: '500px'
		}}
	>
		<div>
			<Styled.h3 sx={{ marginBottom: 2 }}>{factory.name}</Styled.h3>
			<Styled.p sx={{ fontStyle: 'italic' }}>{factory.address.country}</Styled.p>
			<Styled.p sx={{ fontStyle: 'italic' }}>
				Number of employees: <span sx={{ fontWeight: 'subheading' }}>{factory.employee}</span>
			</Styled.p>
		</div>

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
	</article>
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
