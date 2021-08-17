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
		super(name, sound);
	}
	fly() {
		console.log('i am flying');
	}
}


class Cat extends Animal {
	constructor(name, sound, numberOfLives) {
		super(name, sound);
		this.numberOfLives = numberOfLives;
	}
	mySound() {
		// call a method from the parent
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