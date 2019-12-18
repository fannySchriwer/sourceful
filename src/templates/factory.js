/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';
import ModalPortal from '../components/Modal/ModalPortal';
import Layout from '../components/Layout';
import BackgroundImg from '../components/BackgroundImg';
import LikeButton from '../components/LikeButton';
import HeaderContainer from '../components/HeaderContainer';

const Factory = ({ data: { factory } }) => {
	const auth = useAuth();
	const [ modalOpen, setModalOpen, closeModal ] = useModal();
	const [ loadedUser, setLoadedUser ] = useState(false);

	useEffect(
		() => {
			if (auth.currentUser) {
				setLoadedUser(true);
			}
		},
		[ auth ]
	);

	const { name, contact, category, address, description, employee, producttype, certificates, continent } = factory;
	const { email, website } = contact;
	const { city, country, postalcode, street } = address;

	let bsci;
	certificates.bsci
		? (bsci = (
				<div>
					<img sx={{ height: '100px', width: '100px' }} src={certificates.bsci.logo} alt="BSCI logo" />
				</div>
			))
		: bsci;

	console.log(certificates.bsci.logo);

	let gortex;
	certificates.gortex
		? (gortex = (
				<div>
					<Styled.p>{certificates.gortex.name}</Styled.p>
					<img src={certificates.gortex.logo} alt="Gortex logo" />
				</div>
			))
		: gortex;

	let web;
	website ? (web = <Styled.p>{website}</Styled.p>) : web;

	let jersey;
	category.jersey ? (jersey = <Styled.p>Jersey</Styled.p>) : web;

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
					<Styled.h1>{name}</Styled.h1>
					{/* Contact & like btn container */}
					<div
						sx={{
							display: 'flex',
							flexDirection: [ 'row' ],
							marginTop: [ 4 ]
						}}
					>
						{/* Contact information container */}
						<div
							sx={{
								marginTop: 4
							}}
						>
							<Styled.h2>Contact information: </Styled.h2>
							{/* Contact details container */}
							<div
								sx={{
									display: 'grid',
									gridTemplateColumns: '1fr 2fr',
									marginTop: 4
								}}
							>
								<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
									Webside:
								</Styled.p>
								<Styled.p as="div">{web}</Styled.p>
								<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
									Email
								</Styled.p>
								<Styled.p
									as="a"
									href={`mailto:${email}`}
									sx={{
										textDecoration: 'none',
										color: 'text',
										':hover': {
											color: 'primary',
											fontWeight: 'normal'
										}
									}}
								>
									{email}
								</Styled.p>
								<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal', marginTop: 4 }}>
									Address:
								</Styled.p>
								<div sx={{ marginTop: 4 }}>
									<Styled.p>{street},</Styled.p>
									<Styled.p> {postalcode},</Styled.p>
									<Styled.p> {city},</Styled.p>
									<Styled.p> {country},</Styled.p>
									<Styled.p sx={{ textTransform: 'capitalize' }}>{continent}</Styled.p>
								</div>
								{/* Contact details container end */}
							</div>
							{/* Contact information container end */}
						</div>
						<div
							sx={{
								textAlign: 'right'
							}}
						>
							<LikeButton setModalOpen={setModalOpen} />
						</div>
						{/* Contact & like btn container end*/}
					</div>
					<div sx={{ display: 'flex', marginTop: 5 }}>
						{bsci}
						{gortex}
					</div>
				</div>
			</HeaderContainer>
			<section
				sx={{
					paddingX: [ 3, 5, 6 ]
				}}
			>
				<Styled.p>{description}</Styled.p>

				{/* Factory details container */}
				<div
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						marginTop: 4
					}}
				>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
						Minimum quantity:
					</Styled.p>
					<Styled.p as="div">{web}</Styled.p>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
						Categories:
					</Styled.p>
					<div>{jersey}</div>
					<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal', marginTop: 4 }}>
						Product type:
					</Styled.p>
					<div sx={{ marginTop: 4 }}>{producttype.map((prod, i) => <Styled.p key={i}>{prod}</Styled.p>)}</div>
					{/* Factory details container end */}
				</div>
			</section>

			<ModalPortal>
				<Modal closeModal={closeModal} modalOpen={modalOpen} isLoaded={loadedUser} factory={factory} />
			</ModalPortal>
		</Layout>
	);
};

export default Factory;

