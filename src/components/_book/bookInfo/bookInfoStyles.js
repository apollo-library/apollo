import styled from 'styled-components';

import { WhiteButton } from './../../../globalStyles.js';

const BookInfoContainer = styled.div`

`;

const NoTags = styled.p`
    padding: calc(${props => props.theme.styles.boxSpacing});
    color: ${props => props.theme.styles.accent2};
    text-align: right;
`;

const Dropdown = styled.select`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    outline: none;
    flex: 1;
    font-size: 1.1rem;
    padding: 0.4rem 0.4rem;
    outline: none;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.primary};
    }
`;


const InputWrapper = styled.div`
    margin-bottom: calc(${props => props.theme.styles.boxSpacing});
`;

const SearchWrapper = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 calc(${props => props.theme.styles.boxSpacing});
    & * {
     margin: 5px;
    }
`;

const SearchLabel = styled.p`
    display: inline-block;
`;

const SearchButton = WhiteButton.extend`
    font-size: 1rem;
    display: inline-block;
`;

const SearchBar = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    outline: none;
    flex: 1;
    font-size: 1.1rem;
    padding: 0.4rem 0.4rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.primary};
    }
`;

const DangerTitle = styled.p`
    color: ${props => props.theme.colours.darkGrey};
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: ${props => props.theme.colours.accent6} 2px solid;
`;

export {
    BookInfoContainer,
    NoTags,
    Dropdown,
    InputWrapper,
    SearchWrapper,
    SearchLabel,
    SearchButton,
    SearchBar,
    DangerTitle
};
