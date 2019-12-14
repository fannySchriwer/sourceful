/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PrimaryButton from './PrimaryButton';

const Hero = () => {
	const { datoCmsHero } = useStaticQuery(
		graphql`
			query {
				datoCmsHero {
					heroImg {
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
					ctaText
					heroTitle
					heroText
				}
			}
		`
	);

	const { ctaText, heroTitle, heroText, heroImg } = datoCmsHero;
	return (
		<div>
			<Styled.h1>{heroTitle}</Styled.h1>
			<Styled.h2>{heroText}</Styled.h2>
			<PrimaryButton>{ctaText}</PrimaryButton>
			<Img fluid={heroImg.fluid} />
		</div>
	);
};

export default Hero;
