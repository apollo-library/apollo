import styled from 'styled-components';

const SecondModule = styled.div`
    margin-top: ${props => props.theme.styles.boxSpacing};
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
`;

export {
    SecondModule,

};
