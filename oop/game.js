// OOP - Object Oriented Programming - a programming paradigm

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
console.log(squares.length);
let dice;

const player1 = {
	name: 'Bob',
	color: 'red',
	position: 0,
	cash: 1000,
	move: function () {
		console.log(this);
		dice = 1 + Math.floor(6 * Math.random());
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
	}
}

const player2 = {
	name: 'Alice',
	color: 'blue',
	position: 0,
	cash: 1000,
	// this is how we add a method (function) to an object
	move: function () {
		// console.log(this);
		dice = 1 + Math.floor(6 * Math.random());
		// to access any of the fields of the object we are in 
		// we have to use the 'this' keyword instead of the name of 
		// the object
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
		if (this.cash < 0) {
			console.log(`Game over for ${this.name}`)
		}
	},
	displayInfo: function () {
		console.log(`${this.name} has ${this.cash} in cash`)
	}
}

player2.move();
player2.displayInfo();


// we roll the dice 
dice = 1 + Math.floor(6 * Math.random());

// if ((player1.position + dice) > 15) {
// 	player1.position = player1.position + dice - squares.length;
// } else {
// 	player1.position = player1.position + dice
// }

// or simpler  
player1.position = (player1.position + dice) % squares.length
// update the cash
player1.cash += squares[player1.position];
// check losing condition
if (player1.cash < 0) {
	console.log(`Game over for ${player1.name}`)
}

console.clear();

// TODO: write the methods .getAge(), .addJoke() and .getRandomJoke()

// let chuck = {
// 	firstName: 'Chuck',
// 	lastName: 'Norris',
// 	birthDate: new Date('1940-03-10'),
// 	jokes: [
// 		'Chuck Norris counted to infinity... Twice.',
// 		'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
// 	],
// 	displayInfo: function () {
// 		console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
// 	},
// 	getAge: function () {
// 		const now = new Date();
// 		return now.getFullYear() - this.birthDay.getFullYear();
// 	},
// 	addJoke: function (joke) {
// 		this.joke.push(joke);
// 	},
// 	getRandomJoke: function () {
// 		return this.joke[Math.floor(Math.random() * this.jokes.length)];
// 	},
// }

// chuck.displayInfo();

// console.log('getAge', chuck.getAge());

// chuck.addJoke('Chuck Norris can divide by zero.');
// console.log('getRandomJoke', chuck.getRandomJoke());
// chuck.addJoke('Chuck Norris kills flies with his gun.');
// console.log('getRandomJoke', chuck.getRandomJoke());
// chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
// console.log('getRandomJoke', chuck.getRandomJoke());

// chuck.displayInfo();
// console.clear();
// class


// we define a class - this is like a blueprint for the player object
class Player {
	// the constructor gets called when we create a new player
	constructor(nameParam, color) {
		this.cash = 5000;
		this.position = 0;
		this.name = nameParam;
		this.color = color;
	}
	// the class can only contain methods
	greet() {
		console.log('hello from the player');
	}
	move() {
		console.log(this);
		dice = 1 + Math.floor(6 * Math.random());
		// also within classes we use the this keyword
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
	}
}
const input = 'foo';
// this is how we create a new player - we instantiate an object - the created object
// is also called an instance of the player class
const myPlayer = new Player(input, 'blue');
myPlayer.age = 37;

const myOtherPlayer = new Player('alice', 'blue');
// we can call a method on the player object that is defined in the player class
myPlayer.greet();
console.log(myPlayer);
console.log(myOtherPlayer);
myPlayer.greet();
