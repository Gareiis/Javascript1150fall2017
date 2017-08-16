var hobbies = ["gaming", "coding", "chilling"];

// for(i = hobbies.length - 1; i > -1; i--){
// 	console.log(hobbies[i]);
// }

var cars = ["chevy", "ford", "honda"];
var currencies = ["pounds", "franks", "dollars"]
var big = [hobbies, cars, currencies];

// for (i = big.length - 1; i > -1; i--){
// 	console.log(big[i]);
// }

// for (var x in big) {
// 	console.log(big[x]);
// }

var ar = [];

var i = 5;
while(ar.length < 39){
	i ++;
	ar.push(i);
}
for(x in ar) {
	var element = ar[x];
	if(element % 3 || element % 5){
		console.log(element);
	}
}
	// console.log(ar);
