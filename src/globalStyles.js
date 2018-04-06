import styled from 'styled-components';

import { darken } from 'polished'

const Button = styled.div.attrs({
    colour: props => props.colour
})`
    background: ${props => props.theme.colours[props.colour]}
    padding: 0.32rem 0.9rem;
    border-radius: ${props => props.theme.styles.borderRadius};
    color: #fff;
    font-weight: 600;
    box-shadow: 0px 3px 3px rgba(73,73,73,0.20);
    border-bottom: 2.5px solid ${props => darken(0.15, props.theme.colours[props.colour])};
    cursor: pointer;
    display: inline-block;
    transition: box-shadow, transform 150ms ease;
    text-align: center;

    &:hover {
        box-shadow: 0px 3px 7px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;

const WhiteButton = Button.extend.attrs({
    colour: props => props.colour
})`
    background: #fff;
    border-bottom: 2.5px solid ${props => props.theme.colours[props.colour]};
    color: ${props => props.theme.colours.midGrey};
    box-shadow: 0px 0px 5px rgba(73,73,73,0.20);

    &:hover {
        box-shadow: 0px 1px 9px rgba(73,73,73,0.4);
        transform: translateY(-1px);
    }
`;

const CenterColumn = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    display: flex;
`;

const LeftColumn = styled.div`
    width: calc(100% * (1/3));
    height: 100vh;
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const RightColumn = styled.div`
    width: calc(100% * (2/3));
    height: 100vh;
    background: rgba(0,255,0,0.1);
    margin-left: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

export {
    Button,
    WhiteButton,
    CenterColumn,
    LeftColumn,
    RightColumn
};
