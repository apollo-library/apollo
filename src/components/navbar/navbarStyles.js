import styled, {css} from 'styled-components';

const Navbar = styled.div`
  height: 100vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: ${props => props.theme.colours.lightGrey};
`;

const NavItem = styled.div`
    display: flex;
    cursor: pointer;
    padding: 12px 20px;
    color: ${props => props.navItemActive ? props.theme.colours.themeColour : props.theme.colours.darkGrey};
    font-weight: ${props => props.navItemActive ? 700 : 400};

    &:hover {
        color: ${props => props.theme.colours.themeColour};
    }
`;

const NavGrow = styled.div`
    flex: 1;
`;

const NavIcon = styled.div`
    font-size: 1.3em;
    margin-right: 20px;
`;

const NavBottomGroup = styled.div`
    padding-bottom: 3px;
    border-top: 2px solid ${props => props.theme.colours.themeColour};
    width: 100%;
`;

export {Navbar, NavItem, NavGrow, NavIcon, NavBottomGroup};
