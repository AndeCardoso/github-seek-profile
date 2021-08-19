import * as S from './styled'

const Button = ({ onClick, children, type }) => {
    return (
        <S.Button onClick={onClick} type={type} >
            <span>{children}</span>
        </S.Button>
    )
}

export default Button;