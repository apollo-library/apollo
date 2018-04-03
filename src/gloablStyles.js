import styled, {css} from 'styled-components';

const Button = styled.div`
    background: ${props =>
        (props.primary && props.theme.colours.primary)
        || (props.accent1 && props.theme.colours.accent1)
        || (props.accent2 && props.theme.colours.accent2)
        || (props.accent3 && props.theme.colours.accent3)
        || (props.accent4 && props.theme.colours.accent4)
        || (props.accent5 && props.theme.colours.accent5)
    };
    padding: 5px 15px;
    border-radius: ${props => props.theme.styles.borderRadius};
    color: #fff;
    font-weight: 600;
    box-shadow: 0px 1px 3px rgba(73,73,73,0.20);
    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 7px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;

export {Button};
