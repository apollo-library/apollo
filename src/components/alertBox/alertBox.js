//React imports
import React from 'react';

import {WhiteButton, Button} from './../../globalStyles.js'

//Styles
import * as styles from './alertBoxStyles.js'

export default function AlertBox(props) {
    return (
        [
            <styles.AlertBoxHide key={0}></styles.AlertBoxHide>,
            <styles.AlertBoxWrapper key={1}>
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