Factory.defaultProps = {
	certificates: PropTypes.shape({
		bsci: PropTypes.shape({
			logo:
				'https://00e9e64bacf69a23e3536b58001f1bec43fd8d1180edff152f-apidata.googleusercontent.com/download/storage/v1/b/sourceful-images/o/BSCI.png?qk=AD5uMEsXkBaujOyyQSuBU9WNYAFglQFDlZHkn7yzX8_So5XBpQpN1zd2dHsW-_AQ_AgesJZ5dBZgb5NCYTSyRn8bAEMwbpqI2LlpF8ZNuTC5meGYjd1iUAQAVylFwfrFJezELd4-fBIYUocl6bUWOxTPkdPkk4iqk4nosTkzTRRAB7UMzWJWtCpPXrk4fVBk9lAvLZcngIvB7WZuD42M9p0t01ed5z_UJ-ZEFNfi6oPsVlQgbfxuaHiP2on6D0WHIC28YVPeaM7BilkPs_j3WvjmHYliwadnOb2OnfwZrug_n8XfPAM8OUEFFC07ujkH7j7TfHGGEVwc8yl9iZ5bhYnASEII4pXuK9tbB9fkgxd3XdoD-QKXBFRNAMNfYH5e7pkq2IuQyyMzCDZYOgj-vIhHDVglGfD3TrPgzeQtTaj-TKoBDmNw4X6MMc6jMPvTfVj7-saU-jxLUoI2etN-kGA6um4DWgMEfraf6rBCAjn2D1RMimC1Y96kRcyuS8UuualHSrBBVdgRAOQSlHruagRB9hq6ro5k2r5aCT5KqPjiVIyk3d1N5DZJXSf6egzljSdLFMskxulfpjV51LOes15ZWYzQyDXKHIelZnAOrvX3PaEQOUdavg0o7EoOTa_xAzWcD-N_7IC5MqhBCqFQKWDkSoXtXImRcmOnOkVEdAFbsZbCgrEZvoU7IE3LafNUdJUWMScQNh8AKT39obq6OXiDrP3U_kVLt3qAXybEPxfgklyQqq8K5a0W3csT34sQf9qu17v2fZdL2Eba5VMubHloLsI0PQ0utvWbksj9FPPZCUblcjzzJ-E',
			name: ''
		}),
		blue_sign: PropTypes.shape({
			logo:
				'https://00e9e64baca0f2715e2549b2d9f49c78fdfb9470ea7b4a3a7e-apidata.googleusercontent.com/download/storage/v1/b/sourceful-images/o/blue-sign.jpg?qk=AD5uMEvwPouRlEJLWSlMQtLQBSpEBpCCtYF5DnSwPyVAWURf-lngMg6-_GxTtvxJ0oNMlOVFa8Qeg66I4kgp_I7oc3mqi-m6S6zk-1OosclPV4JcMbLPt1niUB6YZ0HoTrowEclHOwjp6R1ssZM3MSYxebxU6zLAee2nko7GnGH2p63nXDa2fsxjwotEBERJ9HAP_SNpKESBlsARPwTVfPNUJ9VOgZsgyu281y2_NLzoO4MhNRBoD_0AoNUYRZVcwuh8zPCDRltv0_WZG34UQNx2dmvDD5MclyK9arLT0eNyx_ONbJBo6hBmsot9xRhrVJ5mBDDZ8LokhY62JSq4WPdtA93mYNiBZ0JatV3UeiAUqzkkuVPRlVwdnwV5cM86NSJ3e4euUnJk084Ll5IHsR7_EojcXA_aYHDRWjliTUsJ0ocwxYPkyE4Z51s89rYFd8D3M54nxJWtdKa0ILm6y0PyVo78pMThzzmKe4zS-4W_tuE8bjJCCmy-DP63hJhxAbSNbL2d8y77CTQ1kYr0_eGLexL4rp1GqiwFlP9vEm9vTRxcardHtmOwdA3FGAXNE6iAu07JQaUW_BcZ6hjQULOiNx82kT7QVVnCIUuJHz5A0xrGus9TnckmMoxn59_sqd4y8rNQj64SMgvCxYCRo4n_nVS47dfrg293AtXK78r3LZEviTswiZLl5sk1OsbYo28Os0sFAp2OcAMfjsbVw-ub7leMpPq9JSCIvIJlya3y6bMicc5ivXlHJPsgCKElsscUNnHx5hcSabX2sosTv49tgdRvBPZwXXZQpQFhsL3k4oplpDqiNIQ',
			name: ''
		}),
		gortex: PropTypes.shape({
			logo:
				'https://00e9e64bacec56e3238ca3d2b83c26ee1f186f1f776c5db250-apidata.googleusercontent.com/download/storage/v1/b/sourceful-images/o/GORE-TEX-Brand-Logo-600x500.jpg?qk=AD5uMEsuFhGxcisQLBmJyDnecihtqYvXgLldZt_nxI9aLw_GzK5BdAs8iAQrPxTpRBvZYklbE7RlFOUtP8-hTE5bgp-sfsPGlwLsoVPEaHNWOMGqD1G_hSo5gyrKIY_5l5win9H9xVK1KYuK4BOxNxZXVueyzMj3vxxSYdpsisOBRmh86xnRXOtbss4Y3NRa0U0Qa67czptqkDz-SYhYlnR4_kGekzpzodk-KCRmywZJhB9S1EngXPoQ1E5xvHHkIbfgoz8MMnEibD493-jIbW-WtFa4TzviBrggiwLiSFZCxUeGm7tXUjBATeczhqkVO6NNs9Ea2MRjJ2XfMAM0gOjyjTHoSuy4Czmn6Z4ifvNS52YfucFwP-rj8yFVBjZ0Xt748u4b24CvQluWN-6qgF_Yr9OvA2GUd4lBIYNytxyJAc645l0CNHe1CfE-_seZacBi-t4ZLctAr6xjI_Fvi256OEMb5KOGeFvLewBJdg5EZpEarw2thJ-RWwN31ewo9FqtdLKi-K8NVRb3rMwh9PKFTB9Cpt5XgNwcjJgychZNk-h1_4eyffgKgnpbGaiHXHj5P5yQDBt9rvGCbPqZp_IqcGyW62mur01OuIZciOfXjGhTZdkX6iv7Rhhl8-iuDUBvX3_5zaRQirmtnofUDbsFk4oK9bOt3CLJ85laVZItJPT2BiOPnYhossedvBCBNK717KXli8Yq96GGw2rBmnhRWWy9k4C13EWJii3_zjt00m6C4V6gilXTxOueNvxBz_5jwrrGIUXDLHerGMSBW5L3Vt7I0Lm-JTaTkiwkaCJl8YcoUeiUHz2A053Lz-Hv8n6ZPH2sZDhw',
			name: ''
		}),
		rds: PropTypes.shape({
			logo:
				'https://00e9e64bac836b4bff3289a87f81e5f0ab798b0d28879554c8-apidata.googleusercontent.com/download/storage/v1/b/sourceful-images/o/RDS.png?qk=AD5uMEtftSkRmG42OUXZ_mqT6wVl4zgja48kodv8TpFicI6vnShu9T_ikmvD0o8tMUAUY1khZ5D1AkVyTuoLUr83cCU9Sc2-A9TKokAQSMRmIMIldoEK6gJeqgJxJGrLnPQYXK6JsIdCCc8Lm0FoIe_SXDyPXUi8xJi6_uruZdVHUq62ceXuWPKhwTXe_K_yGjG1bierMbAie81SqV3q3Gy4cXpBumFwPkZ-w8cExonEEsjyt9G8Hk7JDA7TC7O0u72dbTRdBEWyb7cu6JAG_oJGMS09Pds1ptLR78zxcMuN5uoc6Mm9wVWWGK9hGClan1StJnfYZRCem28KgJwvayvOQmQOr8gAISwCFesWP2w0LHQGCac16VkBaZA64yliM6PfeK-dlmmT8gn_yZNtnIYhCNtQu4Ij-afbCQxu_CODYu680aMrWOzzPJ612XQz1ywskz2OR-ywL8HYadeiiefwBRKwr5M8EvtAGgNIR9zmKTjVxZ-EEqUgwF1T7QlwNwUZwfBbjr_lhCgt2RXFxyMThMBwMn2DP4hCyXrvUwyOSnLOSX1AxMHIdMP5DWZjorul1fiqZ_Cg9xmq5u6C9tqvwNO0bwvDM7-rUgz9hnayypLWtD5RXRoIgapqZXUqKu-5S5jO4FMRw12qvwMYtQojHlM7iwr9A7Oaoavhbn2bliJq9Xh-tEloKEMQ-yCSbIeoFHUaFX8su82d4nEGTGr4VwSLen35ldgu4kw91-9rRxzb-0CfVaJ1SmMK2XUyaHJ9xSoEDLbhfTFWNGvxr22KWMnbVaz0lw',
			name: ''
		})
	}),
	contact: PropTypes.shape({
		email: '',
		website: ''
	}),
	employee: 0
};

Factory.propTypes = {
	data: PropTypes.shape({
		factory: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			employee: PropTypes.number,
			producttype: PropTypes.array.isRequired
		}),
		contact: PropTypes.shape({
			email: PropTypes.string,
			website: PropTypes.string
		}),
		certificates: PropTypes.shape({
			bsci: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			blue_sign: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			gortex: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			}),
			rds: PropTypes.shape({
				logo: PropTypes.string,
				name: PropTypes.string
			})
		}),
		address: PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired,
			street: PropTypes.string.isRequired
		})
	}).isRequired
};

export const pageQuery = graphql`
	query($id: String!) {
		factory(id: { eq: $id }) {
			name
			address {
				city
				country
				postalcode
				street
			}
			category {
				jersey
				knit
				woven
			}
			certificates {
				blue_sign {
					blue_sign
					logo
					name
				}
				bsci {
					bsci
					logo
					name
				}
				gortex {
					logo
					gortex
					name
				}
			}
			contact {
				email
				website
			}
			continent
			description
			quantity
			id
			employee
			producttype
		}
	}
`;
