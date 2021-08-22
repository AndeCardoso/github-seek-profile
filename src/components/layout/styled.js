import styled from "styled-components";
import bgGithub from "../../images/github-bg.svg"

export const WrapperLayout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 3px;
    height: 99.2vh;
    background-color: #1a1a1a;
    color: #ffffff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    background-image: url(${bgGithub});
    background-size: 600px;
    background-position: center;
    background-clip: border-box;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;

    @media(max-width: 800px) {
        background-size: 400px;
    }
`;
