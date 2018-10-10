import styled from 'styled-components';

const ErrorMessage = styled.div`
    text-align: center;
`;

const ErrorTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colours.accent4};
    display: inline;
`;

export {
    ErrorMessage,
    ErrorTitle
};
