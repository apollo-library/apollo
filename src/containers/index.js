/*

    This file is where we import all the containers we have
    We then export them again at the end

    This means that in any file you can type:
        import {Container1, Container1 ... ContainerN} from 'containers/

*/

//Import all components
import Dashboard from './dashboard/dashboard'
import Catalogue from './catalogue/catalogue'
import Scan from './scan/scan'
import Users from './users/users'


//Export all components
export { Dashboard, Catalogue, Scan, Users }
