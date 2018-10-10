import styled from 'styled-components';

const DueDatePicker = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    outline: none;
    font-size: 1.1rem;
    padding: 0.4rem 0.4rem;
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.accent2};
    }
`;



export {
    DueDatePicker
};
