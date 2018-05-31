import styled from 'styled-components';

import { darken } from 'polished'

const FlexGrow = styled.div`
    flex: 1;
`;

const Button = styled.div.attrs({
    colour: props => props.colour
})`
    background: ${props => props.theme.colours[props.colour]};
    border-radius: ${props => props.theme.styles.borderRadius};
    color: #fff;
    font-weight: 600;
    box-shadow: 0px 3px 3px rgba(73,73,73,0.20);
    border-bottom: 2.5px solid ${props => darken(0.15, props.theme.colours[props.colour])};
    cursor: pointer;
    display: inline-block;
    transition: box-shadow, transform 150ms ease;
    text-align: center;
    padding: ${props => props.large ?  '0.5rem 1.2rem' : '0.32rem 0.9rem'}
    font-size: ${props => props.large ?  '1.2rem' : '1rem'}

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
    width: calc(100% * (1/${props => props.small ?  '5' : '3'}));
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const RightColumn = styled.div`
    flex: 1;
    margin-left: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const BottomLogo = styled.img`
    height: 13rem;
    width: 13rem;
    margin: 0 auto;
    display: block;
    opacity: 0.5;
    margin-top: 2rem;
    user-select: none;
`;

const PageTitle = styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.colours.primary}
    margin-bottom: ${props => props.theme.styles.boxSpacing};
`;

export {
    FlexGrow,
    Button,
    WhiteButton,
    CenterColumn,
    LeftColumn,
    RightColumn,
    BottomLogo,
    PageTitle
};
