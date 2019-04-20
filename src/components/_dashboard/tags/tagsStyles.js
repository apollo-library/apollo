import styled from 'styled-components';

const AddTags = styled.div`
`;

const AddTagName = styled.input`
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

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    margin-top: ${props => props.theme.styles.boxSpacing};
`;

const Tag = styled.div`
    background: ${props => props.theme.colours.accent3};
    border-radius: 100px;
    padding: 5px 15px;
    margin: 0 10px;
    color: #ffffff;
    font-size: 0.8em;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const DeleteIcon = styled.img`
    width: 7%;
    margin-left: 7px;
`;

export {
    AddTags,
    AddTagName,
    Tags,
    Tag,
    DeleteIcon
};
