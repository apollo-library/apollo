import styled from 'styled-components';

const ScanContainer = styled.div`
    position: fixed;
    width: 100%
    height: 100%;
    top: 0;
    pointer-events: none;
`;

const ScanPopup = styled.div`
    padding: 1rem;
    margin-right: 0.5rem;
    box-shadow: 0px 2px 12px rgba(73,73,73,0.30);
    background: #fff;
    border-radius: ${props => props.theme.styles.borderRadius};
    position: absolute;
    width: 20%;
    height: 60%;
    right: calc(${props => props.theme.styles.boxSpacing} * 1.5);
    bottom: calc(${props => props.theme.styles.boxSpacing} * 4);
    transform: ${props => props.active ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: bottom right;
    transition: transform 300ms ease;
    pointer-events: auto;
`;

const ScanButton = styled.div`
    pointer-events: auto;
    padding: 0.5rem;
    position: absolute;
    right: calc(${props => props.theme.styles.boxSpacing} * 1.5);
    bottom: ${props => props.theme.styles.boxSpacing};
`;

const ResetButton = styled.div`
    margin: ${props => props.theme.styles.boxSpacing};
    float: right;
`;

const BottomInfo = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

const BookInfo = styled.div`
    background: ${props => props.theme.colours.lightGrey};
    width: 100%;
    padding: calc(${props => props.theme.styles.boxSpacing} / 2) ${props => props.theme.styles.boxSpacing};
`;

const BookInfoTitle = styled.p`
    font-weight: 600;
`;

const BookInfoAuthor = styled.p`

`;

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

const ItemContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    padding: 0.5rem;
    flex: 1;
    flex-direction: column;
    margin-top: ${props => props.theme.styles.boxSpacing};
    & * {
        margin-bottom: 1rem;
    }
`;



export {
    ScanContainer,
    ScanPopup,
    ScanButton,
    BottomInfo,
    ResetButton,
    BookInfo,
    BookInfoTitle,
    BookInfoAuthor,
    SearchBar,
    ItemContainer
};
