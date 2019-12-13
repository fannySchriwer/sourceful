/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from 'theme-ui';
import { ToggleContext } from '../ToggleContext';
import NavItems from './NavItems';
import WaveAnimation from './WaveAnimation';

const Dropdown = () => {
	const { open } = useContext(ToggleContext);
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
				transition: 'transform 0.3s ease-in-out'
			}}
		>
			<WaveAnimation />
			<div
				sx={{
					zIndex: 4,
					display: 'flex',
					margin: 'auto',
					flexDirection: 'column',
					textAlign: 'center'
				}}
			>
				<NavItems />
			</div>
		</div>
	);
};

export default Dropdown;
