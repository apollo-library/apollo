/*

    This file is where we import all the components we have
    We then export them again at the end

    This means that in any file you can type:
        import {Component1, Component2 ... ComponentN} from 'components/

*/

//Import all components
import Navbar from './_navbar/navbar/navbar'
import NotificationBox from './_navbar/notificationBox/notificationBox';
import AccentedBox from './accentedBox/accentedBox';
import ContentTab from './_dashboard/contentTab/contentTab';
import ContentTabs from './_dashboard/contentTabs/contentTabs';


//Export all components
export {
    Navbar,
    NotificationBox,
    AccentedBox,
    ContentTab,
    ContentTabs
}
