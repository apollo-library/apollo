//React imports
import React from 'react';

//Styles
import * as styles from './../bookInfo/bookInfoStyles.js'

export default function BookEdit(props) {
    return ( 
        <styles.SearchWrapper>
            <styles.SearchLabel>{props.title}</styles.SearchLabel>
            <styles.SearchBar
                value={props.val}
                onChange={props.changeCallback}
            />
            <styles.SearchButton
                onClick={props.updateData}
                colour={props.colour}
            >
            Update
            </styles.SearchButton>
        </styles.SearchWrapper>
    );
}