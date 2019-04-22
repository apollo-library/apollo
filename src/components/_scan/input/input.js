//React imports
import React from 'react';

//Styles
import * as styles from './inputStyles.js'

export default function Input(props) {
    return (
        <styles.SearchBar value={props.text} onChange={props.changeCallback} onKeyUp={props.keyUpCallback} autoFocus></styles.SearchBar>
    );
}