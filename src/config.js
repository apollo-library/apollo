/*

This is the main config file for Apollo.

The following objects are exported at the end under the config object
    - main
        - Contains some default values such as a long and short long name
		- Contains the list of pages that the site contains
    - colours
        - Contains all the colours that are used on the site.
        - *PLEASE NOTE: This includes house colours for DCGS.
        - Since the config cannot be imported into a CSS file, any colours should be set inline
*/

//Container imports
import {Dashboard} from './containers'

let config = {
	main: {
		shortName: "Apollo",
		longName: "Apollo | Library Management System",
		pages: [
			{
				text: 'Dashboard',
				path: '/',
				componentName: Dashboard
			},
			{
				text: 'Catalogue',
				path: '/catalogue',
				componentName: 'Catalogue'
			},
			{
				text: 'Scan',
				path: '/scan',
				componentName: 'Scan'
			},
			{
				text: 'Users',
				path: '/users',
				componentName: 'Users'
			}
	    ]
	},

	colours: {
		primary: "#e44d95",
		lightGrey: '#e8e8e8',
		midGrey: '#9b9b9b',
		darkGrey: '#636363',

		accent1: '#eabb45', //Yellow
		accent2: '#ef8043', //Orange
		accent3: '#782eed', //Purple
		accent4: '#78dced', //Blue
		accent5: '#63d1a1' //Green
	},

	styles: {
		borderRadius: '3px',
		boxSpacing: '20px'
	}
}

// Do the final export of every config object so it can be imported in other files
export default config;
