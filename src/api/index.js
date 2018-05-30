/*

Export all functions from API
    - access functions by calling API.Sublevel.Function()
    - e.g. API.Tags.getAllTags()

*/

//Import all API functions
import * as Books from './books';
import * as History from './history';
import * as Loans from './loans';
import * as Tags from './tags';
import * as Users from './users';

//Export
export {
    Books,
    History,
    Loans,
    Tags,
    Users
}
