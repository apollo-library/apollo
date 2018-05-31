import styled from 'styled-components';

const RenewDatePicker = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    margin-bottom: ${props => props.theme.styles.boxSpacing};
    outline: none;
    padding: 0.5rem 0.5rem;
    font-size: 1.1rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.accent4};
    }
`;

const OptionButton = styled.div`
    text-align: center;
    padding: calc(${props => props.theme.styles.boxSpacing} / 2);

`;

const OptionBorder = styled.div`
    width: 80%;
    margin: calc(${props => props.theme.styles.boxSpacing} / 2) auto;
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
`;

export {
    RenewDatePicker,
    OptionButton,
    OptionBorder
};
