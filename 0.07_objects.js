// var Person = {
// 	type: 'Human',
// 	displayType: function() {
// 		console.log(this.type);
// 	}
// }

// var person1 = Object.create(Person);


// person1.firstName = 'Tom';
// person1.lastName = 'Lantz';

// console.log(person1.firstName);

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	newPies: [],
	getPies: function() {
		return this.pies;
	},
	addPie: function(){
		for(x in this.pies){
			console.log(this.pies[x] + " pie");
			
		}
	},
	addPieDynamic: function(pie){
		console.log(pie + " pie");		
	},
	addPies: function () {
		for(x in this.pies){
			this.newPies.push(this.pies[x] + " Pie");
		}
	}

}
food.addPies();
console.log(food.newPies);
	// console.log(food.addPies());