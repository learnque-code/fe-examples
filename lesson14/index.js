function Car(name) {
    this.name = name;
}

function Skoda() {
}

Skoda.prototype = new Car("Skoda kamiq");

Skoda.prototype.ride = function() {
    console.log(`${this.name} go from Klaipeda to Vilnius`);
}

var myCar = new Skoda();

myCar.ride();


