/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Layout from '../components/Layout';
import { BreakpointProvider } from 'react-socks';

const IndexPage = () => (
	// eslint-disable-next-line react/jsx-fragments
	<Fragment>
		<SEO title="Home" />
		<BreakpointProvider>
			<Layout>
				<SignUp />
				<FilterFactoriesForm />
			</Layout>
		</BreakpointProvider>
	</Fragment>
);

export default IndexPage;
