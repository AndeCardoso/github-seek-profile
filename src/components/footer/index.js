import * as S from "./styled";
import IconLinkedin from "../../images/linkedin-ico.svg"
import IconGithub from "../../images/github-ico.svg"

const Footer = () => {
    return (
        <S.WrapperFooter>
            by Anderson Cardoso. 
            <S.SocialMedias>
                <a
                href="https://www.linkedin.com/in/anderson-cardoso-781b56102/"
                target="_blank"
                rel="noreferrer"
                >
                <S.Icon src={IconLinkedin} />
                </a>
                <a
                href="https://github.com/AndeCardoso"
                target="_blank"
                rel="noreferrer"
                >
                <S.Icon src={IconGithub} />
                </a>

            </S.SocialMedias>
        </S.WrapperFooter>
    )
}

export default Footer;