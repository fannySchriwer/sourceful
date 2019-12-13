/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';

const LogoDesktop = () => {
  const { datoCmsCompanyInfo } = useStaticQuery(
    graphql`
      query {
        datoCmsCompanyInfo {
          logoBig{
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );


  const { logoBig } = datoCmsCompanyInfo;
  return <Img fluid={logoBig.fluid} />
};

export default LogoDesktop;
