abstract class Mammal {
    abstract toString2(): string;
}

class Dog extends Mammal {
    toString2(): string {
        return "I'm dog"
    }
}

class Cat extends Mammal {
    toString2(): string {
        return "I'm cat"
    }
}

class Printer<T extends Mammal> {
    print(arg1: T): T {
        return arg1;
    }
}

const p = new Printer<Cat>();

p.print(new Cat())

function say<T> (arg: T): T {
    return arg;
}


class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

const t = new Cat();





