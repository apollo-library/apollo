import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
    height: 50px;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
    box-shadow: 0px -1px 6px rgba(73,73,73,0.30);
    padding: 0 0.3rem;
	user-select: none;
    margin-bottom: 3rem;
`;

const Root = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
`;

const Logo = styled.li`
    margin: 0 10px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    overflow: visible;
`;

const Item = styled.p`
    padding: 0.2rem 0.625rem;
    cursor: pointer;
    color: ${props => props.itemActive ? props.theme.colours.primary : props.theme.colours.darkGrey};
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    pointer-events: none;

    &::after {
        content: '';
        position: absolute;
        left: 5%;
        height: 1em;
        width: 90%;
        border-bottom: 2.5px solid ${props => props.theme.colours.primary};
        margin-top: 7px;
        transform: ${props => props.itemActive ? 'scaleX(1)' : 'scaleX(0)'};
        transition: transform 150ms ease 60ms;
    }

    &:hover {
        color: ${props => props.theme.colours.primary};
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;

const ItemLink = styled(Link)`
    color: inherit;
    display: block;
    pointer-events: all;
`;

const Grow = styled.li`
    flex: 1;
`;

const NotificationIcon = styled.li`
    margin: 0 20px;
    cursor: pointer;
    height: 25px;
    width: 25px;
    overflow: visible;

    &:hover {
        fill: ${props => props.theme.colours.primary};

        path, circle:first-of-type, ellipse {
            stroke: ${props => props.theme.colours.primary};
        }
    }
`;

const NotificationDot = styled.circle`
    fill: ${props => props.active ? props.theme.colours.primary : 'none'};
    stroke: ${props => props.active ? '#fff' : 'none'};
    stroke-width: 1.5;
`;

const UserName = styled.div`
    display: flex;
    height: 70%;
    align-items: center;
    color: ${props => props.theme.colours.darkGrey};
    font-weight: 600;
    border-left: 2px solid ${props => props.theme.colours.lightGrey};
    padding: 0 0.625rem;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colours.primary};

        path {
            stroke: ${props => props.theme.colours.primary};
        }
    }
`;

const InlineSVG = styled.svg`
    width: 15px;
    margin-left: 10px;
`;

const DropdownWindow = styled.div`
    transform: ${props => props.active ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top center;
    transition: transform 300ms ease;
    position: absolute;
    top: 65px;
    right: 1rem;
    cursor: auto;
    overflow: visible;
    width: ${props =>
        (props.notifications && '400px')
        || (props.accountMenu && '')
    };
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        right: ${props =>
            (props.notifications && '35%')
            || (props.accountMenu && '15%')
        };
        height: 1rem;
        width: 1rem;
        top: -0.5rem;
        background: #fff;
        transform: rotate(45deg);
    }

    &::after {
        content: '';
        position: absolute;
        display: inline-block;
        right: ${props =>
            (props.notifications && '35%')
            || (props.accountMenu && '15%')
        };
        height: 1rem;
        width: 1rem;
        top: -0.5rem;
        z-index: -1;
        transform: rotate(45deg);
        box-shadow: 0px 2px 12px rgba(73,73,73,0.30);
    }
`;

const DropdownBackground = styled.div`
    padding: 1rem;
    box-shadow: 0px 2px 12px rgba(73,73,73,0.30);
    background: #fff;
    border-radius: ${props => props.theme.styles.borderRadius};
`;

const NotificationMainTitle = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    color: ${props => props.theme.colours.primary};
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const viewAllNotifications = styled.p`
    font-weight: 600;
    tex-align: center;
    color: ${props => props.theme.colours.darkGrey};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colours.primary};
    }
`;

const accountMenu = styled.div`
    padding: 0.1rem 0.5rem;
    font-weight: 600;
    color: ${props => props.theme.colours.darkGrey};
`;

const menuItem = styled.p`
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
    }

    &:hover {
        color: ${props => props.theme.colours.primary};
    }
`;


export {
    Navbar,
    Item,
    Root,
    Logo,
    Grow,
    NotificationIcon,
    NotificationDot,
    UserName,
    InlineSVG,
    DropdownWindow,
    DropdownBackground,
    NotificationMainTitle,
    viewAllNotifications,
    accountMenu,
    menuItem,
    ItemLink
};
