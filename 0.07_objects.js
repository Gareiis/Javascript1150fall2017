var Person = {
	type: 'Human',
	displayType: function() {
		console.log(this.type);
	}
}

var person1 = Object.create(Person);


person1.firstName = 'Tom';
person1.lastName = 'Lantz';

console.log(person1.firstName);