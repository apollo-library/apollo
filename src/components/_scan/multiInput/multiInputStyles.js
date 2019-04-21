import styled from 'styled-components';

const SearchBar = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    width: 100%;
    outline: none;
    flex: 1;
    font-size: 1.1rem;
    padding: 0.4rem 0.4rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.primary};
    }
`;

const MultiInputWrapper = styled.div``;

const InputTitle = styled.p`
    margin: 0;
    padding: 0;
`;

export {
    SearchBar,
    MultiInputWrapper,
    InputTitle
};
