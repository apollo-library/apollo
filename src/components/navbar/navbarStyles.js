import styled, {css} from 'styled-components';

//Images
import logo from './../../assets/images/logo-navbar.svg';
import notificationBell from './../../assets/images/notification-navbar.svg'

const Navbar = styled.nav`
    height: 50px;
    width: 100vw;
    background: #fff;
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
    box-shadow: 0px -1px 6px rgba(73,73,73,0.35);
    padding: 0 5px;
`;

const NavRoot = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const NavLogo = styled.li`
    margin: 0 10px;
    cursor: pointer;
    background-image: url(${logo});
    height: 40px;
    width: 40px;
`;

const NavItem = styled.li`
    margin: 0 10px;
    padding: 3px 0;
    cursor: pointer;
    color: ${props => props.navItemActive ? props.theme.colours.primary : props.theme.colours.darkGrey};
    border-bottom: 2.5px solid ${props => props.navItemActive ? props.theme.colours.primary : 'transparent'};
    font-weight: 600;
    font-size: 1rem;

    &:hover {
        color: ${props => props.theme.colours.primary};
    }
`;

const NavGrow = styled.li`
    flex: 1;
`;

const NavNotifications = styled.li`

`;


export {Navbar, NavItem, NavRoot, NavLogo, NavGrow, NavNotifications};
