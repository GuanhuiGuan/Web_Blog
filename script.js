var firstName = prompt("What's your first name? :)");
var lastName = prompt("What's your last name? :)");
var age = prompt("How old are you? :)");
var name = firstName + " " + lastName;
var days = age*365.25;

alert("Wow, nice to meet you, " + name);
alert("You are roughly " + days + " days old.");
console.log("Wow, nice to meet you, " + name);
console.log("You are now " + age + " years old.");

var age = prompt("Enter your age: ");
if(age < 0){console.log("Error");}
if(age == 21){console.log("Happy 21st birthday!");}
if(age%2 == 1){console.log("Your age is odd!");}
if(age % Math.sqrt(age) === 0){console.log("Perfect sqaure!");}

console.log("Problem 1");
for(var i = -10; i < 20; i++){console.log(i);}

var i = -10;
while(i < 20){
	console.log(i);
	i++;
}

console.log("Problem 2");
for(var i = 10; i < 41; i++){
	if(i%2 == 0){console.log(i);}
}

var i = 10;
while(i < 41){
	console.log(i);
	i += 2;
}

console.log("Problem 3");
for(var i = 300; i < 334; i++){
	if(i%2 == 1){console.log(i);}
}

var i = 300;
while(i < 334){
	if(i%2 == 1){
		console.log(i);
	}
	i++;
}

console.log("Problem 4");
for(var i = 5; i < 51; i++){
	if(i%3 + i%5 == 0){console.log(i);}
}

var i = 5;
while(i <= 50){
	if(i % 3 == 0 && i % 5 == 0){console.log(i);}
	i++;
}


function isEven(x){
	if(x%2 == 0)	return true;
	else	return false;
}
function factorial(x){
	var i = 1;
	var f = i;
	while(i <= x){
		f = f*i;
		i++;
	}
	return f;
}
function kebabToSnake(str){
	for(var i = 0; i < str.length; i++){
		// if(str.charAt(i) == "-"){str = replaceKebab(str, i);}
		var newStr = str.replace(/-/g, "_");
	}
	return newStr;
}
function replaceKebab(str, i){
	return str.substr(0, i) + "_" + str.substr(i+1);
}


// MAIN

var input = prompt("Input: ");
// alert(isEven(input));
// alert(factorial(input));
alert(kebabToSnake(input));


