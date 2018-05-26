import styled from 'styled-components';

const FilterItem = styled.div`
    padding: 0.4rem 0.2rem 0.4rem 1rem;
    margin: 0.2rem 0;
    font-weight: 600;
    transition: all 75ms linear;
    color: ${props => props.active ? props.theme.colours.primary : props.theme.colours.darkGrey};
    border-radius: ${props => props.theme.styles.borderRadius};
    display: flex;
    align-items: center;
    background: ${props => props.active ? props.theme.colours.lightGrey : "none"};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colours.primary};
        background: ${props => props.theme.colours.lightGrey};
    }
`;

const Checkmark = styled.div`
    width: 6px;
    transition: all 100ms ease-in-out;
    margin-right: calc(${props => props.theme.styles.boxSpacing} / 2);
    height: ${props => props.active ? "18px" : "6px"};
    background: ${props => props.active ? props.theme.colours.primary : props.theme.colours.darkGrey};
    border-radius: 100px;
`;

export {
    FilterItem,
    Checkmark
};
