/** @jsx jsx */
import { jsx } from 'theme-ui';
import SEO from '../components/seo';
import FilterFactoriesForm from '../components/FilterFactoriesForm';
import SignUp from '../components/Signup';
import Login from '../components/Login';
import { ProvideAuth } from '../hooks/useAuth';

const IndexPage = () => (
  <ProvideAuth>
    <div>
      <SEO title="Home" />
      <h1
        sx={{
          color: 'primary',
        }}
      >
        This is sourceful
      </h1>
      <SignUp />
      <Login />
      <FilterFactoriesForm />
    </div>
  </ProvideAuth>
);

export default IndexPage;
