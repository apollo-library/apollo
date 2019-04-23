//React imports
import React from 'react';

import {WhiteButton, Button} from './../../globalStyles.js'

import config from './../../config';

//Styles
import * as styles from './alertBoxStyles.js'

export default function AlertBox(props) {
    return (
        [
            <styles.AlertBoxHide></styles.AlertBoxHide>,
            <styles.AlertBoxWrapper>
                <styles.BoxContent>
                    <styles.AlertTitle>{props.text}</styles.AlertTitle>
                    <styles.ButtonWrapper>
                        <WhiteButton colour="primary" onClick={props.failureCallback}>{props.failureText}</WhiteButton>
                        <Button colour="primary" onClick={props.successCallback}>{props.successText}</Button>
                    </styles.ButtonWrapper>
                </styles.BoxContent>
            </styles.AlertBoxWrapper>
        ]
    );
}