//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './navbarStyles.js'
import {Button} from './../../gloablStyles.js'

//Images
import logo from './../../assets/images/logo-navbar.svg';

//Config
import config from '../../config'

//Components
import {NotificationBox} from './../../components';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            notificationsActive: false,
            accountActive: false,
            notifications: [
                {
                    actionDate: "2018-04-03T18:25:43.511Z",
                    dueDate: "2018-04-06T18:25:43.511Z",
                    action: "renew",
                    title: "Rocket Propulsion Elements",
                    author: "George Paul Sutton"
                },
                {
                    actionDate: "2018-04-03T18:25:43.511Z",
                    dueDate: "2018-04-07T18:25:43.511Z",
                    action: "return",
                    title: "Rocket Propulsion Elements",
                    author: "George Paul Sutton"
                },
                {
                    actionDate: "2018-04-03T18:25:43.511Z",
                    dueDate: "2018-04-08T18:25:43.511Z",
                    action: "withdraw",
                    title: "Rocket Propulsion Elements",
                    author: "George Paul Sutton"
                }
            ]
        };
        this.toggleNotifications = this.toggleNotifications.bind(this);
        this.toggleAccount = this.toggleAccount.bind(this);
    }

    toggleNotifications() {
        //Toggle visibility of notifications dropdown

        this.setState({notificationsActive: !this.state.notificationsActive});
        this.setState({accountActive: false});
    }

    toggleAccount() {
        //Toggle visibility of account dropdown

        this.setState({accountActive: !this.state.accountActive});
        this.setState({notificationsActive: false});
    }

    render() {
        return (
            <styles.Navbar>
                <styles.Root>
                    <styles.Logo>
                        <img src={logo} alt="Apollo Logo" />
                    </styles.Logo>
                    {config.main.pages.map((page, index) =>
                        (
                            <styles.Item
                                key={index}
                                onClick={() => {this.props.history.push(page.path)}}
                                itemActive={page.path === this.props.currentPage}
                            >
                                {page.text}
                            </styles.Item>
                        )
                    )}

                    <styles.Grow />

                    <Button colour="primary">
                        Scan
                        <styles.InlineSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 7.1">
                            <path fill="#fff" d="M10.5,3.6c0,0.2-0.1,0.4-0.3,0.5l0,0L6,7C5.8,7.2,5.4,7.1,5.2,6.9C5.1,6.8,5.1,6.6,5.1,6.5
                        	c0-0.2,0.1-0.4,0.3-0.5L8,4.2H0.6C0.3,4.2,0,3.9,0,3.6C0,3.2,0.3,3,0.6,3H8L5.3,1.1C5.1,0.9,5,0.5,5.2,0.3C5.3,0.1,5.5,0,5.7,0
                        	C5.8,0,5.9,0,6,0.1l4.2,3h0v0C10.4,3.2,10.5,3.4,10.5,3.6z"/>
                        </styles.InlineSVG>
                    </Button>
                    <styles.Notifications onClick={() => this.toggleNotifications()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.9 22.2">
                        	<circle fill="#fff" stroke="#636363" strokeWidth="1.2" cx="10.1" cy="2.3" r="1.7"/>
                        	<ellipse fill="#fff" stroke="#636363" strokeWidth="1.2" cx="10.1" cy="19.4" rx="1.9" ry="2.2"/>
                        	<path fill="#fff" stroke="#636363" strokeWidth="1.2" d="M17.4,17.9H2.7c-0.5,0-0.7-0.5-0.5-0.9c1.8-2.7,2.6-8.5,2.6-8.5C5.2,5.9,7.4,4,10.1,4c2.6,0,4.9,2,5.2,4.6
                        		c0,0,0.8,5.8,2.6,8.5C18.1,17.4,17.8,17.9,17.4,17.9z"/>
                            <path fill="#fff" stroke="#636363" strokeWidth="1.2" d="M18.3,17H1.8c-0.7,0-1.2,0.5-1.2,1.2v0c0,0.7,0.5,1.2,1.2,1.2h16.5c0.7,0,1.2-0.5,1.2-1.2v0
                        		C19.5,17.5,18.9,17,18.3,17z"/>
                            <styles.NotificationDot active cx="16.5" cy="8" r="3.6"/>
                        </svg>
                    </styles.Notifications>
                    <styles.UserName onClick={() => this.toggleAccount()}>
                        Joe Bloggs
                        <styles.InlineSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 6.3">
                            <path fill="none" stroke="#636363" strokeWidth="2" strokeLinecap="round" d="M1,1l4.9,4.1c0.3,0.2,0.6,0.2,0.9,0L11.7,1"/>
                        </styles.InlineSVG>
                    </styles.UserName>

                    <styles.DropdownWindow active={this.state.notificationsActive}>
                        <styles.NotificationMainTitle>Notifications</styles.NotificationMainTitle>
                        {this.state.notifications.map((notification, index) => {
                            //Select the notification colour
                            let notificationColour;
                            let notificationButtonText;
                            let notificationButtonFunction;
                            if (notification.action === "withdraw") {
                                notificationColour = "accent1";
                                notificationButtonText = "Renew";
                                notificationButtonFunction = "RUN THE RENEW FUNCTION HERE";
                            } else if (notification.action === "renew") {
                                notificationColour = "accent2";
                                notificationButtonText = "Renew Again"
                                notificationButtonFunction = "RUN THE RENEW FUNCTION HERE";
                            } else if (notification.action === "return") {
                                notificationColour = "accent3";
                                notificationButtonText = "Rate";
                                notificationButtonFunction = "RUN THE RETURN FUNCTION HERE. ADD THESE TO ONLCICK OF BUTTON";
                            }

                            return(
                                <NotificationBox
                                    notification={notification}
                                    notificationColour={notificationColour}
                                    notificationButtonText={notificationButtonText}
                                    key={index}
                                />
                            )
                        })}
                        <styles.viewAllNotifications>View all notifications</styles.viewAllNotifications>
                    </styles.DropdownWindow>

                    <styles.DropdownWindow active={this.state.accountActive}>
                        <styles.accountMenu>
                            <styles.menuItem>Suggest a Book</styles.menuItem>
                            <styles.menuItem>Check Reservations</styles.menuItem>
                            <styles.menuItem>Logout</styles.menuItem>
                        </styles.accountMenu>
                    </styles.DropdownWindow>
                </styles.Root>
            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
