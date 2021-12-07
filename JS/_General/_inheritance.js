// 原型继承
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperVal = function() {
    return this.property;
}

function SubType(){
    this.subProty =false;
}
SubType.prototype = new SuperType();
var instance = new SubType();
console.log(instance.getSuperVal())

// 借用构造函数
function SuperType(name) {
    this.name = name;
}
function SubType(){
    SuperType.call(this, 'demo');
    this.age = 18;
}
var instance = new SubType();
console.log(instance.name); // demo
console.log(instance.age); // 18

// 组合继承
function SuperType(name){
    this.name = name;
    this.colors = ['red'];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}
function SubType(name,age) {
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
var instance = new SubType('demo',18);
instance.sayAge(); // 18
instance.sayName(); // demo

// 原型式继承
function object(o) {
    function F(){};
    F.prototype = o;
    return new F();
}
var person = {
    name: 'tom'
}
var anotherPerson = object(person)
console.log(anotherPerson.name)

// 寄生式继承
function createAnother(original){
    var clone =Object.create(original);
    clone.sayHi = function () {
        console.log('hi');
    }
    return clone;
}
var person = {
    name: 'tom'
}
var anotherPerson = createAnother(person);
console.log(anotherPerson.name)
anotherPerson.sayHi();

// 寄生组合式继承
function SuperType(name) {
    this.name = name;
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
function inheritPrototype(subType,superType){
    var prototype = Object.create(superType.prototype);
    prototype.constructor =subType;
    subType.prototype = prototype;
}
inheritPrototype(SubType,SuperType);
var person = new SubType('zhangsan',18);
person.sayName()
