import styled from 'styled-components';

const Navbar = styled.nav`
    height: 50px;
    width: 100vw;
    background: #fff;
    border-bottom: 2px solid ${props => props.theme.colours.lightGrey};
    box-shadow: 0px -1px 6px rgba(73,73,73,0.30);
    padding: 0 0.3rem;
	user-select: none;
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

const Item = styled.li`
    padding: 0.2rem 0.625rem;
    cursor: pointer;
    color: ${props => props.itemActive ? props.theme.colours.primary : props.theme.colours.darkGrey};
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 5%;
        height: 1em;
        width: 90%;
        border-bottom: 2.5px solid ${props => props.theme.colours.primary};
        margin-top: 10px;
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

const Grow = styled.li`
    flex: 1;
`;

const Notifications = styled.li`
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
    background: #fff;
    top: 60px;
    right: 15px;
    box-shadow: 0px 2px 12px rgba(73,73,73,0.30);
    cursor: auto;
    border-radius: ${props => props.theme.styles.borderRadius};
    padding: 1rem;
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
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
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
    Notifications,
    NotificationDot,
    UserName,
    InlineSVG,
    DropdownWindow,
    NotificationMainTitle,
    viewAllNotifications,
    accountMenu,
    menuItem
};
