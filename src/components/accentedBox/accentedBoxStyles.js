import styled from 'styled-components';

import { WhiteButton } from './../../globalStyles.js';

const AccentedBox = styled.div`
    box-shadow: 0px 0px 0px 2px ${props => props.theme.colours.lightGrey} inset;
    border-radius: ${props => props.theme.styles.borderRadius};
    width: 100%;
    height: 250px;
    margin-bottom: ${props => props.theme.styles.boxSpacing};
    display: flex;
    flex-direction: column;
`;

const AccentBar = styled.div.attrs({
    gradfrom: props => props.gradFrom,
    gradto: props => props.gradTo
})`
    background: linear-gradient(to right, ${props => props.theme.colours[props.gradfrom]}, ${props => props.theme.colours[props.gradto]});
    min-height: 45px;
    width: 100%;
    color: #fff;
    font-weight: 600;
    padding-left: 1rem;
    display: flex;
    align-items: center;
`;

const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const SidebarButton = WhiteButton.extend`
    font-size: 1.5rem;
    margin: auto;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        box-shadow: 0px 1px 9px rgba(73,73,73,0.4);
        transform: translate(-50%, -1px);
    }
`;

const BackImage = styled.img`
    opacity: 0.3;
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
    z-index: -1;
`;

const BookTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 3rem;
    text-align: center;
    color: ${props => props.theme.colours.darkGrey};
`;

const BookAuthor = styled.p`
    margin-top: 0.2rem;
    text-align: center;
    color: ${props => props.theme.colours.midGrey};
`;


export {
    AccentedBox,
    AccentBar,
    BoxContent,
    SidebarButton,
    BackImage,
    BookTitle,
    BookAuthor
};
