/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
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
		<Styled.a
			onClick={closeNavigation}
			sx={{
				display: 'flex',
				alignItems: 'center',
				zIndex: 4,
				textDecoration: 'none'
			}}
			href="/"
		>
			<Media>
				{({ breakpoints, currentBreakpoint }) => {
					switch (true) {
						case breakpoints[currentBreakpoint] > breakpoints.tabletLandscape:
							return (
								<Fragment>
									<div sx={{ width: '35px', marginRight: 3 }}>
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
								<div sx={{ width: '35px', marginRight: 3 }}>
									<LogoDesktop />
								</div>
							);
							break;
						case breakpoints[currentBreakpoint] <= breakpoints.mobile:
							return (
								<div sx={{ width: '35px', marginRight: 3 }}>
									<LogoMobile />
								</div>
							);
							break;
						default:
							break;
					}
				}}
			</Media>
		</Styled.a>
	);
};

export default NavBrand;
