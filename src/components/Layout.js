/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navigation from './Navigation';
import { Fragment } from 'react';
import SEO from '../components/seo';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<SEO title="Home" />
			<Navigation>{children}</Navigation>
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
