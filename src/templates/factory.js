/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import ModalPortal from '../components/Modal/ModalPortal';
import Layout from '../components/Layout';
import BackgroundImg from '../components/BackgroundImg';
import LikeButton from '../components/LikeButton';
import HeaderContainer from '../components/HeaderContainer';

const Factory = ({ data: { factory } }) => {
	const auth = useAuth();
	const [ modalOpen, setModalOpen, closeModal ] = useModal();
	const [ loadedUser, setLoadedUser ] = useState(false);

	useEffect(
		() => {
			if (auth.currentUser) {
				setLoadedUser(true);
			}
		},
		[ auth ]
	);

	const { name, contact, category, address, description, employee, producttype, certificates, continent } = factory;
	const { email, website } = contact;
	const { city, country, postalcode, street } = address;

	let bsci;
	certificates.bsci
		? (bsci = (
				<div>
					<img sx={{ width: '100px' }} src={certificates.bsci.logo} alt="BSCI logo" />
				</div>
			))
		: bsci;

	let gortex;
	certificates.gortex
		? (gortex = (
				<div>
					<img sx={{ width: '100px' }} src={certificates.gortex.logo} alt="Gortex logo" />
				</div>
			))
		: gortex;

	let web;
	website ? (web = <Styled.p>{website}</Styled.p>) : web;

	let jersey;
	category.jersey ? (jersey = <Styled.p>Jersey</Styled.p>) : web;

	return (
		<Layout>
			<HeaderContainer>
				<div
					sx={{
						gridArea: [ 'top/outer-start/bottom/outer-end', 'top/center/bottom/outer-end' ]
					}}
				>
					<BackgroundImg />
				</div>
				<div
					sx={{
						gridArea: [
							'middle/outer-start/bottom/outer-end',
							'middle-start/outer-start/bottom/outer-end'
						],
						zIndex: 2,
						paddingX: [ 3, 5, 6 ],
						marginTop: [ 3, 6, 6 ],
						backgroundColor: 'hotpink',
						display: 'grid',
						gridTemplateColumns: '[outer-start] 1fr [center] 1fr [outer-end]',
						gridTemplateRows: [ '[top] 100px [middle-start] 100px [middle-end] auto [bottom]' ]
					}}
				>
					<Styled.h1
						as="div"
						sx={{
							gridArea: [ 'top/outer-start/midle-start/outer-end', 'top/outer-start/midle-start/center' ]
						}}
					>
						{name}
					</Styled.h1>
					<Styled.h2
						as="div"
						sx={{
							gridArea: [
								'middle-start/outer-start/midle-end/outer-end',
								'middle-start/outer-start/midle-end/outer-end'
							]
						}}
					>
						Contact information:
					</Styled.h2>
					<div
						sx={{
							gridArea: [ 'middle-start/center/midle-end/outer-end' ],
							justifySelf: 'end'
						}}
					>
						<LikeButton setModalOpen={setModalOpen} />
					</div>
					{/* 
					<div
						sx={{
							marginTop: 4
						}}
					>
						<Styled.h2>Contact information: </Styled.h2> */}
					{/* Contact details container */}
					{/* <div
							sx={{
								textAlign: 'right'
							}}
						>
							<LikeButton setModalOpen={setModalOpen} />
						</div>

						<div
							sx={{
								display: 'grid',
								gridTemplateColumns: '1fr 2fr',
								marginTop: 4,
								gridGap: '20px'
							}}
						>
							<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
								Webside:
							</Styled.p>
							<Styled.p as="div">{web}</Styled.p>
							<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
								Email
							</Styled.p>
							<Styled.p
								as="a"
								href={`mailto:${email}`}
								sx={{
									textDecoration: 'none',
									color: 'text',
									':hover': {
										color: 'primary',
										fontWeight: 'normal'
									}
								}}
							>
								{email}
							</Styled.p>
							<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal', marginTop: 4 }}>
								Address:
							</Styled.p>
							<div sx={{ marginTop: 4 }}>
								<Styled.p>{street},</Styled.p>
								<Styled.p> {postalcode},</Styled.p>
								<Styled.p> {city},</Styled.p>
								<Styled.p> {country},</Styled.p>
								<Styled.p sx={{ textTransform: 'capitalize' }}>{continent}</Styled.p>
							</div> */}
					{/* Contact details container end */}
					{/* </div> */}
					{/* Contact information container end */}
					{/* </div>
					<div sx={{ display: 'flex', marginTop: 3 }}>
						{bsci}
						{gortex}
					</div> */}
				</div>
			</HeaderContainer>

			<section
				sx={{
					paddingX: [ 3, 5, 6 ]
				}}
			>
				{/* Factory details container */}
				<div
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						marginTop: 4
					}}
				>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
						Minimum quantity:
					</Styled.p>
					<Styled.p as="div">{web}</Styled.p>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
						Categories:
					</Styled.p>
					<div>{jersey}</div>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal', marginTop: 4 }}>
						Product type:
					</Styled.p>
					<div sx={{ marginTop: 4 }}>{producttype.map((prod, i) => <Styled.p key={i}>{prod}</Styled.p>)}</div>
					{/* Factory details container end */}
				</div>
			</section>

			<ModalPortal>
				<Modal closeModal={closeModal} modalOpen={modalOpen} isLoaded={loadedUser} factory={factory} />
			</ModalPortal>
		</Layout>
	);
};

export default Factory;

Factory.defaultProps = {
	certificates: PropTypes.shape({
		bsci: PropTypes.shape({
			logo: 'https://i.ibb.co/TrDtYLr/BSCI.png',
			name: ''
		}),
		blue_sign: PropTypes.shape({
			logo: 'https://i.ibb.co/qkFw4pR/blue-sign.jpg',
			name: ''
		}),
		gortex: PropTypes.shape({
			logo: 'https://i.ibb.co/GJfF21h/GORE-TEX-Brand-Logo-600x500.jpg',
			name: ''
		}),
		rds: PropTypes.shape({
			logo: 'https://i.ibb.co/f1G5vcg/RDS.png',
			name: ''
		})
	}),
	contact: PropTypes.shape({
		email: '',
		website: ''
	}),
	employee: 0
};

Factory.propTypes = {
	data: PropTypes.shape({
		factory: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			employee: PropTypes.number,
			producttype: PropTypes.array.isRequired
		}),
		contact: PropTypes.shape({
			email: PropTypes.string,
			website: PropTypes.string
		}),
		certificates: PropTypes.shape({
			bsci: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			blue_sign: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			gortex: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			rds: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			})
		}),
		address: PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
			street: PropTypes.string.isRequired
		})
	}).isRequired
};

export const pageQuery = graphql`
	query($id: String!) {
		factory(id: { eq: $id }) {
			name
			address {
				city
				country
				postalcode
				street
			}
			category {
				jersey
				knit
				woven
			}
			certificates {
				blue_sign {
					blue_sign
					logo
					name
				}
				bsci {
					bsci
					logo
					name
				}
				gortex {
					logo
					gortex
					name
				}
			}
			contact {
				email
				website
			}
			continent
			description
			quantity
			id
			employee
			producttype
			segment
		}
	}
`;
