import * as S from "./styled"

const Input = ({ type, placeholder, onChange }) => {
    return (
        <S.Input type={type} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input;