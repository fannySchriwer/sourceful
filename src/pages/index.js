/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Navigation from '../components/Navigation';
import { BreakpointProvider } from 'react-socks';

const IndexPage = () => (
	// eslint-disable-next-line react/jsx-fragments
	<Fragment>
		<SEO title="Home" />
		<BreakpointProvider>
			<Navigation />
			<SignUp />
			<FilterFactoriesForm />
		</BreakpointProvider>
	</Fragment>
);

export default IndexPage;
