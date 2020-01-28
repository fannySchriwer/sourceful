/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import LinkButton from './LinkButton';
import BackgroundImage from './BackgroundImg';
import HeaderContainer from './HeaderContainer';

const Hero = () => {
	const { datoCmsHero, datoCmsSearchSection } = useStaticQuery(
		graphql`
			query {
				datoCmsSearchSection {
					slug
				}
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
		<HeaderContainer>
			<div
				sx={{
					gridArea: [ 'top/outer-start/bottom/outer-end', 'top/center/middle-end/outer-end' ]
				}}
			>
				<BackgroundImage />
			</div>
			<div
				sx={{
					gridArea: [
						'middle-start/outer-start/bottom/outer-end',
						'middle-start/outer-start/bottom/outer-end'
					],
					display: 'flex',
					flexDirection: [ 'column', null, 'row' ],
					zIndex: 2
				}}
			>
				<div
					sx={{
						paddingX: [ 3, 4, 5 ],
                        paddingTop: [ 1, null, 5 ],
						marginTop: [7, 3],
						maxWidth: [ '100%', '550px', '950px']
					}}
				>
					<Styled.h1 sx={{ maxWidth: '500px' }}>{heroTitle}</Styled.h1>
					<Styled.h3 sx={{ marginBottom: [ 4, 5 ], marginTop: [ 4, 5 ] }}>{heroText}</Styled.h3>
					<LinkButton href={datoCmsSearchSection.slug}>{ctaText}</LinkButton>
				</div>
				<div sx={{ height: '100%', width: ['100%', '80%', '100%'], paddingTop: [ 0, null, 6 ] }}>
					<Img fluid={heroImg.fluid} />
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Hero;
