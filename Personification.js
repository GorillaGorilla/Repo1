/**
 * Created by GB115151 on 17/01/2016.
 */
// planying around with subclasses and classes


var classExp = classExp || {};    // app object, all classes in the app can be assigned to this object?
classExp = {
    Person: function( firstName , lastName ){
        this.firstName = firstName;
        this.lastName =  lastName;
        this.gender = 'male'
        this.height = Math.floor((Math.random() * 10) + 1);
        this.health = 10;
    },
    Dog : function(name){
        this.name = name;
        this.height = Math.floor((Math.random() * 3) + 1);
        this.gender = 'male';
        this.health = 5;
    }


}
// syntax for adding methods to a class
classExp.Person.prototype.sayHello = function (){
    console.log("Hello, I'm " + this.firstName);
}

classExp.Person.prototype.slap = function(being){
    being.health -= 1;
    console.log(this.firstName + " just slapped " + being.firstName);
}


//a new instance of Person can then easily be created as follows:
var clark = new classExp.Person( "Clark" , "Kent" );

//Define a subclass constructor for for 'Superhero':
classExp.Superhero = function(firstName, lastName , powers ){
    /*
     Invoke the superclass constructor on the new object
     then use .call() to invoke the constructor as a method of
     the object to be initialized.
     */
    classExp.Person.call(this, firstName, lastName);
    //Finally, store their powers, a new array of traits not found in a normal 'Person'
    this.powers = powers;
}

var fido = new classExp.Dog("Fido");

classExp.Superhero.prototype = new classExp.Person;
var superman = new classExp.Superhero( "Clark" ,"Kent" , ['flight','heat-vision'] );

console.log(superman); /* includes superhero props as well as gender*/

console.log(clark);

console.log(fido)

clark.sayHello();

clark.slap(superman);

superman.slap(fido);   // Fido (dog) does not have the attribute firstName, returns undefined.

console.log(superman);

