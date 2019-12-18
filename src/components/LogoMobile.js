/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';

const LogoMobile = () => {
	const { datoCmsCompanyInfo } = useStaticQuery(
		graphql`
			query {
				datoCmsCompanyInfo {
					logoSmall {
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
				}
			}
		`
	);

	const { logoSmall } = datoCmsCompanyInfo;
	return <Img fluid={logoSmall.fluid} />;
};

export default LogoMobile;
