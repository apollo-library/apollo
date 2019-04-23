import styled from 'styled-components';

const AlertBoxWrapper = styled.div`
    position: fixed;
    z-index: 100;
    width: 20vw;
    background-color: #fff;
    left: 40vw;
    top: 40vh;
    box-shadow: 0px 0px 0px 2px ${props => props.theme.colours.lightGrey} inset;
    border-radius: ${props => props.theme.styles.borderRadius};
    display: flex;
    flex-direction: column;
`;

const AlertBoxHide = styled.div`
    position: fixed;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.3;
    left: 0;
    top: 0;
`;

const AlertTitle = styled.p`
    text-align: center;
    padding: 10px;
    font-weight: 600;
    font-size: 1.3rem;
`;

const ButtonWrapper = styled.div`
    padding: 10px;
    div {
        margin: 10px;
    }
`;

const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    text-align: center;
    position: relative;
`;

export {
    AlertBoxWrapper,
    AlertBoxHide,
    AlertTitle,
    ButtonWrapper,
    BoxContent
};
