/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from 'theme-ui';
import { ToggleContext } from '../ToggleContext';

const Hamburger = () => {
  const { open, toggleNavigation } = useContext(ToggleContext);

  const burgerLine = action => {
    let animation = {};
    if (open) {
      switch (action) { 
        case 'rotateCW':
          animation.transform = 'rotate(-45deg) scaleY(1)';
          break;
        case 'rotateCCW':
          animation.transform = 'rotate(45deg) scaleY(1)';
          break;
        case 'fade':
          animation.backgroundColor = 'transparent';
          break;
        default:
      }
    }
    return {
      margin: 'auto',
      display: 'block',
      height: '3px',
      backgroundColor: 'primary',
      borderRadius: '2px',
      ':first-of-type': {
        width: '25px',
        transformOrigin: '90%',
      },
      ':nth-of-type(2)': {
        width: '20px',
        marginY: 1,
      },
      ':nth-of-type(3)': {
        width: '25px',
        transformOrigin: '90%',
      },
      transition: 'transform 0.5s',
      ...animation,
    };
  };

  const lineContainer = action => {
    let containerAnimation = {};
    if (open) {
      switch (action) {
        case 'moveRight':
          containerAnimation.transform = 'translate(-4px, 0)';
          break;
        default:
      }
    }
    return {
      transition: 'transform 0.5s',
      ...containerAnimation,
    }
  }
  return (
    <button
      onClick={toggleNavigation}
      sx={{
        cursor: 'pointer',
        backgroundColor: 'lightGrey',
        border: 'none',
        height: 5,
        width: 5,
        borderRadius: 2,
        boxShadow: 'hover',
        marginLeft: 'auto', 
        zIndex: 3,
      }}
    >
      <div sx={lineContainer('moveRight')}>
        <span sx={burgerLine('rotateCW')} />
        <span sx={burgerLine('fade')} />
        <span sx={burgerLine('rotateCCW')} />
      </div>
    </button>
  );
};

export default Hamburger;
