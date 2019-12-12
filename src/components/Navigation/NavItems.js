/** @jsx jsx */
import { graphql, useStaticQuery} from 'gatsby';
import { jsx } from 'theme-ui';
import { Fragment, useState, useEffect } from 'react';
import AnchorLink from './AnchorLink';
import InternalLink from './InternalLink';
import SecondaryButton from '../SecondaryButton';
import Modal from '../Modal'
import useModal from '../../hooks/useModal';
import ModalPortal from '../Modal/ModalPortal';
import { useAuth } from '../../hooks/useAuth';


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
  const [modalOpen, setModalOpen, closeModal] = useModal();
  const auth = useAuth();
  const [loadedUser, setLoadedUser] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setLoadedUser(true)    
    } else {
      setLoadedUser(false) 
    }
  }, [auth, loadedUser, setLoadedUser]);

  return (
    <Fragment>
      {navItems.map((navitem) => {
        if (navitem.link.slug) {
          return (
            <InternalLink id={navitem.id} href={navitem.link.slug}>
              {navitem.text}
            </InternalLink>
          )
        } else if (navitem.link.anchorPoint) {
          return (
            <AnchorLink id={navitem.id} href={navitem.link.anchorPoint}>
              {navitem.text}
            </AnchorLink>
          )
        }
      })}
      <SecondaryButton handleClick={setModalOpen}>
        {loadedUser ? `${signOutBtnText}` : `${signInBtnText}`}
      </SecondaryButton>
      <ModalPortal>
        <Modal
          closeModal={closeModal}
          modalOpen={modalOpen}
          isLoaded={loadedUser}
        />
      </ModalPortal>
    </Fragment>
  )
}

export default NavItems;