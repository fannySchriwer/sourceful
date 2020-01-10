/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useEffect, useState, useContext } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import Layout from '../components/Layout';
import BackgroundImg from '../components/BackgroundImg';
import LikeButton from '../components/LikeButton';
import HeaderContainer from '../components/HeaderContainer';
import Subheading from '../components/Subheading';
import Login from '../components/Login';
import AddComment from '../components/AddComment';
import useGetMyList from '../hooks/useGetMyList';
import DeleteFactory from '../components/DeleteFactory';
import { SavedFactoryContext } from '../components/SavedFactoryContext';

const Factory = ({ data: { factory } }) => {
	const auth = useAuth();
	const [ modalOpen, setModalOpen, closeModal ] = useModal();
	const [ loadedUser, setLoadedUser ] = useState(false);
	const [ saved, setSaved ] = useState(false);
	// const { saved, toggleSaveBtn, unsaveFactory } = useContext(SavedFactoryContext);

	useEffect(
		() => {
			if (auth.currentUser) {
				setLoadedUser(true);
			}
		},
		[ auth ]
	);
	//Find if this factory is saved in current logged in user's List
	const { myList } = useGetMyList();
	if (myList) {
		const isSaved = myList.some((savedFactory) => savedFactory.factoryID === factory.id);
		if (saved !== isSaved) setSaved(isSaved);
		console.log(saved);
	}
	console.log('factory is saved', saved);

	const {
		name,
		contact,
		category,
		address,
		description,
		employee,
		producttype,
		certificates,
		continent,
		quantity
	} = factory;
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

	let goretex;
	certificates.gore_tex
		? (goretex = (
				<div>
					<img sx={{ width: '100px' }} src={certificates.gore_tex.logo} alt="Goretex logo" />
				</div>
			))
		: goretex;

	let web;
	website ? (web = <Styled.p>{website}</Styled.p>) : web;

	//Check if factory has certain category or return empty string
	let categoryJersey;
	category.jersey ? (categoryJersey = <span>Jersey,</span>) : categoryJersey;

	let categoryWoven;
	category.woven ? (categoryWoven = <span>Woven,</span>) : categoryWoven;
	let categoryKnit;
	category.knit ? (categoryKnit = <span>Knit,</span>) : categoryKnit;
	let categoryGoretex;
	category.gore_tex ? (categoryGoretex = <span>GORE-TEX</span>) : categoryGoretex;

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
						display: 'grid',
						gridTemplateColumns: '[outer-start] 1fr [center-start] 20px [center-end] 1fr [outer-end]',
						gridTemplateRows: [ '[top] 150px [middle-start] 100px [middle-end] auto [bottom]' ]
					}}
				>
					<Styled.h1
						as="div"
						sx={{
							gridArea: [
								'top/outer-start/midle-start/outer-end',
								null,
								'top/outer-start/midle-start/center'
							],
							paddingTop: 2
						}}
					>
						{name}
					</Styled.h1>
					<Styled.h2
						as="div"
						sx={{
							gridArea: [ 'middle-start/outer-start/midle-end/outer-end' ]
						}}
					>
						Contact information:
					</Styled.h2>
					<div
						sx={{
							gridArea: [
								'middle-start/center-start/midle-end/outer-end',
								null,
								'middle-start/outer-start/midle-end/center-start'
							],
							justifySelf: [ 'end' ]
						}}
					>
						<LikeButton setModalOpen={setModalOpen} added={saved} />
					</div>
					<div
						sx={{
							gridArea: [
								'middle-end/outer-start/bottom/outer-end',
								null,
								'middle-end/outer-start/bottom/center-start'
							],
							display: 'grid',
							gridTemplateColumns: '1fr 2fr',
							gridTemplateRow: 'auto'
						}}
					>
						<Subheading>Webside:</Subheading>
						<Styled.p as="div">{web}</Styled.p>
						<Subheading>Email</Subheading>
						<Styled.p
							as="a"
							href={`mailto:${email}`}
							sx={{
								textDecoration: 'none',
								color: 'text',
								':hover': {
									color: 'primary',
									fontWeight: 'normal',
									cursor: 'pointer'
								}
							}}
						>
							{email}
						</Styled.p>
						<Subheading>Address:</Subheading>
						<div>
							<Styled.p>{street},</Styled.p>
							<Styled.p> {postalcode},</Styled.p>
							<Styled.p>
								{' '}
								{city}, {country}
							</Styled.p>
							<Styled.p sx={{ textTransform: 'capitalize' }}>{continent}</Styled.p>
						</div>
					</div>
				</div>
			</HeaderContainer>

			<section
				sx={{
					paddingX: [ 3, 5, 6 ]
				}}
			>
				<article sx={{ maxWidth: '1000px', marginY: 3 }}>
					<Styled.h2 sx={{ marginBottom: 4 }}>About {name}</Styled.h2>
					<Styled.p>{description}</Styled.p>
				</article>
				<div
					sx={{
						marginY: 4
					}}
				>
					{bsci}
					{goretex}
				</div>
			</section>
			<section sx={{ backgroundColor: 'lightGrey', paddingX: [ 3, 5, 6 ], paddingY: 4 }}>
				<Styled.p>
					<span sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>Minimum quantity: </span> {quantity}
				</Styled.p>
				<Styled.p>
					<span sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>Categories: </span>
					{categoryJersey} {categoryWoven} {categoryKnit} {categoryGoretex}
				</Styled.p>
			</section>

			<Modal closeModal={closeModal} modalOpen={modalOpen}>
				{loadedUser && saved && <DeleteFactory factory={factory} closeModal={closeModal} />}
				{loadedUser && !saved && <AddComment factory={factory} closeModal={closeModal} />}
				{!loadedUser && <Login propFunction={closeModal} />}
			</Modal>
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
		gore_tex: PropTypes.shape({
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
			gore_tex: PropTypes.shape({
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
				gore_tex
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
				gore_tex {
					gore_tex
					logo
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
