import styled from 'styled-components';

const SecondModule = styled.div`
    margin-top: ${props => props.theme.styles.boxSpacing};
`;

const BookDetails = styled.div`
    padding-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
`;

const BookTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colours.darkGrey};
`;

const BookAuthor = styled.p`
    margin-top: 0.2rem;
    color: ${props => props.theme.colours.midGrey};
`;

const OptionButtons = styled.div`
    display: flex;
    margin-top: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const OptionButton = styled.div`
    flex: 1;
    text-align: center;
    padding-top: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

export {
    SecondModule,
    BookDetails,
    BookTitle,
    BookAuthor,
    OptionButtons,
    OptionButton
};
