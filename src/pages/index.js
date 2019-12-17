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
			<main
				sx={{
					marginRight: [ 4, 5, 6 ],
					marginLeft: [ 4, 5, 6 ],
					marginTop: [ 3, 4 ],
					marginBottom: [ 3, 4 ]
				}}
			>
				<FilterFactoriesForm />
			</main>
		</Layout>
	</Fragment>
);

export default IndexPage;
