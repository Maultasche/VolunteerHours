/*Contains the volunteer data until we can get the server up and running*/

const volunteerData = {
	students: [
		{
			id: 1,
			name: "James Buchanan"
		},
		{
			id: 2,
			name: "Cornelis Tromp"
		},
		{
			id: 3,
			name: "Johannes Kepler"
		}
	],
	hours: [
		{
			id: 1, 
			studentId: 1, 
			studentName: "James Buchanan",
			date: "2017-04-15",
			hours: 2.5,
			description: "Cleaning windows"			
		},
		{ 
			id: 2, 
			studentId: 3, 
			studentName: "Johannes Kepler",
			date: "2017-05-10",
			hours: 3,
			description: "Setting up for the festival"
		},
		{ 
			id: 3, 
			studentId: 2, 
			studentName: "Cornelis Tromp",
			date: "2017-05-12",
			hours: 1,
			description: "Ship maintenance"
		},
		{ 
			id: 4, 
			studentId: 3, 
			studentName: "Johannes Kepler",
			date: "2017-05-28",
			hours: 1,
			description: "Demonstrating telescope"
		}
	]
};

export default volunteerData;