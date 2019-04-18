import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TableLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Cell = styled.b`
    flex: 1;
    font-size: 0.9rem;
    color: ${props => props.theme.colours.darkGrey};
    padding-right: 0.25rem;
    display: flex;
    align-items: center;
    font-weight: ${props => props.cellStyle === "bold" ? "600" : "inherit" };
`;

const TableLinkWrapper = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export {
    Cell,
    TableLink,
    TableLinkWrapper
};