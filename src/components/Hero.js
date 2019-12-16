/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PrimaryButton from './PrimaryButton';
import BackgroundImage from './BackgroundImg';

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
		<header
			sx={{
				height: [ '100vh' ],
				display: 'grid',
				gridTemplateColumns: '[outer-start] 1fr [center] 4fr [outer-end]',
				gridTemplateRows: '[top] 1fr [middle-start] 3fr [middle-end] 1fr [bottom]'
			}}
		>
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
						paddingX: [ 3, 5, 6 ],
						paddingTop: [ 1, null, 5 ]
					}}
				>
					<Styled.h1 sx={{ maxWidth: '500px' }}>{heroTitle}</Styled.h1>
					<Styled.h2 sx={{ marginBottom: [ 4, 5 ] }}>{heroText}</Styled.h2>
					<PrimaryButton>{ctaText}</PrimaryButton>
				</div>
				<div sx={{ height: '100%', width: '100%', paddingTop: [ 0, null, 6 ] }}>
					<Img fluid={heroImg.fluid} />
				</div>
			</div>
		</header>
	);
};

export default Hero;
