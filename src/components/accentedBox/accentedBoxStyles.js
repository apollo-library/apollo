import styled from 'styled-components';

import { darken } from 'polished'

import { WhiteButton } from './../../globalStyles.js';

const AccentedBox = styled.div`
    box-shadow: 0px 0px 0px 2px ${props => props.theme.colours.lightGrey} inset;
    border-radius: ${props => props.theme.styles.borderRadius};
    width: 100%;
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
    padding: 1.6rem;
    text-align: center;
    position: relative;
    padding-bottom: ${props => props.tagSpacing ? "3.6rem" : "1.6rem"}
`;

const SidebarButton = WhiteButton.extend`
    font-size: 1.5rem;
    margin-top: 2.5rem;
    padding: 0.5rem 1.2rem;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colours.lightGrey}, 0px 2px 5px rgba(73,73,73,0.4);

    &:hover {
        box-shadow: inset 0 0 0 1px ${props => props.theme.colours.lightGrey}, 0px 3px 7px rgba(73,73,73,0.4);
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
    color: ${props => props.theme.colours.darkGrey};
`;

const BookAuthor = styled.p`
    margin-top: 0.2rem;
    color: ${props => props.theme.colours.midGrey};
`;

const StudentFine = styled.p`
    font-size: 3.5rem;
    font-weight: 600;
    color: ${props => props.theme.colours.darkGrey};
`;

const FineDetails = styled.p`
    color: ${props => props.theme.colours.midGrey};
`;

const RateTopBar = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

const RateIntroText = styled.p`
    color: ${props => props.theme.colours.midGrey};
    text-align: left;
`;

const RateBooksLeft = styled.div`
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    background: ${props => props.theme.colours.accent3};
    display: flex;
    align-items: center;
    padding: 0.3rem 0.75rem;
    border-radius: 100px;
`;

const Stars = styled.div`
    margin-top: 1rem;
`;

const Star = styled.svg`
    width: 2rem;
    padding-right: 0.25rem;
`;

const StarPath = styled.path`
    fill: ${props => props.filled ? props.theme.colours.accent3 : '#fff'};
    stroke: ${props => props.filled ? props.theme.colours.accent3 : props.theme.colours.darkGrey};
    stroke-width: 2px;
    display: inline-block;

    transition: fill 150ms ease;
`;

const BookInformation = styled.p`
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color: ${props => props.theme.colours.darkGrey};
`;

const Tag = styled.div`
    background: ${props => props.theme.colours.accent3};
    border-radius: 100px;
    padding: 5px 15px;
    margin: 5px 10px;
    color: #ffffff;
    font-weight: 600;
    display: inline-block;
    border-bottom: 2.5px solid ${props => darken(0.15, props.theme.colours.accent3)};

    &:hover {
        box-shadow: 0px 3px 7px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;

const TagContent = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 1rem;
    margin-left: 15px;
    cursor: pointer;

    &:hover ${Tag} {
        background-color: #ff0000;
        color: #000000;
    }
`;

const EditButton = WhiteButton.extend`
    font-size: 1rem;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export {
    AccentedBox,
    AccentBar,
    BoxContent,
    SidebarButton,
    BackImage,
    BookTitle,
    BookAuthor,
    StudentFine,
    FineDetails,
    RateTopBar,
    RateIntroText,
    RateBooksLeft,
    Stars,
    Star,
    StarPath,
    BookInformation,
    Tag,
    TagContent,
    Icon,
    EditButton
};
