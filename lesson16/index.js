function Fibonaci(a, args = []) {
    arr1 = [...args] || [0, 1];
    console.log(arr1);

    if (a < 2) {
        return arr1[1];
    }

    console.log(`a = ${a}`)
    return Fibonaci(a - 1, [arr1[1], arr1[0] + arr1[1]]);
}


console.log(Fibonaci(50, [0, 1]));