/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useContext, Fragment } from 'react';
import LogoDesktop from '../LogoDesktop';
import LogoMobile from '../LogoMobile';
import { ToggleContext } from '../ToggleContext';

import { Media } from 'react-breakpoints';

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
			<Media>
				{({ breakpoints, currentBreakpoint }) => {
					switch (true) {
						case breakpoints[currentBreakpoint] > breakpoints.tabletLandscape:
							return (
								<Fragment>
									<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
										<LogoDesktop />
									</div>
									<span
										sx={{
											color: 'primary',
											fontFamily: 'body',
											fontWeight: 'heading',
											fontSize: 3,
											textDecoration: 'none',
											textTransform: 'uppercase'
										}}
									>
										{brandName}
									</span>
								</Fragment>
							);
							break;
						case breakpoints[currentBreakpoint] > breakpoints.mobile:
							return (
								<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
									<LogoDesktop />
								</div>
							);
							break;
						case breakpoints[currentBreakpoint] <= breakpoints.mobile:
							return (
								<div sx={{ width: [ '50px', '60px', '70px' ], marginRight: 3 }}>
									<LogoMobile />
								</div>
							);
							break;
						default:
							break;
					}
				}}
			</Media>
		</Link>
	);
};

export default NavBrand;
