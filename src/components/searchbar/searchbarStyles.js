import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBox = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
    outline: none;
    flex: 1;
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.primary};
    }
`;

export {
    SearchBar,
    SearchBox
};
