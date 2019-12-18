/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const BackgroundImg = () => {
	const { datoCmsHeader } = useStaticQuery(
		graphql`
			query {
				datoCmsHeader {
					backgroundImg {
						alt
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
				}
			}
		`
	);

	const { backgroundImg } = datoCmsHeader;
	return <Img fluid={backgroundImg.fluid} alt={backgroundImg.alt} />;
};

export default BackgroundImg;
