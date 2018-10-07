import styled from 'styled-components';

import { rgba } from 'polished'

const Table = styled.div`
    border-radius: ${props => props.theme.styles.borderRadius};
`;

const TableHeader = styled.div.attrs({
    colour: props => props.colour
})`
    display: flex;
    height: 45px;
    background: ${props => rgba(props.theme.colours[props.colour], 0.15)};
    align-items: center;
    padding: 0 1rem;
    border-bottom: 2px solid ${props => props.theme.colours[props.colour]};
`;

const TableHeading = styled.div.attrs({
    colour: props => props.colour
})`
    flex: 1;
    color: ${props => props.theme.colours[props.colour]};
    font-weight: 600;
    font-size: 1.2rem;
    padding-right: 0.2rem;
`;

const TableRow = styled.div.attrs({
    colour: props => props.colour
})`
    min-height: 45px;
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    border-radius: ${props => props.theme.styles.borderRadius};

    &:nth-child(odd) {
        background: ${props => rgba(props.theme.colours[props.colour], 0.07)};
    }
`;

const TableText = styled.p`
    flex: 1;
    font-size: 0.9rem;
    color: ${props => props.theme.colours.darkGrey};
    padding-right: 0.25rem;
    display: flex;
    align-items: center;
`;

const TableButton = styled.div`
    flex: 1;
    padding-right: 0.25rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
`;

export {
    Table,
    TableHeader,
    TableHeading,
    TableRow,
    TableText,
    TableButton
};
