/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
			backgroundColor: 'black',
			height: ['15vh', '15vh', '20vh'],
			justifyContent: 'space-between',
			paddingX: [ 4, 5, 6 ],
			paddingY: [ 3, 4 ],
			marginTop: 5
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
			<Styled.h4 sx={{ color: 'lightGrey' }}>
			    {copyright}
			</Styled.h4>
		</div>
    </div>);
};

export default Footer;
