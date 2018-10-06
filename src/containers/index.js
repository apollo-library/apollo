/*

    This file is where we import all the containers we have
    We then export them again at the end

    This means that in any file you can type:
        import {Container1, Container1 ... ContainerN} from 'containers/

*/

//Import all components
import Dashboard from './dashboard/dashboard'
import Catalogue from './catalogue/catalogue'
import Users from './users/users'
import Reports from './reports/reports'


//Export all components
export { Dashboard, Catalogue, Users, Reports }
