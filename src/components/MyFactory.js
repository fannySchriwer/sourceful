/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const MyFactory = ({ factory }) => {
  const categories = Object.keys(factory.category).filter(c => factory.category[c]);
  
	const { datoCmsMyList } = useStaticQuery(
		graphql`
			query {
				datoCmsMyList {
          categoriesTitle
          linkText
          minimumQuantityTitle
          personalCommentTitle
          productTypeTitle
        }
			}
		`
  );

	return(
		<article
		key={factory.id}
		sx={{
			boxShadow: 'hover',
      paddingX: 3,
      paddingY: 4,
			maxWidth: '500px'
		}}
	>
      <div>
        <Styled.h2
          sx={{ marginBottom: 2 }}>
          {factory.name}
        </Styled.h2>
        <Styled.p
          sx={{ fontStyle: 'italic' }}>
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
          paddingY: 1,
          height: '60px'
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}>
              {datoCmsMyList.minimumQuantityTitle} 
          </Styled.p>
          <Styled.p
            sx={{ fontStyle: 'italic', paddingBottom: 2, }}>
            {factory.quantity}
          </Styled.p>
        </div>
        <div sx={{
          width: '45%',
          paddingRight: 1,
          height: '100px'
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}>
              {datoCmsMyList.productTypeTitle}  
          </Styled.p>
            {factory.producttype.map((type) => (
            <Styled.p
              sx={{ fontStyle: 'italic', paddingRight: 1 }}>
              {type}
            </Styled.p>
            ))}
        </div>
        <div sx={{
          width: '45%',
          paddingRight: 1,
          height: '100px'
        }}>
          <Styled.p
            sx={{marginBottom: 0, fontWeight: 'heading'}}>
              {datoCmsMyList.categoriesTitle}  
            </Styled.p>
            {categories.map((category) => (
            <Styled.p
              sx={{ fontStyle: 'italic' }}>
              {category}
            </Styled.p>
            ))}
        </div>
      </div>
      <div>
        <Styled.p
          sx={{marginBottom: 0, fontWeight: 'heading'}}>
            {datoCmsMyList.personalCommentTitle} 
        </Styled.p>
        <Styled.p
          sx={{ fontStyle: 'italic', paddingBottom: 2, paddingY: 2 }}>
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
        }}>
			{datoCmsMyList.linkText}
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
