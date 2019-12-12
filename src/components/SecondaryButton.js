/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const SecondaryButton = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
);
export default SecondaryButton;

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired
}