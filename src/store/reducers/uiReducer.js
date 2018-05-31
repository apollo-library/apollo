import { TYPES } from '../actions'

/*
    These states are mainly for handling UI states that are global
    across the whole appliaction or are specific to an individual
    page but need to be accesssed from multiple components
*/

const initialStates = {
    notificationPopupActive: false,
    accountPopupActive: false,

    scanSearchTerm: "",
    /*
        0 = Initial state, just the search bar at the top of the page
        1 = WITHDRAW. Show options for selecting a student and the due date
        2 = RENEW. Show option for selecting how many weeks to renew book for
        3 = Thank you message before automatically moving on back to initial state
        4 = No book found after scan
        5 = No renew date set
    */
    scanStatesToShow: [0]
}

function toggleNotifications(state) {
    let localState = state;
    localState.notificationPopupActive = !localState.notificationPopupActive;

    return {...state, localState};
}

function hideNotifications(state) {
    let localState = state;
    localState.notificationPopupActive = false;

    return {...state, localState};
}

function toggleAccount(state) {
    let localState = state;
    localState.accountPopupActive = !localState.accountPopupActive;

    return {...state, localState};
}

function hideAccount(state) {
    let localState = state;
    localState.accountPopupActive = false;

    return {...state, localState};
}


//todo: LOOK AT ME FOR AN EXAMPLE.
function setScanSearchTerm(state, term) {
    let localState = JSON.parse(JSON.stringify(state));
    localState.scanSearchTerm = term;

    return {...state, scanSearchTerm: localState.scanSearchTerm}
}

function resetScanTab(state) {
    let localState = JSON.parse(JSON.stringify(state));

    localState.scanStatesToShow = [0]
    return {...state, scanStatesToShow:localState.scanStatesToShow};
}

function addScanTab(state, tabToAdd) {
	let localState = JSON.parse(JSON.stringify(state));

    localState.scanStatesToShow.push(tabToAdd)
    return {...state, scanStatesToShow:localState.scanStatesToShow};
}

export const ui = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_NOTIFICATIONS:
            return toggleNotifications(state)
        case TYPES.HIDE_NOTIFICATIONS:
            return hideNotifications(state)
        case TYPES.TOGGLE_ACCOUNT:
            return toggleAccount(state)
        case TYPES.HIDE_ACCOUNT:
            return hideAccount(state)
        case TYPES.SET_SCAN_SEARCH_TERM:
            return setScanSearchTerm(state, action.scanSearchTerm)
        case TYPES.RESET_SCAN_TAB:
            return resetScanTab(state)
        case TYPES.ADD_SCAN_TAB:
            return addScanTab(state, action.tabToAdd)
        default:
            return state
    }
}
