/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const InternalLink = ({ children, href, id }) => (
  <Styled.a as={Link}
    to={`/${href}`}
    key={id}
    sx={{margin: 1}}
  >
    {children}
  </Styled.a>
);
export default InternalLink;

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}