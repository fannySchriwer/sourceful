/** @jsx jsx */
import { jsx } from 'theme-ui';
import { keyframes } from '@emotion/core';

const WaveAnimation = () => {
	const rotate = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg);
   }
`;
	return (
		<div
			sx={{
				zIndex: 3,
				position: 'fixed',
				top: 0,
				right: 0,
				transform: 'rotate(10deg)'
			}}
		>
			{/* unique values for the animation 
        therefore we are not getting it from theme ui */}
			<div
				sx={{
					position: 'absolute',
					width: [ '1200px', '1600px' ],
					height: [ '1000px', '1300px' ],
					marginLeft: [ '-450px', '-650px' ],
					marginTop: [ '-350px', '-500px' ],
					borderRadius: '43%',
					backgroundColor: 'primary'
				}}
			/>
			<div
				sx={{
					position: 'absolute',
					width: [ '1000px', '1200px' ],
					height: '900px',
					marginLeft: [ '-450px', '-650px' ],
					marginTop: [ '-350px', '-450px' ],
					borderRadius: '43%',
					animation: `${rotate} 3000ms infinite linear`,
					opacity: '.1',
					backgroundColor: 'lightGrey'
				}}
			/>
			<div
				sx={{
					position: 'absolute',
					opacity: '.4',
					width: [ '1000px', '1200px' ],
					height: [ '900px', '1200px' ],
					marginLeft: [ '-450px', '-650px' ],
					marginTop: [ '-350px', '-450px' ],
					borderRadius: '43%',
					animation: `${rotate} 7500ms infinite linear`,
					backgroundColor: 'secondary'
				}}
			/>
		</div>
	);
};

export default WaveAnimation;
