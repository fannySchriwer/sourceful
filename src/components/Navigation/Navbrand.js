/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useContext } from 'react';
import LogoDesktop from '../LogoDesktop';
import { ToggleContext } from '../ToggleContext';

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
			<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
				<LogoDesktop />
			</div>
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
		</Link>
	);
};

export default NavBrand;
