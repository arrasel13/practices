var sum, sub, multi, divi, modu;

var num1 = prompt("Enter the First Number: ");
var num2 = prompt("Enter the Second Number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br>");

sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br>");

multi = num1 * num2;
document.write(num1 + " * " + num2 + " = " + multi + "<br>");

divi = num1 / num2;
document.write(num1 + " / " + num2 + " = " + divi + "<br>");

modu = num1 % num2;
document.write(num1 + " % " + num2 + " = " + modu + "<br>");