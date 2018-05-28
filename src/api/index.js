/*

    This file is where we import all the components we have
    We then export them again at the end

    This means that in any file you can type:
        import {Component1, Component2 ... ComponentN} from 'components/

*/

//Import all API functions
import * as Tags from './tags';
import * as Books from './books';

// import Users from './users';

//Export
export { Tags, Books }
