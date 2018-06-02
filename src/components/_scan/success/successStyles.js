import styled from 'styled-components';

const SuccessMessage = styled.div`
    text-align: center;
`;

const SuccessTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colours.accent5};
    display: inline;
`;

export {
    SuccessMessage,
    SuccessTitle

};
