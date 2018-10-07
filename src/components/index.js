/*

    This file is where we import all the components we have
    We then export them again at the end

    This means that in any file you can type:
        import {Component1, Component2 ... ComponentN} from 'components/

*/

//Import all components
import Navbar from './_navbar/navbar/navbar';
import NotificationBox from './_navbar/notificationBox/notificationBox';

import AccentedBox from './accentedBox/accentedBox';
import ContentTabs from './contentTabs/contentTabs';
import BookTable from './bookTable/bookTable';

import DueSoon from './_dashboard/dueSoon/dueSoon';
import Recommended from './_dashboard/recommended/recommended';
import History from './_dashboard/history/history';

import TagItem from './_catalogue/tagItem/tagItem';
import TagSearch from './_catalogue/tagSearch/tagSearch';
import BookSearch from './_catalogue/bookSearch/bookSearch';

import Scan from './_scan/scan/scan';
import Withdraw from './_scan/withdraw/withdraw';
import ReturnRenew from './_scan/return-renew/return-return';
import Success from './_scan/success/success'

import Books from './_reports/books/books';

//Export all components
export {
    Navbar,
    NotificationBox,

    AccentedBox,
    ContentTabs,
    BookTable,

    DueSoon,
    Recommended,
    History,

    TagItem,
    TagSearch,
    BookSearch,

    Scan,
    Withdraw,
    ReturnRenew,
    Success,

    Books
}
