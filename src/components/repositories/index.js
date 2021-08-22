import { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks"
import RepositoryItem from "../repository-item"
import * as S from "./styled"

const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositórios</S.WrapperTab>
                        <S.WrapperTab>Favoritos</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                    description={item.description}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                    description={item.description}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Repositories;