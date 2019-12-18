/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import MyFactory from '../components/MyFactory';
import SectionContainer from '../components/SectionContainer';
import Layout from '../components/Layout';
import HeaderContainer from '../components/HeaderContainer';
import BackgroundImg from '../components/BackgroundImg';
import Select from '../components/SelectField';

const List = ({ data: { user } }) => {
  console.log(user.childrenList);
  const productTypes = [
    'Knit',
    'Woven',
    'Jersey'
  ];
	return (
		<Layout>
      <HeaderContainer>
      <div
					sx={{
						gridArea: [ 'top/outer-start/bottom/outer-end', 'top/center/bottom/outer-end' ]
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
          <Styled.h1 sx={{
            paddingTop: 5,
            textAlign: 'center'
          }}>My List</Styled.h1>
          <div sx={{width: '250px', marginRight: 'auto', marginLeft: 'auto'}}>
            <Select 
              options= {productTypes}
              inputLabel="Product type"
              onChange={'handleChange'}
              name="productType"
              defaultValue={'filters.productType'}
            />
          </div>
        </div>
      </HeaderContainer>
      <div sx={{
          marginTop: ['-300px', '-200px']
        }}>
        <SectionContainer>
          {user.childrenList.map((factory) => <MyFactory key={factory.id} factory={factory} />)}
        </SectionContainer>
      </div> 
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
