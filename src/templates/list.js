/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import MyFactory from '../components/MyFactory';
import Layout from '../components/Layout';
import HeaderContainer from '../components/HeaderContainer';
import BackgroundImg from '../components/BackgroundImg';
import Select from '../components/SelectField';
import CardContainer from '../components/CardContainer';

const List = ({ data: { user } }) => {
	const productTypes = [ 'Knit', 'Woven', 'Jersey' ];
	return (
		<Layout>
			<HeaderContainer>
				<div
					sx={{
						gridArea: [ 'top/outer-start/bottom/outer-end', 'top/center/bottom/outer-end' ],
						zIndex: -1
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
						marginTop: [ 3, 6, 6 ]
					}}
				>
					<Styled.h1
						sx={{
							paddingTop: 5,
							textAlign: 'center'
						}}
					>
						My List
					</Styled.h1>
					<div sx={{ width: '250px', marginRight: 'auto', marginLeft: 'auto' }}>
						<Select
							options={productTypes}
							inputLabel="Product type"
							onChange={'handleChange'}
							name="productType"
							defaultValue={'filters.productType'}
						/>
					</div>
				</div>
			</HeaderContainer>
			<section
				sx={{
					paddingX: [ 4, 5, 6 ],
					marginTop: [ '-300px', '-450px' ]
				}}
			>
				<CardContainer>
					{user.childrenList.map((factory) => <MyFactory key={factory.id} factory={factory} />)}
				</CardContainer>
			</section>
		</Layout>
	);
};

export default List;

export const pageQuery = graphql`
	query($id: String!) {
		user(id: { eq: $id }) {
			id
			email
			childrenList {
				address {
					country
				}
				comment
				category {
					jersey
					knit
					woven
				}
				name
				id
				employee
				producttype
				factoryID
			}
		}
	}
`;
