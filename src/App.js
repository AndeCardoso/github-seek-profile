import useGithub from "./hooks/github-hooks";
import Layout from "./components/layout";
import Profile from "./components/profile";
import NoSearch from "./components/no-search";
import Repositories from "./components/repositories"
import { memo } from 'react'

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
