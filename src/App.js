import useGithub from "./hooks/github-hooks";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories"
import Footer from "./components/footer"
import { memo } from 'react'
import NoSearch from "./components/noSearch";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
              <Footer />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default memo(App);
