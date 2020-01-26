/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import LogoMobile from './LogoMobile'

const Footer = () => {
	const { datoCmsFooter, datoCmsCompanyInfo } = useStaticQuery(
		graphql`
			query {
				datoCmsFooter {
					copyright
				}
				datoCmsCompanyInfo {
					logoSmall {
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
					companyName
				}
			}
		`
    );
	const { companyName, logoSmall } = datoCmsCompanyInfo;
	const { copyright } = datoCmsFooter;
	const brandName = companyName.toUpperCase();

    return(
		<div sx={{
			display: 'flex',
			backgroundColor: 'primary',
			height: '20vh',
			justifyContent: 'space-around'
		}}>
		<div sx={{ display: 'flex', marginRight: 3, alignItems: 'center', justifyContent: 'center'  }}>
			<div sx={{
				width: '35px'
			}}>
				<Img fluid={logoSmall.fluid} />
			</div>
			<span
				sx={{
					color: 'secondary',
					fontFamily: 'body',
					fontWeight: 'heading',
					fontSize: 3,
					textDecoration: 'none',
					textTransform: 'uppercase'
					}}
					>
				{brandName}
			</span>
		</div>
        <div sx={{
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			textAlign: 'center'
		}}>
			{copyright}
		</div>
    </div>);
};

export default Footer;
