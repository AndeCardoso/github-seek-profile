import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import StatusCount from '../statusCount'

const Profile = () => {

    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperNoMobile>
                <a
                href={githubState.user.html_url}
                target="_blank"
                rel="noreferrer"
                >
                    <S.WrapperImage src={githubState.user.avatar} alt="Avatar do usuário" />
                </a>
                <S.WrapperInfoUser>
                    {/* <div> */}
                        <h1>{githubState.user.name}</h1>
                        <S.WrapperUserGeneric>
                            <h3>Usuário:</h3>
                            <a
                            href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            >
                                {githubState.user.login}
                            </a>
                        </S.WrapperUserGeneric>
                        <S.WrapperUserGeneric>
                            <h3>Empresa:</h3>
                            <span>{githubState.user.company}</span>
                        </S.WrapperUserGeneric>
                        <S.WrapperUserGeneric>
                            <h3>Local:</h3>
                            <span>{githubState.user.location}</span>
                        </S.WrapperUserGeneric>
                        <S.WrapperUserGeneric>
                            <h3>Blog/Site:</h3>
                            <a
                            href={githubState.user.blog}
                            target="_blank"
                            rel="noreferrer"
                            >
                            {githubState.user.blog}
                            </a>
                        </S.WrapperUserGeneric>
                    {/* </div> */}
                </S.WrapperInfoUser>
            </S.WrapperNoMobile>
            <StatusCount />
        </S.Wrapper>
    )
}

export default Profile;