function printReverse(list){
	for(var i = list.length - 1; i > -1; i--){console.log(list[i]);}
}

function isUniform(list){
	var ref = list[0];
	var boo = true;
	list.forEach(function(object){
		if(object != ref){boo = false;}
	});
	return boo;
}

function sumArray(list){
	var sum = 0;
	list.forEach(function(object){
		sum += object;
	});
	return sum;
}

function max(list){
	var m = list[0];
	for(var i = 0; i < list.length; i++){
		if(m < list[i]){m = list[i];}
	}
	return m;
}

function getInput(){
	var com = prompt("Input your command: ");
	return com;
}

function MAIN(){
	var list = [43, 534, 32, 0, 3];
	var getDigit = getInput();
	while(getDigit !== "quit"){
		if(getDigit === "list"){console.log(list);}
		else if(getDigit === "input"){
			console.log(list);
			var index = prompt("Please enter the index where you want to insert: ");
			var x = prompt("Enter your digit: ");
			var first = list.splice(index, 0, Number(x));
			console.log("Input inserted. ");
		}
		else if(getDigit == "printReverse"){printReverse(list);}
		else if(getDigit == "isUniform"){console.log(isUniform(list));}
		else if(getDigit == "sumArray"){console.log(sumArray(list));}
		else if(getDigit == "max"){console.log(max(list));}

		else{console.log("Invalid inputs. ")}
		getDigit = getInput();
	}
	console.log("Quit input mode. ");
}


// run MAIN
console.log("CONNECTED!");
MAIN();