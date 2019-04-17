import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TableLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: 600;
`;

const TableLinkWrapper = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export {
    TableLink,
    TableLinkWrapper
};
