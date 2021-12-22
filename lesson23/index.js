// interface Person {
//     name: string;
//     surname: string;
//     age: number;
//     isBorn: () => boolean
// }
//
// interface Robot extends Person {
//     type: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var viktor = {
    name: 'Viktor',
    surname: 'Nareiko',
    age: 65,
    isBorn: function () {
        return true;
    },
    type: ''
};
function toString2(p) {
    return p.name + " - " + p.surname;
}
console.log(toString2(viktor));
function sayHello(arg) {
}
sayHello('');
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "ddd";
    WeekDays["Tuesday"] = "s";
    WeekDays["Wednesday"] = "sss";
})(WeekDays || (WeekDays = {}));
var day = WeekDays;
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Generic"] = 0] = "Generic";
    AnimalType[AnimalType["Dog"] = 1] = "Dog";
    AnimalType[AnimalType["Cat"] = 2] = "Cat";
})(AnimalType || (AnimalType = {}));
var Animal = /** @class */ (function () {
    function Animal(type) {
        if (type === void 0) { type = AnimalType.Generic; }
        this.type = type;
    }
    Animal.prototype.walk = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, AnimalType.Dog) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Wow wow");
    };
    return Dog;
}(Animal));
var say = function () {
    console.log("sss");
};
var dog = new Dog();
var t = "5";
console.log(t);
