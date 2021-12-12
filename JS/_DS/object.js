// create a object with new
const myCarF = new Object();
myCarF.make = 'Ford';
myCarF.model = 'Mustang';
myCarF.year = 1969;

// console.log(myCar);

const myCarT = {
    make: 'Toyata',
    model: 'AE86',
    year: 1990,

    toString: () => {
        console.log("toString")
    }
}

// console.log(myCarE);

// use for...in to iterate over all the enumerable properties of an object
function showProps(obj, objName) {
    let res = '';

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            res += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(res);
}

// showProps(myCarE, 'Car');

/**
 *  for...in loops: This method traverses all enumerable properties of an object and its prototype chain.
 *  Object.keys(o): This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
 *  Object.getOwnPropertyNames(o): This method returns an array containing all own properties' names (enumerable or not) of an object o.
 */

// Using a constructor function

/**
 * 1. Define the object type by writing a constructor function. There is a strong convention, 
 *      with good reason, to use a capital initial letter.
 * 2. Create an instance of the object with new.
 */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCarE = new Car('Eagle', 'Talon TSi', 1993);
// console.log(myCarE);

/**
 *  Object.create method:
 *       it allows you to choose the prototype object for the object you want to create, 
 *          without having to define a constructor function.
 */

// Animal properties and method encapsulation
const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
      console.log(this.type);
    }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output: Fishes

// Inheritance
// All objects in JavaScript inherit from at least one other object. 
//      The object being inherited from is known as the prototype, 
//          and the inherited properties can be found in the prototype object of the constructor.

// Indexing object properties
// You can refer to a property of an object either by its property name or by its ordinal index.

// Defining properties for an object type
//      You can add a property to a previously defined object type by using the prototype property. 
//          This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object.
/**
 * The following code adds a color property to all objects of type Car, and then assigns a value to the color property of the object car1.
 */
Car.prototype.color = null;
car1.color = 'black';

// Defining methods
// A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.

