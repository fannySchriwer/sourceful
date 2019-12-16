/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

const SearchHeader = () => {
  const { datoCmsSearchSection } = useStaticQuery(
    graphql`
      query {
        datoCmsSearchSection {
          slug
          text
          title
        }
      }
    `
  );

  return(
    <div>
      <Styled.h3
        sx={{
          width: [7, 8],
          marginRight: 'auto',
          marginLeft: 'auto',
          textAlign: 'center',
        }}>
        {datoCmsSearchSection.text}
      </Styled.h3>
      <div sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: [4, 4, 5],
        marginTop: 1,
        width: 4,
        border: (t) => `2px solid ${t.colors.primary}`,
        
        }} />
    </div>
    )};

export default SearchHeader;
