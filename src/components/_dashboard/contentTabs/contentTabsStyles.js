import styled from 'styled-components';

const ConentTabs = styled.ul`
    width: 100%;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    list-style: none;
    position: relative;

    &::after {
        border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
        z-index: -1;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0.08rem;
        width: 100%;
    }

`;

const ContentTab = styled.li.attrs({
    colour: props => props.colour
})`
    padding: 0.2rem 0.625rem;
    cursor: pointer;
    color: ${props => props.itemActive ? props.theme.colours[props.colour] : props.theme.colours.darkGrey};
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 5%;
        height: 1em;
        width: 90%;
        border-bottom: 2.5px solid ${props => props.theme.colours[props.colour]};
        margin-top: 0.5rem;
        transform: ${props => props.itemActive ? 'scaleX(1)' : 'scaleX(0)'};
        transition: transform 150ms ease 60ms;
    }

    &:hover {
        color: ${props => props.theme.colours[props.colour]};
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;


export {
    ConentTabs,
    ContentTab
};
