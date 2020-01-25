/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import MyFactory from '../components/MyFactory';
import Layout from '../components/Layout';
import HeaderContainer from '../components/HeaderContainer';
import BackgroundImg from '../components/BackgroundImg';
import CardContainer from '../components/CardContainer';
import InputField from '../components/InputField';
import useMyGetList from '../hooks/useGetMylist';
import { navigate } from "gatsby";
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const List = (props) => {
  const { myList } = useMyGetList();
  const auth = useAuth();

	function handleChange(event) {
		event.preventDefault();
		const { value } = event.target;
		//handle free search here
  }
  
  useEffect(() => {
    if(auth.currentUser) {
      if(`/${auth.currentUser.uid}` != props.path) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [auth]);

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
						paddingX: [ 3, 5, 6 ],
						marginTop: [ 3, 6, 6 ],
						display: [ 'block', null, 'flex' ],
						flexDirection: 'column',
						alignItems: 'flex-start'
					}}
				>
					<Styled.h1
						sx={{
							paddingTop: 5,
							textAlign: 'center'
						}}
					>
						{'title'}
					</Styled.h1>
					<div sx={{ width: '250px', marginRight: [ 'auto', null, 0 ], marginLeft: [ 'auto', null, 0 ] }}>
						<InputField inputLabel={'filterTitle'} onChange={handleChange} placeholderText="Search" />
					</div>
				</div>
			</HeaderContainer>

			<section
				sx={{
					paddingX: [ 4, 5, 6 ],
					marginTop: [ '-300px', '-170px' ]
				}}
			>
				{myList ? (
					<CardContainer>
						{myList.map((factory) => <MyFactory key={factory.id} factory={factory} />)}
					</CardContainer>
				) : null}
			</section>
		</Layout>
	);
};

export default List;
