import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

const StatusCount = () => {

    const { githubState } = useGithub();

    return (
        <S.WrapperStatusCount>
            <div>
                <h4>Seguidores</h4>
                <span> {githubState.user.followers} </span>
            </div>
            <div>
                <h4>Seguindo</h4>
                <span> {githubState.user.following} </span>
            </div>
            <div>
                <h4>Gists</h4>
                <span> {githubState.user.public_gists} </span>
            </div>
            <div>
                <h4>Repos</h4>
                <span> {githubState.user.public_repos} </span>
            </div>
        </S.WrapperStatusCount>
    )
}

export default StatusCount;