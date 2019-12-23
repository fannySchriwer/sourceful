/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MyFactory = ({ factory }) => {
  const categories = Object.keys(factory.category).filter(c => factory.category[c]);
	return(
		<article
		key={factory.id}
		sx={{
			boxShadow: 'hover',
			paddingX: 3,
      paddingBottom: 4,
      paddingTop: 2,
			maxWidth: '500px'
		}}
	>
      <div>
        <Styled.h2
          sx={{ marginBottom: 2 }}
        >
          {factory.name}
        </Styled.h2>
        <Styled.p
          sx={{ fontStyle: 'italic' }}
        >
          {factory.address.country}
        </Styled.p>
      </div>
      <div sx={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingY: 2,
        minHeight: '170px'
      }}>
        <div sx={{
          width: '100%',
          paddingY: 1
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}
            >
              Minimum Quantity: 
          </Styled.p>
          <Styled.p
            sx={{ fontStyle: 'italic', paddingBottom: 2, }}
          >
            {factory.quantity}
          </Styled.p>
        </div>
        <div sx={{
          width: '45%',
          paddingY: 1
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}
            >
              Product types: 
          </Styled.p>
            {factory.producttype.map((type) => (
            <Styled.p
              sx={{ fontStyle: 'italic' }}
            >
              {type}
            </Styled.p>
            ))}
        </div>
        <div sx={{
          width: '45%',
          paddingY: 1
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}
            >
              Categories: 
            </Styled.p>
            {categories.map((category) => (
            <Styled.p
              sx={{ fontStyle: 'italic' }}
            >
              {category}
            </Styled.p>
            ))}
        </div>
      </div>
      <div>
        <Styled.p
          sx={{marginBottom: 0, fontWeight: 'heading'}}
          >
            Personal comment:
        </Styled.p>
        <Styled.p
          sx={{ fontStyle: 'italic', paddingBottom: 2, paddingY: 2 }}
        >
          {factory.comment}
        </Styled.p>
      </div>
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
