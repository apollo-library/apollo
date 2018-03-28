/*

This is the main config file for Apollo.

The following objects are exported at the end
    - main
        - Contains some default values such as a long and short long name
    - colours
        - Contains all the colours that are used on the site.
        - *PLEASE NOTE: This includes house colours for DCGS.
        - Since the config cannot be imported into a CSS file, any colours should be set inline
*/

let main = {
	shortName: "Apollo",
	longName: "Apollo | Library Management System",
	pages: [
		{
			name: 'Home',
			url: '/',
			icon: 'home'
		},
		{
			name: 'Catalogue',
			url: '/catalogue',
			icon: 'book'
        },
		{
			name: 'Scan',
			url: '/scan',
			icon: 'barcode'
        },
		{
			name: 'Students',
			url: '/students',
			icon: 'users'
        }
    ]
};

let colours = {
	pink: "e44d95",
	darkPink: "f160a6",
	lightGrey: "f4f4f4",
	darkGrey: "504f4f",

	foxell: "fac800",
	holman: "e97b1b",
	newman: "d32b19",
	pearson: "99c1e8",
	rayner: "2a4597",
	thorne: "267832"
};

// Do the final export of every config object so it can be imported in other files
export {
	main,
	colours
};
