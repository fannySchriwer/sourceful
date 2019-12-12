/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const InternalLink = ({ children, href, id }) => (
  <Styled.a as={Link}
    to={`/${href}`}
    key={id}
    sx={{
      mx: 3,
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'inline-block',
        backgroundColor: 'secondary',
        position: 'absolute',
        top: 4,
        left: '-5px',
        width: 'calc(100% + 10px)',
        height: 'calc(100% - 16px)',
        transform: 'scaleX(0)',
        transformOrigin: '0% 50%',
        transition: 'ease-in-out 0.35s',
      },
      '&:hover': {
        '&::before': { transform: 'scaleX(1)' },
      },
      '&:focus': {
        '&::before': { transform: 'scaleX(1)' },
      },
        '&.active': {
          '&::before': { transform: 'scaleX(1)' },
      },
    }}
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