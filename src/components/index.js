/*

    This file is where we import all the components we have
    We then export them again at the end

    This means that in any file you can type:
        import {Component1, Component2 ... ComponentN} from 'components/

*/

//Import all components
import Navbar from './navbar/navbar'
import NotificationBox from './notificationBox/notificationBox';
import AccentedBox from './accentedBox/accentedBox';


//Export all components
export { Navbar, NotificationBox, AccentedBox }
