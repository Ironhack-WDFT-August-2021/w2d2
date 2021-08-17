/*
class Cat {
	constructor(name, sound, numberOfLives) {
		this.name = name;
		this.sound = sound;
		this.numberOfLives = numberOfLives;
	}
	makeSound() {
		console.log(this.sound);
	}
}

class Bird {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}
	fly() {
		console.log('i am flying');
	}
	makeSound() {
		console.log(this.sound);
	}
}
*/

// cat and animal share a lot of the same code -> we move that into the parent class

class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	makeSound() {
		console.log(this.sound);
	}
}

class Bird extends Animal, Cat {
	constructor(name, sound) {
		// we need to call the parent constructor with the keyword 'super'
		super(name, sound);
	}
	fly() {
		console.log('i am flying');
	}
	// if we define a method with the same name in the child this method gets used
	// if we call 'bird.makeSound()' - this is called overriding (sic!) a method  
	makeSound() {
		console.log('this is the birds sound');
	}
}


class Cat extends Animal {
	constructor(name, sound, numberOfLives) {
		// we need to call the parent constructor with the keyword 'super'
		super(name, sound);
		this.numberOfLives = numberOfLives;
	}

	mySound() {
		// call a method from the parent explicitly
		super.makeSound()
		console.log('the cats own sound');
	}
}

const bird = new Bird('hans', 'peep');
const cat = new Cat('tom', 'meow', 7);
console.log(bird);
console.log(cat);
cat.mySound();
bird.fly();