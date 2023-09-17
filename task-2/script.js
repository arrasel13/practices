// Get first name from user
// Get last name from user
// add without using library function
// print full name
// total length of full name
// convert full name into uppercase
// print the 2nd position from full name

var firstName = prompt('First Name: ');
var lastName = prompt('Last Name: ');

var fullName = firstName + ' ' + lastName;

document.write("My name is: " + fullName + "<br>");

document.write("Total length on my name is: " + fullName.length + "<br>");

document.write("Capitalize Name is: " + fullName.toUpperCase() + "<br>");

document.write("2nd position character: " + fullName.charAt(2));

