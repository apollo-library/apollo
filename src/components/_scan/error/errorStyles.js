import styled from 'styled-components';

const ErrorTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colours.accent6};
    display: inline;
`;

const ErrorMessage = styled.p`
    color: ${props => props.theme.colours.darkGrey};
    font-size: 1.1rem;
    display: inline;
`;

export {
    ErrorTitle,
    ErrorMessage

};
