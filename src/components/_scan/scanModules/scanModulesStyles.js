import styled from 'styled-components';

const SecondModule = styled.div`
    margin-top: ${props => props.theme.styles.boxSpacing};
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
`;

const BookDetails = styled.div`
    padding-bottom: ${props => props.theme.styles.boxSpacing};
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
`;

const OptionButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: ${props => props.theme.styles.boxSpacing};
    padding-bottom: ${props => props.theme.styles.boxSpacing};
`;

const StudentInput = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
    outline: none;
    padding: 0.5rem 0.5rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.accent2};
    }
`;

const WithdrawDatePicker = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
    outline: none;
    padding: 0.5rem 0.5rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.accent3};
    }
`

const FourthModule = styled.div`
    margin-top: ${props => props.theme.styles.boxSpacing};
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RenewDatePicker = styled.input`
    border: none;
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.lightGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
    outline: none;
    padding: 0.5rem 0.5rem;

    &:focus {
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colours.accent4};
    }
`;

export {
    SecondModule,
    BookDetails,
    BookTitle,
    BookAuthor,
    OptionButtons,
    OptionButton,

    StudentInput,
    WithdrawDatePicker,

    FourthModule,
    RenewDatePicker
};









//tODO: empty this file
