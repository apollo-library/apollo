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

import Fines from './_dashboard/fines/fines';
import Tags from './_dashboard/tags/tags';

import TagItem from './_catalogue/tagItem/tagItem';
import TagSearch from './_catalogue/tagSearch/tagSearch';
import BookSearch from './_catalogue/bookSearch/bookSearch';

import Scan from './_scan/scan/scan';
import Error from './_scan/error/error';
import DatePicker from './_scan/datePicker/datePicker';
import Success from './_scan/success/success';
import Input from './_scan/input/input';
import MultiInput from './_scan/multiInput/multiInput';

import Loan from './_report/reports/loan';
import OverdueLoan from './_report/reports/overdueLoan';
import UserHistory from './_report/reports/userHistory';
import ReportTable from './_report/reportTable/reportTable';

import BookHistoryTable from './_book/bookHistoryTable/bookHistoryTable';
import BookInfo from './_book/bookInfo/bookInfo';
import BookEdit from './_book/bookEdit/bookEdit';

import UserSearch from './_users/userSearch/userSearch';
import UserItem from './_users/userItem/userItem';

//Export all components
export {
    Navbar,
    NotificationBox,

    AccentedBox,
    ContentTabs,
    BookTable,

    Fines,
    Tags,

    TagItem,
    TagSearch,
    BookSearch,

    Scan,
    Error,
    DatePicker,
    Success,
    Input,
    MultiInput,

    Loan,
    OverdueLoan,
    UserHistory,
    ReportTable,

    BookHistoryTable,
    BookInfo,
    BookEdit,

    UserSearch,
    UserItem
}
