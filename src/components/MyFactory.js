/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MyFactory = ({ factory }) => {
	return(
		<article
		key={factory.id}
		sx={{
			boxShadow: 'hover',
			paddingX: 3,
      paddingBottom: 4,
      paddingTop: 2,
			marginX: [ null, 3, 4 ],
			marginY: [ 3, 4 ],
			maxWidth: '500px'
		}}
	>
      <div>
        <Styled.h4
          sx={{ marginBottom: 2 }}
        >
          {factory.name}
        </Styled.h4>
        <Styled.p
          sx={{ fontStyle: 'italic' }}
        >
          {factory.address.country}
        </Styled.p>
      </div>
      <Styled.h5
        sx={{marginBottom: 0, fontWeight: 'heading'}}
        >
          Personal comment:
        </Styled.h5>
			<Styled.p
        sx={{ fontStyle: 'italic', paddingBottom: 2, }}
      >
				" {factory.comment} "
			</Styled.p>
		  <Link
        to={factory.factoryID}
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
	)
};

export default MyFactory;

MyFactory.propTypes = {
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
