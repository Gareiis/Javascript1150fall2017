// var city = "Carmel";
// var state = "Indiana";

// function from(city, state) {
// 	console.log("I am from " + city + ", " + state);	
// }

// from(city, state);

// function bills(water, electricity, heat, rent, netflix) {
// 	var total = water + electricity + heat + rent + netflix;
// 	console.log("You will pay " + "$" + total + " in bills this month");
// }

// bills(25.50, 30, 44, 300, 20);

// function oddEven(number) {
// 	if (number % 2) {
// 		console.log('odd')
// 	}else {
// 		console.log('even');
// 	}
// }

// oddEven(4);



function capitalize(name) {
	var capSN = '';
	for(var x in name){
		if(x == 0){
			capSN += name[x].toUpperCase();
		}else {
			capSN += name[x];
		}
	}
	name = capSN;
	console.log(name);
}

capitalize("thomas");