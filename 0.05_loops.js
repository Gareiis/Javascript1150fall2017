//loops

	// for (var i = 0; i < 21; i += 2) {
	// 	console.log(i);
	// }

	// for (var i = 0; i < 101; i += 25){
	// 	console.log(i);
	// 	if (i == 50) {
	// 		console.log("Halfway there!");
	// 	}
	// }

	// for (var i = 0; i < 11; i++){
	// 	if (i == 9) {
	// 		console.log("nine");
	// 	}else if (i == 10) {
	// 		console.log("ten");
	// 	}
	// 	if (i < 9) {
	// 		console.log(i);
	// 	}
	// }
var studentName = "smita";
var capSN = '';
for(var x in studentName){
	if(x == 0){
		capSN += studentName[x].toUpperCase();
	}else {
		capSN += studentName[x];
	}
}
	
console.log(capSN);