import { useState } from "react";
import useGithub from "../../hooks/github-hooks"
import Button from "../dumb/button";
import Input from "../dumb/input";
import * as S from './styled'

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) {
            window.location.reload();
        }
        return getUser(usernameForSearch);
    };
    
    return (
        <header>
            <S.Wrapper>
                <S.SiteName>
                    Buscador GitHub
                </S.SiteName>
                <S.Searching>
                    <Input
                    type="search"
                    placeholder="Digite o perfil..."
                    onChange={(event) => setUsernameForSearch(event.target.value)}
                    />
                    <Button type="submit" onClick={submitGetUser}>
                        Busque!
                    </Button>
                </S.Searching>
            </S.Wrapper>
        </header>
    );
};

export default Header;