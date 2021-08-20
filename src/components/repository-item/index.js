import * as S from './styled'

const RepositoryItem = ({ name, linkToRepo, fullName, description }) => {
    return(
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
                <S.WrapperIn>
                    <S.WrapperFullName>Link:</S.WrapperFullName>
                    <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
                        {fullName}
                    </S.WrapperLink>
                </S.WrapperIn>
                {description}
        </S.Wrapper>
    );
};

export default RepositoryItem;