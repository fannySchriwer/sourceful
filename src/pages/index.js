/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const IndexPage = () => (
	<Fragment>
		<Layout>
			<Hero />
			<main>
				<FilterFactoriesForm />
			</main>
		</Layout>
	</Fragment>
);

export default IndexPage;
