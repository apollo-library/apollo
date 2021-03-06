import styled from 'styled-components';

const Notification = styled.div`
    width: 100%;
    border-radius: ${props => props.theme.styles.borderRadius};
    border: 2px solid ${props => props.theme.colours.lightGrey};
    padding: 0.5rem;
    color: ${props => props.theme.colours.darkGrey};
    position: relative;
    transition: all 3000ms ease;

    &:not(:last-child) {
        margin-bottom: ${props => props.theme.styles.boxSpacing};
    }
`;

const NotificationDismiss = styled.p`
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${props => props.theme.colours.darkGrey};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colours.primary};
    }
`;

const NotificationWrapper = styled.div`
    display: flex;
`;

const NotificationInfo = styled.div`
`;

const NotificationTime = styled.p`
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
    text-transform: uppercase;
`;

const NotificationAction = styled.p.attrs({
    color: props => props.colour
})`
    color: ${props => props.theme.colours[props.color]};
    text-transform: uppercase;
    font-weight: 600;
`;

const NotificationAuthor = styled.p`
    color: ${props => props.theme.colours.midGrey};
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
`;

const NotificationDaysLeft = styled.div`
    text-align: center;
    width: 40%;
`;

const NotificationDaysLeftNumber = styled.p.attrs({
    color: props => props.colour
})`
    color: ${props => props.theme.colours[props.color]};
    font-weight: 600;
    font-size: 3rem;
`;

const NotificationDaysLeftText = styled.p`
    font-weight: 600;
    margin-bottom: calc(${props => props.theme.styles.boxSpacing} / 2);
`;


export {
    Notification,
    NotificationDismiss,
    NotificationWrapper,
    NotificationInfo,
    NotificationTime,
    NotificationAction,
    NotificationAuthor,
    NotificationDaysLeft,
    NotificationDaysLeftNumber,
    NotificationDaysLeftText
};
