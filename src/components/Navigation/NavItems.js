/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import { jsx } from 'theme-ui';
import { Fragment, useState, useEffect, useContext } from 'react';
import AnchorLink from './AnchorLink';
import InternalLink from './InternalLink';
import PrimaryButton from '../PrimaryButton';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';
import Login from '../Login';

import { ToggleContext } from '../ToggleContext';

const NavItems = () => {
	const { datoCmsNavigation, datoCmsHelperText } = useStaticQuery(
		graphql`
			query {
				datoCmsNavigation {
					navItems {
						... on DatoCmsNavItem {
							id
							link {
								slug
							}
							text
						}
						... on DatoCmsAnchorLink {
							id
							text
							link {
								anchorPoint
							}
						}
					}
				}
				datoCmsHelperText {
					signInBtnText
					signOutBtnText
				}
			}
		`
	);

	const { navItems } = datoCmsNavigation;
	const { signInBtnText, signOutBtnText } = datoCmsHelperText;
	const { modalOpen, setModalOpen, closeModal } = useModal();
	const { closeNavigation } = useContext(ToggleContext);
	const auth = useAuth();
  	const [ loadedUser, setLoadedUser ] = useState(false);

	function logOut(e) {
		e.preventDefault();
		auth.signout();
		setTimeout(closeNavigation, 500);
	}

	useEffect(
		() => {
			if (auth.currentUser) {
				setLoadedUser(true);
			} else {
				setLoadedUser(false);
			}
		},
		[ auth, loadedUser, setLoadedUser ]
	);

	return (
		<Fragment>
			{navItems.map((navitem, i) => {
				if (navitem.link.slug) {
					return (
						<InternalLink key={`${navitem.link.slug} ${i}`} href={navitem.link.slug} handleClick={closeNavigation}>
							{navitem.text}
						</InternalLink>
					);
				} else if (navitem.link.anchorPoint) {
					return (
						<AnchorLink key={`${navitem.link.anchorpoint} ${i}`} href={navitem.link.anchorPoint} handleClick={closeNavigation}>
							{navitem.text}
						</AnchorLink>
					);
				}
			})}
			{auth.currentUser ? (
				<Fragment>
					<InternalLink href={auth.currentUser.uid} handleClick={closeNavigation}>
						My List
					</InternalLink>
					<PrimaryButton propFunction={logOut} label={signOutBtnText}>
						{signOutBtnText}
					</PrimaryButton>
				</Fragment>
			) : (
				<PrimaryButton propFunction={setModalOpen} label={signInBtnText}>
					{signInBtnText}
				</PrimaryButton>
			)}

			<Modal closeModal={closeModal} modalOpen={modalOpen}>
        <Login propFunction={closeModal} />
			</Modal>
		</Fragment>
	);
};

export default NavItems;
