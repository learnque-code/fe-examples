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

type Person  = {
    name: string;
    surname: string;
    age: number;
    isBorn: () => boolean
}

type Robot = Person & {
    type: string;
}

const viktor: Robot = {
    name: 'Viktor',
    surname: 'Nareiko',
    age: 65,
    isBorn: function (): boolean {
        return true;
    },
    type: ''
}

function toString2(p: Person): string {
    return `${p.name} - ${p.surname}`;
}

console.log(toString2(viktor));

type StringOrNumber = string | number | null | undefined | unknown;

function sayHello(arg: StringOrNumber) {

}

sayHello('')
