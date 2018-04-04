import styled from 'styled-components';

import { darken } from 'polished'

const Button = styled.div`
    background: ${props =>
        (props.primary && props.theme.colours.primary)
        || (props.accent1 && props.theme.colours.accent1)
        || (props.accent2 && props.theme.colours.accent2)
        || (props.accent3 && props.theme.colours.accent3)
        || (props.accent4 && props.theme.colours.accent4)
        || (props.accent5 && props.theme.colours.accent5)
    };
    padding: 0.32rem 0.9rem;
    border-radius: ${props => props.theme.styles.borderRadius};
    color: #fff;
    font-weight: 600;
    box-shadow: 0px 3px 3px rgba(73,73,73,0.20);
    border-bottom: 2.5px solid ${props => darken(0.15, props.theme.colours.primary)};
    border-color: ${props =>
        (props.primary && darken(0.15, props.theme.colours.primary))
        || (props.accent1 && darken(0.15, props.theme.colours.accent1))
        || (props.accent2 && darken(0.15, props.theme.colours.accent2))
        || (props.accent3 && darken(0.15, props.theme.colours.accent3))
        || (props.accent4 && darken(0.15, props.theme.colours.accent4))
        || (props.accent5 && darken(0.15, props.theme.colours.accent5))
    };
    cursor: pointer;
    transition: box-shadow, transform 150ms ease;
    display: flex;
    height: 70%;
    align-items: center;

    &:hover {
        box-shadow: 0px 3px 7px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;

export {Button};
