import styled from 'styled-components';

import { darken } from 'polished'

const Button = styled.div.attrs({
    color: props => props.colour
})`
    background: ${props => props.theme.colours[props.color]}
    padding: 0.32rem 0.9rem;
    border-radius: ${props => props.theme.styles.borderRadius};
    color: #fff;
    font-weight: 600;
    box-shadow: 0px 3px 3px rgba(73,73,73,0.20);
    border-bottom: 2.5px solid ${props => darken(0.15, props.theme.colours.primary)};
    border-color: ${props => darken(0.15, props.theme.colours[props.color])}
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
