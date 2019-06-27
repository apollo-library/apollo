//React imports
import React from 'react';

//Styles
import * as styles from './datePickerStyles.js'

export default function DatePicker(props) {
    // +86400000 adds on a day by rounding so that books can't be taken out to days before tomorrow
    return (
        <styles.DueDatePicker
            value={props.date}
            onChange={props.changeCallback}
            type="date"
            min={new Date(new Date().getTime()+86400000).toISOString().substring(0, new Date(new Date().getTime()+86400000).toISOString().indexOf("T"))}
        />
    );
}
