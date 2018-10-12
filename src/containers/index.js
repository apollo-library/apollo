/*

    This file is where we import all the containers we have
    We then export them again at the end

    This means that in any file you can type:
        import {Container0, Container1 ... ContainerN} from 'containers/

*/

//Import all components
import Book from './book/book'
import Catalogue from './catalogue/catalogue'
import Dashboard from './dashboard/dashboard'
import Report from './report/report'
import Users from './users/users'


//Export all components
export { Book, Catalogue, Dashboard, Report, Users }
