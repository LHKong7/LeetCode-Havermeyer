/*
    The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

    Key equality is based on the sameValueZero algorithm.
    NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.
    In the current ECMAScript specification, -0 and +0 are considered equal, although this was not so in earlier drafts. See "Value equality for -0 and 0" in the Browser compatibility table for details.

    Constructor:
        Map()
            Creates a new Map object.
    
    Static properties
        get Map[@@species]
            The constructor function that is used to create derived objects.

    Instance properties
        Map.prototype.size
            Returns the number of key/value pairs in the Map object.
    
    Instance methods
        Map.prototype.clear()
            Removes all key-value pairs from the Map object.
        Map.prototype.delete(key)
            Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.
        Map.prototype.get(key)
            Returns the value associated to the key, or undefined if there is none.
        Map.prototype.has(key)
            Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
        Map.prototype.set(key, value)
            Sets the value for the key in the Map object. Returns the Map object.

    Iteration methods
        Map.prototype[@@iterator]()
            Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

        Map.prototype.keys()
            Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
        
        Map.prototype.values()
            Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
        
        Map.prototype.entries()
            Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order
        
        Map.prototype.forEach(callbackFn[, thisArg])
            Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
*/

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
console.log(myMap.get('a'));

console.log(myMap.delete('a'));

console.log(myMap.size);

for (const [k, v] of myMap.entries()) {
    console.log("Map element: ", k, v);
}

myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value)
})

console.log(myMap.keys());

const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
