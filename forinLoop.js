//																 ******* Array of objects.. ********
var Employee = [
				{'name': 'shaquib','age':23,'salary': 65000,'city': 'new-delhi', 'state': 'Northern india','pin-code': 110025},
				{'name':'ram','age': 25,'salary': 65000,'city': 'new-delhi', 'state': 'Northern india','pin-code': 110021},
				{'name': 'amrit','age': 29,'salary': 35000,'ciy': 'bangalore', 'state': 'karnataka','pin-code' :190025},
				{'name': 'waseem','age': 33,'salary': 45000,'city': 'hyderabad', 'state': 'telangana','pin-code': 119045},
				{'name':'shoaib','age': 23,'salary': 95000,'city': 'new-delhi', 'state': 'Northern india','pin-code': 870025},
];
//   for in loop used here with array of objects.....
for(var val in Employee  )
{
	console.log(Employee[val]);
}