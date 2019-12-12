/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const AnchorLink = ({ children, href, id }) => (
  <Styled.a
    aria-label={`Scroll to ${href}`}
    href={`#${href}`}
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