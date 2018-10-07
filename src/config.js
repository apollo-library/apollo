//Container imports
import {Dashboard, Catalogue, Users} from './containers';
import * as API from './api';

let config = {
	main: {
		shortName: "Apollo",
		longName: "Apollo | Library Management System",
		googleAnalyicsTrackingID: "UA-120966777-1",
		pages: [
			{
				text: 'Dashboard',
				path: '/',
				componentName: Dashboard
			},
			{
				text: 'Catalogue',
				path: '/catalogue',
				componentName: Catalogue
			},
			{
				text: 'Users',
				path: '/users',
				componentName: Users
			}
	    ],
		maxNotificationSize: 3,
		fineRate: "0.20" // = £0.20
	},

	reports: {
			loans: {
				name: 'Books on Loan',
				function: API.Loans.getLoans(),
				path: 'loans',
				table: [
					{
						key: 'title',
						display: 'Title'
					},
					{
						key: 'author',
						display: 'Author'
					},
					{
						key: 'name',
						display: 'Loaned to'
					}
				]
			},
			overdue: {
				name: 'Overdue Loans',
				function: API.Loans.getOverdueLoans(),
				path: 'overdue',
				table: [
					{
						key: 'title',
						display: 'Title'
					},
					{
						key: 'author',
						display: 'Author'
					},
					{
						key: 'name',
						display: 'Loaned to'
					}
				]
			}
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
		accent5: '#63d1a1', //Green
		accent6: '#eb5949' //Red
	},

	styles: {
		borderRadius: '3px',
		boxSpacing: '20px'
	}
}

// Do the final export of every config object so it can be imported in other files
export default config;
