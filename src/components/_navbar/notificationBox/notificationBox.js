//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './notificationBoxStyles.js'
import {Button} from './../../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    notifications: state.data.notifications
})

class NotificationBox extends Component {
    getNotificationDateString(date) {
        //Returns the date as a string that we can show in the notificaions

        let now = new Date();
        let actionDate = new Date(date); // TODO: ******** Change to use notifications json data ***************

        let utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
        let utcActionDate = Date.UTC(actionDate.getFullYear(), actionDate.getMonth(), actionDate.getDate());
        let daysDiff = Math.floor((utcActionDate - utcNow) / 86400000);
        /*
            -VE = Past
            0 = Today
            +VE = Future
        */

        //Check if the event happened today
        if (daysDiff === 0) {
            //Today

            let hoursDiff = (now.getHours() - actionDate.getHours()) + 1;

            //Check if the event happened within the last hour
            if (hoursDiff === 0) {
                //Within the last hour
                return "Just Now"
            } else {
                //More than an hour
                return (hoursDiff + " hours ago")
            }
        } else if (daysDiff === -1) {
            //Yesterday
            return "Yesterday"
        } else if (daysDiff > -14 && daysDiff <= -7) {
            //1 Week ago
            return "1 Week Ago"
        } else if (daysDiff > -21 && daysDiff <= -14) {
            //2 Weeks ago
            return "2 Weeks Ago"
        } else if (daysDiff <= -21) {
            //Return a date
            return actionDate.toDateString()
        }
    }

    getNotificationDaysLeft(date) {
        //Returns a string with the number of days left before your book is due. Limits to a lowest value of 0
        let now = new Date();
        let dueDate = new Date(date); // TODO: ******** Change to use notifications json data ***************

        let utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
        let utcDueDate = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
        let daysLeft = Math.floor((utcDueDate - utcNow) / 86400000);

        if (daysLeft < 0) {
            if (this.props.notificationDaysLeftText === "Days Ago") {
                daysLeft = Math.abs(daysLeft);
            } else {
                daysLeft = 0;
            }
        }

        return daysLeft.toString();
    }

    removeNotification(id) {
        store.dispatch(actions.removeNotification(id));
    }

    render() {
        return (
            <styles.Notification>
                <styles.NotificationDismiss onClick={() => this.removeNotification(this.props.notification._id)}>X</styles.NotificationDismiss>
                <styles.NotificationWrapper>

                    <styles.NotificationInfo>
                        <styles.NotificationTime>{this.getNotificationDateString(this.props.notification.actionDate)}</styles.NotificationTime>
                        <styles.NotificationAction colour={this.props.notificationColour}>{this.props.notification.action}</styles.NotificationAction>
                        <p>{this.props.notification.title}</p>
                        <styles.NotificationAuthor>{this.props.notification.author}</styles.NotificationAuthor>
                    </styles.NotificationInfo>

                    <styles.NotificationDaysLeft>
                        <styles.NotificationDaysLeftNumber colour={this.props.notificationColour}>
                            {this.getNotificationDaysLeft(this.props.notification.dueDate)}
                        </styles.NotificationDaysLeftNumber>
                        <styles.NotificationDaysLeftText colour={this.props.notificationColour}>{this.props.notificationDaysLeftText}</styles.NotificationDaysLeftText>
                        <Button colour={this.props.notificationColour}>{this.props.notificationButtonText}</Button>
                    </styles.NotificationDaysLeft>

                </styles.NotificationWrapper>

            </styles.Notification>
        );
    }
}

export default connect(mapStateToProps)(NotificationBox);
