import styled from 'styled-components';

const WithdrawContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    padding: 0.5rem;
    flex-direction: column;
    margin-top: ${props => props.theme.styles.boxSpacing};
`;

const UserIdBar = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    outline: none;
    font-size: 1.1rem;
    padding: 0.4rem 0.4rem;
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.primary};
    }
`;

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
    WithdrawContainer,
    UserIdBar,
    DueDatePicker
};
