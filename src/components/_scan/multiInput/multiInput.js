//React imports
import React from 'react';

//Styles
import * as styles from './multiInputStyles.js'

export default function MutliInput(props) {
    return (
        <styles.MultiInputWrapper>
            {(props.title) ? <styles.InputTitle>{props.title}</styles.InputTitle> : null}
            <styles.SearchBar value={props.text} onChange={props.changeCallback}></styles.SearchBar>
        </styles.MultiInputWrapper>
    );
}
