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
        box-shadow: inset 0px 0px 0px 2px ${props => (props.state) ? (props.state === "error") ? props.theme.colours.accent6 : props.theme.colours.accent5 : props.theme.colours.primary};
    }
`;

const Tags = styled.div`
    display: block;

    margin-top: ${props => props.theme.styles.boxSpacing};
`;

const Tag = styled.div`
    background: ${props => props.theme.colours.accent3};
    border-radius: 100px;
    padding: 5px 15px;
    margin: 5px 10px;
    color: #ffffff;
    font-weight: 600;
    display: inline-block;
`;

const TagContent = styled.div`
    display: flex;
    align-items: center;
`;

const DeleteIcon = styled.img`
    width: 1rem;
    margin-left: 15px;
`;

const ErrorMessage = styled.p`
    color: ${props => props.theme.colours.accent6};
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 20px;
`;

const SuccessMessage = styled.p`
    color: ${props => props.theme.colours.accent5};
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 20px;
`;

export {
    AddTags,
    AddTagName,
    Tags,
    Tag,
    TagContent,
    DeleteIcon,
    ErrorMessage,
    SuccessMessage
};
