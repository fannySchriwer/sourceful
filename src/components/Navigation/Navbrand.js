/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useContext } from 'react';
import LogoDesktop from '../LogoDesktop';
import LogoMobile from '../LogoMobile';
import { ToggleContext } from '../ToggleContext';
import { Breakpoint } from 'react-socks';

const NavBrand = () => {
	const { closeNavigation } = useContext(ToggleContext);
	const { datoCmsCompanyInfo } = useStaticQuery(
		graphql`
			query {
				datoCmsCompanyInfo {
					companyName
				}
			}
		`
	);
	const { companyName } = datoCmsCompanyInfo;
	const brandName = companyName.toUpperCase();

	return (
		<Link
			onClick={closeNavigation}
			sx={{
				display: 'flex',
				alignItems: 'center',
				zIndex: 4,
				textDecoration: 'none'
			}}
			to="/"
		>
			<Breakpoint medium up>
				<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
					<LogoDesktop />
				</div>
			</Breakpoint>
			<Breakpoint large up>
				<span
					sx={{
						color: 'primary',
						fontSize: 4,
						fontFamily: 'heading',
						fontWeight: 'heading',
						textTransform: 'lowercase'
					}}
				>
					{brandName}
				</span>
			</Breakpoint>

			<Breakpoint small down>
				<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
					<LogoMobile />
				</div>
			</Breakpoint>
		</Link>
	);
};

export default NavBrand;
