/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useContext } from 'react';
import { ModalContext } from './ModalContext';
import DeleteFactory from './DeleteFactory';
import DeleteButton from './DeleteButton';
import Modal from './Modal';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const MyFactory = ({ factory }) => {
	const [ openSnackbar, setOpenSnackbar ] = useState(false);
	const [ snackbarMsg, setSnackbarMsg ] = useState(null);
	const categories = Object.keys(factory.category).filter((c) => factory.category[c]);
	const { openModal } = useContext(ModalContext);

	const onDeleteFactory = () => {
		openModal();
	};

	const handleClose = () => {
		setOpenSnackbar(false);
	}

	const { datoCmsMyList } = useStaticQuery(
		graphql`
			query {
				datoCmsMyList {
					categoriesTitle
					linkText
					minimumQuantityTitle
					personalCommentTitle
					productTypeTitle
				}
			}
		`
	);

	return (
		<article
			key={factory.id}
			sx={{
				boxShadow: 'hover',
				padding: 3,
				maxWidth: '500px'
			}}
		>
			<div
				sx={{
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<DeleteButton deleteFunction={onDeleteFactory} />
			</div>

			<Modal>
				<DeleteFactory setOpenSnackbar={setOpenSnackbar} setSnackbarMsg={setSnackbarMsg} factory={factory} />
			</Modal>

			<div>
				<Styled.h2 sx={{ marginBottom: 2, fontSize: 3 }}>{factory.name}</Styled.h2>
				<Styled.p sx={{ fontStyle: 'italic' }}>{factory.address.country}</Styled.p>
			</div>
			<div
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					paddingY: 2,
					minHeight: '170px'
				}}
			>
				<div
					sx={{
						width: '100%',
						paddingY: 1,
						height: '60px'
					}}
				>
					<Styled.p sx={{ marginBottom: 0, fontWeight: 'heading' }}>
						{datoCmsMyList.minimumQuantityTitle}
					</Styled.p>
					<Styled.p sx={{ fontStyle: 'italic', paddingBottom: 2 }}>{factory.quantity}</Styled.p>
				</div>
				<div
					sx={{
						width: '45%',
						paddingRight: 1,
						height: '100px'
					}}
				>
					<Styled.p sx={{ marginBottom: 0, fontWeight: 'heading' }}>
						{datoCmsMyList.productTypeTitle}
					</Styled.p>
					{factory.producttype.map((type, i) => (
						<Styled.p key={`${type} ${i}`} sx={{ fontStyle: 'italic', paddingRight: 1 }}>
							{type}
						</Styled.p>
					))}
				</div>
				<div
					sx={{
						width: '45%',
						paddingRight: 1,
						height: '100px'
					}}
				>
					<Styled.p sx={{ marginBottom: 0, fontWeight: 'heading' }}>{datoCmsMyList.categoriesTitle}</Styled.p>
					{categories.map((category, index) => (
						<Styled.p key={index} sx={{ fontStyle: 'italic' }}>
							{category}
						</Styled.p>
					))}
				</div>
			</div>
			<div>
				<Styled.p sx={{ marginBottom: 0, fontWeight: 'heading' }}>
					{datoCmsMyList.personalCommentTitle}
				</Styled.p>
				<Styled.p sx={{ fontStyle: 'italic', paddingBottom: 2, paddingY: 2 }}>{factory.comment}</Styled.p>
			</div>
			<Styled.a
				href={`/${factory.factoryID}`}
				sx={{
					fontStyle: 'italic',
					textDecoration: 'none',
					color: 'primary',
					fontWeight: 'subheading',
					fontFamily: 'body'
				}}
			>
				{datoCmsMyList.linkText}
			</Styled.a>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={openSnackbar}
				autoHideDuration={3000}
				message={snackbarMsg}
				action={
					<Fragment>
						<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
							x
						</IconButton>
					</Fragment>
				}
			/>
		</article>
	);
};

export default MyFactory;

MyFactory.propTypes = {
	factory: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		address: PropTypes.shape({
			country: PropTypes.string.isRequired
		}),
		employee: PropTypes.number.isRequired
	}).isRequired
};