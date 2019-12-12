/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const AnchorLink = ({ children, href, id }) => (
  <Styled.a as={Link}
    to={`#${href}`}
    aria-label={`Scroll to ${href}`}
    key={id}
    sx={{margin: 1}}
  >
    {children}
  </Styled.a>
);
export default AnchorLink;

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}