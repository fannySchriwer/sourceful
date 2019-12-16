/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { BreakpointProvider } from 'react-socks';

const IndexPage = () => (
	// eslint-disable-next-line react/jsx-fragments
	<Fragment>
		<BreakpointProvider>
			<Layout>
				{/*<SignUp />*/}
				<FilterFactoriesForm />
			</Layout>
		</BreakpointProvider>
	</Fragment>
);

export default IndexPage;
