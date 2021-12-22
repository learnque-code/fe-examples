const printMsg = function (callback, num) {
    const divisible = callback(num);
    divisible ? console.log(`${num} dalinasi is 3`) : console.log(`${num} nesidalina is 3`);
}


printMsg((n) => n % 3 === 0, 10);