/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { ToggleContext } from '../ToggleContext';
import NavItems from './NavItems';

const Dropdown = () => {
  const { open } = useContext(ToggleContext);
  const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg);
   }
`
  return (
    <div
      sx={{
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 2,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        transform: open ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div sx={{
        zIndex: 3,
        position: 'fixed',
        top: 0,
        right: 0,
        transform: 'rotate(10deg)',
      }}>
        <div
          sx={{
          position: 'absolute',
          width: '1200px',
          height: '1000px',
          marginLeft: '-450px',
          marginTop: '-350px',
          borderRadius: '43%',
          backgroundColor: 'primary',
          }}
        ></div>
          <div sx={{
          position: 'absolute',
          width: '1000px',
          height: '900px',
          marginLeft: '-450px',
          marginTop: '-350px',
          borderRadius: '43%',
          animation: `${rotate} 3000ms infinite linear`,
          opacity: '.1',
          backgroundColor: 'lightGrey',
        }}></div>
          <div sx={{
          position: 'absolute',
          opacity: '.4',
          width: '1000px',
          height: '900px',
          marginLeft: '-450px',
          marginTop: '-350px',
          borderRadius: '43%',
          animation: `${rotate} 7500ms infinite linear`,
          backgroundColor: 'secondary',
        }}></div>
      </div>
      <div
        sx={{
        zIndex: 4,
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
        <NavItems />
      </div>

    </div>
  );
};

export default Dropdown;
